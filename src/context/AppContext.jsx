import {  createContext, useState } from "react";


export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [cart,setCart] = useState(null);
    const [dishAdded, setDishAdded] = useState(false)
    const [token, setToken] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const value = {
        cart,
        setCart,
        dishAdded, 
        setDishAdded,
        token,
        setToken,
        loggedIn,
        setLoggedIn
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;