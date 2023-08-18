import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const [ isLoginVisible, setIsLoginVisible ] = useState(false);
    const [ isBookingVisible, setIsBookingVisible ] = useState(false);

    return <Context.Provider value={{ isLoginVisible, setIsLoginVisible, isBookingVisible, setIsBookingVisible }}>
        {children}
    </Context.Provider>
}