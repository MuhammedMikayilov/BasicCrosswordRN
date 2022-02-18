import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function Founded({ text, definition, fetchNewWord }) {
  const [letterOfWord, setLetterOfWord] = React.useState([]);
  const [splitted, setSplitted] = React.useState([]);

  String.prototype.shuffle = function () {
    var a = this.split(""),
      n = a.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  };
  React.useEffect(() => {
    setSplitted(text.toLowerCase().shuffle().split(""));
  }, [text]);

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        width: "90%",
        marginLeft: "5%",
      }}
    >
      <Text style={{ fontSize: 15 }}>
        <Text style={{ fontWeight: "700", textAlign: "center" }}>
          Definition:
        </Text>{" "}
        {definition}
      </Text>
      <View style={styles.flx}>
        {splitted?.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.colBgQuestion, styles.col]}
            onPress={() => {
              splitted.splice(
                splitted.findIndex((it) => it === item),
                1
              );
              setLetterOfWord([...letterOfWord, item]);
            }}
          >
            <Text style={styles.text}>{item.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.flx}>
        {splitted.length < text.length &&
          letterOfWord?.map((it, idx) => (
            <View
              key={idx}
              style={[
                styles.col,
                splitted.length > 0
                  ? styles.colBgAnswer
                  : text?.toLowerCase() === letterOfWord.join("").toLowerCase()
                  ? styles.colBgSuccess
                  : styles.colBgFail,
              ]}
            >
              <Text style={styles.text}>{it.toUpperCase()}</Text>
            </View>
          ))}
      </View>
      {letterOfWord?.length >= 1 && (
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "brown",
            padding: 15,
            borderRadius: 8,
            width: "50%",
            marginLeft: "auto",
          }}
          onPress={() => {
            setSplitted(text.toLowerCase().shuffle().split(""));
            setLetterOfWord([]);
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
            }}
          >
            Sifirla
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{
          marginTop: 50,
          backgroundColor: "#013220",
          borderRadius: 30,
          padding: 15,
        }}
        onPress={() => {
          fetchNewWord();
          setLetterOfWord([]);
          setSplitted(text.toLowerCase().shuffle().split(""));
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
          }}
        >
          Yeni söz
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Founded;

const styles = StyleSheet.create({
  flx: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  col: {
    width: "auto",
    marginHorizontal: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "blue",
  },

  text: {
    color: "#fff",
  },

  colBgQuestion: {
    backgroundColor: "#FF8c00",
    padding: 10,
  },
  colBgAnswer: {
    backgroundColor: "#666600",
    padding: 10,
  },
  colBgSuccess: {
    backgroundColor: "green",
    padding: 10,
  },
  colBgFail: {
    backgroundColor: "brown",
    padding: 10,
  },

  tryAgain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
