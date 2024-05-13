import { useDispatch } from "react-redux";
import { cardImg } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ datalist }) => {
  const dispatch = useDispatch();
  const clickHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {datalist &&
        datalist.map((c) => (
          <div key={c.card.info.id} className="md:flex w-auto border-b-2 py-4">
            <div className="md:w-3/4" restroName={datalist}>
              <p className="font-semibold">
                {c.card.info.name}(
                <span>
                  ₹
                  {Math.floor(c.card.info.price / 100) ||
                    Math.floor(c.card.info.defaultPrice / 100)}
                </span>
                )
              </p>
              <p className="flex"></p>

              <p className="text-sm text-gray-700">{c.card.info.description}</p>
            </div>
            <div className="relative flex-shrink-0 py-2 md:w-1/4">
              <img
                src={cardImg + c.card.info.imageId}
                alt={c.card.info.name}
                className="w-28 float-right h-28 rounded-md object-cover"
              />

              <button
                className="absolute bottom-0 bg-cyan-600 float-right right-5 hover:bg-cyan-800 text-sm text-white py-1 px-4 hover:shadow-3xl rounded-2xl"
                onClick={() => clickHandler(c)}
              >
                ADD+
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export const withCart = (ItemList) => {
  return (datalist) => {
    return (
      <>
        <ItemList {...datalist} />
      </>
    );
  };
};
export default ItemList;
