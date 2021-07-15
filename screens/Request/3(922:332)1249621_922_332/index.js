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
      <View style={styles.View_922_333} />
      <View style={styles.View_922_334} />
      <View style={styles.View_922_335}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d2a/3e39/125345e886cb449a39f3b38d970b08e2"
          }}
          style={styles.ImageBackground_922_336}
        />
        <View style={styles.View_922_339}>
          <View style={styles.View_922_340}>
            <Text style={styles.Text_922_340}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_922_341}>
        <View style={styles.View_922_342}>
          <View style={styles.View_922_343} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_922_344}
          />
          <View style={styles.View_922_345} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_922_346}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_922_350}
        />
        <View style={styles.View_922_355}>
          <View style={styles.View_922_356}>
            <Text style={styles.Text_922_356}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_922_357}>
        <View style={styles.View_922_358} />
        <View style={styles.View_922_359} />
        <View style={styles.View_922_360} />
        <View style={styles.View_922_361} />
      </View>
      <View style={styles.View_922_362}>
        <Text style={styles.Text_922_362}>Enter 4-digit Pin</Text>
      </View>
      <View style={styles.View_922_363}>
        <View style={styles.View_922_364}>
          <View style={styles.View_922_365}>
            <View style={styles.View_922_366}>
              <Text style={styles.Text_922_366}>1</Text>
            </View>
            <View style={styles.View_922_367}>
              <Text style={styles.Text_922_367}>2</Text>
            </View>
            <View style={styles.View_922_368}>
              <Text style={styles.Text_922_368}>3</Text>
            </View>
          </View>
          <View style={styles.View_922_369}>
            <View style={styles.View_922_370}>
              <Text style={styles.Text_922_370}>4</Text>
            </View>
            <View style={styles.View_922_371}>
              <Text style={styles.Text_922_371}>5</Text>
            </View>
            <View style={styles.View_922_372}>
              <Text style={styles.Text_922_372}>6</Text>
            </View>
          </View>
          <View style={styles.View_922_373}>
            <View style={styles.View_922_374}>
              <Text style={styles.Text_922_374}>7</Text>
            </View>
            <View style={styles.View_922_375}>
              <Text style={styles.Text_922_375}>8</Text>
            </View>
            <View style={styles.View_922_376}>
              <Text style={styles.Text_922_376}>9</Text>
            </View>
          </View>
          <View style={styles.View_922_377}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b09c/fb13/9bf2b489b610c906923e5fca6a3d6094"
              }}
              style={styles.ImageBackground_922_378}
            />
            <View style={styles.View_922_380}>
              <Text style={styles.Text_922_380}>0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb82/f2b1/57f9bf722cf93ed1c626ef5df18ad4df"
              }}
              style={styles.ImageBackground_922_381}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_922_333: {
    width: wp("136.271940222109%"),
    minWidth: wp("136.271940222109%"),
    height: hp("86.63260871595372%"),
    minHeight: hp("86.63260871595372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.75399352732487%"),
    top: hp("59.15300546448088%"),
    backgroundColor: "rgba(0, 204, 173, 1)"
  },
  View_922_334: {
    width: wp("63.55769945227582%"),
    minWidth: wp("63.55769945227582%"),
    height: hp("37.483511335862794%"),
    minHeight: hp("37.483511335862794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22216325105676%"),
    top: hp("28.00459731471995%"),
    backgroundColor: "rgba(249, 169, 2, 1)"
  },
  View_922_335: {
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
  ImageBackground_922_336: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_922_339: {
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
  View_922_340: {
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
  Text_922_340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_341: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_342: {
    width: wp("5.876337502889587%"),
    minWidth: wp("5.876337502889587%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.3679639472336067%")
  },
  View_922_343: {
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
  ImageBackground_922_344: {
    width: wp("0.32078212010111784%"),
    minWidth: wp("0.32078212010111784%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("0.5008885117827866%")
  },
  View_922_345: {
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
  ImageBackground_922_346: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_922_350: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_922_355: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_356: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_922_356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_357: {
    width: wp("76.32850241545893%"),
    minWidth: wp("76.32850241545893%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("30.601092896174865%")
  },
  View_922_358: {
    width: wp("15.041204811870188%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_922_359: {
    width: wp("15.041204811870188%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.85817198822465%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_922_360: {
    width: wp("15.041204811870188%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.42908599411232%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_922_361: {
    width: wp("15.041204811870188%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.28731695350242%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_922_362: {
    width: wp("50.72463768115942%"),
    minWidth: wp("50.72463768115942%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.637681159420293%"),
    top: hp("19.672131147540984%"),
    justifyContent: "center"
  },
  Text_922_362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_363: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("38.79781420765027%"),
    minHeight: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    top: hp("73.90710382513662%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_364: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("38.79781420765027%"),
    minHeight: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_922_365: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_366: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_367: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.52173913043478%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_367: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_368: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.2512077294686%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_369: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.655737704918025%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_370: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_370: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_371: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.0048309178744%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_372: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.768115942028984%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_372: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_373: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_374: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_375: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.64251207729469%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_376: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.00966183574879%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_376: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_377: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.967213114754102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_922_378: {
    width: wp("8.695652173913043%"),
    height: hp("4.918032786885246%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_922_380: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.212560386473434%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_922_381: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.28502415458938%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
