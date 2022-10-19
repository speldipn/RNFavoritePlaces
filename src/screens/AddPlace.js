import { StyleSheet, ScrollView, View } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";

function AddPlace() {
  return (
    <ScrollView style={styles.container}>
      <PlaceForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddPlace;
