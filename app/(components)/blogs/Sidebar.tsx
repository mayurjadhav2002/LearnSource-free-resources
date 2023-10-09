import React from 'react'

function Sidebar() {
  return (
    <>
      <div className='mt-5 p-2'>

        <div className='h-auto mx-auto bg-slate-50  rounded-lg'>
          <h3 className='px-5 text-lg pt-3 font-bold'>Recommended for you: </h3>

          <div className='px-5 pb-3 border-t-2 cursor-pointer'>

            <div className="font-medium mt-2 dark:text-white text-xs text-gray-600">
              <div><strong>Jese Leos</strong> | <span className=''>10 days ago</span></div>

            </div>


            <h5 className='text-md leading-5 font-sans text-gray-700 hover:font-semibold hover:duration-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quidem molestias commodi, </h5>


          </div>


        

        </div>
      </div>
    </>
  )
}

export default Sidebar