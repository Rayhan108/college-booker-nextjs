import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthContext);
  const isClient = typeof window !== "undefined";

  if (!isClient && !auth) return {};


  return auth;
};

export default useAuth;