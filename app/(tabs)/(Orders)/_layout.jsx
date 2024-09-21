import { Stack } from 'expo-router';

const MyOrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="OrdersScreen"
        options={{
            headerShown: false
        }}
      />
    </Stack>
  );
};

export default MyOrdersLayout;
