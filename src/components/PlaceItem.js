import { Image, View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function PlaceItem({ place }) {
  const { imageUri } = place;
  const { lat, lng } = place.location;
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>{place.title}</Text>
      {imageUri.startsWith("http") && (
        <Image
          source={{ uri: place.imageUri }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <Text style={styles.itemText}>{place.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  itemText: { color: Colors.primary400 },
  image: {
    backgroundColor: Colors.primary800,
    width: "100%",
    height: 100,
  },
});
export default PlaceItem;
