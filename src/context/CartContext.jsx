import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const CartContext = createContext()

function CartContextProvider({children}) {
    const [cartItem, setCartItem] = useState([])
    const storeData = async (value) => {
        try{
          const jsonValue = JSON.stringify(value)
          const saveItem = await AsyncStorage.setItem('cartItem', jsonValue)
        }catch(err){
        console.log(err);
        }
      }
      const getData = async (value) => {
        try{
          const jsonValue = await AsyncStorage.getItem('cartItem')
          return jsonValue != null ? JSON.parse(jsonValue): [];
        }catch(err){
        console.log(err);
        }
      }
    
      useEffect(()=>{
        const loadCartData = async () => {
          const storedCart = await getData();
          if (storedCart) {
            setCartItem(storedCart)
          }
        }
        loadCartData()
      },[])
      useEffect(()=>{
        storeData(cartItem)
      },[cartItem])
    
    

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
    value={{cartItem, setCartItem, addItemToCart, lessQuantityFromCart, removeItemFromCart, isItemAdded}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider