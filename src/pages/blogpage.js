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
            <div className=" px-5 pt-44 h-full w-full bg-[#141413]">
                <div className='w-4/6 space-y-10'>
                    <h1 className="text-[#a7d129] grid place-items-center text-3xl md:text-3xl lg:text-4xl ">Blogs</h1>
                    <div className="text-white  grid grid-cols-1 gap-4" > 
                        {Blogs_data.map(blog => (
                            <div className='flex flex-col space-y-1 hover:bg-[#1c1c1b] bg-[#262624] p-2 rounded-2xl'>
                                <div className='flex justify-between'>
                                    <a href={Api.html_url} target="_blank" className='flex space-x-5'>
                                        <img src={Api.avatar_url} alt="" className='rounded-full h-20 '/>
                                        <h1 className='flex items-center text-lg'>{Api.login}</h1>
                                    </a>
                                    <div className=''>
                                        <h1>{blog.createdAt}</h1>
                                    </div>    
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <h1 className='text-2xl'>{blog.title}</h1>
                                    <a href={`/blog/${blog.id}`} className='text-xl hover:underline hover:underline-offset-2'>
                                        {blog.description}...
                                    </a>
                                </div>                   
                                <div className={`flex space-x-2 flex-row `}>
                                    {blog.category}
                                </div>
                            </div>
                        ))}
                            
                    </div>
                </div>
            
            
            </div>
        </Layout>
    );


}