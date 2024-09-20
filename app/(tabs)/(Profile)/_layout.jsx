import { Stack } from 'expo-router/stack';
import BackHeader from '../../../src/components/BackHeader';
export default function Layout() {
  

  return (
    <Stack>
      <Stack.Screen name="Profile"
        options={{
            header: () => <BackHeader title={"Profile"} />
        }}
      />
      <Stack.Screen name="PersonalInfo"
        options={{
            header: () => <BackHeader title={"Personal Info"} />
        }}
      />
      <Stack.Screen name="Addresses"
        options={{
            header: () => <BackHeader title={"My Address"} />
        }}
      />
    </Stack>
  );
}