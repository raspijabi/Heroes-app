import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  //si el usuario de localStorage no existe
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


export const HeroesApp = () => {

  const [ user, dispatch ] = useReducer( authReducer, {}, init);

  useEffect(() => {
    if( !user ) return;

    //En el local storage solo se pueden guardar strings por eso ponemos como nombre user
    //y le pasamos por JSON el objeto usuario
    localStorage.setItem('user', JSON.stringify(user));
  }, [ user ]);
  

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter/>
    </AuthContext.Provider>
  )
};
