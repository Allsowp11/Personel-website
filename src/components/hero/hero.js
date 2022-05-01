import { Responsivity } from "../navbar/navbarscripts/responsivity"
import { Typewriter } from "./heroscripts/typewriter";
import React, { useState } from 'react';
import { Buttons } from "./heroscripts/buttons";
export const Hero = () =>{
    Responsivity()
    const [timeout , setTimeout] = useState(false);


    const texts =["l'm Allsowp11 front-end developer and voice actor. You can read my blogs...","l am Ayberk Dulda. student of Küçükçalık high school from turkey","I've been coding since 2019. I started by writing simple applications (like a calculator) in python. I mostly write about websites or cyber-security these days. I am also interested in voice acting. I am improving my diction and vocal capacity. you can check my voice from youtube videos."]

    if(window.innerWidth >= 1024){
        //large 
        return(
            <div className="pt-56 px-44 bg-black">
                <div id="message" className="text-4xl space-y-10 text-[#c4c4c4] h-32">
                    <Typewriter timeout={timeout} setTimeout={setTimeout} text={texts[0]}/>
                </div>
                <div className="">
                    <Buttons timeout={timeout}/>
                </div>
             </div>

        );
        
    }
    else{   
        //mobile and meduim
        return(
            <div>
                
            </div>

        );
    }
}