import { useSelector } from "react-redux";
import ItemList, { withCart } from "./ItemList";

const Cart = () => {
  const ItemCartList = withCart(ItemList);
  // Will read the cart will subscribing using useSelector
  const CartItems = useSelector((store) => store.cart.Items);

  return (
    <div className="container mx-auto w-2/3 py-4">
      <h1 className="text-xl font-semibold text-center">Cart</h1>

      <ItemCartList datalist={CartItems} />
    </div>
  );
};
export default Cart;
