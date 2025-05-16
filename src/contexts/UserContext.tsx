import { useState, createContext } from "react";

export const UserContext = createContext(null);
function UserContextProvider({ children }) {
  const [useName, setName] = useState<string>("KK");
  return (
    <UserContext.Provider value={{ useName, setName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
