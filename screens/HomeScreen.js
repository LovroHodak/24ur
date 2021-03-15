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
  uri: "http://simpleicon.com/wp-content/uploads/comment.png",
};
const fotoIcon = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QB0OOF49_U6ge7mFwpwAFFSCUYsGzPX7IH7ZYibvajExfOT73M5It47rl_FhwD4MxNw&usqp=CAU",
};

const commercial = {
  uri: 'https://lh3.googleusercontent.com/dptkaVWjABSkqCcY1KtZtCksfFn2z21K2nJHls2x3k4IrawtpS28DzwjXCfYHOTcY5Q'
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
const image6 = {
  uri: 'https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg'
}
const image7 = {
  uri: 'https://images.freeimages.com/images/large-previews/c64/my-beloved-mountains-2-1375135.jpg'
}

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("FirstArct", { name: "Jane" })}
      >
        <ImageBackground source={image1} style={styles.image}>
          <View style={styles.top}>
            <Text style={styles.topText}>PROTESTI V AMERIKI</Text>
          </View>
          <View>
            <Text style={styles.bottomText}>
              Strah - glavni problem elite so jezni posamezniki in neomejen
              pohlep
            </Text>
            <Image source={commentsIcon} style={styles.bottomImg} />
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("SecondArct", { name: "Jane" })}
      >
        <ImageBackground source={image2} style={styles.image}>
          <View style={styles.top}>
            <Text style={styles.topText}>ODSTOP VLADE</Text>
          </View>
          <View>
            <Text style={styles.bottomText}>
              Odstopila je celotna vladna koalicija, volitve drugo nedeljo
            </Text>
            <Image source={commentsIcon} style={styles.bottomImg} />
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("ThirdArct", { name: "Jane" })}
      >
        <ImageBackground source={image3} style={styles.image}>
          <View style={styles.top}>
            <Text style={styles.topText}>CORONA VIRUS PO SVETU</Text>
            <Image source={videoIcon} style={styles.topImg} />
          </View>
          <View>
            <Text style={styles.bottomText}>
              Najdaljsa policijska ura v Evropi. Vlada zagotavlja da so ukrepi
              potrebni
            </Text>
            <Image source={commentsIcon} style={styles.bottomImg} />
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FourthArct", { name: "Jane" })}
      >
        <View>
          <Image source={commercial} style={styles.imageMain} />
          <Text style={styles.bottomCommercial}>
            Oglas
          </Text>
          
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FourthArct", { name: "Jane" })}
      >
        <View>
          <ImageBackground source={image4} style={styles.imageMarg}>
            <View>
              <Text style={styles.topTextMargSport}>
                PRESTAVLJEN ZACETEK LIGE NBA
              </Text>
            </View>
          </ImageBackground>
          <Text style={styles.bottomTextMarg}>
            Bomo prica najkrajsi izvedbi najmocnejse kosarkarske lige na svetu?
          </Text>
          <Image source={commentsIcon} style={styles.bottomImg} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FifthArct", { name: "Jane" })}
      >
        <View>
          <ImageBackground source={image5} style={styles.imageMarg}>
            <View>
              <Text style={styles.topTextMarg}>
                KULTURNIKI BIJEJO TEKMO Z CASOM
              </Text>
              <Image source={fotoIcon} style={styles.topImgMarg} />
            </View>
          </ImageBackground>
          <Text style={styles.bottomTextMarg}>
            Od obljub se ne da ziveti. Zapira se najstarejse kulturno drustvo v Sloveniji
          </Text>
          <Image source={commentsIcon} style={styles.bottomImg} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FourthArct", { name: "Jane" })}
      >
        <View>
          <ImageBackground source={image6} style={styles.imageMarg}>
            <View>
              <Text style={styles.topTextMargFun}>
                AMERISKI OREL V NOVI REALNOSTI
              </Text>
            </View>
          </ImageBackground>
          <Text style={styles.bottomTextMarg}>
            Ptici ki simbolizira moc Amerike grozi pocasno izumrtje
          </Text>
          <Image source={commentsIcon} style={styles.bottomImg} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("ThirdArct", { name: "Jane" })}
      >
      <View>
        <ImageBackground source={image7} style={styles.imageMain}>
          <View style={styles.top}>
            <Text style={styles.topText}>UMETNOST BIVANJA</Text>
          </View>
          <View>
            <Text style={styles.bottomText}>
              Toplejse podnebje vpliva na zivljenja gorski zivali
            </Text>
            <Text  style={styles.bottomTextMain}>
              V Slovenski gorah zivi veliko avtohtonih slovenskih zivali. Zal pa jih zmeraj vec, 
              zaradi neugodnih zivljenjskih razmer potuje proti severu. Se lahko zgodi da v prihodnosti v nasih gorah ne 
              bomo vec nasli kozoroga...
            </Text>
          </View>
        </ImageBackground>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FourthArct", { name: "Jane" })}
      >
        <View>
          <ImageBackground source={image4} style={styles.imageMarg}>
            <View>
              <Text style={styles.topTextMargSport}>
                PRESTAVLJEN ZACETEK LIGE NBA
              </Text>
            </View>
          </ImageBackground>
          <Text style={styles.bottomTextMarg}>
            Bomo prica najkrajsi izvedbi najmocnejse kosarkarske lige na svetu?
          </Text>
          <Image source={commentsIcon} style={styles.bottomImg} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FifthArct", { name: "Jane" })}
      >
        <View>
          <ImageBackground source={image5} style={styles.imageMarg}>
            <View>
              <Text style={styles.topTextMarg}>
                KULTURNIKI BIJEJO TEKMO Z CASOM
              </Text>
              <Image source={fotoIcon} style={styles.topImgMarg} />
            </View>
          </ImageBackground>
          <Text style={styles.bottomTextMarg}>
            Od obljub se ne da ziveti. Zapira se najstarejse kulturno drustvo v Sloveniji
          </Text>
          <Image source={commentsIcon} style={styles.bottomImg} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FourthArct", { name: "Jane" })}
      >
        <View>
          <ImageBackground source={image6} style={styles.imageMarg}>
            <View>
              <Text style={styles.topTextMargFun}>
                AMERISKI OREL V NOVI REALNOSTI
              </Text>
            </View>
          </ImageBackground>
          <Text style={styles.bottomTextMarg}>
            Ptici ki simbolizira moc Amerike grozi pocasno izumrtje
          </Text>
          <Image source={commentsIcon} style={styles.bottomImg} />
        </View>
      </TouchableHighlight> 

      <TouchableHighlight
        onPress={() => navigation.navigate("FirstArct", { name: "Jane" })}
      >
        <ImageBackground source={image1} style={styles.imageAdv}>
          <View>
            <Text style={styles.topTextAdv}>Oglas</Text>
          </View>
          <View>
            <Text style={styles.bottomTextAdv}>
              Strah - glavni problem elite so jezni posamezniki in neomejen
              pohlep
            </Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FirstArct", { name: "Jane" })}
      >
        <ImageBackground source={image2} style={styles.imageAdv}>
          <View>
            <Text style={styles.topTextAdv}>Oglas</Text>
          </View>
          <View>
            <Text style={styles.bottomTextAdv}>
              Strah - glavni problem elite so jezni posamezniki in neomejen
              pohlep
            </Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FirstArct", { name: "Jane" })}
      >
        <ImageBackground source={image3} style={styles.imageAdv}>
          <View>
            <Text style={styles.topTextAdv}>Oglas</Text>
          </View>
          <View>
            <Text style={styles.bottomTextAdv}>
              Strah - glavni problem elite so jezni posamezniki in neomejen
              pohlep
            </Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FirstArct", { name: "Jane" })}
      >
        <ImageBackground source={image4} style={styles.imageAdv}>
          <View>
            <Text style={styles.topTextAdv}>Oglas</Text>
          </View>
          <View>
            <Text style={styles.bottomTextAdv}>
              Strah - glavni problem elite so jezni posamezniki in neomejen
              pohlep
            </Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("FirstArct", { name: "Jane" })}
      >
        <ImageBackground source={image5} style={styles.imageAdv}>
          <View>
            <Text style={styles.topTextAdv}>Oglas</Text>
          </View>
          <View>
            <Text style={styles.bottomTextAdv}>
              Strah - glavni problem elite so jezni posamezniki in neomejen
              pohlep
            </Text>
          </View>
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
  imageAdv: {
    width: "auto",
    height: 170,
    justifyContent: "space-between",
  },
  imageMain: {
    width: "auto",
    height: 500,
    justifyContent: "space-between",
    margin: 10
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topText: {
    backgroundColor: "blue",
    color: "white",
    margin: 10,
    padding: 5,
    fontWeight: "bold",
  },
  topTextAdv: {
    backgroundColor: "grey",
    color: "white",
    padding: 5,
    alignSelf: 'flex-end',
  },
  bottomTextAdv: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  topImg: {
    width: 25,
    height: 20,
    margin: 15,
  },
  bottomText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  },
  bottomTextMain: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  bottomImg: {
    width: 25,
    height: 20,
    marginLeft: 15,
    marginBottom: 15,
  },
  imageMarg: {
    width: "auto",
    height: 200,
    margin: 10,
  },
  topTextMarg: {
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    fontWeight: "bold",
    textAlign: "center",
  },  
  topTextMargSport: {
    backgroundColor: "green",
    color: "white",
    padding: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  topTextMargFun: {
    backgroundColor: "red",
    color: "white",
    padding: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomTextMarg: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  },
  topImgMarg: {
    width: 25,
    height: 20,
    margin: 15,
    alignSelf: 'flex-end'
  },
  bottomCommercial: {
    color: "grey",
    fontSize: 20,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    paddingBottom: 10
  }
});
