import { useState } from "react";
import restaurantsMock from "../../utils/restaurant-data.json";
import RestaurantCard from "../restaurant-card/restaurant-card";

const RestaurantsList = () => {
  // console.log(restaurants[2].info);
  const [restaurants, setRestaurants] = useState(restaurantsMock);
  const handleTopRated = () => {
    // console.log("top rated");
    const filteredRest = restaurants.filter((res) => res.info.avgRating > 4.3);
    setRestaurants(filteredRest);
  };
  return (
    <div className="mx-auto w-[80%]">
      <div className="flex items-center mt-2 mb-4">
        <h2 className="text-[24px] text-left uppercase font-bold">
          Restaurants List
        </h2>
        <button
          onClick={handleTopRated}
          className="border ml-auto rounded-[4px] text-[14px] px-[12px] py-[6px] bg-[#222] text-white"
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-[30px]">
        {restaurants.map((restaurantData) => {
          return (
            <RestaurantCard
              key={restaurantData.info.id}
              restaurant={restaurantData.info}
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantsList;
