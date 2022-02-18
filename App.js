import { ImageBackground, StyleSheet, View } from "react-native";
import Founded from "./src/Founded";
import * as React from "react";
import { getRandomWords } from "./src/actions";

export default function App() {
  const [text, setText] = React.useState({ word: "", definition: "" });
  const [isLoading, setIsLoading] = React.useState(true);

  const imageBackground = require("./assets/crossword.png");

  const fetchNewWord = () =>
    setTimeout(() => {
      getRandomWords(setText);
      setIsLoading(false);
    }, 500);

  React.useEffect(() => {
    fetchNewWord();
  }, []);

  return (
    <View style={[styles.container, styles.mainWrapper]}>
      {isLoading ? (
        <ImageBackground
          source={imageBackground}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <Founded
          text={text.word}
          setText={setText}
          definition={text.definition}
          fetchNewWord={fetchNewWord}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginLeft: "10%",
  },
  mainWrapper: {
    backgroundColor: "gray",
    width: "100%",
    marginLeft: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
