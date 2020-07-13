import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// content of the modal which appears when user taps on an entry
function ModalContent(props) {
  return (
    <View style={styles.modalContainer}>
      {/* the Na'vi word */}
      <Text selectable={true} style={styles.modal_navi}>
        {props.entry.Navi}
      </Text>

      {/* part of speech and definition */}
      <View style={styles.modal_group}>
        <Text selectable={true} style={styles.modal_label}>
          {"part of speech: "}
          <Text selectable={true} style={styles.modal_text}>
            {props.entry.PartOfSpeech}
          </Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {"definition: "}
          <Text selectable={true} style={styles.modal_text}>
            {props.entry.EN}
          </Text>
        </Text>
      </View>

      {/* pronunciation data */}
      <View style={styles.modal_group}>
        <Text selectable={true} style={styles.modal_label}>
          {"IPA: "}
          <Text
            selectable={true}
            style={styles.modal_text}
          >{`[${props.entry.IPA}]`}</Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {"syllables: "}
          <Text selectable={true} style={styles.modal_text}>
            {props.entry.Syllables}
          </Text>
        </Text>

        <Text selectable={true} style={styles.modal_label}>
          {"stressed syllable: "}
          <Text selectable={true} style={styles.modal_text}>
            {props.entry.Stressed}
          </Text>
        </Text>
      </View>

      {/* verb infix location data */}
      {props.entry.InfixLocations !== "NULL" && (
        <View style={styles.modal_group}>
          <Text selectable={true} style={styles.modal_label}>
            {"infix slots: "}
            <Text selectable={true} style={styles.modal_text}>
              {props.entry.InfixLocations}
            </Text>
          </Text>
          <Text selectable={true} style={styles.modal_label}>
            {"infix dots: "}
            <Text selectable={true} style={styles.modal_text}>
              {props.entry.InfixDots}
            </Text>
          </Text>
        </View>
      )}

      {/* affixes */}
      <View style={styles.modal_group}>
        {props.entry.Affixes.Prefix && (
          <Text selectable={true} style={styles.modal_label}>
            {"prefixes: "}
            <Text selectable={true} style={styles.modal_text}>
              {props.entry.Affixes.Prefix}
            </Text>
          </Text>
        )}

        {props.entry.Affixes.Infix && (
          <Text selectable={true} style={styles.modal_label}>
            {"infixes: "}
            <Text selectable={true} style={styles.modal_text}>
              {props.entry.Affixes.Infix}
            </Text>
          </Text>
        )}

        {props.entry.Affixes.Suffix && (
          <Text selectable={true} style={styles.modal_label}>
            {"suffixes: "}
            <Text selectable={true} style={styles.modal_text}>
              {props.entry.Affixes.Suffix}
            </Text>
          </Text>
        )}

        {props.entry.Affixes.Lenition && (
          <Text selectable={true} style={styles.modal_label}>
            {"lenition: "}
            <Text selectable={true} style={styles.modal_text}>
              {props.entry.Affixes.Lenition}
            </Text>
          </Text>
        )}
      </View>
      {/* <View style={styles.modal_button}>
        <Button
          title={"back"}
          onPress={props.onModalBackButtonPress}
          color={"#BA9A74"}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 16,
    borderRadius: 16,
    borderColor: "#ddd",
  },
  modal_group: {
    marginTop: 16,
  },
  modal_navi: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  modal_label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modal_text: {
    fontSize: 14,
    fontWeight: "normal",
  },
  // modal_button: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  // },
});

export default ModalContent;
