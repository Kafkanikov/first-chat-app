import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Text } from "react-native";
import { Channel as ChannelType } from "stream-chat";
import { Channel, MessageList, MessageInput, useChatContext } from "stream-chat-expo";
import { useEffect, useState } from "react";

export default function ChannelScreen() {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const {cid} = useLocalSearchParams<{cid : string}>();

  const { client } = useChatContext();

  useEffect(() => {
    const fetchChannel = async () => {
      const channels = await client.queryChannels({ cid });
      setChannel(channels[0]);
    }

    fetchChannel();
  }, [cid]);

  if (!channel) {
    return <ActivityIndicator />
  }

  console.log(channel);
  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
}
