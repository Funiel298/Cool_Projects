export default function WeatherImage({ weatherData }:any) {
    if (!weatherData) {
        return null; 
    }
    const { humidity, temp_max, pressure, temp_min } = weatherData;

    return (
        <div className="relative w-full h-[50vh] object-cover overflow-x-hidden">
            <img
                src="https://wallpapers.com/images/hd/winter-snow-desktop-9r7xt2hg7jllihbh.jpg"
                className="w-full h-full object-cover"
                alt="Snowing"
            />
            <div className="absolute flex flex-row font-bold text-2xl justify-around w-full overflow-hidden bottom-4 left-4 text-white">
                <p>Humidity: {humidity}%</p>
                <p>Max. Temp.: {Math.round(temp_max - 273)}°C</p>
                <p>Pressure: {pressure} Pa</p>
                <p>Min. Temp.: {Math.round(temp_min - 273)}°C</p>
            </div>
        </div>
    );
}
