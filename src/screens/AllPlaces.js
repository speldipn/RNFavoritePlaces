import { StyleSheet, View } from "react-native";
import { Place } from "../models/place";
import PlacesList from "../components/Places/PlacesList";

const data = [
  new Place(
    "title1",
    "https://www.equitytool.org/wp-content/uploads/2015/06/SmallSample-300x251.png",
    "address1",
    { lat: 0.123241, lng: 127.271 }
  ),
  new Place(
    "title2",
    "https://www.equitytool.org/wp-content/uploads/2015/06/SmallSample-300x251.png",
    "address2",
    { lat: 0.123241, lng: 127.271 }
  ),
  new Place(
    "title3",
    "https://www.equitytool.org/wp-content/uploads/2015/06/SmallSample-300x251.png",
    "address3",
    { lat: 0.123241, lng: 127.271 }
  ),
  new Place(
    "title4",
    "https://www.equitytool.org/wp-content/uploads/2015/06/SmallSample-300x251.png",
    "address4",
    { lat: 0.123241, lng: 127.271 }
  ),
  new Place(
    "title5",
    "https://www.equitytool.org/wp-content/uploads/2015/06/SmallSample-300x251.png",
    "address5",
    { lat: 0.123241, lng: 127.271 }
  ),
];

function AllPlaces() {
  return (
    <View style={styles.container}>
      <PlacesList places={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AllPlaces;
