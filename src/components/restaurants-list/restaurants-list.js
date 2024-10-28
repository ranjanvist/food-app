import restaurants from "../../Data/ProductsData.json";
import RestaurantCard from "../restaurant-card/restaurant-card";

const RestaurantsList = () => {
  // console.log(restaurants[2].info);
  return (
    <div className="mx-auto w-[80%]">
      <h2 className="text-[24px] mb-[24px] text-left mt-[24px] uppercase font-bold">
        Restaurants List
      </h2>
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
