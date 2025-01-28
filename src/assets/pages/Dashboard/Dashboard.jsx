import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import Form from "../../component/Form/Form";

export default function Dashboard() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        dateCreated: "",
        profilePicture: "",
    });
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                toast.error("Please log in first");
                navigate("/login");
                return;
            }

            try {
                // Modify the URL to match your backend route
                const response = await axios.get(
                    "https://renter2025.vercel.app/user/dashboard",
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                setUserData({
                    email: response.data.email,
                    dateCreated: new Date(response.data.dateCreated).toLocaleDateString(),
                    profilePicture: response.data.profilePicture,
                });
            } catch (error) {
                toast.error("Unauthorized access. Please log in.");
                localStorage.removeItem("token");
                navigate("/login");
            }
        };

        fetchDashboardData();
    }, [navigate]);

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        setProfilePic(file);
    };

    const handleUploadProfilePic = async () => {
        console.log(profilePic);
        if (!profilePic) {
            toast.info("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("image", profilePic);

        
        try {
            
            const token = localStorage.getItem("token");
            
            await toast.promise(
                (async () => {
                    // Upload ke ImgBB
                    const imgbbResponse = await axios.post(
                        "https://api.imgbb.com/1/upload?key=0ead1753d49a736c7a0f145d41e6870b",
                        formData,
                        { headers: { "Content-Type": "multipart/form-data" } }
                    );

                    if (imgbbResponse.data.success) {
                        const uploadedImageUrl = imgbbResponse.data.data.url;

                        // Update profile picture ke backend
                        await axios.post(
                            "https://renter2025.vercel.app/user/upload",
                            { imageUrl: uploadedImageUrl },
                            { headers: { Authorization: `Bearer ${token}` } }
                        );

                        // Update state lokal
                        setUserData((prev) => ({
                            ...prev,
                            profilePicture: uploadedImageUrl,
                        }));
                        setProfilePic(null); 
                    }
                })(),
                {
                    pending: "Uploading profile picture...",
                    success: "Profile picture updated successfully",
                    error: "Failed to upload profile picture",
                }
            );
        } catch (error) { 
            console.error(error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        toast.info("Logged out successfully");
    };

    return (
        <div className="w-full h-screen flex items-center m-auto">
            <div className="w-full h-[550px] px-20 py-12 max-w-screen-2xl m-auto flex items-center flex-row gap-2">
                <div className="w-[30%] h-full flex flex-col gap-2 p-5 justify-center border-2 border-blue-900/90 rounded-md">
                <div className="w-full h-full flex flex-col">
                    
                    <h2 className="text-2xl font-bold text-center">Dashboard</h2>
                    <div className="flex flex-col items-center">
                        <img
                            src={userData.profilePicture}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover my-4"
                        />
                        <div className="flex items-center justify-center gap-2">
                            <input
                                type="file"
                                onChange={handleProfilePicChange}
                                accept="image/*"
                                className="hidden"
                                id="profilePicInput"
                            />
                            <label
                                htmlFor="profilePicInput"
                                className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer flex items-center"
                            >
                                Choose Image
                            </label>
                            <button
                                onClick={handleUploadProfilePic}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Upload
                            </button>
                        </div>
                    </div>

                    {/* User Details */}
                    <div className="flex flex-col gap-2 mt-4">
                        <div>
                            <label className="block text-gray-700 font-bold ">Email</label>
                            <p className="text-gray-900 ">{userData.email}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">
                                Account Created
                            </label>
                            <p className="text-gray-900">{userData.dateCreated}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full h-8 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                    <ToastContainer 
                    position="top-center" 
                    autoClose={1000} 
                    limit={3} 
                    transition={Slide}/>
                </div>
                </div>
                <Form/>
            </div>
        </div>
    );
}
