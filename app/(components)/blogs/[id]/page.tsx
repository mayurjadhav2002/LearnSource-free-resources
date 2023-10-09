'use client'
import { Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import './style.css'
import Loading from '@/app/loading';

export default function page({ params }: { params: any }) {

  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/blog_by_id?id=${id}`, { next: { revalidate: 3600 } });
        const newData = await response.json();
        setBlog(newData.blog);
       
      } catch (error) {
        throw new Error("error")
      }
     

    };
    fetchData(params.id);
  }, []);




  if (!blog) { return <Loading /> }
  else {

    return (
      <>

    
     
        <div className='mt-10 col-span-2 w-full border-r-0 lg:border-r-2 text-center'>


          <div className="flex  items-center flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">

            <div className="w-full mx-auto">

              <h1 className='lg:text-5xl text-4xl font-bold my-2'> {blog.title}</h1>
              <div className='flex justify-between my-5 items-center'>
                <div className="flex items-center space-x-1 lg:space-x-3">
                  <Image
                    className="w-10 h-10 rounded-full object-cover"
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/avatar/${blog.author.image}`}
                    alt=""
                  />
                  <div className="font-medium dark:text-white">
                    <div>{blog.author.name} <small className='text-gray-500'>| {blog.user_bio}</small></div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Posted  2 days ago
                    </div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye mr-2" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <span className='text-sm text-gray-900'>{blog.views} Views</span>
                </div>
              </div>
              <figure>
                <img

                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/Blogs/thumbnail/${blog.thumbnail}`}
                  loading='lazy'
                  alt='Image could not load Properly'
                  className='w-full max-h-max py-1'

                />  <figcaption className='text-gray-700 font-mono font-light'>Fig.1 - {blog.title}</figcaption>
              </figure>

              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            <div className=' text-left lg:text-left'>

            </div>
            <hr className='mt-10 mb-3' />


            {/* <div className="flex w-full items-center justify-between">

            

            Views Page
                          <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye mr-2" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
                <span className='text-sm text-gray-900'>{blog.views} Views</span>
              </div>


            </div> */}

          </div>





        </div>
     
      </>
    )

  }
}



