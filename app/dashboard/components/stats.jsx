'use client'
import React, { useState } from 'react'
import axios from 'axios';

function Stats() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [total, setTotal] = useState(100);
  const [loading, setLoading] = useState(true);
const [data, setData] = useState()

//   const lyricsFunction = async () => {
//     try {
//       const data = await axios
//         .get(`http://192.168.0.108:3000/api/blog/user-blogs?id=${user._id}`)
//         .then((res) => {
//           setData(res.data.blogs);
//           setTotal(res.data.total)
//         });
//       setLoading(true);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     lyricsFunction();
//   }, []);
console.log(data)

  return (
    
    <div>
    {!loading? 'loading...': 
      <div>
 
        <div className="grid lg:grid-cols-4 xl:grid-cols-4 justify-center gap-4 mb-4">

        <div class="flex items-center shadow-lg p-4  bg-white rounded" title='Total Number of Articles posted'>
        <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi h-6 w-6 bi-journals" viewBox="0 0 16 16">
  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
  <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
</svg>
        </div>
        <div class="flex-grow flex flex-col ml-4">
          <span class="text-xl font-bold">{total}</span>
          <div class="flex items-center justify-between">
            <span class="text-gray-500">Blogs/Articles Posted </span>
          </div>
        </div>
      </div>


        <div class="flex items-center p-4 bg-white shadow-lg rounded">
        <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi w-8 h-8 text-blue-800 bi-binoculars-fill" viewBox="0 0 16 16">
        <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
      </svg>
        </div>
      
        <div class="flex-grow flex flex-col ml-4">
          <span class="text-xl font-bold">410</span>
          <div class="flex items-center justify-between">
            <span class="text-gray-500">Total Views on Your Content</span>
          </div>
        </div>
      </div>
      
  
    
		
      <div class="flex items-center p-4 bg-white rounded shadow-lg" title='Number of Contributions for Software Articles'>
			<div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
				<svg class="w-6 h-6 fill-current text-green-700"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
				</svg>
			</div>
			<div class="flex-grow flex flex-col ml-4">
				<span class="text-xl font-bold">4</span>
				<div class="flex items-center justify-between">
					<span class="text-gray-500">Contributions to Articles</span>
				</div>
			</div>
		</div>
		
    <div class="flex items-center p-4 bg-white rounded shadow-lg" title='Total Number of Followers'>
			<div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi w-6 h-6 bi-people" viewBox="0 0 16 16">
      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
    </svg>
			</div>
			<div class="flex-grow flex flex-col ml-4">
				<span class="text-xl font-bold">0</span>
				<div class="flex items-center justify-between">
					<span class="text-gray-500">Followers</span>
				</div>
			</div>
		</div>
		
        </div>
        <div className="p-4 mb-4 rounded bg-gray-50 dark:bg-gray-800">


     




        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+
            Tools for you
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div>

      </div>
  }
    </div>
  )
}

export default Stats