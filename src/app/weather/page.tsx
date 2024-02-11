'use client'
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import GetGeneralData from "@/Components/WeatherComponents/GetGeneralData";
import GetDaysWeather from "@/Components/WeatherComponents/GetDaysWeather";
import { FiSunset } from "react-icons/fi";
import { FiSunrise } from "react-icons/fi";

import 'leaflet/dist/leaflet.css';

const apiKey = "48630635ebc31aba2f59c952b5672565";

export default function Weather() {
  const [city, setCity] = useState<string>("Almaty");
  const [data, setData] = useState<any>({});
  const [days, setDays] = useState<any[]>([]);

  const getStates = async () => {
    try {
      const generalData = await GetGeneralData(city);
      const daysData = await GetDaysWeather(city);
      setData(generalData);
      setDays(daysData.list);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getStates();
  }, [city]);

  const arr: any[] = [
    [
      {
        image: "https://img.icons8.com/?size=512&id=60022&format=png",
        title: "Visibility",
        arr: data?.visibility + " km",
      },
      {
        image: "https://img.icons8.com/?size=512&id=21890&format=png",
        title: "Pressure",
        arr: data?.main?.pressure + " Pa",
      },
      {
        image: "https://img.icons8.com/?size=512&id=74197&format=png",
        title: "Wind speed",
        arr: data?.wind?.speed + " m/s",
      },
    ],
    [
      {
        image: "https://img.icons8.com/?size=512&id=9269&format=png",
        title: "Humidity",
        arr: data?.main?.humidity + " %",
      },
      {
        image: "https://img.icons8.com/?size=512&id=R654Xec7UOWX&format=png",
        title: "Max. Temp.",
        arr: Math.round(data?.main?.temp_max - 273) + " °C",
      },
      {
        image: "https://img.icons8.com/?size=512&id=-uAldka8Jgn4&format=png",
        title: "Min. Temp.",
        arr: Math.round(data?.main?.temp_min - 273) + " °C",
      },
    ],
  ];

  const miniArr: any[] = [
    {
      image: "https://img.icons8.com/?size=512&id=9269&format=png",
      title: data?.main?.humidity + "%",
    },
    {
      image: "https://img.icons8.com/?size=512&id=60002&format=png",
      title: Math.round(data?.main?.temp_max - 273) + "°C",
    },
    {
      image: "https://img.icons8.com/?size=512&id=9260&format=png",
      title: Math.round(data?.main?.temp_min - 273) + "°C",
    },
  ];

  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-col bg-[#0f0f12] justify-center items-center">
      <div className="absolute top-0 left-0 p-4">
        <h2 className="text-white">Sunrise: {new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}</h2>
        <h2 className="text-white">Sunset: {new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}</h2>
      </div>
      <div className="absolute top-0 right-0 p-4">
        <h2 className="text-white">Temperatures by Days:</h2>
        {days?.slice(0, 4).map((day: any, index: number) => (
          <div key={index} className="text-white">
            <p>{new Date(day.dt * 1000).toDateString()} - {Math.round(day.main.temp - 273)}°C</p>
          </div>
        ))}
      </div>

      <div className="absolute top-5 w-3/4 flex flex-row items-center justify-center">
        <div className=" w-full">
          <CiSearch className="absolute top-1/2 left-2 text-2xl transform -translate-y-1/2 text-black" />
          <input
            type="text"
            className="rounded-2xl p-3 pl-12 w-full text-black outline-none"
            placeholder="Search city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                getStates();
              }
            }}
          />
        </div>
      </div>

      {!data || !data.main ? (
        <div className="flex flex-col justify-center items-center">
          <div className="m-10 w-1/2 flex flex-row items-center justify-center bg-slate-600 p-10">
            <input
              type="text"
              className="rounded-2xl p-5 text-black outline-none"
              placeholder="Search city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="bg-white rounded-full p-3 m-2" onClick={getStates}>
              <img width={30} src="https://img.icons8.com/?size=512&id=132&format=png" alt="" />
            </button>
          </div>
          <h1 className="p-10 font-bold text-2xl">You really dont know your city?....Really?......</h1>
          <div className="flex flex-row">
            <img width={300} src="https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?fit=700,500" alt="" />
            <img width={300} src="https://www.digitalmomblog.com/wp-content/uploads/2022/01/pathetic-cat-meme-1.jpg" alt="" />
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gray-700 duration-500 mt-10 v w-2/5 h-80 rounded-2xl flex flex-col justify-center items-center p-5 ">
            <h1 className="text-3xl font-bold mb-5">Feels like: {Math.round(data?.main?.feels_like - 273)}°C</h1>
            <div className="flex flex-row justify-between  w-10/12 font-medium">
              {arr.map((div: any) => (
                <div key={div[0].title}>
                  {div.map((kek: any) => (
                    <div className="flex flex-row items-center border-b-2 border-black mt-2" key={kek.title}>
                      <img src={kek.image} width={20} alt="" />
                      <h3 className="ml-2">
                        {kek.title}: {kek.arr}
                      </h3>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 justify-around text-[#e8e8e8]  items-center flex flex-row w-full">
            {days?.slice(0, 4).map((data: any) => (
              <div className="w-44 p-5 h-80 bg=[#1b1b1d] hover:duration-500 hover:shadow-stone-400 duration-700  shadow-2xl flex flex-col justify-center items-center rounded-3xl" key={data.dt}>
                <h4 className="mb-5 font-normal">{data?.dt_txt.slice(8, 10)}   {data?.dt_txt.slice(5, 7) < 10 ? months[data?.dt_txt.slice(6, 7)] : months[data?.dt_txt.slice(5, 7)]}</h4>
                <h1 className="text-2xl font-medium mb-3">{Math.round(data?.main.temp - 273)}°C</h1>
                <p className="text-sm font-bold">{data?.dt_txt.slice(11, 16)}</p>
                <img width={100} src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="" />
                {miniArr.map((kek: any) => (
                  <div className="flex flex-row items-center" key={kek.title}>
                    <img src={kek.image} width={20} alt="" />
                    <h3 className="ml-2">{kek.title}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="w-1/2 h-1/2  rounded-2xl overflow-hidden">
            <MapContainer center={[data.coord.lat, data.coord.lon]} zoom={10} style={{ width: '100%', height: '100%' }} className="rounded-xl">
              <TileLayer
                url={`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[data.coord.lat, data.coord.lon]}>
                <Popup>{data.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </>
      )}
    </div>
  );
}


