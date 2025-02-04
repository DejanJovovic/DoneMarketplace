import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/profile_pic.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/profile_pic.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected:", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/profile_pic.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
