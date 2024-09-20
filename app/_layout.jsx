import { Stack } from "expo-router"
import CartContextProvider from "../src/context/CartContext"
import FavouriteContextProvider from "../src/context/FavouritesContext"

const _layout = () => {
  return (
    <FavouriteContextProvider>
    <CartContextProvider>
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
    </CartContextProvider>
    </FavouriteContextProvider>
  )
}

export default _layout