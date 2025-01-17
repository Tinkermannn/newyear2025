import React from "react";
import Media from "../Product/index";
import Card from "./Card";

export default function Product() {
    return (
        <>
            <div className="w-full h-[1000px] flex m-auto py-10 px-20">
                <div className="w-full h-full max-w-[1000px] m-auto">
                    <div className="grid grid-cols-3 gap-5">
                        {Media.map((item, index) => (
                            <Card 
                                key={index} 
                                CardData={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
