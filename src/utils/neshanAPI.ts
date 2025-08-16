import { type LatLngTuple } from 'leaflet'

type NeshanAPIsearchResponse = {
  count: number
  items: NeshanAPIsearchResponseItemsProperty[]
}

export type NeshanAPIsearchResponseItemsProperty = {
  title: string
  type: string
  category: string
  address: string
  region: string
  neighbourhood: string
  location: {
    x: number
    y: number
    z?: number | 'NaN'
  }
}

export const neshanAPIfind = async (LatLng: LatLngTuple): Promise<string> => {
  const response = await fetch(
    `https://api.neshan.org/v2/reverse?lat=${LatLng[0]}&lng=${LatLng[1]}`,
    {
      headers: {
        'Api-Key': (window as any).APP_CONFIG.NESHAN_API_KEY as string,
      },
    }
  )
  const data = await response.json()

  return data?.formatted_address || 'آدرس پیدا نشد'
}

export const neshanAPIsearch = async (
  position: LatLngTuple,
  query: string = ''
): Promise<NeshanAPIsearchResponse> => {
  const response: Response = await fetch(
    `https://api.neshan.org/v1/search?term=${query}&lat=${position[0]}&lng=${position[1]}`,
    {
      headers: {
        'Api-Key': (window as any).APP_CONFIG.NESHAN_API_KEY as string,
      },
    }
  )
  const data: NeshanAPIsearchResponse = await response.json()

  return data
}
