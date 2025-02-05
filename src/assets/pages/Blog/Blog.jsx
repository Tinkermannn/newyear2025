import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../component/Loading/Loading";

export default function Blog() {
  const { post_id } = useParams(); // Mengambil post_id dari URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `https://renter-be.vercel.app/user/blog/${post_id}`
      );
      setBlog(response.data);
    } catch (err) {
      console.error("Gagal mengambil data dari server", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  useEffect(() => {
    fetchBlog();
  }, [post_id]);

  if (loading) return <Loading />;

  return (
    <div className="w-full h-screen flex ">
      <div className="w-full h-full flex items-center justify-center px-20 pt-10 max-w-screen-2xl m-auto">
      <div className="w-full h-[80%]  bg-white shadow-xl overflow-hidden ">
        <div className="relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <h2 className="text-white text-2xl font-semibold">{blog.title}</h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-gray-800 text-3xl font-bold">{blog.title}</h2>
            <span className="text-gray-600 text-lg font-semibold">
            IDR {parseFloat(blog.price).toLocaleString('id-ID')}

            </span>
          </div>

          <div className="flex justify-between items-center text-gray-500 text-sm">
            <p>Valid since: <span className="font-medium">{formatDate(blog.time)}</span></p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{blog.desc}</p>
          </div>
        </div>
      </div>
      </div>      
    </div>
  );
}
