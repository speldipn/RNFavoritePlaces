import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import OutlinedButton from "../UI/OutlinedButton";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
  Accuracy,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";

function LocationPicker() {
  const [currentPos, setCurrentPos] = useState();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissiosn to use this app"
      );
      return false;
    }

    return true;
  }
  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync({
      accuracy: Accuracy.Highest,
      maximumAge: 10000,
      timeout: 5000,
    });
    console.log(location);
    setCurrentPos({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0032,
      longitudeDelta: 0.0031,
    });
  }

  function pickOnMapHandler() {}

  console.log(currentPos);

  return (
    <View>
      <View style={styles.mapPreview}>
        <MapView style={{ width: "100%", height: "100%" }} region={currentPos}>
          {currentPos && (
            <Marker
              key={currentPos.toString()}
              coordinate={{
                latitude: currentPos.latitude,
                longitude: currentPos.longitude,
              }}
            />
          )}
        </MapView>
      </View>
      <View style={styles.actions}>
        <OutlinedButton
          icon="location"
          title="Locate User"
          onPress={getLocationHandler}
        />
        <OutlinedButton
          icon="map"
          title="Pick on Map"
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default LocationPicker;
