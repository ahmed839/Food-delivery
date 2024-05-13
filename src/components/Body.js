import { useState, useContext } from "react";
import useRestroCard from "../utils/useRestocard";
import Shimmer from "./Shimmer";
import RestroCard, { withPromoted } from "./RestroCard";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = () => {
  const listOfRestaurants = useRestroCard(null);
  const [filterList, SetfilterList] = useState([]);
  const [searchList, SetsearchList] = useState([]);
  const RestroCardPromoted = withPromoted(RestroCard);
  const { LoggedInUser, SetUserName } = useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-4 py-4">
      <div className="md:flex gap-5">
        <div>
          <button
            className="bg-cyan-800 shadow-md hover:shadow-2xl px-3 py-1 text-white"
            onClick={() => {
              const FilterData = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              SetfilterList(FilterData);
            }}
          >
            Rating 4.2 +
          </button>
        </div>
        <div className="md:flex gap-4">
          <input
            className="border border-cyan-800 shadow-md px-2 hover:shadow-2xl focus:border-0"
            type="text"
            name="search"
            placeholder="Search"
            value={searchList}
            onChange={(e) => {
              SetsearchList(e.target.value);
            }}
          />
          <button
            className="bg-cyan-800 shadow-md hover:shadow-2xl px-3 py-1 text-white"
            onClick={() => {
              const FilterData = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchList)
              );
              SetfilterList(FilterData);
            }}
          >
            Search
          </button>
        </div>
        <div className="md:flex gap-4">
          <lable className="py-2 font-semibold">UserName : </lable>
          <input
            className="border border-cyan-800 shadow-md px-2 hover:shadow-2xl focus:border-0"
            type="text"
            name="search"
            value={LoggedInUser}
            onChange={(e) => {
              SetUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 cursor-pointer">
        {filterList.length > 0
          ? filterList.map((res) => (
              <div key={res.info.id}>
                <Link to={"/restromenu/" + res.info.id}>
                  {res.info.veg === true ? (
                    <RestroCardPromoted resData={res} />
                  ) : (
                    <RestroCard resData={res} />
                  )}
                </Link>
              </div>
            ))
          : listOfRestaurants.map((res) => (
              <div key={res.info.id}>
                <Link to={"/restromenu/" + res.info.id}>
                  {res.info.veg === true ? (
                    <RestroCardPromoted resData={res} />
                  ) : (
                    <RestroCard resData={res} />
                  )}
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};
export default Body;
