import React, { useState } from 'react';
import Navbar from './assets/component/navbar';

export default function App() {
  // const [nama, setNama] = useState('');
  // const [wish, setWish] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(`Nama: ${nama}, Wish: ${wish}`);
  //   // Tambahkan logika lain jika perlu, misalnya mengirim data ke server.
  // };

  return (
    <>
      <Navbar/>
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
