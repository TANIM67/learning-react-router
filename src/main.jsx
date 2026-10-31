import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "about",
        element: <div><h1>About Me</h1></div>,
        
      },
      {
        path: "contact",
        element: <div><h1>Contact Me</h1></div>
      },
      {
        path: "app",
        Component: App
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
