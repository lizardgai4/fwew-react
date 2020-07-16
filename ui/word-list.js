import React from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entry from "./entry";

function WordList({ data, isLoading, onRefresh, text, toggleModal }) {
  // only try to render the list if there is data for it
  if (data.length > 0) {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          extraData={text}
          keyExtractor={(item) => item.ID}
          contentContainerStyle={styles.listContentContainer}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                toggleModal(item);
              }}
            >
              <Entry
                number={index + 1}
                navi={item.Navi}
                ipa={item.IPA}
                pos={item.PartOfSpeech}
                syllables={item.Syllables}
                infixDots={item.InfixDots}
                en={item.EN}
              />
            </TouchableOpacity>
          )}
          // Pull to Refresh
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  } else if (data.message) {
    return (
      // for the situation the API returns {message: "no results"}
      <View style={{ alignItems: "center" }}>
        <Text>
          {data.message}: {text}
        </Text>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    flex: 1,
  },
  listContentContainer: {
    marginTop: 8,
    paddingBottom: 72,
  },
});

export default WordList;
