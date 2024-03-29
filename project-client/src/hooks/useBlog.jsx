import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useBlog = () => {
    const axiosPublic = useAxiosPublic();

    const {data: blog = [], isPending: loading, refetch} = useQuery({
        queryKey: ['blog'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/blog');
            console.log(res)
            return res.data;
        }
    })
  
    return [blog, loading, refetch]
}

export default useBlog