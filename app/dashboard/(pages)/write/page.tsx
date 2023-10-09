import Sidebar from '../../components/sidebar'
import React from 'react'
import Write from '../../components/write'
function page() {
  return (
    <>
<div className="flex min-h-screen flex-auto flex-shrink-0 z-10 antialiased  text-gray-800">

        <Sidebar/>
        <div className='w-full max-h-screen overflow-scroll no-scrollbar  p-5'>
            
<Write />
        </div>
        </div>
    </>
  )
}

export default page