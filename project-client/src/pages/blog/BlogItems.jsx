import React, { useEffect, useState } from "react";
import img from "../../../public/images/home/shop.jpg"
import Newsletter from "../../components/Newsletter";
import BlogCard from "../../components/BlogCard";

const BlogItems = () => {
    const [blog, setBlog] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

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


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div>
            <div class="relative flex items-center h-screen overflow-hidden">
                <div className='section-container h-screen flex flex-col justify-center space-y-5 z-20 '>
                    <span className='font-tek text-5xl text-slate-400 line-through decoration-slate-300 decoration-2'>
                        Blog
                    </span>
                    <span className='text-slate-400 md:w-1/2 font-serif leading-loose'>
                        Latest news!
                    </span>
                </div>
                <img src={img} alt="" className="absolute z-10 w-auto h-auto" />
            </div>

            <div className="section-container">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 ">
                    {blog.map((item, index) => (
                        <BlogCard key={index} item={item} />
                    ))}
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default BlogItems;
