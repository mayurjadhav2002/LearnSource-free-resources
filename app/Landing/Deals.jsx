"use client"
import React from 'react'
import SoftwareCards from '../(components)/softwares/SoftwareCards'
import useSWR from 'swr'
import Blogs from './Blogs'
const fetcher = (url) => fetch(url, { method: 'get' }).then((res) => res.json()).then((json) => json.data);

function Deals() {
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/software/recent`;

    const { data, error } = useSWR(apiUrl, fetcher, { revalidateOnFocus: false });
    if (error) return <div>Failed to load</div>

    return (
        <div className=' mx-auto border-t-2 mt-8 '>
            <h1 className=' text-center mt-8  font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600'>
           Dont Waste Money, Get Deals for Free</h1>
            <div className='w-full lg:w-4/5 mx-auto p-1 lg:p-5 '>
                  <div className='border-gray-400 min-h-56 mt-10 dark:bg-black  '>

                    <div className='grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>

                        {data ? <SoftwareCards data={data} />
                            : <>Loading...</>}
                    </div>
                </div>
           
                <Blogs />
            </div>
        </div>
    )
}








export default Deals