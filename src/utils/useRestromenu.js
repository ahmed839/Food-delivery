import { useEffect, useState } from "react";
import { menuApi } from "./constant";
import { useParams } from "react-router-dom";
const useRestromenu = () => {
  const [menudata, Setmenudata] = useState();
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(menuApi + resId);
    const response = await data.json();
    Setmenudata(response.data);
  };
  return menudata;
};
export default useRestromenu;
