import { Stack } from 'expo-router/stack';
import BackHeader from '../../../../src/components/BackHeader';
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="[ItemId]"
        options={{
            header: () => <BackHeader title={"Food Details"} />
        }}
      />
    </Stack>
  );
}
