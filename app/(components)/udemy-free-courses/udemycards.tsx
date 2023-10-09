"use client"
import React from 'react'
import { Card, CardBody, Image, Badge } from "@nextui-org/react";
import Link from 'next/link';

function UdemyCard({param}:Object) {
  return (
<>
{
    param.map((data:Object, index:Int16Array)=> 
    
 
<Card as={Link} href={data.link} target='_blank' className="w-auto cursor-pointer hover:-translate-y-2 h-auto" key={index}>
                    <CardBody>
                        <Badge content={data.date} color="primary" size="sm" variant='shadow' placement='bottom-left'>
                            <Image 
                                alt="Card background"
                                className="rounded-xl p-auto"
                                src={data.img}
                                width={570}
                            />
                        </Badge>
                        <div>
                            <h1 className="text-large font-medium mt-2 leading-6 text-ellipsis">
                                {data.title}
                            </h1>
                        </div>
                    </CardBody>
                </Card>

)
}
                </>

    )
}

export default UdemyCard