import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";

import FirstArct from "./components/FirstArct";
import SecondArct from "./components/SecondArct";
import ThirdArct from "./components/ThirdArct";
import FourthArct from "./components/FourthArct";
import FifthArct from "./components/FifthArct";

const logo = {
  uri: "https://img.appsrankings.com/412851441/24urcom-logo.jpg",
};

const search = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAHVGOf8l5CU4GeA6KsH4VadTCJf59_p-z3QU9Sbk16_kEyH0yOXZwgBY3urmth3RmDs&usqp=CAU",
};

const menu = {
  uri: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/60-512.png",
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.header}></View>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstArct"
          component={FirstArct}
          options={{
            headerTitle: "Strah - glavni problem elite so jezni",
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "white",
            
          }}
        />
        <Stack.Screen name="SecondArct" component={SecondArct} />
        <Stack.Screen name="ThirdArct" component={ThirdArct} />
        <Stack.Screen name="FourthArct" component={FourthArct} />
        <Stack.Screen name="FifthArct" component={FifthArct} />
      </Stack.Navigator>
      <View style={styles.footer}>
        <View style={{ width: "60%" }}>
          <Image style={{ width: 65, height: 65 }} source={logo} />
        </View>

        <View style={styles.rightFooter}>
          <Image style={{ width: 65, height: 65 }} source={search} />
          <Image style={{ width: 65, height: 65 }} source={menu} />
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 25,
    backgroundColor: "blue",
  },
  footer: {
    height: 65,
    backgroundColor: "blue",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  rightFooter: {
    flexDirection: "row",
  },
});
