import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function Wrapper() {
  return (
    <SafeAreaProvider>
      <RootLayout />
    </SafeAreaProvider>
  );
}
