'use client'
import React, { useState } from 'react'
import PaginationUI from '../blogs/pagination'

import  useSWR from 'swr'
import SoftwareCards from './SoftwareCards'
import Loading from '@/app/loading'

const fetcher = (url: URL) => fetch(url, {method:'get'}).then((res) => res.json()).then((json)=>json.data);


function page() {
   const [pageIndex, setPageIndex] = useState(1)
   const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/software/?page=${pageIndex}`;
  
   const { data, error } = useSWR(apiUrl, fetcher, { revalidateOnFocus: false });
   if (error) return <div>Failed to load</div>
   if (!data) return  <Loading/> 
 
   console.log(data)
   console.log(apiUrl)
  return (
    <>
      <div className='grid grid-cols-3 w-5/6 mx-auto relative'>
        <div className='h-auto col-span-3 w-full  text-center'>

          <div className='grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>

        <SoftwareCards data={data}/>
          </div>
          <PaginationUI pageIndex={pageIndex} setPageIndex={setPageIndex}/>


        </div>

        {/* <div>
          <Sidebar />
        </div> */}

      </div>
    </>
  )
}

export default page