"use client"
import React, { useState } from 'react'
import {Pagination} from "@nextui-org/react";

function PaginationUI({pageIndex, setPageIndex}:{pageIndex:any, setPageIndex: any}) {
  
  return (
  <>
  <div className='flex justify-center'>
    <Pagination total={23}  initialPage={pageIndex}
    onChange={e=>setPageIndex(e)}
    />



  </div>
</>
  )
}

export default PaginationUI