import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";

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

export default function OneComment(props) {
  const [likes, setLikes] = useState(props.com.likes);
  const [dislikes, setDislikes] = useState(props.com.dislikes);

  //console.log('CMOOOOON', props.func)
  //props.func()
  console.log(props)

  let idd = props.com.id
  console.log(idd)

  const likeIt = (idd) => {
    setLikes(likes + 1)
    /* props.func(idd) */
  }
  

  return (
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
            source={props.com.profileFoto}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: "bold", color: "blue", fontSize: 18 }}>
              {props.com.name}
            </Text>
            <Text style={{ color: "grey", fontSize: 18 }}>{props.com.date}</Text>
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
          {likes - dislikes}
        </Text>
      </View>
      <Text style={{ margin: 10, fontSize: 18 }}>{props.com.comment}</Text>
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
            <TouchableHighlight onPress={likeIt}>
              <Image style={{ height: 25, width: 25 }} source={thumbUpIcon} />
            </TouchableHighlight>

            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              {likes}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight onPress={() => setDislikes(dislikes + 1)}>
              <Image style={{ height: 30, width: 30 }} source={thumbDownIcon} />
            </TouchableHighlight>

            <Text
              style={{
                fontSize: 18,
                color: "grey",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              {dislikes}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
