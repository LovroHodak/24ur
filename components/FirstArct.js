import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";

/* IMAGES */
const petrol = {
  uri:
    "https://www.petrol.eu/binaries/content/assets/mediakit/logotip-petrol-za-jugovzhodne-trge/petrol-logo-brez-slogana-cmyk.jpg",
};
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

export default function FirstArct({ navigation, route }) {
  //console.log(route.params)
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <Image
        source={route.params.backgroundImageHomeScreen}
        style={styles.imageHeader}
      />
      <View>
        <Text style={styles.smallTitleHeader}>
          {route.params.titleTopLeftHomeScreen}
        </Text>
      </View>
      <Text style={styles.titleHeader}>{route.params.textInfoHomeScreen}</Text>
      <View style={styles.cityShareHeader}>
        <Text style={styles.cityDateHeader}>
          {route.params.cityArcticle}, {route.params.dateArcticle},
          {route.params.timeArcticle}
        </Text>
        <Image source={shareIcon} style={styles.shareIcon} />
      </View>
      <View style={styles.readTimeHeader}>
        <Image source={bookIcon} style={styles.bookIcon} />
        <Text style={styles.readTimeTextHeader}>
          PREDVIDEN CAS BRANJA:
          <Text style={styles.readTimeNumberHeader}>
            {" "}
            {route.params.readTimeArcticle} min
          </Text>
        </Text>
      </View>
      <View style={styles.authorCommentsHeader}>
        <View style={styles.authorViewHeader}>
          <Image source={authorIcon} style={styles.authorIcon} />
          <View style={styles.authorDataHeader}>
            <Text style={styles.authorText1Header}>AVTOR</Text>
            <Text style={styles.authorText2Header}>
              {route.params.authorArcticle}
            </Text>
          </View>
        </View>
        <View style={styles.commentsViewTouchableHeader}>
          <TouchableHighlight
            onPress={() =>
              navigation.navigate("CommentsFirstArct", { name: "Jane" })
            }
          >
            <View style={styles.commentsViewHeader}>
              <Image source={commentsIcon} style={styles.commentsIcon} />
              <View style={styles.commentsDataHeader}>
                <Text style={styles.commentsTextHeader}>KOMENTARJI</Text>
                <Text style={styles.commentsNumberHeader}>18</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      {/* MAIN */}
      <Text style={styles.titlePara}>{route.params.fabulaArcticle}</Text>

      <View style={styles.imgDescView}>
        <Image source={route.params.image1Article} style={styles.firstImg} />
        <Text style={styles.firstImgDesc}>
          {route.params.textImage1Arcticle}
        </Text>
      </View>

      <Text style={styles.paragraph}>{route.params.textArcticle}</Text>

      {/*  UNSORTED */}

      <Text style={styles.paragraph}>{route.params.textArcticle}</Text>

      <TouchableHighlight
        onPress={() => navigation.navigate("Comments", { name: "Jane" })}
      >
        <View style={styles.linkArticleView}>
          <Image source={image2} style={styles.linkImg} />
          <View style={styles.linkViewText}>
            <Text style={styles.linkText1}>PREBERITE SE</Text>
            <Text style={styles.linkText2}>
              Suker za 24UR: Goli v serie A so za Ilicica odskocna deska, ...
            </Text>
          </View>
        </View>
      </TouchableHighlight>

      <Text style={styles.paragraph}>{route.params.textArcticle}</Text>

      <Text style={styles.paragraph}>{route.params.textArcticle}</Text>

      <Image
        style={{ height: 100, width: "auto", margin: 10 }}
        source={coronaAttention}
      />

      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {route.params.tagWordsArcticle.map((word, i) => {
            return (
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
                key={i}
              >
                {word}
              </Text>
            );
          })}
        </ScrollView>
      </View>

      <TouchableHighlight
        onPress={() =>
          navigation.navigate("CommentsFirstArct", { name: "Jane" })
        }
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

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
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

      <View style={{ margin: 10 }}>
        <Image
          source={petrol}
          style={{ height: 100, width: "100%", alignSelf: "center" }}
        />
      </View>
    </ScrollView>
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
  },
  imgDescView: {
    borderTopWidth: 1,
    borderTopColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  firstImg: { height: 200, width: "auto", margin: 10 },
  firstImgDesc: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    fontSize: 13,
  },
  paragraph: { margin: 10, fontSize: 16, padding: 5 },
  linkArticleView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    backgroundColor: "grey",
    margin: 10,
    paddingBottom: 5,
  },
  linkImg: { width: "25%", height: "auto", margin: 5 },
  linkViewText: { width: "75%" },
  linkText1: {
    backgroundColor: "blue",
    color: "white",
    alignSelf: "flex-start",
    marginLeft: 5,
    marginTop: 5,
    padding: 3,
    fontWeight: "bold",
    fontSize: 12,
  },
  linkText2: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    padding: 5,
    fontSize: 15,
  },
});
