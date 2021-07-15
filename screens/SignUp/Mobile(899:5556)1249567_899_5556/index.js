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
      <View style={styles.View_909_721} />
      <View style={styles.View_909_722} />
      <View style={styles.View_899_6807}>
        <View style={styles.View_899_6808}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f088/485d/2a22ca1436e5d335a6f44719684f55e5"
            }}
            style={styles.ImageBackground_899_6809}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/941a/46f4/d6fd0f98370bef0b5e5912a4d5b10314"
            }}
            style={styles.ImageBackground_899_6811}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f83e/d052/fb785b2041dca96d82cb4066b94303b3"
            }}
            style={styles.ImageBackground_899_6813}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d10d/d896/f72fcbaa43448f9892ee04cf8a00e275"
            }}
            style={styles.ImageBackground_899_6815}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3922/17f6/23373f9b4d6f067e915cf00699d41d5a"
            }}
            style={styles.ImageBackground_899_6817}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c047/deb2/69881aab1a8598788768f59c923844a4"
            }}
            style={styles.ImageBackground_899_6819}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/667e/9067/6ed9e7ce8a4d9a63724e831d2e1edab5"
            }}
            style={styles.ImageBackground_899_6821}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f03/8170/cc7e46a5f9c38d5c7ecd29d773a9a443"
            }}
            style={styles.ImageBackground_899_6823}
          />
        </View>
        <View style={styles.View_899_6825}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/127e/9cfe/98397996d725ecab3df0c59abc69712a"
            }}
            style={styles.ImageBackground_899_6826}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2646/0c2d/0bd5cb0a7d0af66ea3fced8b3e04fc98"
            }}
            style={styles.ImageBackground_899_6828}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf80/9e50/aceaa7e17084119dcd57c2cfdb8ee70b"
            }}
            style={styles.ImageBackground_899_6830}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f9/5a30/66d1b7a52c07f71652625041fb6fd45a"
            }}
            style={styles.ImageBackground_899_6832}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f631/3507/f0fd540574bdef682ec268d61005712e"
            }}
            style={styles.ImageBackground_899_6834}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d2/8415/7855d4555e0e475bf883549606a5251b"
            }}
            style={styles.ImageBackground_899_6836}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/956b/d842/c3b13c6b011e51c8c82db00dd0961e50"
            }}
            style={styles.ImageBackground_899_6838}
          />
        </View>
      </View>
      <View style={styles.View_900_1582}>
        <View style={styles.View_900_1583}>
          <View style={styles.View_900_1584} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_900_1585}
          />
          <View style={styles.View_900_1586} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27c7/170a/92ba06d80ef6476ac9a2afe7fa23f3e1"
          }}
          style={styles.ImageBackground_900_1587}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81b0/4e21/647e11fe871bf290d15e8f99204f4691"
          }}
          style={styles.ImageBackground_900_1591}
        />
        <View style={styles.View_900_1596}>
          <View style={styles.View_900_1597}>
            <Text style={styles.Text_900_1597}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_900_1598}>
        <View style={styles.View_900_1599}>
          <Text style={styles.Text_900_1599}>
            Welcome to limitless transactions with coins
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f0b/0818/859c640cfb78768c1e01fd5a3d4e9139"
          }}
          style={styles.ImageBackground_900_1600}
        />
        <View style={styles.View_900_1601}>
          <Text style={styles.Text_900_1601}>
            Start sending, receiving, spending and paying bills with your coins.
          </Text>
        </View>
      </View>
      <View style={styles.View_900_1602}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cfd/6501/75ee31458238cc179602ec883addaf0d"
          }}
          style={styles.ImageBackground_900_1603}
        />
        <View style={styles.View_900_1604}>
          <Text style={styles.Text_900_1604}>Create account</Text>
        </View>
      </View>
      <View style={styles.View_900_1605}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc50/869f/2dc0d69757d2df7e698aed2587e507f4"
          }}
          style={styles.ImageBackground_900_1606}
        />
        <View style={styles.View_900_1607}>
          <Text style={styles.Text_900_1607}>Log In</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_909_721: {
    width: wp("136.271940222109%"),
    minWidth: wp("136.271940222109%"),
    height: hp("86.63260871595372%"),
    minHeight: hp("86.63260871595372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.75399352732487%"),
    top: hp("59.15301380261697%"),
    backgroundColor: "rgba(202, 255, 247, 1)"
  },
  View_909_722: {
    width: wp("63.55769945227582%"),
    minWidth: wp("63.55769945227582%"),
    height: hp("37.483511335862794%"),
    minHeight: hp("37.483511335862794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22216325105676%"),
    top: hp("28.004647343536544%"),
    backgroundColor: "rgba(255, 237, 199, 1)"
  },
  View_899_6807: {
    width: wp("28.985485132189766%"),
    minWidth: wp("28.985485132189766%"),
    height: hp("5.623986812237182%"),
    minHeight: hp("5.623986812237182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("32.10382513661202%")
  },
  View_899_6808: {
    width: wp("17.73386416227921%"),
    height: hp("2.9333888507280195%"),
    top: hp("1.2427241424393785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.25163939839976%")
  },
  ImageBackground_899_6809: {
    width: wp("2.1309725904234367%"),
    height: hp("2.9333888507280195%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_6811: {
    width: wp("2.1815401344483605%"),
    height: hp("2.9333888507280195%"),
    top: hp("0.000016676272196036734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.74434112696256%")
  },
  ImageBackground_899_6813: {
    width: wp("0.6934662372017828%"),
    height: hp("2.9333888507280195%"),
    top: hp("0.000016676272196036734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.540989677687193%")
  },
  ImageBackground_899_6815: {
    width: wp("1.459174340473857%"),
    height: hp("2.9333888507280195%"),
    top: hp("0.000016676272196036734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.631425498188406%")
  },
  ImageBackground_899_6817: {
    width: wp("2.1093046031712337%"),
    height: hp("2.9333888507280195%"),
    top: hp("0.000016676272196036734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.704910646890099%")
  },
  ImageBackground_899_6819: {
    width: wp("2.3260171862616055%"),
    height: hp("2.9333888507280195%"),
    top: hp("0.000016676272196036734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.319220354015705%")
  },
  ImageBackground_899_6821: {
    width: wp("0.6934695197764227%"),
    height: hp("2.9333888507280195%"),
    top: hp("0.000016676272196036734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.259994433121982%")
  },
  ImageBackground_899_6823: {
    width: wp("2.130974202916242%"),
    height: hp("2.9333888507280195%"),
    top: hp("0.000016676272196036734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.602885812952898%")
  },
  View_899_6825: {
    width: wp("9.40230917815425%"),
    minWidth: wp("9.40230917815425%"),
    height: hp("5.623986812237182%"),
    minHeight: hp("5.623986812237182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_899_6826: {
    width: wp("2.1667830610044914%"),
    height: hp("1.9477850752450079%"),
    top: hp("1.9866693215291988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.177753245772948%")
  },
  ImageBackground_899_6828: {
    width: wp("5.2284084080498%"),
    height: hp("1.8179050560206012%"),
    top: hp("3.8060839710339778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.173920120018117%")
  },
  ImageBackground_899_6830: {
    width: wp("2.695322036743164%"),
    height: hp("1.9013897317354798%"),
    top: hp("3.3123662562969542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_6832: {
    width: wp("8.081983483355978%"),
    height: hp("1.6016300910157586%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.994725618961354%")
  },
  ImageBackground_899_6834: {
    width: wp("6.282546554786572%"),
    height: hp("2.6697862343709975%"),
    top: hp("2.472849361232065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7728171233393724%")
  },
  ImageBackground_899_6836: {
    width: wp("3.83056258233849%"),
    height: hp("3.2613178419936553%"),
    top: hp("0.4659433833888258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.222250528381643%")
  },
  ImageBackground_899_6838: {
    width: wp("4.596095154250877%"),
    height: hp("3.538757074074667%"),
    top: hp("0.8752374701161187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5073619602958885%")
  },
  View_900_1582: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_900_1583: {
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
  View_900_1584: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_900_1585: {
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
  View_900_1586: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_900_1587: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_900_1591: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_900_1596: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_900_1597: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_900_1597: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_900_1598: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869565%"),
    top: hp("43.192295428833674%")
  },
  View_900_1599: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_900_1599: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_900_1600: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.93236714975846%"),
    top: hp("5.464480874316941%")
  },
  View_900_1601: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.928961748633881%"),
    justifyContent: "center"
  },
  Text_900_1601: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_900_1602: {
    width: wp("90.33816425120773%"),
    height: hp("6.830601092896176%"),
    top: hp("99.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_900_1603: {
    width: wp("90.33816425120773%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_900_1604: {
    width: wp("53.446134852902325%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.58676781400966%"),
    justifyContent: "flex-start"
  },
  Text_900_1604: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_900_1605: {
    width: wp("90.33816425120773%"),
    height: hp("6.830601092896176%"),
    top: hp("109.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_900_1606: {
    width: wp("90.33816425120773%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_900_1607: {
    width: wp("53.446134852902325%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.58676781400966%"),
    justifyContent: "flex-start"
  },
  Text_900_1607: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
