import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";

export default function TabWords() {
  const state = useSelector((state: { dictionary: any[] }) => {
    // debugger;
    console.log(state);
    return state.dictionary;
  });
  return (
    <View style={styles.container}>
      <Text>bla {state.length ? state[0].word : "gg"} bal</Text>
      <FlatList
        style={{ backgroundColor: "red", width: 300 }}
        data={state.length ? state : [{ word: "fsidjfis" }, { word: "fsfsnf" }]}
        renderItem={({ item }) => {
          return <Text style={{ backgroundColor: "red" }}>{item.word}</Text>;
        }}
      />

      <Text style={styles.title}>{`state ? state[0].word : "non"`}</Text>

      <Text>bla bal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
