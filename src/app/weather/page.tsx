'use client'
import React, { useEffect, useState } from "react" 
import SearchCity from "../../Components/WeatherComponents/SearchCity" 
import EmptyPage from "../../Components/WeatherComponents/EmptyPage" 
import GeneralInfo from "../../Components/WeatherComponents/GeneralInfo" 
import DailyWeather from "../../Components/WeatherComponents/DailyWeather" 
import WeatherMap from "../../Components/WeatherComponents/WeatherMap" 
import useWeatherData from '../../Components/WeatherComponents/useWeatherData'

export default function Weather(){
    const [city, setCity] = useState<string>('');
    const { data, days, getStates } = useWeatherData('Almaty') 

    const arr: any[] = [
        [
        {
            image: 'https://img.icons8.com/?size=512&id=60022&format=png',
            title: 'Visibility',
            arr: data?.visibility + ' km',
        },
        {
            image: 'https://img.icons8.com/?size=512&id=21890&format=png',
            title: 'Pressure',
            arr: data?.main?.pressure + ' Pa',
        },
        {
            image: 'https://img.icons8.com/?size=512&id=74197&format=png',
            title: 'Wind speed',
            arr: data?.wind?.speed + ' m/s',
        },
        ],
        [
        {
            image: 'https://img.icons8.com/?size=512&id=9269&format=png',
            title: 'Humidity',
            arr: data?.main?.humidity + ' %',
        },
        {
            image: 'https://img.icons8.com/?size=512&id=R654Xec7UOWX&format=png',
            title: 'Max. Temp.',
            arr: Math.round(data?.main?.temp_max - 273) + ' °C',
        },
        {
            image: 'https://img.icons8.com/?size=512&id=-uAldka8Jgn4&format=png',
            title: 'Min. Temp.',
            arr: Math.round(data?.main?.temp_min - 273) + ' °C',
        },
        ],
    ] 
    
    const miniArr: any[] = [
        {
        image: 'https://img.icons8.com/?size=512&id=9269&format=png',
        title: data?.main?.humidity + '%',
        },
        {
        image: 'https://img.icons8.com/?size=512&id=60002&format=png',
        title: Math.round(data?.main?.temp_max - 273) + '°C',
        },
        {
        image: 'https://img.icons8.com/?size=512&id=9260&format=png',
        title: Math.round(data?.main?.temp_min - 273) + '°C',
        },
    ] 
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
    ] 

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
      ) 
}
