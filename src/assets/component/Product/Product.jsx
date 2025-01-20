import React from "react";
import Media from "../Product/index";
import Card from "./Card";
import BG from "../Product/batik.png";

export default function Product() {
    return (
        <>
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
                            {Media.map((item, index) => (
                                <Card key={index} CardData={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
