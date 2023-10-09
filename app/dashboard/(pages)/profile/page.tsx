'use client'
import { useUserContext } from '@/app/auth/userContext/userContext';
import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Loading from '@/app/loading';
import { FaRegEdit } from 'react-icons/fa'

function Page() {
  const { user } = useUserContext();

  const [image, setImage] = useState({ preview: `${process.env.NEXT_PUBLIC_BACKEND_URL}/static/avatar/${user.image}`, data: '' });
  const inputRef = useRef(null);

  const handleFileChange = async (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };


  const [isImageResolved, setIsImageResolved] = useState(false);

  useEffect(() => {
    // Check if the image preview is resolved
    if (image.preview) {
      setIsImageResolved(true);
    }
  }, [image.preview]);

  return (
    <>
      <div className="flex min-h-screen flex-auto flex-shrink-0 z-10 antialiased text-gray-800">
        <Sidebar />

        <div className='w-full max-h-screen overflow-scroll no-scrollbar p-5'>
          Profile

          {user ? (
            isImageResolved ? (
              <div>
                <figure className="mx-auto cursor-pointer
                w-44 h-44 
                 relative max-w-sm transition-all duration-300 
                 " onClick={handleClick}>
                  {image.preview && <img src={image.preview}
                    className='h-44 w-44 min-w-cover rounded-lg  hover:shadow-lg object-cover' />}
                  <input type='file' ref={inputRef} className='hidden' name='file' onChange={handleFileChange}></input>
                  <div className="absolute 
                  inline-flex items-center justify-center
                  opacity-75
                   w-10 h-10 text-xs font-bold text-white bg-blue-700 border-2
                    border-white rounded-full -bottom-5 -right-5 dark:border-gray-900">

                    <FaRegEdit />

                  </div>

                </figure>
              </div>
            ) : (
              <div>
                <Loading />
              </div>
            )
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Page;
