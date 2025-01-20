import { useState } from "react";
import Logo from "../Navbar/messi.jpg";
import {useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();

    const listStyle =
        "text-white font-medium w-[25%] h-full flex items-center justify-center rounded-md transition-all delay-75 cursor-pointer hover:bg-blue-400 hover:scale-105 active:bg-blue-700 focus:ring-white";

    const menu = [
        { text: "Rent", path: "/" },
        { text: "Check", path: "/" },
        { text: "About", path: "/" },
    ];

    return (
        <>
            <div className="fixed top-0 w-screen flex justify-center items-center px-20 py-5 z-10">
                <div className="bg-gradient-to-br bg from-blue-800 to-blue-400 px-5 py-3 w-screen justify-between items-center flex rounded-md drop-shadow-lg">
                    <div className="w-[10%]">
                        <img src={Logo} className="h-10" />
                    </div>
                    <div className="w-[40%] h-10 flex select-none">
                        <ul className=" list-none w-full flex justify-start cursor-pointer">
                            {
                                menu.map((x) => {
                                    return (
                                        <li key={x.text} className={listStyle}>
                                            <a href={x.path} >
                                                <span>{x.text}</span>
                                            </a>
                                        </li>
                                    );
                            })}
                        </ul>
                    </div>
                    <div className="w-[50%] h-10 py-1 flex gap-3 justify-end">
                        <a className="font-bold text-white items-center flex">
                            Yuk Pesan Sekarang!
                        </a>
                        <div className="w-[15%] h-full ">
                            <button className="bg-blue-400 hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 w-full h-full text-blue-50 font-semibold rounded-[5px]
                            "
                            onClick={()=> navigate('/register')}>
                                Register
                            </button>
                        </div>
                        <div className="w-[15%] h-full">
                            <button className="bg-blue-400 hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 w-full h-full text-blue-50 font-semibold rounded-[5px]">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
