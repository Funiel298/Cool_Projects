'use client'
import GetGeneralData from "@/Components/WeatherComponents/GetGeneralData";
import GetDaysWeather from "@/Components/WeatherComponents/GetDaysWeather";

interface WeatherData {
    city: string;
    data: any;
    days: any[];
    getStates: () => void;
  }
  
  const getStates = async (city: string, setData: Function, setDays: Function) => {
    try {
      const generalData = await GetGeneralData(city);
      const daysData = await GetDaysWeather(city);
      setData(generalData);
      setDays(daysData.list);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  export default getStates