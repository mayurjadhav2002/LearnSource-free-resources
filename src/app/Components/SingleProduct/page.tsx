'use client'

import logo from '../../../public/tShirt.jpg';
import Image from 'next/image';
import blueTsirt60 from '../../../../public/blueTshirt60X60.png';
import blueTshirt700 from '../../../../public/blueTshirt700X700.png'
import redTshirt from '../../../../public/redTshirt.png'
import Footer from '../Footer/page'

export default function page() {
    return (
        <>
            {/* //single product main div */}

            <div className="flex flex-row justify-around mt-28" >
                <div className="flex flex-col justify-between h-full w-20 mt-8 basis-[10%]">
                    <div className="h-24 mx-auto ">
                        <Image 
                        src={blueTsirt60} alt="1st" className="hover:border hover:drop-shadow-2xl border-black  border " />
                    </div>
                    <div className="h-24 mx-auto ">
                        <Image src={blueTsirt60} alt="2nd" className="hover:border hover:drop-shadow-2xl border-black border  " />
                    </div>
                    <div className="h-24 mx-auto ">
                        <Image src={blueTsirt60} alt="3th" className="hover:border hover:drop-shadow-2xl border-black border " />
                    </div>
                    <div className="h-24 mx-auto ">
                        <Image src={blueTsirt60}  alt="4rd" className="hover:border hover:drop-shadow-2xl border-black border" />
                    </div>
                </div>
                <div className="w-full h-full p-1 border-2 border-black basis-[40%]">
                    <Image src={blueTshirt700} alt="woking" />
                </div>
                <div className="basis-[50%] flex flex-col ml-10">
                    <p className="font-bold text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, obcaecati?
                    </p>
                    <p className="my-2 text-neutral-600 text-lg">Brand Name</p>
                    <h3 className="my-3 text-2xl font-bold">$399</h3>
                    <div className="inline-block my-3">
                        <span className=" bg-slate-300 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                        <span>15K ratings</span>
                    </div>
                    <div className="">
                        <p className="text-lg">Select Size</p>
                        <button className="inline-block w-10 h-9 mx-4 my-2 bg-slate-400 rounded-sm drop-shadow-md text-center pt-1">S</button>
                        <button className="inline-block w-10 h-9 mx-4 my-2 bg-slate-400 rounded-sm drop-shadow-md text-center pt-1">M</button>
                        <button className="inline-block w-10 h-9 mx-4 my-2 bg-slate-400 rounded-sm drop-shadow-md text-center pt-1">L</button>
                        <button className="inline-block w-10 h-9 mx-4 my-2 bg-slate-400 rounded-sm drop-shadow-md text-center pt-1">XL</button>
                    </div>
                    <div className=" flex justify-around h-14 p-1 my-5">
                        <button className="basis-[45%] bg-[#FF5300] text-white text-xl hover:drop-shadow-2xl ">Buy Now</button>
                        <button className="basis-[45%]  bg-[#FF9F00] text-white text-xl hover:drop-shadow-2xl	">Add to Cart</button>
                    </div>
                    <div>
                        <p className=" text-lg font-semibold my-3">Product details</p>
                        <p>Burgundy Tshirt for men</p>
                        <p>Solid</p>
                        <p>Regular length</p>
                        <p>Burgundy Tshirt for men</p>
                        <p>Daily use</p>

                    </div>
                    <div>
                        <p className=" text-lg font-semibold my-3">Customer Reviews</p>
                        <div className="mr-10">
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <a href="/" className="inline-block font-medium my-5 mx-3">See more →</a>
                        </div>

                    </div>

                </div>
            </div>
            <p className="font-semibold text-xl px-10 my-5">Similar Products</p>
            <div className=" flex flex-row justify-around flex-wrap">
                <div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                        <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div>
                <div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                    <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div>
                <div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                    <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div>
                <div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                    <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div>
                <div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                    <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div>
                <div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                    <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div><div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                    <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div><div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                    <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div><div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                    <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div><div className="h-100 w-60 bg-slate-200 rounded m-7 ">
                    <div>
                    <Image src={redTshirt} alt="" className="p-1" />
                    </div>
                    <div className="px-1 py-2 ">
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet .
                        </p>
                        <p className="text-neutral-600 mb-2">Brand Name</p>
                        <p className="font-semibold text-lg">$399</p>
                    </div>
                </div>
                
                <a href="/" className="font-semibold text-lg my-5 mx-3">See More products from similar category  →</a>


               

            </div>
<Footer/>
            
        </>

    )
}
