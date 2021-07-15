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
      <View style={styles.View_909_730} />
      <View style={styles.View_909_731} />
      <View style={styles.View_899_5491}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ab/62ec/a172e73f04a13582852ce69134c6f61c"
          }}
          style={styles.ImageBackground_899_5492}
        />
        <View style={styles.View_899_5495}>
          <View style={styles.View_899_5496}>
            <Text style={styles.Text_899_5496}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_899_5497}>
        <View style={styles.View_899_5498}>
          <View style={styles.View_899_5499} />
        </View>
        <View style={styles.View_899_5500}>
          <Text style={styles.Text_899_5500}>
            Done. Check your email jeremiah@bambooltd.com| and follow the
            instructions.
          </Text>
        </View>
        <View style={styles.View_899_5501}>
          <Text style={styles.Text_899_5501}>Change Email Address</Text>
        </View>
        <View style={styles.View_899_5502}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10dd/c7d5/418476e7d6d95ba17daa70d792950430"
            }}
            style={styles.ImageBackground_899_5503}
          />
          <View style={styles.View_899_5504}>
            <Text style={styles.Text_899_5504}>Go back to login</Text>
          </View>
        </View>
        <View style={styles.View_899_5505}>
          <Text style={styles.Text_899_5505}>Forgot Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef8f/69a1/7d5d58ae5d72154c8ff8105177e4e86d"
          }}
          style={styles.ImageBackground_899_5506}
        />
      </View>
      <View style={styles.View_899_5507}>
        <View style={styles.View_899_5508}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8864/5706/b6e6c96bf3ffe8496e3826c06996d6fc"
            }}
            style={styles.ImageBackground_899_5509}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e26/1692/e02ecbaf8b928b909473de18fdfb7661"
            }}
            style={styles.ImageBackground_899_5511}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b46/c9a2/9695763cb7acb51b36ec4a10f7af9428"
            }}
            style={styles.ImageBackground_899_5513}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/006a/b06e/e7a17c793014b233bbd00a7909996c96"
            }}
            style={styles.ImageBackground_899_5515}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5997/fff0/b634a71e4f48624e7c3e8fe598af40a6"
            }}
            style={styles.ImageBackground_899_5517}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e497/3aec/c5d0e6071fe0b67057b62d1bf5c46285"
            }}
            style={styles.ImageBackground_899_5519}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe65/8972/f072069662a0d191087d1d90ebb42b2a"
            }}
            style={styles.ImageBackground_899_5521}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/180c/a795/c33a845720f4c52f2287830a4135b76f"
            }}
            style={styles.ImageBackground_899_5523}
          />
        </View>
        <View style={styles.View_899_5525}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c20/1f66/d9c9e278033ee719972ccdc03c1068f8"
            }}
            style={styles.ImageBackground_899_5526}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a31d/1bb0/beb0917310e1cefe3e0eb34fb7001fe3"
            }}
            style={styles.ImageBackground_899_5528}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7559/adc4/c30f6384e1e8487c803547f14f7ca39e"
            }}
            style={styles.ImageBackground_899_5530}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d285/b77a/7b921e9e9ecb1bb9e8a8d3d2098bcb27"
            }}
            style={styles.ImageBackground_899_5532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c352/d0a1/a41332c1438c16e17e51805701a9bb77"
            }}
            style={styles.ImageBackground_899_5534}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967e/8f5d/93794bc93540e5a2e3e2c34b20f56664"
            }}
            style={styles.ImageBackground_899_5536}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74d4/d6b7/581031d4712fe04976ed9633a9238739"
            }}
            style={styles.ImageBackground_899_5538}
          />
        </View>
      </View>
      <View style={styles.View_899_5540}>
        <View style={styles.View_899_5541}>
          <View style={styles.View_899_5542} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_899_5543}
          />
          <View style={styles.View_899_5544} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27c7/170a/92ba06d80ef6476ac9a2afe7fa23f3e1"
          }}
          style={styles.ImageBackground_899_5545}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81b0/4e21/647e11fe871bf290d15e8f99204f4691"
          }}
          style={styles.ImageBackground_899_5549}
        />
        <View style={styles.View_899_5554}>
          <View style={styles.View_899_5555}>
            <Text style={styles.Text_899_5555}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_909_730: {
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
  View_909_731: {
    width: wp("63.55769945227582%"),
    minWidth: wp("63.55769945227582%"),
    height: hp("37.483511335862794%"),
    minHeight: hp("37.483511335862794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.2221853652438%"),
    top: hp("28.004647343536544%"),
    backgroundColor: "rgba(255, 237, 199, 1)"
  },
  View_899_5491: {
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
  ImageBackground_899_5492: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_5495: {
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
  View_899_5496: {
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
  Text_899_5496: {
    color: "rgba(55, 61, 60, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5497: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("39.61748633879781%"),
    minHeight: hp("39.61748633879781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("45.62841530054645%")
  },
  View_899_5498: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("39.61748633879781%"),
    minHeight: hp("39.61748633879781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_899_5499: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("39.61748633879781%"),
    minHeight: hp("39.61748633879781%"),
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
  View_899_5500: {
    width: wp("78.74396135265701%"),
    minWidth: wp("78.74396135265701%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275361%"),
    top: hp("11.202185792349724%"),
    justifyContent: "flex-start"
  },
  Text_899_5500: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5501: {
    width: wp("34.78260869565217%"),
    minWidth: wp("34.78260869565217%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.77777777777778%"),
    top: hp("21.311475409836063%"),
    justifyContent: "flex-start"
  },
  Text_899_5501: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5502: {
    width: wp("46.13526570048309%"),
    height: hp("6.830601092896176%"),
    top: hp("27.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.98067632850242%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_899_5503: {
    width: wp("46.13526570048309%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_5504: {
    width: wp("29.227053140096622%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.52599213088768%"),
    justifyContent: "flex-start"
  },
  Text_899_5504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5505: {
    width: wp("36.95652173913043%"),
    minWidth: wp("36.95652173913043%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.81159420289855%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "center"
  },
  Text_899_5505: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_899_5506: {
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
  View_899_5507: {
    width: wp("21.739126749084768%"),
    minWidth: wp("21.739126749084768%"),
    height: hp("4.217979816791138%"),
    minHeight: hp("4.217979816791138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("37.02185792349727%")
  },
  View_899_5508: {
    width: wp("13.300396278860488%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.9320451913635566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.43872954879982%")
  },
  ImageBackground_899_5509: {
    width: wp("1.5982291548724337%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_5511: {
    width: wp("1.6361547553020974%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.058285330804651%")
  },
  ImageBackground_899_5513: {
    width: wp("0.520099591517794%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.155771743848128%")
  },
  ImageBackground_899_5515: {
    width: wp("1.0943805537937918%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.973539638058568%")
  },
  ImageBackground_899_5517: {
    width: wp("1.5819782220223102%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.528719842145982%")
  },
  ImageBackground_899_5519: {
    width: wp("1.7445125441620315%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.489452122490185%")
  },
  ImageBackground_899_5521: {
    width: wp("0.5201020678460311%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.695040053215578%")
  },
  ImageBackground_899_5523: {
    width: wp("1.5982304218310663%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.702171731110361%")
  },
  View_899_5525: {
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
  ImageBackground_899_5526: {
    width: wp("1.6250870653972533%"),
    height: hp("1.4608385784378468%"),
    top: hp("1.4899999066128657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1333296771210755%")
  },
  ImageBackground_899_5528: {
    width: wp("3.921305614969005%"),
    height: hp("1.3634285640195418%"),
    top: hp("2.854560893741457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.130440090013586%")
  },
  ImageBackground_899_5530: {
    width: wp("2.0214912396122293%"),
    height: hp("1.426042103376545%"),
    top: hp("2.4842726076886876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_5532: {
    width: wp("6.061486691092523%"),
    height: hp("1.201222372836754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7460221000339686%")
  },
  ImageBackground_899_5534: {
    width: wp("4.711908994665468%"),
    height: hp("2.002339415211495%"),
    top: hp("1.8546349363900205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5796202139002133%")
  },
  ImageBackground_899_5536: {
    width: wp("2.8729215336306657%"),
    height: hp("2.4459880557868%"),
    top: hp("0.3494596220756492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.916658410703505%")
  },
  ImageBackground_899_5538: {
    width: wp("3.4470707897978703%"),
    height: hp("2.654067284422494%"),
    top: hp("0.6564281025870855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1305067274305571%")
  },
  View_899_5540: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1097748245018116%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5541: {
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
  View_899_5542: {
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
  ImageBackground_899_5543: {
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
  View_899_5544: {
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
  ImageBackground_899_5545: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_899_5549: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176905240414%")
  },
  View_899_5554: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600049299894324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_5555: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_899_5555: {
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
