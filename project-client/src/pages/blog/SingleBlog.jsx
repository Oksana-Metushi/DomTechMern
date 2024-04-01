import React, { useEffect, useState } from 'react';
import Newsletter from '../../components/Newsletter';
import { useParams, useNavigate } from 'react-router-dom';

const SingleBlog = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/blog/${id}`, {
                    method: 'GET'
                });
                const data = await response.json();
                setItem(data); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="relative">
            <img src={item.image} className="w-full" />
            <div className="max-w-3xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-white relative top-0 -mt-[40%] p-5 sm:p-10">
                        <h1 className="text-gray-900 font-bold text-3xl mb-2">{item.name}</h1>
                        <p className="text-base leading-8 my-5">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default SingleBlog;
