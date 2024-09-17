import { Stack } from 'expo-router/stack';
import CategoryScreenHeader from '../../../src/components/CategoryScreenHeader';
import BackHeader from '../../../src/components/BackHeader';
export default function Layout() {
  

  return (
    <Stack>
      <Stack.Screen name="Restaurants"
        options={{
            header: () => <BackHeader title={"Restaurants"} />
        }}
      />
      <Stack.Screen name="[id]"
        options={{
            header: () => <CategoryScreenHeader />
        }}
      />
      <Stack.Screen name="(ItemDetail)"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}