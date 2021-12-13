import React, { useState } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { TextInput, Button, Modal, Portal } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addWord } from "../store/dictionaryReducer/dictionaryActions";
import { translate } from "../services/translate/translate.http";

import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
let ScreenHeight = Dimensions.get("window").height;

export default function TabLearn({ navigation }: RootTabScreenProps<"TabOne">) {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  const [definition, setDefinition] = useState("");
  const [examples, setExamples] = useState("");
  const [openModal, setOpenModal] = useState<string | boolean>(false);

  const dispatch = useDispatch();

  const addWordHandler = () => {
    dispatch(
      addWord({
        word,
        definition,
        pronunciation,
        examples,
      })
    );
    setExamples("");
    setDefinition("");
    setPronunciation("");
    setWord("");
  };

  const translateWord = () => {
    setOpenModal("Searching for word");
    translate
      .translateWord(word)
      .then((res) => {
        console.log(res);
        setOpenModal(false);
        if (res.data) {
          setPronunciation(res.data[0].phonetic);
        }
        if (res.data[0]) {
          res.data[0].meanings;

          setDefinition(res.data[0].meanings[0].definitions[0].definition);
          setExamples(res.data[0].meanings[0].definitions[0].example);
        }
      })
      .catch((err) => {
        setOpenModal("Word not Found");
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Portal>
        <Modal
          visible={!!openModal}
          onDismiss={() => {
            setOpenModal(false);
          }}
          contentContainerStyle={{
            backgroundColor: "white",
            padding: 20,
            margin: 30,
          }}
        >
          <Text style={{ textAlign: "center" }}>{openModal}</Text>
        </Modal>
      </Portal>
      <Text> holaa </Text>
      <TextInput
        mode="outlined"
        autoComplete={false}
        style={{ ...styles.marginBottom }}
        label="Word/phrase"
        placeholder="Word/phrase"
        onChange={(e: any) => {
          setWord(e.target.value);
        }}
        right={
          <TextInput.Icon
            name={() => <FontAwesome name={"search"} size={24} />}
            onPress={translateWord}
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
        value={pronunciation}
        onChange={(e: any) => {
          setPronunciation(e.target.value);
        }}
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
        value={definition}
        onChange={(e: any) => {
          setDefinition(e.target.value);
        }}
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
        value={examples}
        placeholder="Examples"
        onChange={(e: any) => {
          setExamples(e.target.value);
        }}
      />

      <Button icon="plus" mode="contained" onPress={addWordHandler}>
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
    // backgroundColor: "red",
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
