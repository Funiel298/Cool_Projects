import React, { useEffect, useState } from "react";
import GetGeneralData from "@/Components/WeatherComponents/GetGeneralData";
import GetDaysWeather from "@/Components/WeatherComponents/GetDaysWeather";

interface WeatherServerProps {
  city: string;
}

const WeatherServer: React.FC<WeatherServerProps> = ({ city }) => {
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


  return (
    <>
    </>
  );
};
