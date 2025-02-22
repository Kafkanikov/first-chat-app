import ChatProvider from "@/providers/ChatProvider";
import { Stack } from "expo-router";
import { StreamChat } from "stream-chat";

export default function MainLayout() {
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  );
}
