import { createContext } from "react";

const UserContext = createContext({
  LoggedInUser: "defaul User",
});
export default UserContext;
