import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import { Channel as ChannelType } from "stream-chat";
import {
  Channel,
  MessageList,
  MessageInput,
  useChatContext,
} from "stream-chat-expo";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChannelScreen() {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const { cid } = useLocalSearchParams<{ cid: string }>();

  const { client } = useChatContext();

  useEffect(() => {
    const fetchChannel = async () => {
      const channels = await client.queryChannels({ cid });
      setChannel(channels[0]);
    };

    fetchChannel();
  }, [cid]);

  if (!channel) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView edges={["bottom"]}>
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    </SafeAreaView>
  );
}
