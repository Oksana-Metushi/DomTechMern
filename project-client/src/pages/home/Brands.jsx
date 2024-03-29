import React from 'react'
import img from "../../../public/images/home/brands.jpg"

const brandlist = [
    { id: 1, title: "Apple", des: "Delight your guests with our flavors and  presentation", img: img },
    { id: 2, title: "Samsung", des: "We deliver your order promptly to your door", img: img },
]

const Brands = () => {
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 section-container md:justify-between my-[10%]'>
            {
                brandlist.map((brand) => (
                    <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={brand.img} alt="phones" /></figure>
                    <div className="card-body">
                        <h2 className="font-tek text-5xl text-slate-400 mt-10">{brand.title}</h2>
                    </div>
                </div>
                ))
            }
           
        </div>

    )
}

export default Brands