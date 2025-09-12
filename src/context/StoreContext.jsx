 import { food_list } from "../assets/assets";
 import React from "react";
 export const StoreContext = React.createContext(null);

const StoreContextProvider = (props)=>{


    const contextValue = {
        food_list

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;