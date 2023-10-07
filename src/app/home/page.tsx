// 'use client'
'use client'
import tshirt from '../../../public/tShirt.jpg'
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer/page';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function LandingPage() {
    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <>
        <Navbar/>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
    >
      <SwiperSlide><div className='p-40 w-[100vw]'>Slide 1</div></SwiperSlide>
      <SwiperSlide><div className='p-40 w-[100vw]'>Slide 2</div></SwiperSlide>
      <SwiperSlide><div className='p-40 w-[100vw]'>Slide 3</div></SwiperSlide>
      <SwiperSlide><div className='p-40 w-[100vw]'>Slide 4</div></SwiperSlide>

    </Swiper>


            <div className="mt-40">
               
                <div className='border border-black mx-2 my-4 p-4 md:p-6'>
                    <h3 className='mb-5 text-md md:text-lg'>Best of Mens clothings </h3>


                    <div className="flex flex-row justify-between overflow-auto">

                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                                return (
                                    <div
                                        key={item} className="mx-2 pt-1 md:w-52 max-w-[8rem] md:max-w-[18rem]  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div className=' h-28 md:h-60 w-fit px-2 mx-2 border border-black inline-block'>
                                            <div className='w-24 md:w-44 h-full   '>
                                                <Image
                                                    className="rounded-t-lg md:pt-4"
                                                    src={tshirt}

                                                    alt="Tshirt" />
                                            </div>
                                        </div>

                                        <div className="p-2 text-xs text-center ">
                                            <p className="md:text-base md:my-1 text-neutral-600 dark:text-neutral-200 text-sm">
                                                Some quick example
                                                <br />
                                                <b > starting from Rs200</b>
                                            </p>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>

                </div>





                {/* best of women clothings */}
                <div className='border border-black mx-2 my-6 p-4 md:p-6 '>
                    <h3 className='mb-5 text-md md:text-lg'>Best of Women Clothings </h3>


                    
                    <div className="flex flex-row justify-between overflow-auto">

                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                                return (
                                    <div
                                        key={item} className="mx-2 pt-1 md:w-52 max-w-[8rem] md:max-w-[18rem]  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div className=' h-28 md:h-60 w-fit px-2 mx-2 border border-black inline-block'>
                                            <div className='w-24 md:w-44 h-full   '>
                                                <Image
                                                    className="rounded-t-lg md:pt-4"
                                                    src={tshirt}

                                                    alt="Tshirt" />
                                            </div>
                                        </div>

                                        <div className="p-2 text-xs text-center ">
                                            <p className="md:text-base md:my-1 text-neutral-600 dark:text-neutral-200 text-sm">
                                                Some quick example
                                                <br />
                                                <b > starting from Rs200</b>
                                            </p>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>

                </div>





                {/* best of childrens clothings */}
                <div className='border border-black mx-2 my-6 p-4 md:p-6'>
                    <h3 className='mb-5 text-md md:text-lg'>Best of Children Clothings </h3>


                    
                    <div className="flex flex-row justify-between overflow-auto">

                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                                return (
                                    <div
                                        key={item} className="mx-2 pt-1 md:w-52 max-w-[8rem] md:max-w-[18rem]  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div className=' h-28 md:h-60 w-fit px-2 mx-2 border border-black inline-block'>
                                            <div className='w-24 md:w-44 h-full   '>
                                                <Image
                                                    className="rounded-t-lg md:pt-4"
                                                    src={tshirt}

                                                    alt="Tshirt" />
                                            </div>
                                        </div>

                                        <div className="p-2 text-xs text-center ">
                                            <p className="md:text-base md:my-1 text-neutral-600 dark:text-neutral-200 text-sm">
                                                Some quick example
                                                <br />
                                                <b > starting from Rs200</b>
                                            </p>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>

                </div>

            </div>
<Footer/>
        </>
    )
}

export default LandingPage;