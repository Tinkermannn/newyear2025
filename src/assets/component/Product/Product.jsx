import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";

export default function Product() {
    const [posts, setPosts] = useState([]); // Data semua produk
    const [error, setError] = useState(""); // Handle error
    const [itemOffset, setItemOffset] = useState(0); // Offset data
    const itemsPerPage = 6; // Jumlah item per halaman

    // Fetch data dari API
    const fetchPosts = async () => {
        try {
            const response = await axios.get("https://renter-be.vercel.app/user/posts/");
            setPosts(response.data.posts);
        } catch (err) {
            setError("Gagal mengambil data dari server");
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // Menghitung data yang ditampilkan berdasarkan halaman
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = posts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(posts.length / itemsPerPage);

    // Handle perubahan halaman
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % posts.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="w-full h-auto m-auto bg-cover bg-center">
            <div className="w-full h-full bg-white/85 flex justify-center items-center py-10">
                <div className="w-full max-w-screen-2xl px-20">
                    {/* Animasi judul */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-10 mb-10 text-center"
                    >
                        <p className="text-blue-500 font-semibold text-4xl">
                            Jangan sampai kelewatan!
                        </p>
                    </motion.div>

                    {/* Grid Card dengan Animasi */}
                    <motion.div
                        className="grid grid-cols-3 gap-5"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        {currentItems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                            >
                                <Card CardData={item} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="flex justify-center mt-10">
                        <ReactPaginate
                            previousLabel={"Back"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={"flex space-x-2"}
                            pageClassName={"px-3 py-2 border rounded-lg cursor-pointer"}
                            activeClassName={"bg-blue-500 text-white"}
                            previousClassName={"px-3 py-2 border rounded-lg cursor-pointer"}
                            nextClassName={"px-3 py-2 border rounded-lg cursor-pointer"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
