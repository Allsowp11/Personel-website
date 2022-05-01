import { Accountslinks } from "../libs/accounts/Accountslinks";
import { Layout } from './layout.js';
import { FaBeer } from 'react-icons/fa';
export const Accounts = () =>{

   
    
    
    
    return(
        <Layout>
            <div className="lg:pt-52 pt-32 space-y-20">
                <h1 className="text-center text-5xl text-[#a7d129]">
                    Accounts
                </h1>
                <div className=' grid gap-4 lg:grid-cols-3 grid-cols-1 text-white lg:px-20 px-2'>
                    {Accountslinks.map(link =>(
                        <a href={link.href} target="_blank">
                            <div className=" flex lg:flex-row space-y-2 lg:space-y-0 flex-col lg:justify-between px-4 py-4 hover:bg-[#1c1c1b] duration-100 delay-100 bg-[#262624] rounded-full">
                                <div className="lg:space-x-4 flex flex-col  lg:flex-row">
                                    <div className="flex items-center justify-center">
                                        <link.image className={`text-6xl ${link.color}`} />
                                    </div>
                                    <h1 className="text-xl text-center lg:items-center lg:flex">{link.name}</h1>
                                </div>
                                <h1 className="text-lg text-center lg:items-center lg:flex"> {link.value}</h1>
                            </div>
                        </a>


                    ))}

                </div> 
            </div>
            
        </Layout>
    );


}