import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Signin from './components/Signin';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
