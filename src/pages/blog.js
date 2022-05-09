import ReactMarkdown from 'react-markdown';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Footer } from '../components/footer/footer';
import { Blogs_data } from '../libs/blogs_data/blogs_data';
export const Blog = () => {
    const [blogtext, setBlogtext] = useState();
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        let blog1 = Blogs_data.find((blog) => blog.id === parseInt(id));
        if (blog1) {
            setBlog(blog1)
        }
      }, []);

    return(
        <div>
            <div className='h-screen'>
                <div className='bg-[#141413] lg:pt-44 h-[500px] 2xl:h-[700px] flex justify-center items-center'>
                    <h1 className='text-2xl xl:text-3xl text-[#a7d129]'>
                        {blog?.Canwrite ? "" : "Blog Yazılma sürecinde tahmini zaman(2gün)"}
                    </h1>
                </div>
                <Footer/> 
            </div>
            <a href="/blogs" id="arrow" className="top-10 left-10 absolute" >
                <img fill="#ffffff" src="/images/arrow.svg"  className="h-16 w-16 rounded-full hover:bg-[#0a0a0a] hover:bg-opacity-75"/>
            </a> 
        </div>
    
    )

}
