import { useState, createContext } from "react";
import type { ReactNode } from "react";

interface UserContextType {
  useName: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType | null>(null);

function UserContextProvider({ children }: { children: ReactNode }) {
  const [useName, setName] = useState<string>("KK");
  return (
    <UserContext.Provider value={{ useName, setName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
