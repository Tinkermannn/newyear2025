import React from "react";
import Messi from "../Navbar/messi.jpg";
import { Facebook, Instagram, Linkedin, Mail, Map, MapPin, Phone, PhoneCall } from "react-feather";

export default function Footer() {
    return (
        <>
            <div className="w-full h-[350px] m-auto bg-gradient-to-t from-blue-600 via-blue-500/90 to-blue-400/90 shadow-md">
                <div className=" w-full h-full px-20 py-10 max-w-screen-2xl m-auto flex flex-row justify-between">
                    <div className="w-[45%] h-[full] flex flex-col gap-2">
                        <div className="w-full h-[45%] flex flex-row gap-2 items-center">
                            <img src={Messi} className="w-[30%] h-full" />
                            <div className="w-full h-full flex flex-col justify-between text-justify">
                                <p className="w-full text-white text text-2xl font-semibold">
                                    RENTER
                                </p>
                                <p className="w-full text-white text text-sm font-normal shadow-md">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col gap-2">
                            <p className="text-xl text-white font-semibold">Office</p>
                            <div className="h-[30%]">
                                <p className="text-sm text-white font-light text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-full flex flex-row gap-2 items-center">
                                    <Phone size={15} color="white"/>
                                    <p className="text-sm text-white font-light text-justify">08812345678</p>
                                </div>
                                <div className="w-full flex flex-row gap-2 items-center">
                                    <Mail size={15} color="white"/>
                                    <p className="text-sm text-white font-light text-justify">example@gmai.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-full flex flex-col gap-2">
                        <p className="text-white text-lg font-semibold">Follow Our Socials</p>
                        <div className="flex flex-row items-center gap-3 -ml-1">
                            <Facebook size={20} color="white"/>
                            <Linkedin size={20} color="white"/>
                            <Instagram size={20} color="white"/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex bg-gradient-to-br from-blue-600 to-blue-400/80 border-t-2 border-blue-600">
                    <div className="w-full h-full flex justify-center px-20 max-w-screen-2xl m-auto">
                        <p className="font-bold text-blue-200/90">© 2025. RENTER 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}
