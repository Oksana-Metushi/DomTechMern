import React from 'react'
import img from "../../../public/images/home/brands.jpg"

const brandlist = [
    { id: 1, title: "Apple", des: "Delight your guests with our flavors and  presentation", img: img, desc: "Designed to be loved." },
    { id: 2, title: "Samsung", des: "We deliver your order promptly to your door", img: img, desc: "Epic, just like that." },
]

const Brands = () => {
    return (
        <div className='section-container my-[10%]'>
            <h1 className='font-tek text-3xl text-slate-400 mb-10 '>Brands</h1>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 md:justify-between '>
            {
                brandlist.map((brand) => (
                    <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={brand.img} alt="phones" /></figure>
                    <div className="card-body">
                        <h2 className="font-tek text-5xl text-slate-400 my-10">{brand.title}</h2>
                        <p className='text-slate-300 font-serif leading-loose text-3xl text-right'>{brand.desc}</p>
                    </div>
                </div>
                ))
            }
           
        </div>
        </div>

    )
}

export default Brands