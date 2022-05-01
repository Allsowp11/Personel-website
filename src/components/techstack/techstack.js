import { links } from "../../libs/tech stack/techstack";
export const TechStack = ()=>{
    return(
        <div className="space-y-10 px-10 lg:px-32">
            <h1 className="text-[#a7d129] grid place-items-center text-4xl md:text-4xl lg:text-4xl ">Tech stack</h1>
            <div className="grid gap-4 grid-rows-flow lg:grid-cols-5 md:grid-cols-3 grid-cols-2"> 
                {links.map(tech => (
                <a target="_blank" rel="noreferrer" href={tech.href}>
                    <div className="bg-[#262624] grid place-items-center p-4 rounded-full">
                        <img  className="lg:w-16 w-14" src={tech.image} alt=""/>
                    </div>
                </a>
                ))}
            </div>
        </div>
    );

}