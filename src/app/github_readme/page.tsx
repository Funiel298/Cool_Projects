
'use client'

import { useState } from "react"


export default function Github(){
    
    const [input1,setInput1] = useState<string>()
    const [input2,setInput2] = useState<string>() 

    function Transform(text:string){
        return text.replace(/-/g,'• ');
    }
    
    function handleInputChange1(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const text = event.target.value;
        setInput1(text);
        setInput2(Transform(text));
    }

    return(
        <div>
            <h1>
                Github ReadMe
            </h1>
            <div className="flex flex-row  w-screen">
                <textarea
                    className="w-1/2  min-h-[70vh] max-h-[90vh] m-5 p-10 rounded-2xl border-2 border-black border-solid  "
                    value={input1}
                    onChange={handleInputChange1}
                    />
                <textarea
                    className="w-1/2  min-h-[70vh] max-h-[90vh] m-5 p-10 rounded-2xl border-2 border-black border-solid "
                    value={input2}
                    readOnly
                    />
            </div>
        </div>
    )
}