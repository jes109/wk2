import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Header from "./src/Header";
import AlbumList from "./src/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};

export default App;