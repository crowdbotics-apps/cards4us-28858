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
      <View style={styles.View_918_1} />
      <View style={styles.View_918_2} />
      <View style={styles.View_918_3}>
        <View style={styles.View_918_4}>
          <View style={styles.View_918_5} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_918_6}
          />
          <View style={styles.View_918_7} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_918_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_918_12}
        />
        <View style={styles.View_918_17}>
          <View style={styles.View_918_18}>
            <Text style={styles.Text_918_18}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_918_19}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_918_20}
        />
        <View style={styles.View_918_22}>
          <View style={styles.View_918_23}>
            <Text style={styles.Text_918_23}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_918_24}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/974a/980c/5eebc7052f15c9dd6e9c3d0b232e233a"
          }}
          style={styles.ImageBackground_918_25}
        />
        <View style={styles.View_918_26}>
          <Text style={styles.Text_918_26}>I have paid</Text>
        </View>
      </View>
      <View style={styles.View_918_27}>
        <Text style={styles.Text_918_27}>Pay via bank transfer</Text>
      </View>
      <View style={styles.View_919_0}>
        <View style={styles.View_919_1} />
        <View style={styles.View_919_2}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32d2/4cf0/ab8399890836db78c0140d6f293f5e6c"
            }}
            style={styles.ImageBackground_919_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f70/f460/86f5fe5dca736213271a02db3a754bf1"
            }}
            style={styles.ImageBackground_919_5}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b82d/430e/70d644e8c123645e4061e4178b3f53fe"
            }}
            style={styles.ImageBackground_919_7}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d52/bb54/0d2eee440cb3ce2550dd6f649cfe7e53"
            }}
            style={styles.ImageBackground_919_9}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c5b/5db4/b63337122760f51adabf5cf47a477ec0"
            }}
            style={styles.ImageBackground_919_11}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8141/3d6d/a51fceb9ba647e3568275b3ab22d54a5"
            }}
            style={styles.ImageBackground_919_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0725/f8da/2e1b9ac1d791447a5743e45dd1f7a803"
            }}
            style={styles.ImageBackground_919_15}
          />
        </View>
        <View style={styles.View_919_17}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c94/8b0d/75fe95cee47c46609cdac7e930f0d1fc"
            }}
            style={styles.ImageBackground_919_18}
          />
        </View>
        <View style={styles.View_919_22}>
          <View style={styles.View_919_23}>
            <Text style={styles.Text_919_23}>Account number</Text>
          </View>
          <View style={styles.View_919_24}>
            <Text style={styles.Text_919_24}>9038345226</Text>
          </View>
        </View>
        <View style={styles.View_919_25}>
          <View style={styles.View_919_26}>
            <Text style={styles.Text_919_26}>Account name</Text>
          </View>
          <View style={styles.View_919_27}>
            <Text style={styles.Text_919_27}>Bamboo Lounge</Text>
          </View>
        </View>
        <View style={styles.View_919_28}>
          <View style={styles.View_919_29}>
            <Text style={styles.Text_919_29}>Bank name</Text>
          </View>
          <View style={styles.View_919_30}>
            <Text style={styles.Text_919_30}>Naijcoin</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_919_31}>
        <Text style={styles.Text_919_31}>
          This account details expires in (14:59)
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_918_1: {
    width: wp("136.271940222109%"),
    minWidth: wp("136.271940222109%"),
    height: hp("86.63260871595372%"),
    minHeight: hp("86.63260871595372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.75399352732487%"),
    top: hp("59.15303881702527%"),
    backgroundColor: "rgba(0, 204, 173, 1)"
  },
  View_918_2: {
    width: wp("63.55769945227582%"),
    minWidth: wp("63.55769945227582%"),
    height: hp("37.483511335862794%"),
    minHeight: hp("37.483511335862794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22216325105676%"),
    top: hp("28.004630667264347%"),
    backgroundColor: "rgba(249, 169, 2, 1)"
  },
  View_918_3: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_918_4: {
    width: wp("5.876337502889587%"),
    minWidth: wp("5.876337502889587%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.367947270961407%")
  },
  View_918_5: {
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
  ImageBackground_918_6: {
    width: wp("0.32078212010111784%"),
    minWidth: wp("0.32078212010111784%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("0.5009051880549862%")
  },
  View_918_7: {
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
  ImageBackground_918_8: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_918_12: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_918_17: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_918_18: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_918_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_918_19: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("7.5136612021857925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_918_20: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_918_22: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275361%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_918_23: {
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
  Text_918_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_918_24: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("105.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.690821256038646%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_918_25: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_918_26: {
    width: wp("36.12982708474864%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6741984639190832%"),
    justifyContent: "flex-start"
  },
  Text_918_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_918_27: {
    width: wp("87.43961352657004%"),
    minWidth: wp("87.43961352657004%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("14.48087431693989%"),
    justifyContent: "flex-start"
  },
  Text_918_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_0: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("24.59016393442623%")
  },
  View_919_1: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("37.15846994535519%"),
    minHeight: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 237, 199, 1)",
    borderColor: "rgba(249, 169, 2, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_919_2: {
    width: wp("57.246413668572615%"),
    minWidth: wp("57.246413668572615%"),
    height: hp("34.24163776668694%"),
    minHeight: hp("34.24163776668694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.42512077294686%"),
    top: hp("1.5027322404371617%")
  },
  ImageBackground_919_3: {
    width: wp("13.192494710286459%"),
    height: hp("11.859121478971888%"),
    top: hp("12.095667104252051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.43632765323068%")
  },
  ImageBackground_919_5: {
    width: wp("31.833254311971622%"),
    height: hp("11.068346200744962%"),
    top: hp("23.173281143271858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.413151985205314%")
  },
  ImageBackground_919_7: {
    width: wp("16.410512509553328%"),
    height: hp("11.576643146452357%"),
    top: hp("20.167583194586747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_919_9: {
    width: wp("49.2072948511096%"),
    height: hp("9.751551268530674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.056220750301936%")
  },
  ImageBackground_919_11: {
    width: wp("38.25138847609073%"),
    height: hp("16.25503894409847%"),
    top: hp("15.055705419655048%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7054272342995205%")
  },
  ImageBackground_919_13: {
    width: wp("23.322447256189612%"),
    height: hp("19.85658739433914%"),
    top: hp("2.8365338434938465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.795483280495173%")
  },
  ImageBackground_919_15: {
    width: wp("27.98340286033741%"),
    height: hp("21.54578328784046%"),
    top: hp("5.329069544057372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.177564538043477%")
  },
  View_919_17: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.95169082125604%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_919_18: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_919_22: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("3.551912568306008%")
  },
  View_919_23: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_919_23: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_24: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    justifyContent: "center"
  },
  Text_919_24: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_25: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("13.251366120218577%")
  },
  View_919_26: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_919_26: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_27: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    justifyContent: "center"
  },
  Text_919_27: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_28: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("23.770491803278688%")
  },
  View_919_29: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_919_29: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_30: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    justifyContent: "center"
  },
  Text_919_30: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_31: {
    width: wp("55.31400966183575%"),
    minWidth: wp("55.31400966183575%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("65.02732240437157%"),
    justifyContent: "center"
  },
  Text_919_31: {
    color: "rgba(242, 245, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
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
