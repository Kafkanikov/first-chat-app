import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";

const client = StreamChat.getInstance("kpa9svn3xwgs");

export default function MainLayout() {
  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: "john",
          name: "John Doe",
          image: "https://getstream.io/random_svg/?name=John",
        },
        client.devToken("john")
      );

      // const channel = client.channel("messaging", "general", {
      //   name: "General",
      // });
      // await channel.watch();
    };

    connect();
  });

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
}
