import React from 'react'
import { SlHome } from "react-icons/sl";
import { BsSend } from "react-icons/bs";
import { SlShield } from "react-icons/sl";
import { SlRocket } from "react-icons/sl";

const servicelist = [
    { id: 1, title: "Home Shipping", des: "Free for all oder", icon: <SlHome size={40} /> },
    { id: 2, title: "100% Refund", des: "Cash Back", icon: <BsSend size={40} /> },
    { id: 3, title: "Clients Support", des: "Fast Service ", icon: <SlShield size={40} /> },
    { id: 4, title: "Fast Delivery", des: "Best Service", icon: <SlRocket size={40} /> },
]

const Services = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 ">

            <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
                {
                    servicelist.map((service, i) => (
                        <div key={i} className='card-body flex flex-row justify-evenly shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center hover:-translate-y-4 transition-all duration-300 z-10 items-center'>
                            <div className='text-blue'>{service.icon}</div>
                            <div>
                                <h2 className="font-semibold font-serif">{service.title}</h2>
                                <p className='font-tek'>{service.des}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services