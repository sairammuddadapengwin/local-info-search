import { createContext, useContext, useState } from "react";

export const UserContext = createContext<any>(null);

export const useUser = () => useContext(UserContext);


const UserProvider = ({ children }: { children: any }) => {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
