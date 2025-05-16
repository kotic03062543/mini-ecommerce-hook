import { useState, createContext } from "react";
const UserContext = createContext(null);

function UserContextProvider({ children }) {
  const [useUser, setUser] = useState("KK");
  return (
    <UserContext.Provider value={{ useUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
