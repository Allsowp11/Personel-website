import { Responsivity } from "./navbarscripts/responsivity";
import { LargeNavbar } from "./navbarscripts/Largenavbar";
import { Mobilenavbar } from "./navbarscripts/mobilenavbar";
export const Navbar = (data) =>{
    Responsivity()
    
    if (window.innerWidth >= 1024 ) {
        //Large screen
        return(
            <LargeNavbar/>

        );
    }
    else{
        //small and medium screen
        return(
            <Mobilenavbar/>
        );
    }
}