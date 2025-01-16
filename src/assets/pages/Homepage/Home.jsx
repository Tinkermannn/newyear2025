import React from 'react';
import Landing from '../Homepage/hotelview2.jpg';

export default function Home() {
    return (
        <div
            className="w-screen h-[450px] bg-cover bg-center bg-no-repeat "
            style={{
                backgroundImage: `url(${Landing})`,
            }}
        >
            <div className='w-full h-full bg-gradient-to-r from-black/50 via-blue-200/10 to-black/50 items-center flex'>
                <div className='w-full h-[200px] py-10 px-20'>
                    <div className='w-[50%] h-full flex flex-col'>
                        <a className='font-bold text-white text-[2.5rem] break-words'>Temukan tempat pilihanmu di sini!</a>
                        <a className='font-normal text-white text-[1.5rem] break-words'>Cepat, mudah, dan pastinya murah!</a>
                    </div>
                </div>
            </div>
                <div className='w-screen h-10 top-0 mt-[-20px] flex items-center justify-center'>
                    <div className='h-full w-48 bg-white border-2 border-blue-700 rounded-md flex items-center justify-center'>
                        <p className='text-center font-medium text-blue-700'>Jelajahi sekarang!</p>
                    </div>
                </div>
        </div>
    );
}
