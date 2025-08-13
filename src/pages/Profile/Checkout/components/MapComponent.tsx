import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import * as L from "leaflet"; 
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  onLocationSelect: (coords: { lat: number; lng: number }, address: string) => void;
  defaultCenter?: LatLngExpression;
}

const MapComponent: React.FC<MapComponentProps> = ({ onLocationSelect, defaultCenter = [35.6892, 51.3890] }) => {
  const [markerPosition, setMarkerPosition] = useState<LatLngExpression | null>(null);

  const markerIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // گرفتن موقعیت فعلی کاربر
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setMarkerPosition([latitude, longitude]);
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            const address = data.display_name || "آدرس یافت نشد";
            onLocationSelect({ lat: latitude, lng: longitude }, address);
          } catch {
            onLocationSelect({ lat: latitude, lng: longitude }, "آدرس یافت نشد");
          }
        },
        () => console.warn("کاربر اجازه دسترسی به موقعیت نداد")
      );
    }
  }, []);

  function LocationMarker() {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]);
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
          );
          const data = await res.json();
          const address = data.display_name || "آدرس یافت نشد";
          onLocationSelect({ lat, lng }, address);
        } catch {
          onLocationSelect({ lat, lng }, "آدرس یافت نشد");
        }
      },
    });
    return markerPosition ? <Marker position={markerPosition} icon={markerIcon} /> : null;
  }

  return (
    <MapContainer center={markerPosition || defaultCenter} zoom={13} style={{ height: "300px", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapComponent;
