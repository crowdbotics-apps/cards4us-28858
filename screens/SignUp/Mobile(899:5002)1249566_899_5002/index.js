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
      <View style={styles.View_909_768} />
      <View style={styles.View_909_769} />
      <View style={styles.View_899_5003}>
        <View style={styles.View_899_5004}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7769/da99/ac9bdaeeb9f77bfcc2985d876769fc17"
            }}
            style={styles.ImageBackground_899_5005}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d9f/c8f6/683291931398eb863cd331a056f30903"
            }}
            style={styles.ImageBackground_899_5007}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1879/92b3/21f2b8621ff3d29cb8d267474c5fb82d"
            }}
            style={styles.ImageBackground_899_5009}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/023a/b70b/86139a0799838f8dd7d871bd2e18d5c9"
            }}
            style={styles.ImageBackground_899_5011}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5997/fff0/b634a71e4f48624e7c3e8fe598af40a6"
            }}
            style={styles.ImageBackground_899_5013}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e497/3aec/c5d0e6071fe0b67057b62d1bf5c46285"
            }}
            style={styles.ImageBackground_899_5015}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe65/8972/f072069662a0d191087d1d90ebb42b2a"
            }}
            style={styles.ImageBackground_899_5017}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/180c/a795/c33a845720f4c52f2287830a4135b76f"
            }}
            style={styles.ImageBackground_899_5019}
          />
        </View>
        <View style={styles.View_899_5021}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8a8/9fe1/dcde15cffa0de6bad83f132c3ff35394"
            }}
            style={styles.ImageBackground_899_5022}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a31d/1bb0/beb0917310e1cefe3e0eb34fb7001fe3"
            }}
            style={styles.ImageBackground_899_5024}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7559/adc4/c30f6384e1e8487c803547f14f7ca39e"
            }}
            style={styles.ImageBackground_899_5026}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b269/a8e9/c4f4c2d500b9afe001282991a8261b2b"
            }}
            style={styles.ImageBackground_899_5028}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df21/592b/4894bd6f8d4d95c7a591836e342ad2af"
            }}
            style={styles.ImageBackground_899_5030}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967e/8f5d/93794bc93540e5a2e3e2c34b20f56664"
            }}
            style={styles.ImageBackground_899_5032}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74d4/d6b7/581031d4712fe04976ed9633a9238739"
            }}
            style={styles.ImageBackground_899_5034}
          />
        </View>
      </View>
      <View style={styles.View_899_5036}>
        <View style={styles.View_899_5037}>
          <Text style={styles.Text_899_5037}>
            Welcome to limitless transactions with coins
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f0b/0818/859c640cfb78768c1e01fd5a3d4e9139"
          }}
          style={styles.ImageBackground_899_5038}
        />
        <View style={styles.View_899_5039}>
          <Text style={styles.Text_899_5039}>
            Start sending, receiving, spending and paying bills with your coins.
          </Text>
        </View>
      </View>
      <View style={styles.View_899_5040}>
        <View style={styles.View_899_5041}>
          <View style={styles.View_899_5042} />
        </View>
        <View style={styles.View_899_5043}>
          <View style={styles.View_899_5044} />
          <View style={styles.View_899_5045}>
            <Text style={styles.Text_899_5045}>Phone number</Text>
          </View>
          <View style={styles.View_899_5046}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2294/65b9/1a41926c50650227617d73a69f322374"
              }}
              style={styles.ImageBackground_899_5047}
            />
          </View>
        </View>
        <View style={styles.View_899_5050}>
          <View style={styles.View_899_5051} />
          <View style={styles.View_899_5052}>
            <Text style={styles.Text_899_5052}>Password</Text>
          </View>
          <View style={styles.View_899_5053}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79df/e97b/66207333d9a609c92a71b79872bf4a1d"
              }}
              style={styles.ImageBackground_899_5054}
            />
          </View>
        </View>
        <View style={styles.View_899_5057}>
          <View style={styles.View_899_5058} />
          <View style={styles.View_899_5059}>
            <Text style={styles.Text_899_5059}>First name</Text>
          </View>
          <View style={styles.View_899_5060}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6ce/90c5/e38714110914bade073e10fd02271f28"
              }}
              style={styles.ImageBackground_899_5061}
            />
          </View>
        </View>
        <View style={styles.View_899_5065}>
          <View style={styles.View_899_5066} />
          <View style={styles.View_899_5067}>
            <Text style={styles.Text_899_5067}>Email address</Text>
          </View>
          <View style={styles.View_899_5068}>
            <Text style={styles.Text_899_5068}>jeremiah@bambooltd.com|</Text>
          </View>
          <View style={styles.View_899_5069}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c5/b081/af54d4781922e52e6ea65e87243890da"
              }}
              style={styles.ImageBackground_899_5070}
            />
          </View>
        </View>
        <View style={styles.View_899_5073}>
          <Text style={styles.Text_899_5073}>
            Already have an account? Log In
          </Text>
        </View>
        <View style={styles.View_899_5074}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10dd/c7d5/418476e7d6d95ba17daa70d792950430"
            }}
            style={styles.ImageBackground_899_5075}
          />
          <View style={styles.View_899_5076}>
            <Text style={styles.Text_899_5076}>Create account</Text>
          </View>
        </View>
        <View style={styles.View_899_5077}>
          <Text style={styles.Text_899_5077}>Create an account</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef8f/69a1/7d5d58ae5d72154c8ff8105177e4e86d"
          }}
          style={styles.ImageBackground_899_5078}
        />
        <View style={styles.View_899_5079}>
          <View style={styles.View_899_5080} />
          <View style={styles.View_899_5081}>
            <Text style={styles.Text_899_5081}>Last name</Text>
          </View>
          <View style={styles.View_899_5082}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6ce/90c5/e38714110914bade073e10fd02271f28"
              }}
              style={styles.ImageBackground_899_5083}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_899_5087}>
        <View style={styles.View_899_5088}>
          <View style={styles.View_899_5089} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_899_5090}
          />
          <View style={styles.View_899_5091} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_899_5092}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_899_5096}
        />
        <View style={styles.View_899_5101}>
          <View style={styles.View_899_5102}>
            <Text style={styles.Text_899_5102}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_909_768: {
    width: wp("136.271940222109%"),
    minWidth: wp("136.271940222109%"),
    height: hp("86.63260871595372%"),
    minHeight: hp("86.63260871595372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.75399352732487%"),
    top: hp("59.15301380261697%"),
    backgroundColor: "rgba(0, 204, 173, 1)"
  },
  View_909_769: {
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
  },
  View_899_5003: {
    width: wp("21.739126749084768%"),
    minWidth: wp("21.739126749084768%"),
    height: hp("4.217979816791138%"),
    minHeight: hp("4.217979816791138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("6.0109289617486334%")
  },
  View_899_5004: {
    width: wp("13.300396278860488%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.9320451913635592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.438714806008456%")
  },
  ImageBackground_899_5005: {
    width: wp("1.5982291548724337%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000016676272199589448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_5007: {
    width: wp("1.6361547553020974%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136099794724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0582705880132792%")
  },
  ImageBackground_899_5009: {
    width: wp("0.520099591517794%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136099794724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.155757001056763%")
  },
  ImageBackground_899_5011: {
    width: wp("1.0943805537937918%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136099794724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9735691236412976%")
  },
  ImageBackground_899_5013: {
    width: wp("1.5819782220223102%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136099794724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.528697727958935%")
  },
  ImageBackground_899_5015: {
    width: wp("1.7445125441620315%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136099794724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.489430008303138%")
  },
  ImageBackground_899_5017: {
    width: wp("0.5201020678460311%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136099794724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.695010567632849%")
  },
  ImageBackground_899_5019: {
    width: wp("1.5982304218310663%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136099794724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.702179102506044%")
  },
  View_899_5021: {
    width: wp("7.051749390680433%"),
    minWidth: wp("7.051749390680433%"),
    height: hp("4.217979816791138%"),
    minHeight: hp("4.217979816791138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_899_5022: {
    width: wp("1.6250870653972533%"),
    height: hp("1.4608385784378468%"),
    top: hp("1.4899999066128764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.133314934329711%")
  },
  ImageBackground_899_5024: {
    width: wp("3.921305614969005%"),
    height: hp("1.3634285640195418%"),
    top: hp("2.8545608937414615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1304253472222214%")
  },
  ImageBackground_899_5026: {
    width: wp("2.0214912396122293%"),
    height: hp("1.426042103376545%"),
    top: hp("2.4842726076886956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_5028: {
    width: wp("6.061486691092523%"),
    height: hp("1.201222372836754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7460442142210155%")
  },
  ImageBackground_899_5030: {
    width: wp("4.711908994665468%"),
    height: hp("2.002339415211495%"),
    top: hp("1.8546349363900276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5796275852958956%")
  },
  ImageBackground_899_5032: {
    width: wp("2.8729215336306657%"),
    height: hp("2.4459880557868%"),
    top: hp("0.3494596220756483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.916687896286234%")
  },
  ImageBackground_899_5034: {
    width: wp("3.4470707897978703%"),
    height: hp("2.654067284422494%"),
    top: hp("0.6564281025870908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1305362130132863%")
  },
  View_899_5036: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869565%"),
    top: hp("12.158469945355192%")
  },
  View_899_5037: {
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
  Text_899_5037: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_899_5038: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.93236714975846%"),
    top: hp("5.464480874316939%")
  },
  View_899_5039: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.92896174863388%"),
    justifyContent: "center"
  },
  Text_899_5039: {
    color: "rgba(242, 245, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5040: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("85.51912568306011%"),
    minHeight: hp("85.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("33.19672131147541%")
  },
  View_899_5041: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("85.51912568306011%"),
    minHeight: hp("85.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_899_5042: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("85.51912568306011%"),
    minHeight: hp("85.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_899_5043: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%"),
    top: hp("44.39890710382513%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5044: {
    width: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_899_5045: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_899_5045: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5046: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.91304347826086%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_899_5047: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_5050: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%"),
    top: hp("54.78142076502733%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5051: {
    width: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_899_5052: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_899_5052: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5053: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.91304347826086%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_899_5054: {
    width: wp("4.347817794136379%"),
    height: hp("1.639344262295082%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371981672%")
  },
  View_899_5057: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%"),
    top: hp("13.251366120218584%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5058: {
    width: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_899_5059: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_899_5059: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5060: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.91304347826086%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_899_5061: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_5065: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%"),
    top: hp("34.01639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5066: {
    width: wp("82.3671497584541%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 204, 173, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_899_5067: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_899_5067: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5068: {
    width: wp("47.34299516908212%"),
    minWidth: wp("47.34299516908212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.41530054644808%"),
    justifyContent: "flex-start"
  },
  Text_899_5068: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5069: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.91304347826086%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_899_5070: {
    width: wp("3.8647435137615114%"),
    height: hp("1.6390975055798804%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%")
  },
  View_899_5073: {
    width: wp("50.48309178743962%"),
    minWidth: wp("50.48309178743962%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.04830917874396%"),
    top: hp("78.96174863387978%"),
    justifyContent: "flex-start"
  },
  Text_899_5073: {
    color: "rgba(115, 122, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5074: {
    width: wp("46.13526570048309%"),
    height: hp("6.830601092896176%"),
    top: hp("67.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.22222222222222%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_899_5075: {
    width: wp("46.13526570048309%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_5076: {
    width: wp("27.294685990338163%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.492175705766904%"),
    justifyContent: "flex-start"
  },
  Text_899_5076: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5077: {
    width: wp("41.30434782608695%"),
    minWidth: wp("41.30434782608695%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.63768115942029%"),
    top: hp("2.185792349726782%"),
    justifyContent: "center"
  },
  Text_899_5077: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_899_5078: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.28985507246377%"),
    top: hp("8.743169398907106%")
  },
  View_899_5079: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%"),
    top: hp("23.633879781420767%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5080: {
    width: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_899_5081: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_899_5081: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5082: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.91304347826086%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_899_5083: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_5087: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5088: {
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
  View_899_5089: {
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
  ImageBackground_899_5090: {
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
  View_899_5091: {
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
  ImageBackground_899_5092: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_899_5096: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_899_5101: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5102: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_899_5102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
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
