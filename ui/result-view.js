import React, { Component } from "react";
import { ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import Entry from "./entry";
import styles from "./styles";

export default class ResultView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://tirea.learnnavi.org/api/random/10")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <SafeAreaView style={styles.list}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.ID}
            contentContainerStyle={styles.contentContainer}
            renderItem={({ item, index }) => (
              <Entry
                number={index + 1}
                navi={item.Navi}
                pos={item.PartOfSpeech}
                en={item.EN}
              />
            )}
          />
        )}
      </SafeAreaView>
    );
  }
}
