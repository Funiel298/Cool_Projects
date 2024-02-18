interface WeatherData {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

interface MiniArrItem {
  image: string;
  title: string;
}

interface Props {
  days: WeatherData[];
  months: string[];
  miniArr: MiniArrItem[];
}

const WeatherByDays = ({ days, months, miniArr }:any) => {
  if (!days || days.length === 0) {
    return null; 
  }
    
  return (
    <div className="p-10 justify-around z-50 text-[#e8e8e8] items-center flex flex-row w-full">
      {days.slice(0, 4).map((data:any, index:number) => (
        <div
          className="w-44 p-5 h-80 bg-[#1b1b1d] hover:duration-500 hover:shadow-stone-400 duration-700 shadow-2xl flex flex-col justify-center items-center rounded-3xl"
          key={index}
        >
          <h4 className="mb-5 font-normal">
            {data.dt_txt.slice(8, 10)} {months[parseInt(data.dt_txt.slice(5, 7)) - 1]}
          </h4>
          <h1 className="text-2xl font-medium mb-3">
            {Math.round(data.main.temp - 273)}°C
          </h1>
          <p className="text-sm font-bold">{data.dt_txt.slice(11, 16)}</p>
          <img
            width={100}
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt=""
          />
          {miniArr.map((item:any, index:number) => (
            <div className="flex flex-row items-center" key={index}>
              <img src={item.image} width={20} alt="" />
              <h3 className="ml-2">{item.title}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default WeatherByDays
