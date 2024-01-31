export default function GeneralInfo({ data, arr }:any){
    return(
        <div className="bg-gray-700 duration-500  v w-2/5 h-80 rounded-2xl flex flex-col justify-center items-center p-5 ">
            <h1 className="text-3xl font-bold mb-5">Feels like: {Math.round(data?.main?.feels_like - 273)}°C</h1>
            <div className="flex flex-row justify-between  w-10/12 font-medium">
                {arr.map((div: any) => (
                    <div key={div[0].title}>
                        {div.map((kek: any) => (
                        <div className="flex flex-row items-center border-b-2 border-black mt-2" key={kek.title}>
                            <img src={kek.image} width={20} alt="" />
                            <h3 className="ml-2">
                            {kek.title}: {kek.arr}
                            </h3>
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}