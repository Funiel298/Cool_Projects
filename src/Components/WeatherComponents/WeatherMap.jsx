import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function WeatherMap({ data }){
  const [mapData, setMapData] = useState(data);

  useEffect(() => {
    setMapData(data);
  }, [data]);


  return (
    <div className="w-1/2 h-1/2  rounded-2xl overflow-hidden">
      <MapContainer center={[mapData.coord.lat, mapData.coord.lon]} zoom={10} style={{ width: '100%', height: '100%' }} className="rounded-xl">
        <TileLayer
          url={`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[mapData.coord.lat, mapData.coord.lon]}>
          <Popup>{mapData.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

