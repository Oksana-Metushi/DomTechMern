import React from 'react'

const Banner = () => {
    return (
        <div class="relative flex items-center  h-screen overflow-hidden">
            <div className='section-container h-screen flex flex-col justify-center text-white space-y-5 z-20'>
                <span className='font-tek text-5xl text-slate-400 line-through decoration-slate-300 decoration-2'>
                    Dive into the new tech
                </span>
                <span className='text-slate-200 md:w-1/2 font-serif leading-loose'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quo veritatis ipsam, vero iste a fugiat doloremque. Modi, alias debitis aspernatur labore obcaecati fuga explicabo mollitia consequatur amet, id iusto!
                </span>
            </div>
            <video src='https://assets.mixkit.co/videos/preview/mixkit-black-phone-on-laptop-247-large.mp4' autoPlay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none" />
        </div>
    )
}

export default Banner