import React, { createContext, useState, ReactNode } from "react";

interface UserDetails {
  id: number;
  name: string;
  email: string;
  roll_no: string;
  is_staff: boolean;
  is_active: boolean;
}

interface LoginContextProps {
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
}

const LoginContext = createContext<LoginContextProps>({
  userDetails: {
    id: -1,
    name: "",
    email: "",
    roll_no: "",
    is_staff: false,
    is_active: false,
  },
  setUserDetails: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({id: -1,
    name: "",
    email: "",
    roll_no: "",
    is_staff: false,
    is_active: false,});

  return (
    <LoginContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, AppProvider };
