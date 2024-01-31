'use client'
import { useEffect, useState } from "react";
import SearchCity from "./components/SearchCity";
import EmptyPage from './components/EmptyPage'
import GeneralInfo from "./components/GeneralInfo";
import DailyWeather from "./components/DailyWeather";
import WeatherMap from "./components/WeatherMap";
import { useWeatherData } from './components/useWeatherData'

//exports boring APIs






export default function Weather() {
    const [city, setCity] = useState("Almaty");
    const { data, days, getStates } = useWeatherData(city);
  
    const arr: any[] =[
        [
            {
                image: 'https://img.icons8.com/?size=512&id=60022&format=png',
                title: 'Visibility',
                arr: data.visibility + ' km'
            },
            {
                image: 'https://img.icons8.com/?size=512&id=21890&format=png',
                title: 'Pressure',
                arr: data.main.pressure +' Pa'
            },
            {
                image: 'https://img.icons8.com/?size=512&id=74197&format=png',
                title: 'Wind speed',
                arr: data.wind.speed + ' m/s'
            },
            
        ],
        [
            {
                image: 'https://img.icons8.com/?size=512&id=9269&format=png',
                title: 'Humidity',
                arr: data.main.humidity + ' %'
            },
            {
                image: 'https://img.icons8.com/?size=512&id=R654Xec7UOWX&format=png',
                title: 'Max. Temp.',
                arr: Math.round(data.main.temp_max-273) + ' °C'
            },
            {
                image: 'https://img.icons8.com/?size=512&id=-uAldka8Jgn4&format=png',
                title: 'Min. Temp.',
                arr: Math.round(data.main.temp_min-273) + ' °C'
            },
        ]
    ]

    const miniArr: any[] =[
        {
            image: 'https://img.icons8.com/?size=512&id=9269&format=png',
            title: data?.main?.humidity + '%'
        },
        {
            image: 'https://img.icons8.com/?size=512&id=60002&format=png',
            title: Math.round(data?.main?.temp_max - 273) + '°C'
        },
        {
            image: 'https://img.icons8.com/?size=512&id=9260&format=png',
            title: Math.round(data?.main?.temp_min - 273) + '°C'
        },
    ]

    const months = ['' ,'January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December']
  
    return (
        <div className="flex flex-col bg-[#0f0f12] justify-center items-center">

          <SearchCity city={city} setCity={setCity} getStates={getStates} />
    
          {!data || !data.main ? (
            <EmptyPage />
          ) : (
            <>
              <GeneralInfo data={data} arr={arr} />
    
              <DailyWeather days={days} miniArr={miniArr} months={months} />
    
              <WeatherMap data={data} />
            </>
          )}
        </div>
      );
  }
  