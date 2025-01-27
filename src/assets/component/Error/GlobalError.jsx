import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function GlobalError() {
    const navigate = useNavigate();

  return (
    <div className='w-full h-screen flex items-center '>
        <div className='w-full h-full flex items-center justify-center px-20 py-10 flex-col '>
            <p className='text-center text-[15rem] font-extrabold bg-clip-text text-transparent'
            style={{
                backgroundImage: 'url("https://img.freepik.com/free-photo/space-galaxy-background_53876-93121.jpg")',
            }}
            >Oops!</p>
            <p className='text-center text-black text-[1.5rem] font-normal'>404 - Halaman Tidak Ditemukan</p>
            <p className='text-center text-black text-[1rem] font-light '>Halaman yang Anda cari tidak ada.</p>
            <button className='w-[200px] h-11 mt-2 flex items-center justify-center border-blue-100 border-2 rounded-lg bg-blue-500'
            onClick={()=> navigate("/")}>
                <p className='text-white '>Kembali   ke Homepage</p>
            </button>
        </div>
    </div>
  )
}

