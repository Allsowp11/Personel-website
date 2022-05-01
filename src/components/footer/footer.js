import { Social_Medias } from "../../libs/social_media/social_media"
export const Footer = () => {
    return (
        <div className="bg-[#141413] lg:px-72 px-12 pb-12 pt-12">
            <div className="p-4 flex flex-col space-y-2 justify-center items-center py-5 text-gray-400 bg-[#262624] lg:rounded-full rounded-2xl">
                <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5 lg:items-center">
                    {Social_Medias.map(social => (
                        <a href={social.href} target="_blank" className="flex flex-col lg:flex-row lg:space-x-2 items-center">
                            <social.image className={`text-3xl ${social.color}`}/>
                            <h1>{social.name}</h1>
                        </a>

                    ))}
                </div>  
                <div className="flex flex-col justify-center space-y-2 text-center">
                    <div>Copyright 2022 All rights reserved</div>
                    <div>Allsowp11 Company</div>
                </div>
            </div>
        </div>
    )
}