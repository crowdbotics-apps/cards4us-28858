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
      <View style={styles.View_919_33} />
      <View style={styles.View_919_34} />
      <View style={styles.View_919_35}>
        <View style={styles.View_919_36}>
          <View style={styles.View_919_37} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_919_38}
          />
          <View style={styles.View_919_39} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_919_40}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_919_44}
        />
        <View style={styles.View_919_49}>
          <View style={styles.View_919_50}>
            <Text style={styles.Text_919_50}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_919_51}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_919_52}
        />
        <View style={styles.View_919_54}>
          <View style={styles.View_919_55}>
            <Text style={styles.Text_919_55}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_919_56}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/974a/980c/5eebc7052f15c9dd6e9c3d0b232e233a"
          }}
          style={styles.ImageBackground_919_57}
        />
        <View style={styles.View_919_58}>
          <Text style={styles.Text_919_58}>Fund wallet</Text>
        </View>
      </View>
      <View style={styles.View_919_59}>
        <Text style={styles.Text_919_59}>Pay with card</Text>
      </View>
      <View style={styles.View_919_93}>
        <View style={styles.View_919_94} />
        <View style={styles.View_919_95}>
          <View style={styles.View_919_96}>
            <View style={styles.View_919_97}>
              <View style={styles.View_919_98}>
                <Text style={styles.Text_919_98}>Oli Zaruck</Text>
              </View>
              <View style={styles.View_919_99}>
                <Text style={styles.Text_919_99}>**** **** **** 1289</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_919_100}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1c8/873f/c2fcef2e66c20debd01ab3e7eb93020c"
              }}
              style={styles.ImageBackground_919_101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9b4/7eec/3d6a123004b371db633f046576cb9adf"
              }}
              style={styles.ImageBackground_919_102}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_919_106}>
        <View style={styles.View_919_107} />
        <View style={styles.View_919_108}>
          <View style={styles.View_919_109}>
            <View style={styles.View_919_110}>
              <View style={styles.View_919_111}>
                <Text style={styles.Text_919_111}>Thelma Dike</Text>
              </View>
              <View style={styles.View_919_112}>
                <Text style={styles.Text_919_112}>**** **** **** 1289</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_919_113}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1c8/873f/c2fcef2e66c20debd01ab3e7eb93020c"
              }}
              style={styles.ImageBackground_919_114}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9b4/7eec/3d6a123004b371db633f046576cb9adf"
              }}
              style={styles.ImageBackground_919_115}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_919_119}>
        <View style={styles.View_919_120} />
        <View style={styles.View_919_121}>
          <View style={styles.View_919_122}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c63/0244/a5967ba87dcd09bc044366dc52423c04"
              }}
              style={styles.ImageBackground_919_123}
            />
          </View>
          <View style={styles.View_919_127}>
            <Text style={styles.Text_919_127}>Add New Card</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_919_33: {
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
  View_919_34: {
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
  View_919_35: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_919_36: {
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
  View_919_37: {
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
  ImageBackground_919_38: {
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
  View_919_39: {
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
  ImageBackground_919_40: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_919_44: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413473494065915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_919_49: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_919_50: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_919_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_51: {
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
  ImageBackground_919_52: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_919_54: {
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
  View_919_55: {
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
  Text_919_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_56: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("105.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.690821256038646%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_919_57: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_919_58: {
    width: wp("36.12982708474864%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6741984639190832%"),
    justifyContent: "flex-start"
  },
  Text_919_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_59: {
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
  Text_919_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_93: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("26.09289617486339%")
  },
  View_919_94: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(202, 255, 247, 1)",
    borderColor: "rgba(0, 204, 173, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_919_95: {
    width: wp("80.43470152334315%"),
    minWidth: wp("80.43470152334315%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724637681159415%"),
    top: hp("1.9125683060109253%")
  },
  View_919_96: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_919_97: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_919_98: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980784%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_919_98: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_99: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218613%"),
    justifyContent: "flex-start"
  },
  Text_919_99: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_100: {
    width: wp("10.869481367765417%"),
    minWidth: wp("10.869481367765417%"),
    height: hp("4.906852388642525%"),
    minHeight: hp("4.906852388642525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.56521739130434%"),
    top: hp("1.0928961748633874%")
  },
  ImageBackground_919_101: {
    width: wp("2.938948967606549%"),
    height: hp("2.9866820476094227%"),
    top: hp("0.40630069586748974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.965339107789859%")
  },
  ImageBackground_919_102: {
    width: wp("10.869481367765417%"),
    height: hp("4.906852388642525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_919_106: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("40.16393442622951%")
  },
  View_919_107: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
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
  View_919_108: {
    width: wp("80.67624741706295%"),
    minWidth: wp("80.67624741706295%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("1.9125683060109324%")
  },
  View_919_109: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_919_110: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_919_111: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_919_111: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_112: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    justifyContent: "flex-start"
  },
  Text_919_112: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_919_113: {
    width: wp("10.869481367765417%"),
    minWidth: wp("10.869481367765417%"),
    height: hp("4.906852388642525%"),
    minHeight: hp("4.906852388642525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.80676328502415%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_919_114: {
    width: wp("2.938948967606549%"),
    height: hp("2.9866820476094227%"),
    top: hp("0.4063006958674862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.965339107789859%")
  },
  ImageBackground_919_115: {
    width: wp("10.869481367765417%"),
    height: hp("4.906852388642525%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_919_119: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("56.4207650273224%")
  },
  View_919_120: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_919_121: {
    width: wp("30.676328502415455%"),
    minWidth: wp("30.676328502415455%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.710144927536227%"),
    top: hp("3.8251366120218506%")
  },
  View_919_122: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_919_123: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_919_127: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473434%"),
    top: hp("0.40983606557377783%"),
    justifyContent: "flex-start"
  },
  Text_919_127: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 11,
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
