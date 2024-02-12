export default function WeatherImage({ weatherData }:any) {
    if (!weatherData) {
        return null; 
    }
    const { visibility, humidity, temp_max, pressure, wind_speed, temp_min } = weatherData;

    return (
        <div className="relative w-full h-[50vh] object-cover">
        {/* Background image */}
        <img
            src="https://wallpapers.com/images/hd/winter-snow-desktop-9r7xt2hg7jllihbh.jpg"
            className="w-full h-full object-cover"
            alt="Snowing"
        />
        {/* Overlay text */}
        <div className="absolute bottom-4 left-4 text-white">
            <p>Visibility: {visibility} km</p>
            <p>Humidity: {humidity}%</p>
            <p>Max. Temp.: {Math.round(temp_max - 273)}°C</p>
            <p>Pressure: {pressure} Pa</p>
            <p>Wind speed: {wind_speed} m/s</p>
            <p>Min. Temp.: {Math.round(temp_min - 273)}°C</p>
        </div>
        </div>
    );
}
