
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
            <h1 className="text-2xl font-bold ml-auto mr-auto text-center mt-5">
                Github ReadMe
            </h1>
            <p className="text-sm ml-auto mr-auto text-center">That is app where you will create your own something</p>
            <div className="flex flex-row  w-screen">
                <textarea
                    className="w-1/2  min-h-[70vh] max-h-[80vh] m-5 p-10 rounded-2xl border-2 border-black border-solid  "
                    value={input1}
                    onChange={handleInputChange1}
                    />
                <textarea
                    className="w-1/2  min-h-[70vh] max-h-[80vh] m-5 p-10 rounded-2xl border-2 border-black border-solid "
                    value={input2}
                    readOnly
                    />
            </div>
        </div>
    )
}