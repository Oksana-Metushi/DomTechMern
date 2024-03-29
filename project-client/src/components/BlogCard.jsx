import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
    const { name, image, desc, _id } = item;

    return (
        <div to={`/blog/${item._id}`} className="card rounded-lg bg-base-100 shadow-xl">

            <Link to={`/blog/${item._id}`}>
                <figure>
                    <img src={item.image} alt="Blog" className="h-48 w-full" />
                </figure>
            </Link>
            <div className="p-4">
                <Link to={`/blog/${item._id}`}><h2 className="card-title">{item.name}!</h2></Link>
                <p>{item.details}</p>
            </div>
            <div className="card-actions p-4">
                <Link to="/single-blog"><button className="btn bg-slate-400 text-white">Read More </button></Link>
            </div>
        </div>
    );
};

export default BlogCard;
