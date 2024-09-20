import { createContext, useState } from "react";

export const FavouriteContext = createContext();

function FavouriteContextProvider({children}) {
    const [favoriteItem, setFavoriteItem] = useState([])
    function addItemToFavourite(item){
        const arr = favoriteItem;
        const itemIndex = favoriteItem.findIndex((data) => data.id == item.id)
        if(itemIndex == -1){
            arr.push({...item, quantity: 1})
        } else {
            arr[itemIndex].quantity++;
        }
        setFavoriteItem([...arr])
    }
    function removeItemFromFavourite(id){
        const arr = favoriteItem;
        const itemIndex = favoriteItem.findIndex((data) => data.id == id);
        arr.splice(itemIndex, 1);
        setFavoriteItem([...arr])
    }
    return(
        <FavouriteContext.Provider
        value={{addItemToFavourite, removeItemFromFavourite, favoriteItem}}
        >
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteContextProvider