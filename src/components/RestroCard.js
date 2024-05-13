import { cardImg } from "../utils/constant";
const RestroCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="my-4 cursor-pointer">
      <div className="transition duration-1000 ease-in-out hover:scale-95">
        <img
          src={cardImg + cloudinaryImageId}
          className="w-full h-52 object-cover rounded-lg"
        />
      </div>
      <h2 className="font-semibold tracking-wide text-cyan-900">{name}</h2>
      <p className="tracking-wide truncate">{cuisines.join(" / ")}</p>
      <div className="flex justify-between">
        <p className="font-semibold">{sla.deliveryTime}min</p>
        <p className="font-semibold text-yellow-700">{costForTwo}</p>
        <p className="font-semibold"> ⭐ {avgRating}</p>
      </div>
    </div>
  );
};
export const withPromoted = (RestroCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-cyan-800 text-white my-4 px-5 shadow-2xl z-30">
          Veg
        </label>
        <RestroCard {...props} />
      </>
    );
  };
};
export default RestroCard;
