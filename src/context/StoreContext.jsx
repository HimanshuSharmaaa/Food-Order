import { createContext, useState , useEffect} from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{

    const[cardItems , setCardItems] = useState({});

    const addToCart = (itemId) =>{
        if(!cardItems[itemId]){
            setCardItems((prev)=> ({...prev,[itemId]:1}))
        }
        else{
            setCardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeToCart = (itemId) =>{
    setCardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cardItems);
    },[cardItems])

    const contextValue = {
        food_list,
        cardItems,
        setCardItems,
        addToCart,
        removeToCart
    }

    return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>
}

export default StoreContextProvider;