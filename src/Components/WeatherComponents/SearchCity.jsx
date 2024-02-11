'use client'
import { CiSearch } from "react-icons/ci";
import getStates from "@/Components/WeatherComponents/GetStates";

export default async function({ city, setCity }){

  useEffect(() => {
    getStates(city, setData, setDays);
  }, [city]);

  return (
    <div className="absolute m-5 w-3/4 flex flex-row items-center justify-center">
      <div className="relative w-full">
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
  );
};
