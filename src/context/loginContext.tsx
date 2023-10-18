import React ,{useState} from "react";

const LoginContext = React.createContext({});

const AppProvider = ({ children }:any) => {
    const [userDetails,setUserDetails] = useState({});

  return(
    <LoginContext.Provider value={{userDetails,setUserDetails}}>
    {children}
    </LoginContext.Provider>
  )
};



export { LoginContext, AppProvider };
