import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useMemo, useState } from 'react'
import type { LatLngTuple } from 'leaflet'
import {
  neshanAPIfind,
  neshanAPIsearch,
  type NeshanAPIsearchResponseItemsProperty,
} from '@/utils/neshanAPI'
import debounce from 'lodash.debounce'
import BeatLoaderComponent from '@/ui/BeatLoaderComponent'

type MapPropsType = {
  position: LatLngTuple
  setPosition: (position: LatLngTuple) => void
  address: string
  setAddress: (address: string) => void
}
const Map = (props: MapPropsType) => {
  const { address, setAddress, setPosition, position } = props

  //این دو استیت باید در جایی که این کامپوننت استفاده می شود], قرار گیرند
  // const [position, setPosition] = useState<LatLngTuple>([35.6892, 51.389])
  // const [address, setAddress] = useState<string>(
  //   'استان تهران، تهران، اسکندری، بزرگراه نواب صفوی، نواب، لنگرودی، احترامی'
  // )
  const [searchAddressLoading, setSearchAddressLoading] =
    useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchLoading, setSearchLoading] = useState<boolean>(false)
  const [suggestions, setSuggestions] = useState<
    NeshanAPIsearchResponseItemsProperty[]
  >([])

  //گرفتن موقعیت فعلی کاربر
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setSearchAddressLoading(true)
          const lat = pos.coords.latitude
          const lng = pos.coords.longitude
          setPosition([lat, lng])
          neshanAPIfind([lat, lng]).then((address) => {
            setAddress(address)
            setSearchAddressLoading(false)
          })
        },
        (err) => {
          console.error('خطا در گرفتن موقعیت کاربر:', err)
        }
      )
    } else {
      console.error('مرورگر شما از Geolocation پشتیبانی نمی‌کند')
    }
  }, [])

  const performSearch = async (query: string) => {
    if (query.length > 2) {
      setSearchLoading(true)
      try {
        const data = await neshanAPIsearch(position, query)
        setSuggestions(data.items)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setSearchLoading(false)
      }
    } else {
      setSuggestions([])
      setSearchLoading(false)
    }
  }

  const debouncedSearch = useMemo(
    () => debounce(performSearch, 500), // 500ms تاخیر
    [position] // وقتی position تغییر کرد، debounced function جدید بساز
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchValue(query)
    debouncedSearch(query)
  }

  const handleSelect = (data: NeshanAPIsearchResponseItemsProperty) => {
    setPosition([data.location.y, data.location.x])
    setAddress(`${data.region||''}, ${data.neighbourhood||''}, ${data.title||''}`)
    console.log(data.region, data.neighbourhood, data.title)
    setSuggestions([])
    setSearchValue('')
  }

  return (
    <div className="w-full rounded-md overflow-hidden">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '300px', width: '100%', borderRadius: '8px' }}
        className="rounded-md"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>مکان فعلی شما</Popup>
        </Marker>
        <RecenterMap position={position} />
        <LocationPicker
          setPosition={setPosition}
          setAddress={setAddress}
          setSearchAddressLoading={setSearchAddressLoading}
          setSearchValue={setSearchValue}
        />
      </MapContainer>
      <div style={{ padding: '1rem', background: '#1e1e1e' }}>
        {searchAddressLoading ? (
          <p>
            <BeatLoaderComponent />
          </p>
        ) : (
          <>
            <b>آدرس انتخابی:</b> {address || 'هیچ مکانی انتخاب نشده'}
          </>
        )}
        <div className="mt-10">
          <input
            type="text"
            placeholder="جستجوی آدرس..."
            value={searchValue}
            onChange={handleSearch}
            style={{ width: '100%' }}
            className="border-b !border-primary-500 outline-none p-2 focus:outline-none placeholder:text-sm"
          />
          {searchValue.length > 0 && (
            <ul
              className="flex flex-col gap-2 max-h-40 overflow-auto p-2 rounded-md text-secondary-300"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'black',
              }}
            >
              {searchLoading ? (
                <BeatLoaderComponent />
              ) : suggestions.length > 0 ? (
                suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleSelect(suggestion)}>
                    {suggestion.title}
                  </li>
                ))
              ) : (
                suggestions.length === 0 && <li>نتیجه‌ای یافت نشد</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
export default Map

type LocationPickerPropsType = {
  setPosition: (position: LatLngTuple) => void
  setAddress: (addr: string) => void
  setSearchAddressLoading: (loading: boolean) => void
  setSearchValue: (value: string) => void
}
const LocationPicker = (props: LocationPickerPropsType) => {
  const { setPosition, setAddress, setSearchAddressLoading, setSearchValue } =
    props
  useMapEvents({
    click: async (e) => {
      setSearchAddressLoading(true)
      setPosition([e.latlng.lat, e.latlng.lng])
      const address = await neshanAPIfind([e.latlng.lat, e.latlng.lng])
      setSearchAddressLoading(false)
      setAddress(address)
      setSearchValue('')
    },
  })
  return null
}

function RecenterMap({ position }: { position: LatLngTuple }) {
  const map = useMap()
  map.setView(position)
  return null
}
