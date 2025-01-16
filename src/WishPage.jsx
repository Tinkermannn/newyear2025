import React, { useState } from 'react';
import Navbar from './assets/component/Navbar/Navbar';
import Home from './assets/pages/Homepage/Home';
import Ads from './assets/pages/Ads/Ads';
import Landing from './assets/pages/Homepage/hotelview2.jpg';

export default function App() {
  // const [nama, setNama] = useState('');
  // const [wish, setWish] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(`Nama: ${nama}, Wish: ${wish}`);
  //   // Tambahkan logika lain jika perlu, misalnya mengirim data ke server.
  // };
  const slides = [
    Landing,
    Landing,
    Landing,
    Landing,
  ];

  return (
    <>
      <Navbar />
      <Home />
      <Ads>
        {slides.map((s, index) => (
          <img 
          key={index} 
          src={s} 
          alt={`Slide ${index}`} />
        ))}
      </Ads>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama"
          />
          <input
            type="text"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            placeholder="Wish"
          />
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </>
  );
}
