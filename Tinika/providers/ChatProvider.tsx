import { PropsWithChildren, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";

const STREAM_API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY;

if (!STREAM_API_KEY) {
  throw new Error("Missing Stream API Key");
}

const client = StreamChat.getInstance(STREAM_API_KEY);

export default function ChatProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);

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
      setIsReady(true);
      // const channel = client.channel("messaging", "general", {
      //   name: "General",
      // });
      // await channel.watch();
    };
    connect();

    return () => {
      client.disconnectUser();
      setIsReady(false);
    };
  },[]);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <OverlayProvider>
        <Chat client={client}>{children}</Chat>
      </OverlayProvider>
    </>
  );
}
