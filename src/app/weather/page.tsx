'use client'
import React, { useEffect, useState } from "react";
import GetGeneralData from "@/Components/WeatherComponents/GetGeneralData";
import GetDaysWeather from "@/Components/WeatherComponents/GetDaysWeather";
import SearchComponent from "@/Components/WeatherComponents/SearchCity";
import WeatherByDays from "@/Components/WeatherComponents/DailyWeather";
import WeatherImage from "@/Components/WeatherComponents/WeatherImage";
import EmptyPage from "@/Components/WeatherComponents/EmptyPage";
import WeatherMap from '@/Components/WeatherComponents/WeatherMap'


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
    <div className="flex flex-col h-screen bg-[#0f0f12] justify-center items-center">
      <WeatherImage weatherData={data.main}/>
      <SearchComponent city={city} setCity={setCity} getStates={getStates} />
      {!data || !data.main ? (
        <EmptyPage/>
      ) : (
        <div className="w-full h-full flex-row flex">
          <WeatherByDays days={days} months={months} miniArr={miniArr} />
          <WeatherMap data={data} />
        </div>
      )}
    </div>
  );
}
