import { Stack } from "expo-router"
import CartContextProvider from "../src/context/CartContext"

const _layout = () => {
  return (
    <CartContextProvider>
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
    </CartContextProvider>
  )
}

export default _layout