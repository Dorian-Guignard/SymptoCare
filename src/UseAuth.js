import { useContext } from "react";
import { UserContext } from "./Utils/providers/UserContext";

function UseAuth() {
  return useContext(UserContext);
}

export default UseAuth;
