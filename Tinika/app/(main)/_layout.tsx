import { useAuth } from "@/providers/AuthProvider";
import ChatProvider from "@/providers/ChatProvider";
import { Redirect, Stack } from "expo-router";
import { StreamChat } from "stream-chat";

export default function MainLayout() {
  const { user } = useAuth();

  if(!user) {
    return <Redirect href="/(authentication)/login"/>
  }

  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  );
}
