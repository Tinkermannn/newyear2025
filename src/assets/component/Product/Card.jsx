    import React from "react"


    export default function Card(props) {
        let cardData = props.CardData;
        return (
            <div className="bg-white shadow-md overflow-hidden rounded-xl">
                <div className="flex flex-col w-full">
                    <img src={cardData.link} alt="" />
                    <div className="p-2">
                        <h2 className="mt-1 text-xl text-left">{cardData.title}</h2>
                        <p className="text-sm text-left opacity-75">{cardData.desc}</p>
                    </div>
                </div>
            </div>
        )
    }