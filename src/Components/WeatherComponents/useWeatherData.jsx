import { useEffect, useState } from "react";
import GetData from "./GetGeneralData";
import GetDaysWeather from "./GetDaysWeather";

export function useWeatherData(city) {
    const [data, setData] = useState({});
    const [days, setDays] = useState([]);

    const getStates = () => {
        GetData(city).then((result) => setData(result));
        GetDaysWeather(city).then((result) => setDays(result.list));
    };

    useEffect(() => {
        getStates();
    }, [city]);

    return { data, days, getStates };
}
