import { useState } from "react";
import { Image, StyleSheet, Text, View, Button, Alert } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/Colors";
import OutlinedButton from "../UI/OutlinedButton";

function ImagePicker() {
  const [imageUri, setImageUri] = useState();
  const [cameraPermissionStatusInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (
      cameraPermissionStatusInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionStatusInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissiosn to use this app"
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setImageUri(image.uri);
  }

  let imagePreview = (
    <View style={styles.preview}>
      <Text style={styles.previewText}>
        No image taken yet - start adding some!
      </Text>
    </View>
  );
  if (imageUri) {
    imagePreview = <Image source={{ uri: imageUri }} style={styles.preview} />;
  }

  return (
    <>
      {imagePreview}
      <OutlinedButton
        icon="camera"
        title="Take Image"
        onPress={takeImageHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({
  preview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: Colors.primary100,
  },
  previewText: {
    color: Colors.primary700,
    fontSize: 15,
  },
});

export default ImagePicker;
