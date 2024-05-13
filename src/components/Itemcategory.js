import ItemList from "./ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
const ItemCategory = ({ data, showItem, SetShowIndex }) => {
  const handleclick = () => {
    SetShowIndex();
  };
  return (
    <div>
      <div
        className="flex font-bold cursor-pointer py-4 border-b-8"
        onClick={handleclick}
      >
        <div className="w-3/4">
          {data.title}
          <span>({data.itemCards.length})</span>
        </div>
        <div className="w-1/4">
          <span className="text-cyan-700 text-lg float-right">
            <FontAwesomeIcon icon={faCircleChevronDown} />
          </span>
        </div>
      </div>
      <div> {showItem && <ItemList datalist={data.itemCards} />}</div>
    </div>
  );
};
export default ItemCategory;
