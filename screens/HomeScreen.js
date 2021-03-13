import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const videoIcon = {
  uri:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQtQHAOBsdAYqcsf1oyXYMXm-SjOMkHFNLQ&usqp=CAU",
};

const commentsIcon = {
    uri: 'http://simpleicon.com/wp-content/uploads/comment.png'
}

const image1 = {
  uri:
    "https://images.freeimages.com/images/large-previews/529/inmigrants-1569643.jpg",
};
const image2 = {
  uri:
    "https://images.freeimages.com/images/large-previews/413/interview-1478239.jpg",
};
const image3 = {
  uri:
    "https://images.freeimages.com/images/large-previews/701/covid-19-coronavirus-visualisation-1641138.jpg",
};
const image4 = {
  uri:
    "https://images.freeimages.com/images/large-previews/f34/i-love-this-game-1442766.jpg",
};
const image5 = {
  uri:
    "https://images.freeimages.com/images/large-previews/ad6/concert-1-1438833.jpg",
};

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("FirstArct", { name: "Jane" })}
      >
        <ImageBackground source={image1} style={styles.image}>
          <View
            style={styles.top}
          >
            <Text
              style={styles.topText}
            >
              PROTESTI V AMERIKI
            </Text>
            <Image
              source={videoIcon}
              style={styles.topImg}
            />
          </View>
          <View>
            <Text
              style={styles.bottomText}
            >
              Strah - glavni problem elite so jezni posamezniki in neomejen
              pohlep
            </Text>
            <Image
              source={commentsIcon}
              style={styles.bottomImg}
            />
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("SecondArct", { name: "Jane" })}
      >
        <ImageBackground source={image2} style={styles.image}>
          <View
            style={styles.top}
          >
            <Text
              style={styles.topText}
            >
              ODSTOP VLADE
            </Text>
            
          </View>
          <View>
            <Text
              style={styles.bottomText}
            >
              Odstopila je celotna vladna koalicija, volitve drugo nedeljo
            </Text>
            <Image
              source={commentsIcon}
              style={styles.bottomImg}
            />
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("ThirdArct", { name: "Jane" })}
      >
        <ImageBackground source={image3} style={styles.image}>
          <View
            style={styles.top}
          >
            <Text
              style={styles.topText}
            >
              CORONA VIRUS PO SVETU
            </Text>
            <Image
              source={videoIcon}
              style={styles.topImg}
            />
          </View>
          <View>
            <Text
              style={styles.bottomText}
            >
              Katre drzave imajo policijsko uro? Kateri ukrepi delujejo?
            </Text>
            <Image
              source={commentsIcon}
              style={styles.bottomImg}
            />
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FourthArct", { name: "Jane" })}
      >
        <ImageBackground source={image4} style={styles.image}>
          <Text>Inside</Text>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FifthArct", { name: "Jane" })}
      >
        <ImageBackground source={image5} style={styles.image}>
          <Text>Inside</Text>
        </ImageBackground>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "auto",
    height: 200,
    justifyContent: "space-between",
  },
  top: {
    flexDirection: "row", justifyContent: "space-between"
  },
  topText: {
    backgroundColor: "blue",
    color: "white",
    margin: 10,
    padding: 5,
    fontWeight: "bold",
  },
  topImg: {
    width: 25, height: 20, margin: 15
  },
  bottomText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10
  },
  bottomImg: {
    width: 25, height: 20, marginLeft: 15, marginBottom: 15
  }
});
