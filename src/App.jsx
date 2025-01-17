import React, { useState } from 'react';
import Navbar from './assets/component/Navbar/Navbar';
import { Outlet, ScrollRestoration } from "react-router-dom"

export default function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
