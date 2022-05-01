import { useEffect, useState } from "react";
export const LargeNavbar = () => {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
            SetBackground(true)

        }
        else{
            SetBackground(false)

        }
    }
    useEffect(() =>{
        window.onscroll = function() {scrollFunction()};
    },[])

    
    const [Background , SetBackground] = useState(false)   
    const Navbarlinks = (links) =>{
        return(
            <a onClick={links.onClick} className={links.class} href={links.href}>{links.name}</a>

        );
    }
    return(
        <nav className={`${Background ? "bg-[#262624] py-3" : " py-5 "} transition delay-75 fixed inset-x-0 flex flex-row justify-between px-10 text-[#c4c4c4] text-2xl z-50`}>
            <a href="/" className="flex space-x-5 ">
                <img src="images/icon2.svg" alt="" className="w-16 bg-[#262624] rounded-full p-1 "/>
                <h1 className="py-3">Allsowp11</h1>
            </a>
            <div className="flex space-x-10 py-3 text-xl">
                <Navbarlinks  name="Home" href="/" />
                <Navbarlinks  name="Blogs" href="/blogs" />
                <Navbarlinks  name="About" href="/#About" />
                <Navbarlinks  name="Projects" href="/#Projects" />
                <Navbarlinks  name="Accounts" href="/Accounts" />
                <Navbarlinks  name="Contact" href="/#contact" />
            </div>
        </nav>  
    );


}