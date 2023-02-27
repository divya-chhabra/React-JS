// import { restaurantlist } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';

const filterData = (searchText, allRestaurants) => {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
};

const Body = () => {
  // let SearchTxt = "KFC";

  // SearchText is a local state variable
  const [searchText, setSearchText] = useState(""); // To create State variables
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  console.log("render ()");
  useEffect(() => {
    console.log(" Use Effect Called");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // Early Return
  if (!allRestaurants) return null;

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.length == 0 ? (
         
            <h1>No match found</h1>
          
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
              <RestaurantCard {...restaurant.data}  />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
