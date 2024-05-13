// cmd command



// Redux command 
npm install @reduxjs/toolkit and react-redux

// 1 step) create a appStore.js in utils file
 import { configureStore} from "@reduxjs/toolkit";
//  when i export the artSlise.js i need to import appStore.js
import cartReducer from "./cartSlice";
{
const appStore = configureStore({
  // we have a big reducer wich have app reducer
reducer:{
cart:cartReducer,
}
});
}

//2) step we need to provider to the react application in the App.js
import { Provider} from "react-redux";
// use Provider in the return wrap the provider
<Provider store={appStore}>
</Provider>

//3)Step  create a cartSlice.js in the utils (create a slice like cart,user) 
import { createSlice } from "@reduxjs/toolkit";
// cart slice is the function and the function take a configration first this it takes name of the 
// slice and 2ndis intial state and something known as reducer function
const cartSlice= createSlice({
name:'cart',
initialState :{
  items:[]
},
reducers:{
  // basicaly addItem is action this reduce fuction basicaly modify the inside the slice(cartSlice)
  // reducer function it takes two Parameter (State,action)
  // this reducer function get acess the state means initial State empty array and also get acesss to the action
  addItem:(state,action)=>{
  state.items.push(action.payload);
  },

}
})
export const{addItem}=cartSlice.actions;
export default cartSlice.reducer;

// Step 4 just subscribing the Store using Selectore
// 1st of all use useSelectore hooks for subscribing the store
const CartItem =useSelector((store)=> store.cart.items);
// and the CartItem use any where in the wich i want to display the cart




// create UserContext context API
const UserContext = createContext({
  LoggedInUser: "defaul User",
});

// user Context for (Class Base)
<UserContext.Consumer>
  {({ LoggedInUser }) => <h1>{LoggedInUser}</h1>}
</UserContext.Consumer>;

// use context for (functional Base) (userContex is component name)
const { LoggedInUser } = useContext(UserContext);

// use provider its like a wrap for example i am using provider in th App.js its access all accross the app
<UserContext.provider>
  <Header />
  <Body />
</UserContext.provider>;
