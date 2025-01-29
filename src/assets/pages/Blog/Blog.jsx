import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Blog() {
  const { post_id } = useParams(); // Mengambil post_id dari URL
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      // Ubah URL untuk menggunakan path parameter post_id
      const response = await axios.get(
        `http://localhost:8000/user/blog/${post_id}`
      );
      setBlog(response.data);
    } catch (err) {
      console.error("Gagal mengambil data dari server", err);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString); // Membuat objek Date dari string tanggal
    return date.toLocaleDateString("en-GB", options); // Menggunakan locale Inggris dan format yang diinginkan
  };
  
  useEffect(() => {
    fetchBlog();
  }, [post_id]); // Menjalankan ulang fetchBlog jika post_id berubah

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="w-full h-screen flex items-center m-auto">
      <div className="w-full h-full max-w-screen-2xl px-20 py-10 flex flex-col justify-center">
        <div className="w-full h-[70%] flex gap-5">
          <div className="wh-full flex flex-1">
            <img
              src={blog.image}
              alt={blog.title}
              className=" shadow-black/80 shadow-2xl flex-1 flex"
            />
          </div>
          <div className="w-[40%] h-full flex">
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-row gap-5">
                <div className="w-[70%] flex flex-col gap-2">
                  <h2 className="text-black text-2xl font-semibold">
                    {blog.title}
                  </h2>
                  <h2 className="text-black/80 text-lg font-normal">
                    IDR {blog.price}
                  </h2>
                </div>
                <div className="flex w-[30%] justify-center items-end text-right flex-col">
                  <p className="text-black text-base font-light">
                    Valid since
                  </p>
                  <p className="text-black text-base font-light">
                    {formatDate(blog.time)}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <h2 className="text-black font-bold">Description</h2>
                <div className="w-full">
                  <p className="text-black text-sm">{blog.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
