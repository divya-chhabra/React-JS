import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { IMG_CDN_URL} from './constants';


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
            <Body/>
            <Footer/>
        </>
       
    )
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);