export const About = () =>{
    const texts = ["l am Ayberk Dulda. student of Küçükçalık high school from","I've been coding since 2019. I started  by writing simple applications (like a calculator) in python. I mostly write about websites or cyber-security these days. I am also interested in voice acting. I am improving my diction and vocal capacity. you can check my voice from youtube videos.","UX and UI website desings","Javascript (Node.js and Client-side)","Python (basic desktop apps)"]
    const Special = (info) =>{
        return(
            <div className="flex lg:space-x-2  space-x-3">
                <img className="w-5 lg:w-6" src="images/tick.svg" alt=""/>
                <h1 className="text-[#b8b8b8] py-4">{info.text}</h1>  
            </div>
        );

    }
    return(
        <div className=" lg:pt-44 pt-32">
            <main className=" text-white flex  lg:text-5xl bg-[#141413] lg:pt-0 ">
                <div id="About" className="w-full flex-col lg:px-5 flex lg:flex-row lg:pt-10 items-center lg:items-start space-y-3 lg:space-y-0">
                    <div  className="lg:w-1/2 lg:p-20 ">
                        <img  className=" w-60 md:w-80 lg:w-full lg:rounded-2xl rounded-full lg:border-2 border-4 border-[#A7D129]" src="images/avatar.jpg" alt="" width="600"/>
                    </div>
                    <div  className="lg:w-1/2 flex-col flex space-y-5 lg:space-y-4 lg:px-10 px-5 lg:pt-20">
                        <div  className="flex flex-col lg:space-y-5 space-y-5">
                            <h1 className="lg:text-xl lg:text-5xl text-2xl text-[#A7D129] lg:text-left  text-center">
                            starts with depression...
                            </h1>
                            <div className="flex-col flex lg:space-y-5 space-y-4">
                                <h1 className="text-center text-3xl lg:text-5xl ">
                                    who am l? <span className="text-[#A7D129]">&</span> what l do
                                </h1>
                                <div className="text-xl flex flex-col lg:space-y-3 space-y-5 text-[#b8b8b8] lg:text-left ">
                                    <h2 className=" text-xl ">{texts[0]} <span id="turkey">turkey</span></h2>
                                    <p className=" text-lg">{texts[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:text-base  text-base lg:text-xl flex flex-col space-y-1 lg:space-y-0 items-start">
                            <Special text={texts[2]}/>
                            <Special text={texts[3]}/>
                            <Special text={texts[4]}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );

}