import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./assets/pages/Homepage/Home";
import Register from "./assets/pages/Register/register.jsx";
import Login from "./assets/pages/Login/login.jsx";
import Dashboard from "./assets/pages/Dashboard/Dashboard.jsx";
import GlobalError from "./assets/component/Error/GlobalError.jsx";
import Blog from "./assets/pages/Blog/Blog.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "*",
        element: <GlobalError/>,
      },
      {
        path:"/blog/:post_id",
        element: <Blog/>
      }
    ],
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
