import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  action_bar: {
    height: 60,
    width: "100%",
    backgroundColor: "#7494BA",
    paddingTop: 4,
    flexDirection: "row",
  },
  icon: { marginLeft: 8, width: 48, height: 48 },
  input: {
    height: 48,
    width: "80%",
    paddingLeft: 16,
    marginLeft: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  list: {
    width: "100%",
  },
  contentContainer: {
    marginTop: 8,
    paddingBottom: 72,
  },
  entry: {
    padding: 20,
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#ddd",
    flexDirection: "row",
    overflow: "hidden",
  },
  entry_index: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7494BA",
    borderRadius: 45,
  },
  entry_number: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  entry_navi: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 16,
  },
  entry_pos: { fontStyle: "italic", fontSize: 14, marginLeft: 8, marginTop: 8 },
  entry_en: { fontSize: 14, marginLeft: 8, marginTop: 8 },
});

export default styles;
