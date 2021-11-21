import * as React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
let ScreenHeight = Dimensions.get("window").height;

export default function TabLearn({ navigation }: RootTabScreenProps<"TabOne">) {
  const [text, setText] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <Text> holaa </Text>
      <TextInput
        mode="outlined"
        autoComplete={false}
        style={{ ...styles.marginBottom }}
        label="Word/phrase"
        placeholder="Word/phrase"
        right={
          <TextInput.Icon
            name={() => <FontAwesome name={"search"} size={24} />}
            onPress={() => alert("search")}
          />
        }
        // right={<TextInput.Icon icon="password" onPress={()=>alert('show password')}
      />
      <TextInput
        mode="outlined"
        autoComplete={false}
        style={{ ...styles.marginBottom }}
        label="pronunciation"
        placeholder="pronunciation"
      />
      <TextInput
        multiline
        mode="outlined"
        autoComplete={false}
        style={{
          height: 100,
          ...styles.marginBottom,
        }}
        label="Definition"
        placeholder="Definition"
      />
      <TextInput
        multiline
        mode="outlined"
        autoComplete={false}
        style={{
          height: 100,
          ...styles.marginBottom,
        }}
        label="Examples"
        placeholder="Examples"
      />

      <Button icon="plus" mode="contained" onPress={() => alert(ScreenHeight)}>
        Add word
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    maxHeight: ScreenHeight - 50,
    overflow: "scroll",
    backgroundColor: "red",
    paddingLeft: 15,
    paddingRight: 15,
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
  marginBottom: {
    marginBottom: 15,
  },
});
