import { useState, useEffect } from "react";
import { cardMobApi, cardApi } from "./constant";

const useRestroCard = () => {
  const [ListOfRestaurent, SetListOfRestaurent] = useState([]);
  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const deta = await fetch(isMobile() ? cardMobApi : cardApi);
    const response = await deta.json();
    SetListOfRestaurent(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return ListOfRestaurent;
};
export default useRestroCard;
