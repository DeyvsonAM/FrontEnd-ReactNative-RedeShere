import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapPage({ route }) {
  const { currentLocation, destinationLocation } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (currentLocation.latitude + destinationLocation.latitude) / 2,
          longitude: (currentLocation.longitude + destinationLocation.longitude) / 2,
          latitudeDelta: Math.abs(currentLocation.latitude - destinationLocation.latitude) * 2,
          longitudeDelta: Math.abs(currentLocation.longitude - destinationLocation.longitude) * 2,
        }}
      >
        <Marker coordinate={currentLocation} title="Local Atual" />
        <Marker coordinate={destinationLocation} title="Destino" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});