import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_899_6745}>
        <View style={styles.View_899_6746}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b0/fbfe/fcddabed8b85efffd5e8b875186ee66d"
            }}
            style={styles.ImageBackground_899_6747}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1745/d7ee/ceff338ececdc6dc63a9a4e45ec439cd"
            }}
            style={styles.ImageBackground_899_6749}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd71/bb79/f5aa447614f94c1a1976bc7938b2131a"
            }}
            style={styles.ImageBackground_899_6751}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ee/fa77/e2a6c64facd5fc0efda188c710eda6fd"
            }}
            style={styles.ImageBackground_899_6753}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2958/a4ff/4d31b946098a4e9bcd65976fd5fba9f3"
            }}
            style={styles.ImageBackground_899_6755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c64/aaca/1ef05f5d031ea75df9e85dac9aa3eda4"
            }}
            style={styles.ImageBackground_899_6757}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a28/19e9/4c728430b01890bebfaf702879ea94f5"
            }}
            style={styles.ImageBackground_899_6759}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c86e/dab9/677d26555bdad58aaa79c80f768fd592"
            }}
            style={styles.ImageBackground_899_6761}
          />
        </View>
        <View style={styles.View_899_6763}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/006c/d024/a3f248c8c07e31544e7c4b11073cf69a"
            }}
            style={styles.ImageBackground_899_6764}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/533e/65b6/a65163543d1f69c1e229ed6b5f567d17"
            }}
            style={styles.ImageBackground_899_6766}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bff8/7257/68389820f860e2689bb969ebe5d2c1a9"
            }}
            style={styles.ImageBackground_899_6768}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab5f/c676/5609847934d433026a02e9e54b7d7a99"
            }}
            style={styles.ImageBackground_899_6770}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e177/eae3/4272f2bb882a80e67dc037b5c7cfbd38"
            }}
            style={styles.ImageBackground_899_6772}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d968/cfb3/ba509e6cb9107ea89b0602b6e86bc5ae"
            }}
            style={styles.ImageBackground_899_6774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83ef/f1d5/998ed17c016ff34f6c4ec9514f49eec0"
            }}
            style={styles.ImageBackground_899_6776}
          />
        </View>
      </View>
      <View style={styles.View_899_6791}>
        <View style={styles.View_899_6792}>
          <View style={styles.View_899_6793} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_899_6794}
          />
          <View style={styles.View_899_6795} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_899_6796}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_899_6800}
        />
        <View style={styles.View_899_6805}>
          <View style={styles.View_899_6806}>
            <Text style={styles.Text_899_6806}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_909_719} />
      <View style={styles.View_909_720} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_899_6745: {
    width: wp("42.245210656797255%"),
    minWidth: wp("42.245210656797255%"),
    height: hp("8.196740072281635%"),
    minHeight: hp("8.196740072281635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.985507246376812%"),
    top: hp("59.15300546448088%")
  },
  View_899_6746: {
    width: wp("25.846411294983206%"),
    height: hp("4.275298770008192%"),
    top: hp("1.811226599854841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.398819633152172%")
  },
  ImageBackground_899_6747: {
    width: wp("3.105808801697072%"),
    height: hp("4.275298770008192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_6749: {
    width: wp("3.1795089371538396%"),
    height: hp("4.275298770008192%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9997782684178773%")
  },
  ImageBackground_899_6751: {
    width: wp("1.010699778939215%"),
    height: hp("4.275298770008192%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.07580625377416%")
  },
  ImageBackground_899_6753: {
    width: wp("2.126689348819751%"),
    height: hp("4.275298770008192%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.665020191727052%")
  },
  ImageBackground_899_6755: {
    width: wp("3.074228590813236%"),
    height: hp("4.275298770008192%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.687056536835748%")
  },
  ImageBackground_899_6757: {
    width: wp("3.3900786137235337%"),
    height: hp("4.275298770008192%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.497301479468604%")
  },
  ImageBackground_899_6759: {
    width: wp("1.0107046164176314%"),
    height: hp("4.275298770008192%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.783384756189605%")
  },
  ImageBackground_899_6761: {
    width: wp("3.105811335614338%"),
    height: hp("4.275298770008192%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.74057876660629%")
  },
  View_899_6763: {
    width: wp("13.703497366052893%"),
    minWidth: wp("13.703497366052893%"),
    height: hp("8.196740072281635%"),
    minHeight: hp("8.196740072281635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_899_6764: {
    width: wp("3.158001277757728%"),
    height: hp("2.8388203167524493%"),
    top: hp("2.8954928038550136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.088890775966185%")
  },
  ImageBackground_899_6766: {
    width: wp("7.620200097272938%"),
    height: hp("2.649525345348921%"),
    top: hp("5.547211860698418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.083347486413047%")
  },
  ImageBackground_899_6768: {
    width: wp("3.9283259479319996%"),
    height: hp("2.7712008992179493%"),
    top: hp("4.827639053428101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_6770: {
    width: wp("11.779173330408362%"),
    height: hp("2.334313053902381%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4497471316425106%")
  },
  ImageBackground_899_6772: {
    width: wp("9.156564353168875%"),
    height: hp("3.8911087265431554%"),
    top: hp("3.604075947745905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1263492602657017%")
  },
  ImageBackground_899_6774: {
    width: wp("5.582894680004765%"),
    height: hp("4.753243076345308%"),
    top: hp("0.6790994946422444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.611172441123188%")
  },
  ImageBackground_899_6776: {
    width: wp("6.698628209063397%"),
    height: hp("5.15759942310104%"),
    top: hp("1.2756264274888949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.196911798007246%")
  },
  View_899_6791: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_6792: {
    width: wp("5.876337502889587%"),
    minWidth: wp("5.876337502889587%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.3679389328253073%")
  },
  View_899_6793: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(165, 171, 193, 1)",
    borderWidth: 1
  },
  ImageBackground_899_6794: {
    width: wp("0.32078212010111784%"),
    minWidth: wp("0.32078212010111784%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("0.500913526191086%")
  },
  View_899_6795: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(165, 171, 193, 1)",
    borderWidth: 1
  },
  ImageBackground_899_6796: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_899_6800: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_899_6805: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_6806: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_899_6806: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_909_719: {
    width: wp("136.271940222109%"),
    minWidth: wp("136.271940222109%"),
    height: hp("86.63260871595372%"),
    minHeight: hp("86.63260871595372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.75393455615942%"),
    top: hp("59.15301380261697%"),
    backgroundColor: "rgba(0, 204, 173, 1)"
  },
  View_909_720: {
    width: wp("63.55769945227582%"),
    minWidth: wp("63.55769945227582%"),
    height: hp("37.483511335862794%"),
    minHeight: hp("37.483511335862794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22216325105676%"),
    top: hp("28.004647343536544%"),
    backgroundColor: "rgba(249, 169, 2, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
