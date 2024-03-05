
'use client'

import { useState } from "react"


export default function Github(){
    
    const [input1,setInput1] = useState<string>()
    const [input2,setInput2] = useState<string>() 

    function TransformList(text:string){
        if (!text) return '';
        text = text.replace(/-/g,'• ')

        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

        text = text.replace(/\*(.*?)\*/g, '<i>$1</i>')

        text = text.replace(/#(.*?)\n/g, '<h1 class=`font-bold text-2xl`>$1</h1>')

        
        text = text.replace(/\n/g, '<br>')

        return text
    }

    
    
    function handleInputChange1(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const text = event.target.value;
        setInput1(text);
        setInput2(TransformList(text));
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
                <div
                    className="w-1/2  min-h-[70vh] max-h-[80vh] m-5 p-10 rounded-2xl border-2 border-black border-solid "
                    dangerouslySetInnerHTML={{ __html: input2 }}
                    />
            </div>
        </div>
    )
}