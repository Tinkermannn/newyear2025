import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import LoginPics from './login.png'
import BG from '../../component/Product/batik.png'
export default function Register() {
    const [showPassword, setShowPassword] = useState(false); // State untuk password input
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State untuk confirm input

    const quote =[
        "EASIER",
        "BETTER",
        "SIMPLER",
    ];

    return (
        <>
            <div className="w-screen h-screen m-auto flex items-center">
                <div className="w-full h-[570px] px-20 pt-[50px] flex items-center justify-start m-auto max-w-screen-2xl flex-row gap-0">
                    <div className="w-[40%] h-full rounded-l-xl border-blue-800 border-solid border-2 shadow-xl px-5 py-5 text-left">
                        <div className="w-full h-[15%] flex items-center flex-col">
                            <p className="w-full font-semibold text-blue-800 text-2xl">
                                Sign Up
                            </p>
                            <p className="w-full font-normal text-blue-800 text-sm">
                                You can crate an account to access our services.
                            </p>
                        </div>
                        <form className="w-full h-[60%] py-5 grid grid-rows-4 gap-20">
                            <div>
                                <label className="font-semibold text-blue-700 ">Email</label>
                                <input
                                    className="w-full h-10 border-solid border-blue-400 focus:border-blue-700 outline-none border-2 rounded-md py-2 px-2 mt-2"
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
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
                                    />
                                    <div className="w-5 h-10 absolute mt-2 flex items-center mr-2 cursor-pointer"
                                        onClick={() => setShowPassword((prev) => !prev)} // CALLBACK
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="font-semibold text-blue-700 ">Password</label>
                                <div className="w-full flex flex-row justify-end">
                                    <input
                                        className="w-[100%] h-10 border-solid border-blue-400 border-2 rounded-md py-2 px-2 mt-2 focus:border-blue-700 outline-none"
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="passwordConfirm"
                                        id="ConfirmInput"
                                        placeholder="Re-enter your password"
                                    />
                                    <div className="w-5 h-10 absolute mt-2 flex items-center mr-2 cursor-pointer"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                            </div>
                            <div className="W-10 h-12 flex items-center justify-center mt-4">
                                <button className="w-full h-10 flex items-center bg-gradient-to-br from-blue-700 to-blue-500 shadow-md rounded-md justify-center"
                                    type="submit"
                                >
                                    <p className="text-white font-medium ">Sign Up</p>
                                </button>
                            </div>
                            <div className="w-full h-[60px] flex items-center flex-col gap-2">
                                <p className="text-center font-bold">OR</p>
                                <div className="w-full h-7 bg-blue-400">

                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-[60%] h-full flex flex-col bg-cover rounded-r-xl"
                        style={{
                            backgroundImage: `url(${BG})`,
                        }}
                    >
                        <div className="w-full h-full bg-gradient-to-r from-white/70 to-white/60">
                            <div className="w-full h-[20%] flex items-center justify-center flex-col gap-2">
                                <p className="text-4xl font-semibold text-blue-900">Sign Up</p>
                                <div className="flex flex-row items-center gap-1">
                                    <p className="text-3xl font-semibold">Make your life </p>
                                    {/* {quote.map((key,i) => 
                                        <p className="text-3xl font-extrabold w-25">{quote}</p>
                                    )} */}
                                </div>
                            </div>
                            <div className="w-full h-[80%] flex items-center justify-center">
                                <img src={LoginPics} className="scale-75 hover:scale-100 transition-transform duration-100 " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
