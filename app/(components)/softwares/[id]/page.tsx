'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import './style.css'
import moment from 'moment';
import Loading from '@/app/loading';
import Howto from './Howto';
import Ads from '../../(more)/Ads/Ads';
export default function page({ params }: { params: any }) {



    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/software/coupon?id=${params.id}`);
                const newData = await response.json();
                setData(newData.coupon);
            } catch (error) {
                throw new Error("error")
            }
        };
        fetchData();
    }, []);

    console.log(data)
    return (
        <>
            {data ?

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 py-4 lg:w-4/5 w-full justify-center mx-auto">
                    {
                        // Column 1 Views
                    }

                    <div className="lg:col-span-3 lg:p-5 p-1  ">
                        <section>


                            <div className=" flex md:grid flex-col items-center px-5  mx-auto max-w-7xl sm:px-6 lg:px-8">
                                <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">

                                    <div className="w-full mx-auto">

                                        <h1 className='lg:text-5xl text-4xl font-bold'>{data.title}</h1>
                                        <div className="flex items-center justify-between">
                                            <div className=" items-center max-w-7xl md:flex md:items-center md:justify-between ">
                                                <p>posted {data.posted_on}</p>

                                            </div>

                                            <div className='flex items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye mr-2" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                                <span className='text-sm text-gray-900'>{data.views} Views</span>
                                            </div>

                                        </div>
                                        <div className='flex justify-between items-center'>











                                        </div>
                                        <figure>
                                            <img src={data.image} className='h-auto object-contain max-h-72 mx-auto py-1'

                                                alt={data.title} loading='lazy' />
                                            <figcaption>{data.title}</figcaption>
                                        </figure>


                                        <h2>About Software</h2>
                                        <p>
                                            {data.description}              </p>
                                        <h2>How to Avail? </h2>

                                        <div className='p-4 datalist bg-blue-50 rounded font-semibold' dangerouslySetInnerHTML={{ __html: data.lists }} />
                                    </div>
<Howto/>

                                    <hr className='mt-10 mb-3' />
                                    <div className="flex items-center justify-between">
                                        <div className=" items-center max-w-7xl md:flex md:items-center md:justify-between ">
                                            <div className="flex items-center justify-center mb-8 space-x-2 md:order-last md:mb-0">
                                                <p>Share: </p>
                                                <Link href="/" target='blank' className="text-pink-400 hover:text-pink-500">
                                                    <span className="sr-only">Instagram</span>
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </Link>

                                                <Link href="/" target='blank' className="text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">GitHub</span>
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </Link>
                                                <Link href="/" target='blank' className="text-blue-800 hover:text-blue-900">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='flex items-center'>

                                            <span className='text-sm text-gray-900'>{data.category}</span>
                                        </div>

                                    </div>

                                </div>

                            </div>



                        </section>











                    </div>


                    <div className="col-span-2 border-l-2 align-center p-5 justify-center ">
<Ads/>
                    </div>

                </div>
                :
                <><Loading/></>}

        </>
    )
}


