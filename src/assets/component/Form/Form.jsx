import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import { convert } from "html-to-text";
import axios from "axios";
import { toast } from "react-toastify";

export default function Form() {
    const [fileName, setFileName] = useState(""); // Nama file
    const [profilePic, setProfilePic] = useState(null); // File gambar
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
    });

    // Fungsi untuk menangani perubahan file
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setProfilePic(file);
        } else {
            setFileName("");
            setProfilePic(null);
        }
    };

    // Fungsi untuk menangani perubahan input teks
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Fungsi untuk mengirimkan post
    const handlePost = async (e) => {
        e.preventDefault();

        if (!profilePic || !formData.title || !formData.price || !formData.description) {
            toast.error("Semua field harus diisi");
            return;
        }

        const token = localStorage.getItem("token");
        const uploadFormData = new FormData();
        uploadFormData.append("image", profilePic);

        try {
            // Upload gambar ke ImgBB
            await toast.promise(
                (async () => {
            const imgbbResponse = await axios.post(
                "https://api.imgbb.com/1/upload?key=0ead1753d49a736c7a0f145d41e6870b",
                uploadFormData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            if (imgbbResponse.data.success) {
                const uploadedImageUrl = imgbbResponse.data.data.url;

                // Sanitasi dan konversi deskripsi
                const sanitizedDescription = DOMPurify.sanitize(formData.description);
                const plainTextDescription = convert(sanitizedDescription, {
                    wordwrap: false, // Nonaktifkan pembatasan panjang baris
                });

                // Simpan post ke backend
                await axios.post(
                    "https://renter-be.vercel.app/user/upload-post",
                    {
                        title: formData.title,
                        price: formData.price,
                        image: uploadedImageUrl,
                        description: plainTextDescription, // Kirim deskripsi yang sudah bersih
                    },
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                setFileName("");
                setProfilePic(null);
                setFormData({ title: "", price: "", description: "" });
            }

        })(),
        {
            pending: "Sedang memproses...",
            success: "Post berhasil ditambahkan",
            error: "Gagal menambahkan post",
        }
    ); 
        } catch (error) {
            console.error("Error saat mengunggah post:", error.message);
        }
    };

    return (
        <div className="w-[70%] h-full flex flex-col gap-2 p-5 justify-center border-2 border-blue-900/90 rounded-md bg-gray-200/30">
            <p className="text-2xl font-semibold">Create your post</p>

            <form className="w-full h-full flex flex-col gap-5" onSubmit={handlePost}>
                <div className="flex flex-row gap-5">
                    <div className="w-[50%] h-full flex flex-col">
                        <label className="text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter your title here"
                            className="px-3 py-2 rounded-lg"
                        />
                    </div>
                    <div className="w-[50%] h-full flex flex-col">
                        <label className="text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            placeholder="20000"
                            min={1000}
                            className="px-3 py-2 rounded-lg"
                        />
                    </div>
                </div>

                <div className="flex items-center flex-row gap-5">
                    <label
                        htmlFor="blogPics"
                        className="w-[49%] h-14 flex items-center justify-center bg-blue-600 text-white text-lg hover:bg-blue-700 rounded-lg cursor-pointer"
                    >
                        Choose Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="blogPics"
                        onChange={handleProfilePicChange}
                    />
                    <p className="text-gray-700">
                        Selected file: {fileName || "None"}
                    </p>
                </div>

                <div className="flex min-h-20 max-h-32">
                    <ReactQuill
                        className="w-full bg-white max-h-32 mb-5 mt-2 overflow-scroll"
                        theme="snow"
                        value={formData.description}
                        onChange={(value) =>
                            setFormData((prev) => ({ ...prev, description: value }))
                        }
                    />
                </div>

                <div className="flex items-center justify-center">
                    <button className="w-28 h-12 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 rounded-md">
                        <p className="text-lg text-white">Submit</p>
                    </button>
                </div>
            </form>
        </div>
    );
}
