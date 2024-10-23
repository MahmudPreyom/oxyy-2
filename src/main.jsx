import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Signin from './components/Signin';
import Register from './components/Register';
import OtpPage from './components/OtpPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/otpPage",
    element: <OtpPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
