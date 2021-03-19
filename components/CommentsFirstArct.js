import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import comments from "../DBSimulation/comments";
import OneComment from "./OneComment";

/* const handleLike = (id) => {
  const likedComments = comments.map((comment) => {
    if(comment.id === id) {
      
    }
  })
} */

const profileImg = {
  uri: "https://www.telugubulletin.com/wp-content/uploads/2019/11/Music.jpg",
};
const replyIcon = {
  uri:
    "https://cdn4.iconfinder.com/data/icons/email-and-messages/128/Email_arrow_left_reply-512.png",
};
const thumbUpIcon = {
  uri: "https://webstockreview.net/images/thumbs-up-icon-png-2.png",
};
const thumbDownIcon = {
  uri:
    "https://cdn.iconscout.com/icon/premium/png-512-thumb/thumbs-down-38-786137.png",
};

export default function CommentsFirstArct({ navigation, route }) {
  console.log('HERERERERERE', route.params)
  let func = route.params.addLike
  //func()
  

  return (
    <ScrollView style={{ flex: 1 }}>
      {route.params.comments.map((com, i) => {
        return (
          <View key={i} style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={com.profileFoto}
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text
                    style={{ fontWeight: "bold", color: "blue", fontSize: 18 }}
                  >
                    {com.name}
                  </Text>
                  <Text style={{ color: "grey", fontSize: 18 }}>
                    {com.date}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  color: "green",
                  alignSelf: "center",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                  fontWeight: "bold",
                  borderRadius: 3,
                }}
              >
                {com.likes - com.dislikes}
              </Text>
            </View>
            <Text style={{ margin: 10, fontSize: 18 }}>{com.comment}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image style={{ height: 25, width: 25 }} source={replyIcon} />
                <Text
                  style={{
                    fontSize: 18,
                    color: "grey",
                    fontWeight: "bold",
                    marginLeft: 5,
                  }}
                >
                  ODGOVORI
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", marginRight: 5 }}>
                  <TouchableHighlight onPress={() => func(com.id)}>
                    <Image
                      style={{ height: 25, width: 25 }}
                      source={thumbUpIcon}
                    />
                  </TouchableHighlight>

                  <Text
                    style={{
                      fontSize: 18,
                      color: "grey",
                      fontWeight: "bold",
                      marginLeft: 5,
                    }}
                  >
                    {com.likes}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TouchableHighlight>
                    <Image
                      style={{ height: 30, width: 30 }}
                      source={thumbDownIcon}
                    />
                  </TouchableHighlight>

                  <Text
                    style={{
                      fontSize: 18,
                      color: "grey",
                      fontWeight: "bold",
                      marginLeft: 5,
                    }}
                  >
                    {com.dislikes}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}

      {/* <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={profileImg}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: "bold", color: "blue", fontSize: 18 }}>
                humblebrag
              </Text>
              <Text style={{ color: "grey", fontSize: 18 }}>
                15.03.2021, 14:30:00
              </Text>
            </View>
          </View>
          <Text
            style={{
              borderWidth: 1,
              borderColor: "green",
              color: "green",
              alignSelf: "center",
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              fontWeight: "bold",
              borderRadius: 3,
            }}
          >
            + 1
          </Text>
        </View>
        <Text style={{ margin: 10, fontSize: 18 }}>
          Podpiram maske. Podpiram socialno distanciranje. Podpiram testiranje.
          Ne podpiram cepljenja z "insta" cepivi. Če bi bil v ogroženi skupini,
          bi se cepil, ker pa nisem se ne bom, dokler ne bo narejeno cepivo, ki
          omogoča zaščito pred vsemi sevi.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image style={{ height: 25, width: 25 }} source={replyIcon} />
            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              ODGOVORI
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", marginRight: 5 }}>
              <Image style={{ height: 25, width: 25 }} source={thumbUpIcon} />
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                1
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ height: 30, width: 30 }} source={thumbDownIcon} />
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                0
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={profileImg}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: "bold", color: "blue", fontSize: 18 }}>
                humblebrag
              </Text>
              <Text style={{ color: "grey", fontSize: 18 }}>
                15.03.2021, 14:30:00
              </Text>
            </View>
          </View>
          <Text
            style={{
              borderWidth: 1,
              borderColor: "green",
              color: "green",
              alignSelf: "center",
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              fontWeight: "bold",
              borderRadius: 3,
            }}
          >
            + 1
          </Text>
        </View>
        <Text style={{ margin: 10, fontSize: 18 }}>
          Podpiram maske. Podpiram socialno distanciranje. Podpiram testiranje.
          Ne podpiram cepljenja z "insta" cepivi. Če bi bil v ogroženi skupini,
          bi se cepil, ker pa nisem se ne bom, dokler ne bo narejeno cepivo, ki
          omogoča zaščito pred vsemi sevi.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image style={{ height: 25, width: 25 }} source={replyIcon} />
            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              ODGOVORI
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", marginRight: 5 }}>
              <Image style={{ height: 25, width: 25 }} source={thumbUpIcon} />
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                1
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ height: 30, width: 30 }} source={thumbDownIcon} />
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                0
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={profileImg}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: "bold", color: "blue", fontSize: 18 }}>
                humblebrag
              </Text>
              <Text style={{ color: "grey", fontSize: 18 }}>
                15.03.2021, 14:30:00
              </Text>
            </View>
          </View>
          <Text
            style={{
              borderWidth: 1,
              borderColor: "green",
              color: "green",
              alignSelf: "center",
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              fontWeight: "bold",
              borderRadius: 3,
            }}
          >
            + 1
          </Text>
        </View>
        <Text style={{ margin: 10, fontSize: 18 }}>
          Podpiram maske. Podpiram socialno distanciranje. Podpiram testiranje.
          Ne podpiram cepljenja z "insta" cepivi. Če bi bil v ogroženi skupini,
          bi se cepil, ker pa nisem se ne bom, dokler ne bo narejeno cepivo, ki
          omogoča zaščito pred vsemi sevi.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image style={{ height: 25, width: 25 }} source={replyIcon} />
            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              ODGOVORI
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", marginRight: 5 }}>
              <Image style={{ height: 25, width: 25 }} source={thumbUpIcon} />
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                1
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ height: 30, width: 30 }} source={thumbDownIcon} />
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                0
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={profileImg}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: "bold", color: "blue", fontSize: 18 }}>
                humblebrag
              </Text>
              <Text style={{ color: "grey", fontSize: 18 }}>
                15.03.2021, 14:30:00
              </Text>
            </View>
          </View>
          <Text
            style={{
              borderWidth: 1,
              borderColor: "green",
              color: "green",
              alignSelf: "center",
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              fontWeight: "bold",
              borderRadius: 3,
            }}
          >
            + 1
          </Text>
        </View>
        <Text style={{ margin: 10, fontSize: 18 }}>
          Podpiram maske. Podpiram socialno distanciranje. Podpiram testiranje.
          Ne podpiram cepljenja z "insta" cepivi. Če bi bil v ogroženi skupini,
          bi se cepil, ker pa nisem se ne bom, dokler ne bo narejeno cepivo, ki
          omogoča zaščito pred vsemi sevi.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image style={{ height: 25, width: 25 }} source={replyIcon} />
            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              ODGOVORI
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", marginRight: 5 }}>
              <Image style={{ height: 25, width: 25 }} source={thumbUpIcon} />
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                1
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image style={{ height: 30, width: 30 }} source={thumbDownIcon} />
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                0
              </Text>
            </View>
          </View>
        </View>
      </View> */}
    </ScrollView>
  );
}
