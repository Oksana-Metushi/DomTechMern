import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import BlogCard from '../../components/BlogCard';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    const slider = React.useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/blog");
                const data = await response.json();
                setBlog(data);
                setFilteredItems(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='bg-slate-200'>
            <div className='section-container p-[10%] grid md:grid-cols-2 grid-cols-1 items-center'>
                <div>
                    <h1 className='font-tek text-3xl text-slate-400 mb-6'>Blog</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam expedita veritatis qui excepturi
                        aut sequi cum labore fugiat quia? Culpa voluptas, numquam maiores voluptates recusandae inventore id ipsum at libero.</p>
                </div>
                <div>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper w-[55%] md:h-[60%] md:mt-0 mt-[10%]"
                    >
                        {
                            blog.map((item, index) => (
                                <SwiperSlide>
                                    <BlogCard key={index} item={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Blog