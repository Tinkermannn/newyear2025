import React from 'react'
import RenterPics from './renter3.jpg'

export default function Banner() {
  return (
    <div className='w-full h-[400px] bg-white flex m-auto '>
        <div className='w-full h-full px-20 py-10 flex'>
            <div className='w-full h-full flex flex-row overflow-hidden'>
                <div className='w-[55%] h-full bg-sky-300 flex rounded-r-full flex-col py-5 pl-7 z-10 shadow-blue-600/90 shadow-2xl'>
                    <div className='w-[75%] h-full'>
                        <div className='w-full h-fit flex flex-col hei'>
                            <p className='text-white text-5xl font-normal'>Ayo Gabung</p>
                            <p className='text-white text-7xl font-bold'>Sekarang.</p>
                            <p className='text-white text-xl font-light mt-5'>Mulai bisnis dan sewakan properti Anda dengan mudah, cepat, dan pastinya profit. <b className='font-extrabold'>RENTERin</b> Aja!</p>
                            <button className='w-[200px] h-10 bg-blue-600 rounded-md mt-2'>
                                <p className='text-white text-md font-semibold'>
                                    Bergabung Sekarang
                                </p>
                            </button>
                        </div>
                    </div>  
                </div>
                <div className='w-[45%] h-full flex justify-end right-0 z-0'>
                        <img src={RenterPics} className='relative scale-[165%] mr-5'/>
                </div>
            </div>
        </div>
    </div>
  )
}

