export default function EmptyPage(){
    return(
        <div className="flex flex-col justify-center items-center">
            
            <div className="m-10 w-1/2 flex flex-row items-center justify-center bg-slate-600 p-10">
                <input
                type="text"
                className="rounded-2xl p-5 text-black outline-none"
                placeholder="Search city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button className="bg-white rounded-full p-3 m-2" onClick={getStates}>
                <img width={30} src="https://img.icons8.com/?size=512&id=132&format=png" alt="" />
                </button>
            </div>
            <h1 className="p-10 font-bold text-2xl">You really dont know your city?....Really?......</h1>

            <div className="flex flex-row">
                <img width={300} src="https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?fit=700,500" alt="" />
                <img width={300} src="https://www.digitalmomblog.com/wp-content/uploads/2022/01/pathetic-cat-meme-1.jpg" alt="" />
            
            </div>
        </div>
    )
};

