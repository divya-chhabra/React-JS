import { restaurantlist } from "../constants";
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

const filterData = (searchText,restaurants) =>{
   return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText))
}

const Body = () => {

    // let SearchTxt = "KFC";

    // SearchText is a local state variable
    const [searchText,setSearchText] = useState("KFC"); // To create State variables
    const [restaurants,setRestaurants] = useState(restaurantlist);
    return(
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" 
            value={searchText} onChange={(e)=> setSearchText(e.target.value) }/>
            <button className="search-btn" 
                onClick={()=> {
                const data = filterData(searchText,restaurants)
                setRestaurants(data)
                }
            }>
                Search</button>
        </div>
        <div className='restaurant-list'>
            {
                restaurants.map((restaurant)=>{
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                }
                )
            } 
        </div>
        </>
    )
}

export default Body;
