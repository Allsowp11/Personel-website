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
          setBlog(blog1);
            fetch(blog1.text).then((res=> res.text())).then((md)=> {
                setBlogtext(md)
                console.log(md)
            })
        }
      }, []);

    console.log(blog)
    return(
        <div className='bg-[#141413] h-screen'>
            <div className="">
                <a href="/blogs" id="arrow" className="top-10 left-10 absolute" >
                    <img fill="#ffffff" src="/images/arrow.svg"  className="h-16 w-16 rounded-full hover:bg-[#0a0a0a] hover:bg-opacity-75"/>
                </a>
                <div className="bg-no-repeat bg-center bg-cover " style={{
                    backgroundImage : `url('${blog?.cover}')`,
                    height : "500px"
                    }}>

            </div>
                <div className=''>
                        <div className=' bg-[#141413] flex flex-col items-center justify-center text-white px-20'>
                            <article className='prose prose-img:rounded-2xl prose-mylime max-w-none pt-20'>
                                <ReactMarkdown children={blogtext}/> 
                            </article>
                        </div>
                </div>
            

        




             

            </div>
            <Footer/>


        </div>

    )

}