import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {
    const [text,setText] = useState("");
    const fullText = "Junior Castillo";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0,index))
            index++;

            if(index > fullText.length){
                clearInterval(interval)

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);
        return () => clearInterval(interval);
    },[onComplete]);

    const progressWidth = `${(text.length / fullText.length) * 100}%`;


    return <div className="fixed inset-0 z-50 bg-[#41424c] text-gray-200 flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold">
           {text} <span className="animate-blink ml-1"> | </span>
            </div>
            <div className="w-[375px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className = " h-full bg-blue-500 shadow-[0_0_150px_#3b82f6] animate-loading-bar"
                style={{width : progressWidth}} >
                    {""}
                </div>
            </div>
    </div>
}