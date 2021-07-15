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
      <View style={styles.View_909_728} />
      <View style={styles.View_909_729} />
      <View style={styles.View_899_5417}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ab/62ec/a172e73f04a13582852ce69134c6f61c"
          }}
          style={styles.ImageBackground_899_5418}
        />
        <View style={styles.View_899_5421}>
          <View style={styles.View_899_5422}>
            <Text style={styles.Text_899_5422}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_899_5423}>
        <View style={styles.View_899_5424}>
          <View style={styles.View_899_5425} />
        </View>
        <View style={styles.View_899_5426}>
          <Text style={styles.Text_899_5426}>
            Don&#39;t worry, just enter the email address you registered with
            and we will send you a link to reset your password.
          </Text>
        </View>
        <View style={styles.View_899_5427}>
          <Text style={styles.Text_899_5427}>Go back to login</Text>
        </View>
        <View style={styles.View_899_5428}>
          <View style={styles.View_899_5429} />
          <View style={styles.View_899_5430}>
            <Text style={styles.Text_899_5430}>Email address</Text>
          </View>
          <View style={styles.View_899_5431}>
            <Text style={styles.Text_899_5431}>jeremiah@bambooltd.com|</Text>
          </View>
          <View style={styles.View_899_5432}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c5/b081/af54d4781922e52e6ea65e87243890da"
              }}
              style={styles.ImageBackground_899_5433}
            />
          </View>
        </View>
        <View style={styles.View_899_5436}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10dd/c7d5/418476e7d6d95ba17daa70d792950430"
            }}
            style={styles.ImageBackground_899_5437}
          />
          <View style={styles.View_899_5438}>
            <Text style={styles.Text_899_5438}>Send Instructions</Text>
          </View>
        </View>
        <View style={styles.View_899_5439}>
          <Text style={styles.Text_899_5439}>Forgot Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef8f/69a1/7d5d58ae5d72154c8ff8105177e4e86d"
          }}
          style={styles.ImageBackground_899_5440}
        />
      </View>
      <View style={styles.View_899_5441}>
        <View style={styles.View_899_5442}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8864/5706/b6e6c96bf3ffe8496e3826c06996d6fc"
            }}
            style={styles.ImageBackground_899_5443}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e26/1692/e02ecbaf8b928b909473de18fdfb7661"
            }}
            style={styles.ImageBackground_899_5445}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b46/c9a2/9695763cb7acb51b36ec4a10f7af9428"
            }}
            style={styles.ImageBackground_899_5447}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/006a/b06e/e7a17c793014b233bbd00a7909996c96"
            }}
            style={styles.ImageBackground_899_5449}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5997/fff0/b634a71e4f48624e7c3e8fe598af40a6"
            }}
            style={styles.ImageBackground_899_5451}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e497/3aec/c5d0e6071fe0b67057b62d1bf5c46285"
            }}
            style={styles.ImageBackground_899_5453}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe65/8972/f072069662a0d191087d1d90ebb42b2a"
            }}
            style={styles.ImageBackground_899_5455}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/180c/a795/c33a845720f4c52f2287830a4135b76f"
            }}
            style={styles.ImageBackground_899_5457}
          />
        </View>
        <View style={styles.View_899_5459}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c20/1f66/d9c9e278033ee719972ccdc03c1068f8"
            }}
            style={styles.ImageBackground_899_5460}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a31d/1bb0/beb0917310e1cefe3e0eb34fb7001fe3"
            }}
            style={styles.ImageBackground_899_5462}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7559/adc4/c30f6384e1e8487c803547f14f7ca39e"
            }}
            style={styles.ImageBackground_899_5464}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d285/b77a/7b921e9e9ecb1bb9e8a8d3d2098bcb27"
            }}
            style={styles.ImageBackground_899_5466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c352/d0a1/a41332c1438c16e17e51805701a9bb77"
            }}
            style={styles.ImageBackground_899_5468}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967e/8f5d/93794bc93540e5a2e3e2c34b20f56664"
            }}
            style={styles.ImageBackground_899_5470}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74d4/d6b7/581031d4712fe04976ed9633a9238739"
            }}
            style={styles.ImageBackground_899_5472}
          />
        </View>
      </View>
      <View style={styles.View_899_5474}>
        <View style={styles.View_899_5475}>
          <View style={styles.View_899_5476} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_899_5477}
          />
          <View style={styles.View_899_5478} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27c7/170a/92ba06d80ef6476ac9a2afe7fa23f3e1"
          }}
          style={styles.ImageBackground_899_5479}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81b0/4e21/647e11fe871bf290d15e8f99204f4691"
          }}
          style={styles.ImageBackground_899_5483}
        />
        <View style={styles.View_899_5488}>
          <View style={styles.View_899_5489}>
            <Text style={styles.Text_899_5489}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_909_728: {
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
  View_909_729: {
    width: wp("63.55769945227582%"),
    minWidth: wp("63.55769945227582%"),
    height: hp("37.483511335862794%"),
    minHeight: hp("37.483511335862794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22217799384812%"),
    top: hp("28.004647343536544%"),
    backgroundColor: "rgba(255, 237, 199, 1)"
  },
  View_899_5417: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("7.5136612021857925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_899_5418: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_5421: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5422: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_899_5422: {
    color: "rgba(55, 61, 60, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5423: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("54.23497267759563%"),
    minHeight: hp("54.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("38.3879781420765%")
  },
  View_899_5424: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("54.23497267759563%"),
    minHeight: hp("54.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_899_5425: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("54.23497267759563%"),
    minHeight: hp("54.23497267759563%"),
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
  View_899_5426: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275361%"),
    top: hp("11.20218579234973%"),
    justifyContent: "flex-start"
  },
  Text_899_5426: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5427: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.367149758454104%"),
    top: hp("35.655737704918046%"),
    justifyContent: "flex-start"
  },
  Text_899_5427: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5428: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%"),
    top: hp("24.180327868852466%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5429: {
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
  View_899_5430: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_899_5430: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5431: {
    width: wp("47.34299516908212%"),
    minWidth: wp("47.34299516908212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.41530054644808%"),
    justifyContent: "flex-start"
  },
  Text_899_5431: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5432: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.91304347826086%"),
    top: hp("2.45901639344261%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_899_5433: {
    width: wp("3.8647435137615114%"),
    height: hp("1.6390975055798804%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%")
  },
  View_899_5436: {
    width: wp("46.13526570048309%"),
    height: hp("6.830601092896176%"),
    top: hp("41.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.98067632850242%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_899_5437: {
    width: wp("46.13526570048309%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_5438: {
    width: wp("30.434782608695656%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.801354449728258%"),
    justifyContent: "flex-start"
  },
  Text_899_5438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5439: {
    width: wp("36.95652173913043%"),
    minWidth: wp("36.95652173913043%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.81159420289855%"),
    top: hp("2.185792349726782%"),
    justifyContent: "center"
  },
  Text_899_5439: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_899_5440: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.28985507246377%"),
    top: hp("8.743169398907114%")
  },
  View_899_5441: {
    width: wp("21.739126749084768%"),
    minWidth: wp("21.739126749084768%"),
    height: hp("4.217979816791138%"),
    minHeight: hp("4.217979816791138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("29.78142076502732%")
  },
  View_899_5442: {
    width: wp("13.300396278860488%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.9320451913635566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.43872954879982%")
  },
  ImageBackground_899_5443: {
    width: wp("1.5982291548724337%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_5445: {
    width: wp("1.6361547553020974%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136105123795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.058285330804651%")
  },
  ImageBackground_899_5447: {
    width: wp("0.520099591517794%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136105123795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.155771743848128%")
  },
  ImageBackground_899_5449: {
    width: wp("1.0943805537937918%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136105123795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.973539638058568%")
  },
  ImageBackground_899_5451: {
    width: wp("1.5819782220223102%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136105123795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5287124707503%")
  },
  ImageBackground_899_5453: {
    width: wp("1.7445125441620315%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136105123795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.489444751094503%")
  },
  ImageBackground_899_5455: {
    width: wp("0.5201020678460311%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136105123795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.695040053215578%")
  },
  ImageBackground_899_5457: {
    width: wp("1.5982304218310663%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136105123795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.70216435971468%")
  },
  View_899_5459: {
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
  ImageBackground_899_5460: {
    width: wp("1.6250870653972533%"),
    height: hp("1.4608385784378468%"),
    top: hp("1.48999990661288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1333296771210755%")
  },
  ImageBackground_899_5462: {
    width: wp("3.921305614969005%"),
    height: hp("1.3634285640195418%"),
    top: hp("2.854560893741464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.130440090013586%")
  },
  ImageBackground_899_5464: {
    width: wp("2.0214912396122293%"),
    height: hp("1.426042103376545%"),
    top: hp("2.484272607688702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_5466: {
    width: wp("6.061486691092523%"),
    height: hp("1.201222372836754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7460294714296509%")
  },
  ImageBackground_899_5468: {
    width: wp("4.711908994665468%"),
    height: hp("2.002339415211495%"),
    top: hp("1.8546349363900276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5796275852958956%")
  },
  ImageBackground_899_5470: {
    width: wp("2.8729215336306657%"),
    height: hp("2.4459880557868%"),
    top: hp("0.3494596220756492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.916658410703505%")
  },
  ImageBackground_899_5472: {
    width: wp("3.4470707897978703%"),
    height: hp("2.654067284422494%"),
    top: hp("0.6564281025870926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1305067274305571%")
  },
  View_899_5474: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1097748245018116%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5475: {
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
  View_899_5476: {
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
  ImageBackground_899_5477: {
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
  View_899_5478: {
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
  ImageBackground_899_5479: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_899_5483: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100846%")
  },
  View_899_5488: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600049299894324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5489: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_899_5489: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
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
