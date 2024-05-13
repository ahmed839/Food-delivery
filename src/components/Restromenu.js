import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLeaf } from "@fortawesome/free-solid-svg-icons";
import useRestromenu from "../utils/useRestromenu";
import Itemcategory from "./Itemcategory";
import ShimmerMenu from "./ShimmerMenu";
import { useState } from "react";
const Restromenu = () => {
  const menudata = useRestromenu();
  const [ShowIndex, SetShowIndex] = useState();
  if (menudata === undefined) return <ShimmerMenu />;
  const {
    name,
    city,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    cuisines,
    veg,
    id,
  } = menudata?.cards[2]?.card?.card?.info;
  const restCategory =
    menudata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="container mx-auto w-2/3 py-4">
      <h1 className="font-bold text-2xl py-1">{name}</h1>
      <span>{city} </span>
      {veg === true ? (
        <FontAwesomeIcon className="text-green-900" icon={faLeaf} />
      ) : (
        ""
      )}
      <p>
        <span className="text-green-700">
          <FontAwesomeIcon icon={faStar} />
        </span>
        {avgRating} - ({totalRatingsString}) - {costForTwoMessage}{" "}
      </p>
      <p className="decoration-solid text-orange-500 font-semibold">
        {cuisines.join(" , ")}
      </p>
      {restCategory &&
        restCategory.map((category, index) => (
          <div key={category?.card?.card.titel}>
            <Itemcategory
              data={category?.card?.card}
              showItem={index === ShowIndex ? true : false}
              SetShowIndex={() => SetShowIndex(index)}
            />
          </div>
        ))}
    </div>
  );
};
export default Restromenu;
