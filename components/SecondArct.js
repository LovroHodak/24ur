import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import article from "../DBSimulation/data";
import icons from "../DBSimulation/icons";

export default function SecondArct({ navigation }) {
  console.log(fotoIcon);
  return (
    <View>
      <Text>SECOND</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHeader: {
    width: "auto",
    height: 200,
  },
  smallTitleHeader: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "blue",
    fontWeight: "bold",
    padding: 5,
    color: "white",
    alignSelf: "flex-start",
    textTransform: "uppercase",
  },
  titleHeader: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    fontWeight: "bold",
    paddingRight: 5,
    paddingTop: 5,
    color: "black",
    fontSize: 25,
  },
  cityShareHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cityDateHeader: {
    color: "grey",
    marginLeft: 10,
    fontSize: 15,
  },
  shareIcon: { width: 25, height: 25, marginRight: 20 },
  readTimeHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 1,
    alignSelf: "flex-start",
    marginLeft: 10,
    borderColor: "grey",
    borderRadius: 3,
    marginBottom: 10,
  },
  bookIcon: { width: 17, height: 17, alignSelf: "center", marginLeft: 5 },
  readTimeTextHeader: { fontSize: 15, marginLeft: 5, marginRight: 5 },
  readTimeNumberHeader: { fontWeight: "bold" },
  authorCommentsHeader: { flexDirection: "row", marginBottom: 10 },
  authorViewHeader: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 2,
    width: "50%",
  },
  authorIcon: {
    width: 25,
    height: 25,
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  authorDataHeader: { paddingTop: 10, paddingBottom: 10 },
  authorText1Header: { color: "grey" },
  authorText2Header: { fontWeight: "bold", fontSize: 15 },
  commentsViewTouchableHeader: {
    width: "50%",
  },
  commentsViewHeader: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 2,
    width: "100%",
  },
  commentsIcon: {
    width: 25,
    height: 25,
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  commentsDataHeader: { paddingTop: 10, paddingBottom: 10 },
  commentsTextHeader: { color: "grey" },
  commentsNumberHeader: { fontWeight: "bold", fontSize: 15 },
  /* Main */
  titlePara: {
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
    marginBottom: 10,
    padding: 5,
  }
});
