const WeatherByDays = ({ days, months, miniArr }:any) => {

    
  return (
    <div className="p-10 justify-around text-[#e8e8e8] z-10  items-center flex flex-row w-full">
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
  );
};

export default WeatherByDays
