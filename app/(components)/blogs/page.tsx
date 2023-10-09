'use client'
import React, { useState } from 'react'
import Blog from './blog'
import PaginationUI from './pagination'
import useSWR from 'swr'
import Loading from '@/app/loading'
import Ads from '../(more)/Ads/Ads'


const fetcher = (url: URL) => fetch(url, { method: 'get' }).then((res) => res.json());

function page() {
  const [pageIndex, setPageIndex] = useState(1);
  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/get-all-blogs?page=${pageIndex}`;
  const { data, error } = useSWR(apiUrl, fetcher, { revalidateOnFocus: false });
  if (error) return <div>Failed to load</div>
  if (!data) return <div className='text-center relative h-72'><Loading /></div>

  return (
    <>
      <div className='grid overflow-hidden grid-cols-1 lg:grid-cols-3 lg:w-5/6 mx-auto relative'>
        <div className='h-auto col-span-2 w-full border-r-0 lg:border-r-2 text-center'>
          <Blog data={data.data} />
          <PaginationUI pageIndex={pageIndex} setPageIndex={setPageIndex} />

        </div>

        <div className='p-5'>
          <Ads />
        </div>

      </div>
    </>
  )
}

export default page