import React from 'react'
import img from "../../../public/images/home/about.png"

const OurStory = () => {
    return (
        <div className='section-container flex md:flex-row flex-col gap-2 justify-between items-center my-[10%]'>
            <div>
                <div className='font-tek text-3xl text-slate-400 mb-6'>
                    Our Story
                </div>
                <div className='text-slate-500 font-serif'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quo veritatis ipsam, vero iste a fugiat doloremque. Modi, alias debitis aspernatur labore obcaecati fuga explicabo mollitia consequatur amet, id iusto!
                </div>
            </div>
            <div className='w-full'>
                <img src={img} alt="" className='w-full' />
            </div>

        </div>
    )
}

export default OurStory