import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView 
} from "react-native";

const Albumlist = () => {
  return (
    <ScrollView>
    <View style={styles.ContainerStyle}>

    <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://lastfm.freetls.fastly.net/i/u/770x0/f936c468000a58a86bc80ebee41ef289.jpg#f936c468000a58a86bc80ebee41ef289"
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.songName}>Songs I Wrote in My Bedroom</Text>
            <Text style={styles.authorName}>Anson Seabra</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                "https://lastfm.freetls.fastly.net/i/u/300x300/574a541c5c8f55a1df3f28580db72a08.jpg"
            }}
          />
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://lastfm.freetls.fastly.net/i/u/770x0/f936c468000a58a86bc80ebee41ef289.jpg#f936c468000a58a86bc80ebee41ef289"
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.songName}>Feeling For My Life</Text>
            <Text style={styles.authorName}>Anson Seabra</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                "https://i.kfs.io/album/global/139508953,0v1/fit/500x500.jpg"
            }}
          />
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://lastfm.freetls.fastly.net/i/u/770x0/f936c468000a58a86bc80ebee41ef289.jpg#f936c468000a58a86bc80ebee41ef289"
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.songName}>Peter Pan Was Right</Text>
            <Text style={styles.authorName}>Anson Seabra</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                "https://lastfm.freetls.fastly.net/i/u/300x300/1038f79294fe6be7f10f817132df642e.jpg"
            }}
          />
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://lastfm.freetls.fastly.net/i/u/770x0/f936c468000a58a86bc80ebee41ef289.jpg#f936c468000a58a86bc80ebee41ef289"
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.songName}>Welcome to Wonderland</Text>
            <Text style={styles.authorName}>Anson Seabra</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                "https://lastfm.freetls.fastly.net/i/u/300x300/56b8f05b2939f4277972f25466383b36.jpg"
            }}
          />
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://lastfm.freetls.fastly.net/i/u/770x0/f936c468000a58a86bc80ebee41ef289.jpg#f936c468000a58a86bc80ebee41ef289"
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.songName}>Robin Hood</Text>
            <Text style={styles.authorName}>Anson Seabra</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                "https://lastfm.freetls.fastly.net/i/u/300x300/84ce5fdddde1f0912229f7412d0b9a06.jpg"
            }}
          />
        </View>
      </View>
      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
ContainerStyle:{
    backgroundColor:"#0B7189"
},
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
    borderRadius:50,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  authorName:{
    color:"#5C6B73"
  },
  songName:{
    color:"#324376",
    fontSize:20,
    fontWeight:"bold"
  },
  cardContainerStyle: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#FFD791",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom:10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#C2DFE3"
  },
  imageStyle: {
    height: 300,
    width: null,
    borderRadius:20,
  }
});

export default Albumlist;
