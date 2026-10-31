import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import User from './Components/User/User.jsx';
import User2 from './Components/User2/User2.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json());
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
      },
      {
        path: "user",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: User
      },
      {
        path: "user2",
        element: <Suspense fallback = {<h3>Loading...</h3>}>
          <User2 userPromise = {userPromise}></User2>
        </Suspense>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
