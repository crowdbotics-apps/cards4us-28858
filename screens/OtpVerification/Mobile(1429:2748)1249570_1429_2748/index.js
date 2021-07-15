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
      <View style={styles.View_1429_2749} />
      <View style={styles.View_1429_2750} />
      <View style={styles.View_1429_2751}>
        <View style={styles.View_1429_2752}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8864/5706/b6e6c96bf3ffe8496e3826c06996d6fc"
            }}
            style={styles.ImageBackground_1429_2753}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e26/1692/e02ecbaf8b928b909473de18fdfb7661"
            }}
            style={styles.ImageBackground_1429_2755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b46/c9a2/9695763cb7acb51b36ec4a10f7af9428"
            }}
            style={styles.ImageBackground_1429_2757}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/006a/b06e/e7a17c793014b233bbd00a7909996c96"
            }}
            style={styles.ImageBackground_1429_2759}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5997/fff0/b634a71e4f48624e7c3e8fe598af40a6"
            }}
            style={styles.ImageBackground_1429_2761}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e497/3aec/c5d0e6071fe0b67057b62d1bf5c46285"
            }}
            style={styles.ImageBackground_1429_2763}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe65/8972/f072069662a0d191087d1d90ebb42b2a"
            }}
            style={styles.ImageBackground_1429_2765}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/180c/a795/c33a845720f4c52f2287830a4135b76f"
            }}
            style={styles.ImageBackground_1429_2767}
          />
        </View>
        <View style={styles.View_1429_2769}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c20/1f66/d9c9e278033ee719972ccdc03c1068f8"
            }}
            style={styles.ImageBackground_1429_2770}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a31d/1bb0/beb0917310e1cefe3e0eb34fb7001fe3"
            }}
            style={styles.ImageBackground_1429_2772}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7559/adc4/c30f6384e1e8487c803547f14f7ca39e"
            }}
            style={styles.ImageBackground_1429_2774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d285/b77a/7b921e9e9ecb1bb9e8a8d3d2098bcb27"
            }}
            style={styles.ImageBackground_1429_2776}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c352/d0a1/a41332c1438c16e17e51805701a9bb77"
            }}
            style={styles.ImageBackground_1429_2778}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967e/8f5d/93794bc93540e5a2e3e2c34b20f56664"
            }}
            style={styles.ImageBackground_1429_2780}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74d4/d6b7/581031d4712fe04976ed9633a9238739"
            }}
            style={styles.ImageBackground_1429_2782}
          />
        </View>
      </View>
      <View style={styles.View_1429_2784}>
        <View style={styles.View_1429_2785}>
          <Text style={styles.Text_1429_2785}>
            We’ve sent a verification code to your email address and phone
            number, please type it in the field below
          </Text>
        </View>
        <View style={styles.View_1429_2786}>
          <Text style={styles.Text_1429_2786}>
            Didn’t receive code? Re-send
          </Text>
        </View>
        <View style={styles.View_1429_2787}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10dd/c7d5/418476e7d6d95ba17daa70d792950430"
            }}
            style={styles.ImageBackground_1429_2788}
          />
          <View style={styles.View_1429_2789}>
            <Text style={styles.Text_1429_2789}>Continue</Text>
          </View>
        </View>
        <View style={styles.View_1429_2790}>
          <Text style={styles.Text_1429_2790}>Verify your account</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5230/1e92/93f4e6e8cd5c0454515fc248425e1d4b"
          }}
          style={styles.ImageBackground_1429_2791}
        />
        <View style={styles.View_1429_2792}>
          <View style={styles.View_1429_2793} />
          <View style={styles.View_1429_2794}>
            <Text style={styles.Text_1429_2794}>Enter verification code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1429_2795}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ab/62ec/a172e73f04a13582852ce69134c6f61c"
          }}
          style={styles.ImageBackground_1429_2796}
        />
        <View style={styles.View_1429_2799}>
          <View style={styles.View_1429_2800}>
            <Text style={styles.Text_1429_2800}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1429_2801}>
        <View style={styles.View_1429_2802}>
          <View style={styles.View_1429_2803} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_1429_2804}
          />
          <View style={styles.View_1429_2805} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27c7/170a/92ba06d80ef6476ac9a2afe7fa23f3e1"
          }}
          style={styles.ImageBackground_1429_2806}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81b0/4e21/647e11fe871bf290d15e8f99204f4691"
          }}
          style={styles.ImageBackground_1429_2810}
        />
        <View style={styles.View_1429_2815}>
          <View style={styles.View_1429_2816}>
            <Text style={styles.Text_1429_2816}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1429_2749: {
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
  View_1429_2750: {
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
  View_1429_2751: {
    width: wp("21.739126749084768%"),
    minWidth: wp("21.739126749084768%"),
    height: hp("4.217979816791138%"),
    minHeight: hp("4.217979816791138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("32.10382513661202%")
  },
  View_1429_2752: {
    width: wp("13.300396278860488%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.9320451913635566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.438714806008456%")
  },
  ImageBackground_1429_2753: {
    width: wp("1.5982291548724337%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1429_2755: {
    width: wp("1.6361547553020974%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0582705880132792%")
  },
  ImageBackground_1429_2757: {
    width: wp("0.520099591517794%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.155757001056763%")
  },
  ImageBackground_1429_2759: {
    width: wp("1.0943805537937918%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9735691236412976%")
  },
  ImageBackground_1429_2761: {
    width: wp("1.5819782220223102%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.528697727958935%")
  },
  ImageBackground_1429_2763: {
    width: wp("1.7445125441620315%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.489430008303138%")
  },
  ImageBackground_1429_2765: {
    width: wp("0.5201020678460311%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.695010567632849%")
  },
  ImageBackground_1429_2767: {
    width: wp("1.5982304218310663%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.702179102506044%")
  },
  View_1429_2769: {
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
  ImageBackground_1429_2770: {
    width: wp("1.6250870653972533%"),
    height: hp("1.4608385784378468%"),
    top: hp("1.4899999066128728%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.133314934329711%")
  },
  ImageBackground_1429_2772: {
    width: wp("3.921305614969005%"),
    height: hp("1.3634285640195418%"),
    top: hp("2.854560893741457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1304253472222214%")
  },
  ImageBackground_1429_2774: {
    width: wp("2.0214912396122293%"),
    height: hp("1.426042103376545%"),
    top: hp("2.4842726076886947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1429_2776: {
    width: wp("6.061486691092523%"),
    height: hp("1.201222372836754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7460442142210155%")
  },
  ImageBackground_1429_2778: {
    width: wp("4.711908994665468%"),
    height: hp("2.002339415211495%"),
    top: hp("1.8546349363900276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5796275852958956%")
  },
  ImageBackground_1429_2780: {
    width: wp("2.8729215336306657%"),
    height: hp("2.4459880557868%"),
    top: hp("0.3494596220756492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.916687896286234%")
  },
  ImageBackground_1429_2782: {
    width: wp("3.4470707897978703%"),
    height: hp("2.654067284422494%"),
    top: hp("0.6564281025870855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1305362130132863%")
  },
  View_1429_2784: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("50.13661202185792%"),
    minHeight: hp("50.13661202185792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("40.14695798113046%")
  },
  View_1429_2785: {
    width: wp("75.32216684829785%"),
    minWidth: wp("75.32216684829785%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.781389171950483%"),
    top: hp("9.016393442622956%"),
    justifyContent: "flex-start"
  },
  Text_1429_2785: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2786: {
    width: wp("44.32140479341221%"),
    minWidth: wp("44.32140479341221%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.281783099335748%"),
    top: hp("47.26775956284154%"),
    justifyContent: "flex-start"
  },
  Text_1429_2786: {
    color: "rgba(115, 122, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2787: {
    width: wp("46.25895403433537%"),
    height: hp("6.830601092896176%"),
    top: hp("34.56284153005465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.313004793176326%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1429_2788: {
    width: wp("46.13526570048309%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.05696614583333215%")
  },
  View_1429_2789: {
    width: wp("16.183574879227052%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.990765115489133%"),
    justifyContent: "flex-start"
  },
  Text_1429_2789: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2790: {
    width: wp("43.11043928210862%"),
    minWidth: wp("43.11043928210862%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.73495055857488%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1429_2790: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1429_2791: {
    width: wp("50.13404883048385%"),
    minWidth: wp("50.13404883048385%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.375448180857486%"),
    top: hp("6.5573770491803245%")
  },
  View_1429_2792: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.46506387679303%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1429_2793: {
    width: wp("89.85636245801253%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24024852807970998%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1429_2794: {
    width: wp("39.130434782608695%"),
    minWidth: wp("39.130434782608695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724637681159415%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_1429_2794: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2795: {
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
  ImageBackground_1429_2796: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1429_2799: {
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
  View_1429_2800: {
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
  Text_1429_2800: {
    color: "rgba(55, 61, 60, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2801: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1429_2802: {
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
  View_1429_2803: {
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
  ImageBackground_1429_2804: {
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
  View_1429_2805: {
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
  ImageBackground_1429_2806: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1429_2810: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1429_2815: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1429_2816: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1429_2816: {
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
