import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  //recibe los componentes que estaran aqui en el privateRoute

  const { logged } = useContext(AuthContext); //necesito saber si el usuario está autenticado o no
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);   
  return logged ? children : <Navigate to="/login" />;

  //si está autenticado muestro a los hijos, si no, lo mando al login
};
