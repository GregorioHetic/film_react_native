import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import { SearchBar } from "react-native-elements";

export const Search = (props) => {
  const { searchValue, searchFilm, setInputFocus } = props;
  return (
    <View style={styles.main_container}>
      <SearchBar
        placeholder="Rechercher un film"
        onChangeText={(text) => searchFilm(text)}
        value={searchValue}
        inputContainerStyle={styles.textinput}
        containerStyle={styles.searchcontainer}
        lightTheme
        // onSubmitEditing={() => alert(`Coucou ${searchValue}`)}
        onFocus={() => setInputFocus(true)}
        // onBlur={() => setInputFocus(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 0.8,
    backgroundColor: "#AD2A2A",
    justifyContent: "center",
    paddingTop: 30,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
  },
  textinput: {
    height: 50,
    borderColor: "#000000",
    borderWidth: 0,
    paddingLeft: 5,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  searchcontainer: {
    backgroundColor: "transparent",
    borderWidth: 0, //no effect
    shadowColor: "white", //no effect
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
});
