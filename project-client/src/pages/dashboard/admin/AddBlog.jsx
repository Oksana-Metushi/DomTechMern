import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const hostingImg = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (hostingImg.data.success) {
      const blogItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          desc: data.desc,
          image: hostingImg.data.data.display_url
      }
      
      const blogRes = await axiosSecure.post('/blog', blogItem);
      console.log(blogRes)
      if(blogRes.status === 200){
          reset();
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} is added to the blog.`,
              showConfirmButton: false,
              timer: 1500
            });
      }
  }

  };

  return (
    <div className="w-full md:w-[870px] mx-auto px-4">
      <h2 className="text-2xl font-semibold my-4">
        Upload A New <span className="text-slate-400">Blog Item</span>
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Description Name*</span>
            </label>
            <input
              type="text"
              placeholder="Description Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description Details</span>
            </label>
            <textarea
              {...register("desc")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn bg-slate-200 text-white px-6">
            Add Item 
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
