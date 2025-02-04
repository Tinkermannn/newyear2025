import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../Navbar/messi.jpg";

export default function NavbarOther() {
    const navigate = useNavigate();


    const listStyle =
        "text-white text-lg font-medium w-[15%] h-full flex items-center justify-center rounded-md transition-all delay-75 cursor-pointer hover:bg-blue-400 hover:scale-105 active:bg-blue-700 focus:ring-white";

    const menu = [
        { text: "Rent", path: "/" },
        { text: "Check", path: "/" },
        { text: "About", path: "/" },
    ];

    return (
        <div
            className="fixed top-0 w-full flex justify-center items-center px-20 py-5 z-30"
        >
            <div className="bg-gradient-to-br from-blue-800 to-blue-400 px-5 py-3 w-screen flex justify-between items-center rounded-md drop-shadow-lg">
                <div className="w-[10%]">
                    <img src={Logo} className="h-10 cursor-pointer" onClick={() => navigate("/")} />
                </div>
                <div className="w-[40%] h-10 flex select-none">
                    <ul className="list-none w-full flex justify-start cursor-pointer">
                        {menu.map((x) => (
                            <li key={x.text} className={listStyle}>
                                <a href={x.path}>
                                    <span>{x.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[50%] h-10 py-1 flex gap-3 justify-end">
                    <a className="font-bold text-white items-center flex">Yuk Pesan Sekarang!</a>
                    <div className="w-[15%] h-full">
                        <button
                            className="bg-blue-400 hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 w-full h-full text-blue-50 font-semibold rounded-[5px]"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </button>
                    </div>
                    <div className="w-[15%] h-full">
                        <button
                            className="bg-blue-400 hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 w-full h-full text-blue-50 font-semibold rounded-[5px]"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
