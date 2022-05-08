import { useEffect, useState } from "react";
export const Project = (data) => {
    const [Projectlist, Setprojectlist] = useState([]);
    const [allah, Setallah] = useState([]);
    const ProjectApi = data.Api.repos_url
    const ProjectCount = data.Api.public_repos
    useEffect(() =>{
        if(ProjectApi){
            fetch(ProjectApi)
            .then(response => response.json())
            .then(response => Setprojectlist(ex => response))
        }
    },[ProjectApi]);
        
    
    useEffect(() =>{
        Projectlist.map(project =>{
            let info = {
                projectName : project.name,
                projectURL : project.html_url,
                projectDescription : project.description,
                projectLanguage : project.language
            }
            Setallah(ex => [...ex,info])
        })
    
    },[Projectlist])
    
    
    return(
        <div className="space-y-10 px-5 lg:px-44 ">
            <h1 className="text-[#a7d129] grid place-items-center text-3xl md:text-3xl lg:text-4xl ">Projects</h1>
            <div id="Projects" className="lg:grid-cols-3 md:grid-cols-3 grid grid-cols-1 gap-4" > 
                {allah.map(project => (
                    <div className="flex p-5  justify-between h-full bg-[#262624]  p-4 rounded-2xl">
                        <div className="flex flex-col space-y-3 ">                               
                            <h1 className=" text-base text-[#A7D129]">
                                {project.projectName.length >= 25 ? `${project.projectName.substring(0,25)}...` : `${project.projectName}`}
                            </h1>
                            <p className="text-base text-[#c4c4c4] h-12 lg:w-56 w-44">
                                {project.projectDescription.length > 48 ? `${project.projectDescription.substring(0,48)} ...` : `${project.projectDescription}` }
                            </p>
                            <div className="flex flex-row space-x-2">
                                <div className="flex items-center">
                                    <div className={` h-3 w-3 rounded-full   ${project.projectLanguage === "JavaScript" ? "bg-[#ffce3d]" : "" ||
                                project.projectLanguage === "HTML" ? "bg-[#e44d26]" : "" ||
                                project.projectLanguage === "CSS" ? "bg-[#2299f8]" : ""}
                                `}>

                                    </div>
                                </div>
                                <h1 
                                className={project.projectLanguage === "JavaScript" ? "text-[#ffce3d]" : "" ||
                                project.projectLanguage === "HTML" ? "text-[#e44d26]" : "" ||
                                project.projectLanguage === "CSS" ? "text-[#2299f8]" : ""
                                }>
                                    
                                    {project.projectLanguage}
                                </h1>
                            </div>
                        </div>
                        <a href={project.projectURL} target="_blank" className="flex justify-center " style={{"transform": "rotate(90deg)"}}>
                            <img src="/images/arrow.svg"/>
                        </a>
                    </div>
                ))}
                    
            </div>
        </div>
    );
    
}
