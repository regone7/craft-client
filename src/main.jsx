import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layout/Root.jsx';
import Home from './pages/Home.jsx';
import LogIn from './components/LogIn.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import AddCraft from './components/AddCraft.jsx';
import AllArtCraft from './pages/AllArtCraft.jsx';
import AllcraftDitels from './pages/AllcraftDitels.jsx';
import Errorpage from './components/Errorpage.jsx';
import MyartCraft from './pages/MyartCraft.jsx';
import CraftItemsix from './components/CraftItemsix.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/craft')
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addcraft",
        element: <AddCraft></AddCraft>,
      },
      
      {
        path: "/alladdcraft",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch('http://localhost:5000/craft')
      },
      {
        path: "/allcraftdtls/:id",
        element: <AllcraftDitels></AllcraftDitels>,
        loader:({params})=> fetch(`http://localhost:5000/craft/${params.id}`)
      },
      {
        path: "/myartcraft ",
        element: <MyartCraft></MyartCraft>,
        // loader: () => fetch('http://localhost:5000/craft')
      },
      // {
      //   path: "/myartcraft/:email",
      //   element: <MyartCraft></MyartCraft>,
      //   loader:({params})=> fetch(`http://localhost:5000/craft/${params.email}`)

      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
