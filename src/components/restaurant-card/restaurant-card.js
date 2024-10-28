const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, sla, cuisines } =
    props.restaurant;
  console.log(name, "form card");
  return (
    <div className="rounded-[6px] w-[31.5%] hover:shadow hover:scale-95 transition cursor-pointer">
      <figure className="">
        <img
          className="object-cover rounded-[6px] h-[200px] w-full"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </figure>
      <article className="p-[16px]">
        <h3 className="text-left font-medium mb-[8px]">{name}</h3>
        <div className="flex items-center justify-between mb-[8px]">
          <p>
            Rating:
            <strong> {avgRating}</strong>
          </p>
          <p>
            Delivery In:
            <strong> {sla["slaString"]}</strong>
          </p>
        </div>
        <p className="text-left text-[#02060c99]">{cuisines.join(", ")}</p>
      </article>
    </div>
  );
};
export default RestaurantCard;
