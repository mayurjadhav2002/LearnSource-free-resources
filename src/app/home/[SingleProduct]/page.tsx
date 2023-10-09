'use client'
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Footer from '@/app/Components/Footer/page';
import Navbar from '@/app/Components/Navbar';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
export default function page({ params }: { params: { SingleProduct: string } }) {
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: {
          items: 6,
          itemsFit: 'contain'
        },
      };
      const tshirtcards = [
        <Card id={"1"} url={'/Assets/products/t-shirt/IMG-20230828-WA0030.webp'} />,
        <Card id={"2"} url={'/Assets/products/t-shirt/IMG-20230828-WA0031.webp'} />,
        <Card id={"3"} url={'/Assets/products/t-shirt/IMG-20230828-WA0032.webp'} />,
        <Card id={"4"} url={'/Assets/products/shirt/IMG-20230828-WA0011.webp'} />,
        <Card id={"5"} url={'/Assets/products/shirt/IMG-20230828-WA0018.webp'} />,
        <Card id={"6"} url={'/Assets/products/t-shirt/IMG-20230828-WA0032.webp'} />
      ]
      const pantscards = [
        <Card id={"1"} url={'/Assets/products/pants/IMG-20230828-WA0012.webp'} />,
        <Card id={"2"} url={'/Assets/products/pants/IMG-20230828-WA0013.webp'} />,
        <Card id={"3"} url={'/Assets/products/pants/IMG-20230828-WA0014.webp'} />,
        <Card id={"3"} url={'/Assets/products/pants/IMG-20230828-WA0012.webp'} />,
        <Card id={"3"} url={'/Assets/products/pants/IMG-20230828-WA0013.webp'} />,
        <Card id={"4"} url={'/Assets/products/pants/IMG-20230828-WA0016.webp'} />
      ]
    return (
        <>
            {/* //single product main div */}
<Navbar/>
            <div className="flex flex-row justify-around mt-28" >
                <div className="flex flex-col justify-between h-full w-20 mt-8 basis-[10%]">
                    <div className="h-24 mx-auto mb-1">
                        <Image
                            src={'/Assets/products/pants/IMG-20230828-WA0016.webp'} alt="1st" width={100} height={100} className="h-24 object-contain hover:border    border " />
                    </div>
                    <div className="h-24 mx-auto mb-1">
                        <Image src={'/Assets/products/pants/IMG-20230828-WA0016.webp'} alt="2nd" width={100} height={100} className="h-24 object-contain hover:border   border  " />
                    </div>
                    <div className="h-24 mx-auto mb-1">
                        <Image src={'/Assets/products/pants/IMG-20230828-WA0016.webp'} alt="3th" width={100} height={100} className="h-24 object-contain hover:border   border " />
                    </div>
                    <div className="h-24 mx-auto mb-1">
                        <Image src={'/Assets/products/pants/IMG-20230828-WA0016.webp'} alt="4rd"  width={100} height={100} className="h-24 object-contain hover:border   border" />
                    </div>
                </div>
                <div className=" p-1 basis-[40%]">
                    <Image src={'/Assets/products/pants/IMG-20230828-WA0014.webp'} width={100} height={100} className='w-full h-[80vh] object-contain' alt="woking" />
                </div>
                <div className="basis-[50%] flex flex-col ml-10">
                    <p className="font-bold text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, obcaecati?
                    </p>
                    <p className="my-2 text-neutral-600 text-lg">Brand Name{params.SingleProduct}</p>
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
            <div className="">
            <AliceCarousel responsive={responsive} mouseTracking items={tshirtcards} infinite={true} autoPlay={true} autoPlayInterval={2500} disableDotsControls
              renderPrevButton={() => (
                <button className="carousel-button prev left-0 absolute top-28">
                  <div className='bg-white p-3'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </button>
              )}
              renderNextButton={() => (
                <button className="carousel-button next right-0 absolute top-28">
                  <div className='bg-white p-3'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              )}
            />
          </div>
          <div className="mt-5">
            <AliceCarousel responsive={responsive} mouseTracking items={pantscards} infinite={true} autoPlay={true} autoPlayInterval={2500} disableDotsControls
              renderPrevButton={() => (
                <button className="carousel-button prev left-0 absolute top-28">
                  <div className='bg-white p-3'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </button>
              )}
              renderNextButton={() => (
                <button className="carousel-button next right-0 absolute top-28">
                  <div className='bg-white p-3'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              )}
            />
          </div>
            <Footer />
        </>

    )

    function Card(props: any) {
        return (
          <Link href={`/home/${props.id}`} >
            <div className='m-2 bg-white'>
              <div className="w-1/7 rounded overflow-hidden shadow-md">
                <img className="h-[34vh] w-full object-fit" src={props.url} alt="Product Image" />
                <div className="px-2 py-2">
                  <div className="font-bold text-md mb-1">Comming Soon</div>
                  <p className="text-gray-700 text-sm">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="px-5 py-2 flex justify-between">
                  <div className="font-bold mt-1 text-xl text-gray-600">₹00.00</div>
                  <div>
                    <button className="bg-blue-300 hover:bg-blue-500 text-xl mx-1 text-white  p-2 rounded-full">
                      <AiOutlineShoppingCart />
                    </button>
                    <button className="bg-blue-300 hover:bg-blue-500 text-xl mx-1 text-white  p-2 rounded-full">
                      <AiOutlineHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      }
}
