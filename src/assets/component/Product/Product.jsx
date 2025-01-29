import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import BG from "../Product/batik.png";

export default function Product() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async (props) => {
        try {
            const response = await axios.get("http://localhost:8000/user/posts/");
            setPosts(response.data.posts);
        } catch (err) {
            setError("Gagal mengambil data dari server");
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div
            className="w-full h-[1000px] m-auto bg-cover bg-center"
            style={{
                backgroundImage: `url(${BG})`,
            }}
        >
            <div className="w-full h-full bg-white/85 flex justify-center items-center">
                <div className="w-full h-[85%] px-20 max-w-screen-2xl">
                    <div className="w-full h-10 mb-10">
                        <p className="text-blue-500 font-semibold text-4xl">
                            Jangan sampai kelewatan!
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {posts.map((item, index) => (
                            <Card key={index} CardData={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
