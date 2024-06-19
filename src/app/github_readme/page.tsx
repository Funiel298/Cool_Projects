
'use client'
import { useState } from "react";

export default function Github() {
    const [input1, setInput1] = useState<string | undefined>(undefined);
    const [input2, setInput2] = useState<string | undefined>(undefined);

    function TransformList(text: string) {
        if (!text) return '';

        text = text.replace(/(\n)-{3,}(\n|$)/g, (_, newline1, newline2) => {
            return `${newline1}<div class="border-b border-gray-300 my-2"></div>${newline2}`
        });

        text = text.replace(/(\n)- +/g, '$1•')

        text = text.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>')
        text = text.replace(/(\*|_)(.*?)\1/g, '<i>$2</i>');

        text = text.replace(/### (.*?)(?:\n|$)/g, (_, content) => {
            return `<h3 style="font-weight: 600; font-size: 1.2rem;">${content}</h3>`
        });

        text = text.replace(/## (.*?)(?:\n|$)/g, (_, content) => {
            return `<h2 style="font-weight: 600; font-size: 1.5rem;">${content}</h2>`
        });

        text = text.replace(/# (.*?)(?:\n|$)/g, (_, content) => {
            return `<h1 style="font-weight: 600; font-size: 2rem;">${content}</h1>`
        });

        text = text.replace(/~~(.*?)~~/g, '<s>$1</s>')

        text = text.replace(/```([^`]+)```/g, '<div style="background-color: #f6f8fa;border:1px solid #d0d7de; padding: 5px; border-radius: 10px"><code>$1</code></div>')

        text = text.replace(/\n/g, '<br>')

        return text;
    }

    function handleInputChange1(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const text = event.target.value;
        setInput1(text);
        setInput2(TransformList(text));
    }

    return (
        <div>
            <h1 className="text-2xl font-bold ml-auto mr-auto text-center mt-5">
                Github ReadMe
            </h1>
            <p className="text-sm ml-auto mr-auto text-center">That is app where you will create your own something</p>
            <div className="flex flex-row  w-screen">
                <textarea
                    className="w-1/2  min-h-[70vh] max-h-[80vh] m-5 p-10 rounded-2xl border-2 border-black border-solid"
                    value={input1 ?? ''}
                    onChange={handleInputChange1}
                />
                <div
                    className="w-1/2  min-h-[70vh] max-h-[80vh] m-5 p-10 rounded-2xl border-2 border-black border-solid"
                    dangerouslySetInnerHTML={{ __html: input2 ?? '' }}
                />
            </div>
        </div>
    );
}
