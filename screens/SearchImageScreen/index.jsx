import React from "react";
import { useState } from "react";
import { View, Text, ScrollView, } from "react-native";
import { SearchBar } from "react-native-elements";

import atoms from "../../components/atoms";

const index = () => {

  const [search, setSearch] = useState("");

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled' style={{ flex: 1, padding:10 }}>
      <SearchBar
        value={search}
        onChangeText={(text)=>setSearch(text)}
        placeholder="Search..."
        containerStyle={{backgroundColor:"#121212",borderBottomColor:"#121212", borderTopColor:"#121212"}}
        hide
      />
    </ScrollView>
  );
};

export default index;
