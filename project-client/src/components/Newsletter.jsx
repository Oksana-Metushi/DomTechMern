import React from 'react'

const Newsletter = () => {
    return (
        <div className='section-container my-[6%] text-center'>
            <h1 className='text-4xl text-slate-400 font-tek'>Newsletter Signup</h1>
            <label className="input input-bordered flex items-center gap-2 mx-auto my-6 w-80">
                <input type="text" className="grow" placeholder="Email" />
                <button className=" text-blue hover:text-slate-300">Subscribe</button>
            </label>
            <p>Never miss our great deals. Huge sale every week!</p>
        </div>
    )
}

export default Newsletter