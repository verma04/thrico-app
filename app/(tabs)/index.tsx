import { Platform, StyleSheet, Text, View } from "react-native";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const headerHeight = 48;
  return (
    <View>
      <StatusBar style="light" backgroundColor="red" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
