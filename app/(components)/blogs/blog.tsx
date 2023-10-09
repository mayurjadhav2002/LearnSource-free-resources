'use client'
import Loading from "@/app/loading";
import { Card, CardBody, Avatar, Image } from "@nextui-org/react";
import Link from "next/link";
import React from 'react'

function Blog({data}) {
    if (!data) return <div className='text-center relative h-72'><Loading /></div>

    return (
        <>
        <div className="p-2">


        {data.map((data: { _id: any; written_by: { image: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; short_bio: any; }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: Nu)=> 
            <Card  key={index} as={Link} href={`blogs/${data._id}`}
                className="border-none my-5 mx-auto dark:bg-default-100/50 max-w-3xl dark:bg-gray-200"
                shadow="sm">
                <CardBody>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-1 items-center ">
                        <div className="col-span-4">
                            <div className="flex gap-2">
                                <Avatar src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/avatar/${data.written_by.image}`} />
                                <div className="flex flex-col items-start justify-center">
                                    <span className="text-small font-semibold leading-none text-default-600">{data.written_by.name}</span>
                                    <span className="text-small tracking-tight text-default-400">{data.written_by.short_bio || 'user'}</span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <h1 className="text-xl font-bold leading-6">{data.title}</h1>
                                <img src="https://img-c.udemycdn.com/course/240x135/4789870_53df_2.jpg"
                                 className="object-cover mx-auto my-3 w-full  rounded-md lg:hidden"
                            />
                                <p className="text-[15px] leading-5   line-clamp-3 mt-1">{data.description}</p>
                            </div>
                        </div>
                        <div className="col-span-3 mx-auto lg:mt-0 mt-4 lg:col-span-2">
                            <Image src="https://img-c.udemycdn.com/course/240x135/4789870_53df_2.jpg"
                            className="object-cover mx-auto hidden lg:block xl:block "
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>

)}
            
                                 </div>
        </>)
}

export default Blog