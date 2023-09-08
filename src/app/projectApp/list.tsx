import Card from "./card"
export default function List({cards, name} : any){



    return(
        
        <div className="p-3 flex flex-col items-center justify-center rounded-2xl shadow-2xl shadow-slate-950">
            <h1 className="font-bold text-4xl">{name}</h1>
            {cards.map((card: any)=>
                <Card key={card.name} name={card.name} tags={card.tags} deadline={card.deadline} importance={card.importance} image={card.image}  />
            )}
        </div>
        
     )
}