import React from 'react'

const Companies = () => {
    const companies = [{
        name: "Iobit",
        url: './iobit.png'
    },

    {
        name: "easyus",
        url: './easyus.png'
    },
    {
        name: "wps",
        url: './wps.jpeg'
    },
    {
        name: "anymp",
        url: './anymp.jpg'
    },
    {
        name: "imyfone",
        url: './imyfone.png'
    },
    {
        name: "Donemax",
        url: './donemax.png'
    },
    {
        name: "imobi",
        url: './imobile.png'
    },
    {
        name: "imobi",
        url: './unknown.png'
    },
    {
        name: "tensorshare",
        url: './tensorshare.png'
    },

    ]
  return (
    <div className="bg-white lg:w-4/5 mx-auto p-5 rounded-lg">
                <h2 className="text-center font-semibold ">Softwares from</h2>

                <div class="text-center">
                    <div class="grid grid-cols-4 gap-8 mx-auto  lg:grid-cols-7">
                        {companies.map((e, index) =>
                            <div key={index} className='flex  item-center justify-center align-middle hover:animate-appearance-in cursor-pointer'>
                                <img src={e.url} alt="" className='object-scale-down' />
                            </div>
                        )}
                    </div>
                </div>
    </div>
  )
}

export default Companies
