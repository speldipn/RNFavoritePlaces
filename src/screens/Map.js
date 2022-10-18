import { StyleSheet, Text, View } from "react-native";

function Map() {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0000ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Map;
