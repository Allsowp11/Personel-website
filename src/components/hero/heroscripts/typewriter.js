import { useEffect, useState } from "react";
export const Typewriter  = (info) =>{
    const [Text, setText] = useState('');
    const [count, setcount] = useState(0);
    const [intervalid , setintervalid] = useState();

    
    const type_text = info.text
    useEffect(() =>{
        const timer = setInterval(() => {    
            
            setcount(ex => ex + 1)
        
        }, 100);
        setintervalid(timer)
    },[]) 
    useEffect(() => {
        if( count < type_text.length){
            setText(ex => ex + type_text.charAt(count))
            
    
        }
        else if(count === 80){
            info.setTimeout(!info.timeout)
        }
        else if(count === 81){
            clearInterval(intervalid)
        }
    },[count])
    return(
        <div className="">
            {Text}
        </div>
    );
}