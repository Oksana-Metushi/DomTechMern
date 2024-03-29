import React from 'react'
import img from "../../../public/images/home/blog.jpg"
import Newsletter from '../../components/Newsletter'

const SingleBlog = () => {
    return (
        <div className="relative">
            <img src={img} class="w-full" />
            <div className="max-w-3xl mx-auto p-5 sm:p-10 md:p-16">
                <div
                    className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-white relative top-0 -mt-[40%] p-5 sm:p-10">
                        <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">	Scrum vs. SAFe: Which Agile framework is right for your team?</h1>

                        <p className="text-base leading-8 my-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 150s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
            <Newsletter/>
        </div>
    )
}

export default SingleBlog