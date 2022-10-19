import { View, FlatList, Text } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={(data) => <PlaceItem place={data.item} />}
      ItemSeparatorComponent={() => (
        <View
          style={{
            backgroundColor: "#ccc",
            height: 1,
            width: "100%",
          }}
        />
      )}
    />
  );
}

export default PlacesList;
