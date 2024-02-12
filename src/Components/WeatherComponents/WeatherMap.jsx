'use client'  
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function WeatherMap({ data }){
  const [mapData, setMapData] = useState(data);

  useEffect(() => {
    setMapData(data);
  }, [data]);


  return (
    <div className="w-1/2 h-full rounded-2xl overflow-hidden">
      <MapContainer center={[mapData.coord.lat, mapData.coord.lon]} zoom={10} className="rounded-xl h-full w-full top-0 mt-0 mb-52">
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

