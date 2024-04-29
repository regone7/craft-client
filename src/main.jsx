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
import Updatecraft from './components/Updatecraft.jsx';
import Privateroutess from './privateroutes/Privateroutess.jsx';

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
        element: <Privateroutess><AddCraft></AddCraft></Privateroutess>,
      },
      
      {
        path: "/alladdcraft",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch('http://localhost:5000/craft')
      },
      {
        path: "/allcraftdtls/:id",
        element: <Privateroutess><AllcraftDitels></AllcraftDitels></Privateroutess>,
        loader:({params})=> fetch(`http://localhost:5000/craft/${params.id}`)
      },
      {
        path: "/myartcraft ",
        element: <Privateroutess><MyartCraft></MyartCraft></Privateroutess>,
        
      },
      {
        path: "/updatecrfts/:id",
        element: <Updatecraft></Updatecraft>,
        loader:({params})=> fetch(`http://localhost:5000/craftss/${params.id}`)
        
        
      },
      // {
      //   path: "/updatecrft ",
      //   element: <Updatecraft></Updatecraft>,
        
        
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
