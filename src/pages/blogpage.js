import { Blogs_data } from '../libs/blogs_data/blogs_data.js';
import { Layout } from './layout.js';
import { GithubURL } from '../libs/apis/apis.js';
import { useEffect, useState } from 'react';
export const Blogs = () =>{
    const [Api, Setapi] = useState([])
    
    useEffect(() =>{
        fetch(GithubURL)
        .then(response => response.json())
        .then(response => Setapi(response))

    },[])
    console.log(Api)
    return(
        <Layout>
            <div className=" px-5 lg:pt-44 h-full 2xl:h-screen w-full bg-[#141413]">
                <div className='w-full space-y-10 2xl:space-y-32'>
                    <h1 className="text-[#a7d129] grid place-items-center text-3xl md:text-3xl lg:text-4xl ">Blogs</h1>
                    <div className="text-white  grid grid-cols-1 lg:grid-cols-flow gap-4 place-items-center" > 
                        {Blogs_data.map(blog => (
                            <div className='flex flex-col lg:space-y-0 space-y-10 hover:bg-[#1c1c1b] bg-[#262624] p-2 rounded-2xl'>
                                <div className=' h-28 p-3 flex lg:flex-row flex-col space-y-3 lg:space-y-0 lg:justify-between justify-between'>
                                    <a href={Api.html_url} target="_blank" className='flex space-x-5'>
                                        <img src={Api.avatar_url} alt="" className='rounded-full h-20 hover:h-24 transistion delay-100 duration-100'/>
                                        <h1 className='flex items-center text-lg'>{Api.login}</h1>
                                    </a>
                                    <div className=''>
                                        <h1>{blog.createdAt}</h1>
                                    </div>    
                                </div>
                                <div className='flex flex-col space-y-3'>
                                    <h1 className='text-2xl'>{blog.title}</h1>
                                    <a href={`/blog/${blog.id}`} className='text-xl hover:underline hover:underline-offset-2'>
                                        {blog.description}...
                                    </a>
                                    <div className={`flex space-x-2 flex-row justify-between p-2`}>
                                        <div className='flex flex-row space-x-2'>
                                            <div className={` ${blog.category.color} text-lg`}>
                                                {blog.category.name}
                                            </div>
                                            <div className={` ${blog.Language.color} text-lg`}>
                                                {blog.Language.name}
                                            </div>
                                        </div>
                                        <a href={`/blog/${blog.id}`} target="_self" className="flex justify-start " style={{"transform": "rotate(90deg)"}}>
                                            <img src="/images/arrow.svg"/>
                                        </a>   
                                    </div>
                                </div>                   
                            </div>
                        ))}
                            
                    </div>
                </div>
            
            
            </div>
        </Layout>
    );


}