import { StyleSheet, Text, View } from "react-native";

function PlaceDetail() {
  return (
    <View style={styles.container}>
      <Text>PlaceDetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#00ff00",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlaceDetail;
