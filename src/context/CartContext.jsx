import { createContext, useState } from "react";


export const CartContext = createContext()

function CartContextProvider({children}) {
    const [cartItem, setCartItem] = useState([])

    function addItemToCart(item){
        const arr = cartItem;
        const itemIndex = cartItem.findIndex((data) => data.id == item.id);
        if(itemIndex == -1){
            arr.push({...item, quantity: 1})
        }else{
            arr[itemIndex].quantity++;
        }
        setCartItem([...arr])
    }
    function lessQuantityFromCart(id){
        const arr = cartItem;
        const itemIndex = cartItem.findIndex((data) => data.id == id);
            arr[itemIndex].quantity--;
        setCartItem([...arr])
    }
    function removeItemFromCart(id){
        const arr = cartItem;
        const itemIndex = cartItem.findIndex((data) => data.id == id);
        arr.splice(itemIndex, 1);
        setCartItem([...arr])
    }
    function isItemAdded(id){
        const arr = cartItem;
        const itemIndex = cartItem.findIndex((data) => data.id == id);
        if (itemIndex == -1){
            return null;
        } else {
            return arr[itemIndex]
        }
    }

    return(
        <CartContext.Provider
        value={{cartItem, addItemToCart, lessQuantityFromCart, removeItemFromCart, isItemAdded}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider