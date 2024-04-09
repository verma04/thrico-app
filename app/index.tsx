import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
type ButtonsComponentProps = {};

const Buttons: React.FunctionComponent<ButtonsComponentProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.contentView}>
          <View style={styles.buttonsContainer}>
            <Button
              onPress={() => router.push("/(tabs)")}
              ViewComponent={LinearGradient}
              title="Login"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CustomTitle = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>John Doe</Text>
      <Text style={{ fontStyle: "italic", fontSize: 12 }}>
        Minister of Magic
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default withTheme(Buttons, "");
