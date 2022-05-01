import { useState } from "react";
export const Mobilenavbar = () =>{
    const [Navbarstate, setNavbar] = useState(false);
    const Navbarlinks = (links) => {
        return(
            <a href={links.href} onClick={() => setNavbar(!Navbarstate)} >{links.name}</a>

        );    
    }
return( 
        <div>
            <nav className={`${Navbarstate ? "h-screen fixed" : ""} w-screen flex z-50`} >
                <div className={`${Navbarstate ? "bg-[#000000]" : ""} flex w-8/12 md:w-1/2 flex-col justify-between py-5 items-center`}>
                    <div className="flex flex-col space-y-10">
                        <a onClick={() => setNavbar(!Navbarstate)} className="flex flex-row justify-center items-center space-x-4 ">
                            <img src={`${Navbarstate ? "./images/cross.svg": "./images/icon2.svg"}`} className="bg-[#262624] p-1  rounded-full" alt="" />
                            <h1 className="text-2xl text-[#b8b8b8]">Allsowp11</h1>
                        </a>
                        <div className={`${Navbarstate ? "flex" : "hidden"} flex-col space-y-5 items-center text-2xl text-[#b8b8b8]`}>
                            <Navbarlinks  name="Home" href="/" />
                            <Navbarlinks  name="Blogs" href="/blogs" />
                            <Navbarlinks  name="About" href="/#About" />
                            <Navbarlinks  name="Projects" href="/#Projects" />
                            <Navbarlinks  name="Accounts" href="/Accounts" />
                            <Navbarlinks  name="Contact" href="/#contact" />
                        </div>
                    </div>
                    <div className={`${Navbarstate ? "flex" : "hidden"} flex-row space-x-4 items-center`}>
                        <img onClick={() => window.open("https://www.w3schools.com/js/js_window_location.asp","_blank") } className="w-10" src="/images/github.svg" alt="" />
                        <img onClick={() => window.open("https://www.w3schools.com/js/js_window_location.asp","_blank") } className="w-10" src="/images/instagram.svg" alt="" />
                        <img onClick={() => window.open("https://www.w3schools.com/js/js_window_location.asp","_blank") } className="w-10" src="/images/spotify.svg" alt="" />
                    </div>
                </div>
                <div className={`${Navbarstate ? "bg-white opacity-50" : ""} w-4/12 md:w-1/2`}>

                </div>
            </nav>
            <div className={`${Navbarstate ? "h-28" : "hidden"}`}>

            </div>
        </div>

)
        



}