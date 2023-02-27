import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from 'react-router-dom';

// const loggedInUser = ()=>{
//     return true;
// }

const Title = () =>{
    return (
        <div>
            <Link to="/">
            <img className="logo" src={Logo} 
                alt="Food Villa Logo" />
            </Link>
        </div>
    )
}

const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <div className='header'>
            <Title/>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>   
            </div>
            { 
            
                isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>:
                           <button onClick={()=>setIsLoggedIn(true)}>Login</button>
                           
            }
            
            
       </div>
    )
}

export default Header;