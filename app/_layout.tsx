import { Slot } from "expo-router";
import "react-native-reanimated";

import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@/lib/utils";
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    "Publishable Key must be present. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY"
  );
}

const RootLayout = () => {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey!}>
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>
  );
};


export default RootLayout;
