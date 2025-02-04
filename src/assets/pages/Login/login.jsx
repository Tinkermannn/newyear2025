import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import { Slide, ToastContainer, toast } from "react-toastify";
import LoginPics from "../../pages/Register/login.png";
import BG from "../../component/Product/batik.png";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); // State untuk password input

    const [email, setEmail] = useState(""); // State untuk email
    const [password, setPassword] = useState(""); // State untuk password
    const [error, setError] = useState(""); // State untuk menyimpan pesan error

    const quote = ["EASIER", "BETTER", "SIMPLER"];

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await toast.promise(
                axios.post("https://renter-be.vercel.app/user/login", 
                {
                    email, 
                    password 
                }),
                {
                    pending: "Logging in...",
                    success: "Login successfull",
                }
            );
            localStorage.setItem("token", response.data.token);
            await new Promise((resolve) => setTimeout(resolve, 500));
            
            // Redirect ke dashboard
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    };

    return (
        <>
            <div className="w-full h-screen m-auto flex">
                <div className="w-full h-[500px] px-20 pt-[50px] flex items-center justify-start m-auto max-w-screen-2xl flex-row gap-0 ">
                    <div className="w-[40%] h-full rounded-l-xl border-blue-800 border-solid border-2 shadow-xl px-5 py-5 text-left ">
                        <div className="w-full h-[15%] flex items-center flex-col">
                            <p className="w-full font-semibold text-blue-800 text-2xl">
                                Sign In
                            </p>
                            <p className="w-full font-normal text-blue-800 text-sm">
                                You can crate an account to access our services.
                            </p>
                        </div>
                        <form
                            className="w-full h-[60%] py-5 grid grid-rows-4 gap-20 "
                            onSubmit={handleLogin}
                        >
                            <div>
                                <label className="font-semibold text-blue-700 ">Email</label>
                                <input
                                    className="w-full h-10 border-solid border-blue-400 focus:border-blue-700 outline-none border-2 rounded-md py-2 px-2 mt-2"
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="font-semibold text-blue-700 ">Password</label>
                                <div className="w-full flex flex-row justify-end">
                                    <input
                                        className="w-[100%] h-10 border-solid border-blue-400 border-2 rounded-md py-2 px-2 mt-2 focus:border-blue-700 outline-none"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="passwordInput"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div
                                        className="w-5 h-10 absolute mt-2 flex items-center mr-2 cursor-pointer"
                                        onClick={() => setShowPassword((prev) => !prev)} // CALLBACK
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                            </div>
                            <div className="W-10 h-12 flex items-center justify-center mt-4">
                                <button
                                    className="w-full h-10 flex items-center bg-gradient-to-br from-blue-700 to-blue-500 shadow-md rounded-md justify-center"
                                    type="submit"
                                >
                                    <p className="text-white font-medium ">Sign In</p>
                                </button>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={2000}
                                    transition={Slide}
                                    limit={3}
                                />
                            </div>
                            <div className="w-full h-[60px] flex items-center flex-col gap-2">
                                <p className="text-center font-bold">OR</p>
                                <div className="w-full h-7 bg-blue-400"></div>
                            </div>
                            {error && (
                                <div className="text-blue-600-500 text-sm">{error}</div>
                            )}
                        </form>
                    </div>
                    <div
                        className="w-[60%] h-full flex flex-col bg-cover rounded-r-xl "
                        style={{
                            backgroundImage: `url(${BG})`,
                        }}
                    >
                        <div className="w-full h-full bg-gradient-to-r from-white/70 to-white/60">
                            <div className="w-full h-[20%] flex items-center justify-center flex-col gap-2">
                                <p className="text-4xl font-semibold text-blue-900">Sign In</p>
                                <div className="flex flex-row items-center gap-1">
                                    <p className="text-3xl font-semibold">Make your life </p>
                                    {/* {quote.map((key,i) => 
                                        <p className="text-3xl font-extrabold w-25">{quote}</p>
                                    )} */}
                                </div>
                            </div>
                            <div className="w-full h-[80%] flex items-center justify-center">
                                <img
                                    src={LoginPics}
                                    className="scale-[60%] hover:scale-75  transition-transform duration-100 "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
