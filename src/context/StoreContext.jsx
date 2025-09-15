import { food_list } from "../assets/assets";
import React, { useEffect } from "react";

export const StoreContext = React.createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState({});

  const addToCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      if (!prev[itemId]) return prev;
      const updated = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updated[itemId] <= 0) {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo=food_list.find((product)=>product._id===item)
      totalAmount+=itemInfo.price*cartItems[item]
    }

      
      
    }
    return  totalAmount;
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
