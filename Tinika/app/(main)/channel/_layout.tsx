import { Stack } from "expo-router";
import { useChatContext } from "stream-chat-expo";

export default function ChannelScreen() {
    const { channel } = useChatContext();
  return (
    <Stack>
      <Stack.Screen name="[cid]" options={{ headerShown: false }} />
    </Stack>
  );
}
