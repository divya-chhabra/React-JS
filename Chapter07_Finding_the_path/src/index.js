import React, { useState} from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { IMG_CDN_URL} from './constants';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';


            // <Header/> - Logo, Nav Items, Cart
            // <Body/>
            //        - SearchBar
            //        - RestaurantList
            //        - Restaurant Card - image, name, rating, cuisines, tags
            // <Footer/>  Links, Copyright, 
            


const AppLayout = () =>{
    
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
       
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            }
        ]
    }  

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);