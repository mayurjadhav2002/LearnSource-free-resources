"use client"
import React from 'react'
import UdemyCard from './udemycards'
import useSWR from 'swr/immutable'
import Loading from '@/app/loading';
 
const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
 
function page() {
    const { data, error } = useSWR("https://flask-udemy-coupon-code.mayurjadhav.repl.co/", fetcher, { revalidateOnFocus: false }    )
 
    if (error) return <div>Failed to load</div>
    if (!data) return <div className='text-center relative h-72'> <Loading/> </div>
   
    return (

        <>
        <div className='lg:container mx-auto p-2 '>

        <h1 className="my-4 text-3xl font-extrabold lg:text-start text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span className="text-red-600 dark:text-red-500">Udemy</span> Free Courses.</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Click on the Courses below, the coupon codes will be applied automatically (coupon are passed as a variables in url)
        </p>


        <div className='grid gap-5 my-10 grid-cols-1  md:grid-cols-2 lg:grid-cols-5'>

                
<UdemyCard param={data}/>


</div>
        </div>
          
        </>

    )
}

export default page


