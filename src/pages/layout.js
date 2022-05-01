import { Navbar } from "../components/navbar/navbar"
import { Footer } from "../components/footer/footer"
export const Layout = ({children}) =>{
    return( 
        <div className="bg-[#141413] flex flex-col selection:bg-[#a7d129] selection:text-[#5064a9]">
            <Navbar/>
                {children}
            <Footer/>
        </div>

    );
}