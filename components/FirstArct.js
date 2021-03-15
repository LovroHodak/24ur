import React, { useRef, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";

const petrol = {
  uri: 'https://www.petrol.eu/binaries/content/assets/mediakit/logotip-petrol-za-jugovzhodne-trge/petrol-logo-brez-slogana-cmyk.jpg'
}


const image1 = {
  uri:
    "https://images.freeimages.com/images/large-previews/529/inmigrants-1569643.jpg",
};

const image2 = {
  uri:
    "https://images.freeimages.com/images/large-previews/529/inmigrants-1569643.jpg",
};

const shareIcon = {
  uri:
    "https://cdn2.iconfinder.com/data/icons/ui-thick-lines/620/share_android-512.png",
};

const bookIcon = {
  uri: "https://cdn2.iconfinder.com/data/icons/book-22/210/1461-512.png",
};

const authorIcon = {
  uri:
    "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-circle-512.png",
};

const commentsIcon = {
  uri: "http://simpleicon.com/wp-content/uploads/comment.png",
};

const virusImg = {
  uri:
    "https://images.freeimages.com/images/large-previews/e1f/virus-1309840.jpg",
};

const coronaAttention = {
  uri:
    "https://images.24ur.com/media/images/1200xX/Jan2021/19e37a0d328b426949e7_62506802.jpg?v=051b",
};

export default function FirstArct({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image source={image1} style={styles.image} />
      <View>
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            backgroundColor: "blue",
            fontWeight: "bold",
            padding: 5,
            color: "white",
            alignSelf: "flex-start",
          }}
        >
          KORONA
        </Text>
      </View>
      <Text
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          fontWeight: "bold",
          paddingRight: 5,
          paddingTop: 5,
          color: "black",
          fontSize: 25,
        }}
      >
        IJS: Epidemija stagnira, a nas novi sevi ze dohitevajo
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "grey", marginLeft: 10, fontSize: 15 }}>
          Ljubljana, 14.3.2021, 15:46
        </Text>
        <Image
          source={shareIcon}
          style={{ width: 25, height: 25, marginRight: 20 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          borderWidth: 1,
          alignSelf: "flex-start",
          marginLeft: 10,
          borderColor: "grey",
          borderRadius: 3,
          marginBottom: 10,
        }}
      >
        <Image
          source={bookIcon}
          style={{ width: 17, height: 17, alignSelf: "center", marginLeft: 5 }}
        />
        <Text style={{ fontSize: 15, marginLeft: 5, marginRight: 5 }}>
          PREDVIDEN CAS BRANJA:
          <Text style={{ fontWeight: "bold" }}>2 min</Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View
          style={{
            flexDirection: "row",
            borderColor: "grey",
            borderWidth: 2,
            width: "50%",
          }}
        >
          <Image
            source={authorIcon}
            style={{
              width: 25,
              height: 25,
              alignSelf: "center",
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Text style={{ color: "grey" }}>AVTOR</Text>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Maja Racic</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "grey",
            borderWidth: 2,
            width: "50%",
          }}
        >
          <Image
            source={commentsIcon}
            style={{
              width: 25,
              height: 25,
              alignSelf: "center",
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Text style={{ color: "grey" }}>KOMENTARJI</Text>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>18</Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 15,
          margin: 10,
          marginBottom: 10,
          padding: 5,
        }}
      >
        "Potrudimo se krivulje obrniti čim bolj strmo navzdol, ker nas
        dohitevajo novi bolj kužni sevi, ki se v trenutnih pogojih hitro
        razmnožujejo," so v aktualni projekciji širjenja bolezni covid-19 v
        Sloveniji zapisali na Institutu Jožefa Stefana. Po njihovih ocenah je
        reprodukcijsko število R spet nekoliko naraslo in znaša 1 (dan prej
        0,92). V soboto je še veljalo, da bi povprečno število pozitivnih oseb
        lahko padlo pod 300 na dan do konca aprila. "Dokler epidemija ne bo
        začela vidno upadati, ne bomo podajali napovedi, ker so negotovosti
        prevelike," pa so zapisali danes.
      </Text>

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "grey",
          borderBottomWidth: 1,
          borderBottomColor: "grey",
        }}
      >
        <Image
          source={virusImg}
          style={{ height: 200, width: "auto", margin: 10 }}
        />
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            fontSize: 13,
          }}
        >
          Na svetovnem tekmovanju, katerega cilj je bil izkoristiti moč podatkov
          in umetne inteligence v boju proti pandemiji, je ekipa IJS osvojila
          drugo mesto.FOTO: Dreamstime
        </Text>
      </View>

      <Text style={{ margin: 10, fontSize: 16, padding: 5 }}>
        <Text style={{ fontStyle: "italic" }}>
          "Epidemijo bi bilo dobro čim prej toliko zmanjšati, da bodo lahko
          epidemiologi sledili vsem stikom,"
        </Text>
        so v aktualni projekciji širjenja bolezni covid-19 v Sloveniji uvodoma
        zapisali na Institutu Jožefa Stefana (IJS), kjer so pred kratkim na
        svetovnem tekmovanju, katerega cilj je bil izkoristiti moč podatkov in
        umetne inteligence v boju proti pandemiji, osvojili drugo mesto in si
        prislužili nagrado v vrednosti 210.000 evrov. "To najbolj učinkovito
        omejuje širjenje virusa in bo močno olajšalo obvladovanje novega bolj
        kužnega seva, ko oziroma če se bo razširil," so dodali.
      </Text>

      <Text style={{ margin: 10, fontSize: 16, padding: 5 }}>
        Epidemija, kot ugotavljajo na IJS, predvidoma stagnira.
        <Text style={{ fontStyle: "italic" }}>
          "Potrudimo se krivulje obrniti čim bolj strmo navzdol, ker nas
          dohitevajo in verjetno že prehitevajo novi bolj kužni sevi, ki se v
          trenutnih pogojih hitro razmnožujejo,"
        </Text>
        izpostavljajo. Po njihovih besedah je pomembno, da zmanjšamo število
        hospitaliziranih, ocenjeno reprodukcijsko število pa je spet nekoliko
        naraslo in znaša 1 (dan prej 0,92).
      </Text>

      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 3,
          backgroundColor: "grey",
          margin: 10,
          paddingBottom: 5,
        }}
      >
        <Image
          source={image2}
          style={{ width: "25%", height: "auto", margin: 5 }}
        />
        <View style={{ width: "75%" }}>
          <Text
            style={{
              backgroundColor: "blue",
              color: "white",
              alignSelf: "flex-start",
              marginLeft: 5,
              marginTop: 5,
              padding: 3,
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            PREBERITE SE
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              alignSelf: "flex-start",
              padding: 5,
              fontSize: 15,
            }}
          >
            Suker za 24UR: Goli v serie A so za Ilicica odskocna deska, ...
          </Text>
        </View>
      </View>

      <Text style={{ margin: 10, fontSize: 16, padding: 5 }}>
        Epidemija, kot ugotavljajo na IJS, predvidoma stagnira.
        <Text style={{ fontStyle: "italic" }}>
          "Potrudimo se krivulje obrniti čim bolj strmo navzdol, ker nas
          dohitevajo in verjetno že prehitevajo novi bolj kužni sevi, ki se v
          trenutnih pogojih hitro razmnožujejo,"
        </Text>
        izpostavljajo. Po njihovih besedah je pomembno, da zmanjšamo število
        hospitaliziranih, ocenjeno reprodukcijsko število pa je spet nekoliko
        naraslo in znaša 1 (dan prej 0,92).
      </Text>

      <Text style={{ margin: 10, fontSize: 16, padding: 5 }}>
        <Text style={{ fontStyle: "italic" }}>
          "Epidemijo bi bilo dobro čim prej toliko zmanjšati, da bodo lahko
          epidemiologi sledili vsem stikom,"
        </Text>
        so v aktualni projekciji širjenja bolezni covid-19 v Sloveniji uvodoma
        zapisali na Institutu Jožefa Stefana (IJS), kjer so pred kratkim na
        svetovnem tekmovanju, katerega cilj je bil izkoristiti moč podatkov in
        umetne inteligence v boju proti pandemiji, osvojili drugo mesto in si
        prislužili nagrado v vrednosti 210.000 evrov. "To najbolj učinkovito
        omejuje širjenje virusa in bo močno olajšalo obvladovanje novega bolj
        kužnega seva, ko oziroma če se bo razširil," so dodali.
      </Text>

      <Image
        style={{ height: 100, width: "auto", margin: 10 }}
        source={coronaAttention}
      />

      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text
            style={{
              margin: 10,
              borderColor: "blue",
              borderWidth: 1,
              color: "blue",
              fontWeight: "bold",
              padding: 3,
              paddingRight: 10,
              paddingLeft: 10,
              borderRadius: 3,
            }}
          >
            Epidemija
          </Text>
          <Text
            style={{
              margin: 10,
              borderColor: "blue",
              borderWidth: 1,
              color: "blue",
              fontWeight: "bold",
              padding: 3,
              paddingRight: 10,
              paddingLeft: 10,
              borderRadius: 3,
            }}
          >
            Corona
          </Text>
          <Text
            style={{
              margin: 10,
              borderColor: "blue",
              borderWidth: 1,
              color: "blue",
              fontWeight: "bold",
              padding: 3,
              paddingRight: 10,
              paddingLeft: 10,
              borderRadius: 3,
            }}
          >
            Slovenija
          </Text>
          <Text
            style={{
              margin: 10,
              borderColor: "blue",
              borderWidth: 1,
              color: "blue",
              fontWeight: "bold",
              padding: 3,
              paddingRight: 10,
              paddingLeft: 10,
              borderRadius: 3,
            }}
          >
            Ukrepi
          </Text>
          <Text
            style={{
              margin: 10,
              borderColor: "blue",
              borderWidth: 1,
              color: "blue",
              fontWeight: "bold",
              padding: 3,
              paddingRight: 10,
              paddingLeft: 10,
              borderRadius: 3,
            }}
          >
            Vlada
          </Text>
          <Text
            style={{
              margin: 10,
              borderColor: "blue",
              borderWidth: 1,
              color: "blue",
              fontWeight: "bold",
              padding: 3,
              paddingRight: 10,
              paddingLeft: 10,
              borderRadius: 3,
            }}
          >
            Stroka
          </Text>
        </ScrollView>
      </View>

      <TouchableHighlight
        onPress={() => navigation.navigate("SecondArct", { name: "Jane" })}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "grey",
          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "blue",
            color: "white",
            margin: 10,
            padding: 10,
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: 1,
            borderRadius: 3,
          }}
        >
          KOMENTARJI
        </Text>
      </TouchableHighlight>

      <View style={{ flexDirection: "row", margin: 10 }}>
        <Image
          source={bookIcon}
          style={{ width: 25, height: 25, alignSelf: "center", marginLeft: 5 }}
        />
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            alignSelf: "center",
            marginLeft: 20,
            fontSize: 20,
          }}
        >
          SORODNI CLANKI
        </Text>
      </View>

    
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 20}}>
          <TouchableHighlight
            onPress={() => navigation.navigate("SecondArct", { name: "Jane" })}
            style={{
              margin: 10,
              width: 200,
            }}
          >
          <View>
            <Image
              source={image1}
              style={{ width: 200, height: 100, marginRight: 20 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Kampl obsedel ob remiju Lepziga z Eintrachtom
            </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate("SecondArct", { name: "Jane" })}
            style={{
              margin: 10,
              width: 200,
            }}
          >
          <View>
            <Image
              source={image1}
              style={{ width: 200, height: 100, marginRight: 20 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Kampl obsedel ob remiju Lepziga z Eintrachtom
            </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate("SecondArct", { name: "Jane" })}
            style={{
              margin: 10,
              width: 200,
            }}
          >
          <View>
            <Image
              source={image1}
              style={{ width: 200, height: 100, marginRight: 20 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Kampl obsedel ob remiju Lepziga z Eintrachtom
            </Text>
            </View>
          </TouchableHighlight>
        </ScrollView>

<View style={{margin: 10}}>
        <Image source={petrol} style={{ height: 100, width: '100%', alignSelf: 'center'}} />
        </View>
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
  },
});
