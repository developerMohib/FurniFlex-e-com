import { useContext } from "react";
import { AuthCustomContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const author = useContext(AuthCustomContext);
  return author;
};

export default useAuth;
