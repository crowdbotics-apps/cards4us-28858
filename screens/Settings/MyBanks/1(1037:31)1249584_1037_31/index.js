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
      <View style={styles.View_1037_32}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ae/a680/3c944c9cc89b1bcb9408c55626431326"
          }}
          style={styles.ImageBackground_1037_33}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/7b9b/1f628b184155cee27f10a693d3b68162"
          }}
          style={styles.ImageBackground_1037_35}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb8/1852/c5a4c1ccf07ad5152166fae30119f59a"
          }}
          style={styles.ImageBackground_1037_37}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_1037_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c414/63ec/1eaf3cccc84fa523d09e93490b3f8941"
          }}
          style={styles.ImageBackground_1037_41}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35da/5c50/e56ac3f26f901c55886f5fe927721f4f"
          }}
          style={styles.ImageBackground_1037_43}
        />
      </View>
      <View style={styles.View_1037_45}>
        <View style={styles.View_1037_46}>
          <View style={styles.View_1037_47} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1037_48}
          />
          <View style={styles.View_1037_49} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1037_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_1037_54}
        />
        <View style={styles.View_1037_59}>
          <View style={styles.View_1037_60}>
            <Text style={styles.Text_1037_60}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1037_230}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_1037_231}
        />
        <View style={styles.View_1037_233}>
          <View style={styles.View_1037_234}>
            <Text style={styles.Text_1037_234}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1037_235}>
        <Text style={styles.Text_1037_235}>My banks</Text>
      </View>
      <View style={styles.View_1037_188}>
        <View style={styles.View_1037_189} />
        <View style={styles.View_1037_190}>
          <View style={styles.View_1037_191}>
            <View style={styles.View_1037_192} />
            <View style={styles.View_1037_193} />
            <View style={styles.View_1037_194} />
            <View style={styles.View_1037_195} />
            <View style={styles.View_1037_196} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60b8/bc0b/8c53864106e41c9b00782330cba54529"
          }}
          style={styles.ImageBackground_1037_197}
        />
        <View style={styles.View_1037_198}>
          <View style={styles.View_1037_199}>
            <Text style={styles.Text_1037_199}>Thelma Dike Mayberlline</Text>
          </View>
          <View style={styles.View_1037_200}>
            <Text style={styles.Text_1037_200}>Access bank</Text>
          </View>
          <View style={styles.View_1037_201}>
            <Text style={styles.Text_1037_201}>0079398999</Text>
          </View>
        </View>
        <View style={styles.View_1037_202}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aac8/a1c3/3b7ccc065c3c0c2a22fc0efe748dc50b"
            }}
            style={styles.ImageBackground_1037_203}
          />
          <View style={styles.View_1037_204}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fbb/44aa/d8b732495d5694b9d2152b676e12640e"
              }}
              style={styles.ImageBackground_1037_205}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd73/a6a0/ef390106f2a87f4024fc6a9ff3d718bf"
              }}
              style={styles.ImageBackground_1037_208}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1037_257}>
        <View style={styles.View_1037_258} />
        <View style={styles.View_1037_259}>
          <View style={styles.View_1037_260}>
            <View style={styles.View_1037_261} />
            <View style={styles.View_1037_262} />
            <View style={styles.View_1037_263} />
            <View style={styles.View_1037_264} />
            <View style={styles.View_1037_265} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e426/d784/d5b89f012d4e60c4dabb9c572db82205"
          }}
          style={styles.ImageBackground_1037_278}
        />
        <View style={styles.View_1037_267}>
          <View style={styles.View_1037_268}>
            <Text style={styles.Text_1037_268}>Thelma Dike Mayberlline</Text>
          </View>
          <View style={styles.View_1037_269}>
            <Text style={styles.Text_1037_269}>GT bank</Text>
          </View>
          <View style={styles.View_1037_270}>
            <Text style={styles.Text_1037_270}>0079398999</Text>
          </View>
        </View>
        <View style={styles.View_1037_271}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aac8/a1c3/3b7ccc065c3c0c2a22fc0efe748dc50b"
            }}
            style={styles.ImageBackground_1037_272}
          />
          <View style={styles.View_1037_273}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fbb/44aa/d8b732495d5694b9d2152b676e12640e"
              }}
              style={styles.ImageBackground_1037_274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd73/a6a0/ef390106f2a87f4024fc6a9ff3d718bf"
              }}
              style={styles.ImageBackground_1037_277}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1035_2598}>
        <View style={styles.View_1035_2599} />
        <View style={styles.View_1035_2600}>
          <View style={styles.View_1035_2601}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c63/0244/a5967ba87dcd09bc044366dc52423c04"
              }}
              style={styles.ImageBackground_1035_2602}
            />
          </View>
          <View style={styles.View_1035_2606}>
            <Text style={styles.Text_1035_2606}>Add New Bank account</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1037_151}>
        <View style={styles.View_1037_152} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1037_32: {
    width: wp("225.31679310084542%"),
    minWidth: wp("225.31679310084542%"),
    height: hp("126.95264138810623%"),
    minHeight: hp("126.95264138810623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-43.39440387228261%"),
    top: hp("-9.289617486338798%")
  },
  ImageBackground_1037_33: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25803129269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_1037_35: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97792862021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_1037_37: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.285182932035519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_1037_39: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.2770609204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_1037_41: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5036554388661205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_1037_43: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.63973382001366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_1037_45: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1037_46: {
    width: wp("5.876337502889587%"),
    minWidth: wp("5.876337502889587%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.367897242144809%")
  },
  View_1037_47: {
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
  ImageBackground_1037_48: {
    width: wp("0.32078212010111784%"),
    minWidth: wp("0.32078212010111784%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("0.5009552168715845%")
  },
  View_1037_49: {
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
  ImageBackground_1037_50: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1037_54: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1037_59: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1037_60: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1037_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_230: {
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
  ImageBackground_1037_231: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1037_233: {
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
  View_1037_234: {
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
  Text_1037_234: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_235: {
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
  Text_1037_235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_188: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("70.64349065061475%")
  },
  View_1037_189: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(236, 236, 236, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_1037_190: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1037_191: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1037_192: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(8, 35, 102, 1)",
    borderColor: "rgba(242, 245, 250, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_1037_193: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 245, 250, 1)",
    opacity: 0.5
  },
  View_1037_194: {
    width: wp("28.12300788031684%"),
    minWidth: wp("28.12300788031684%"),
    height: hp("25.94285350028283%"),
    minHeight: hp("25.94285350028283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.192307329408214%"),
    top: hp("12.869412781762293%"),
    backgroundColor: "rgba(242, 245, 250, 1)",
    opacity: 0.5
  },
  View_1037_195: {
    width: wp("28.12300788031684%"),
    minWidth: wp("28.12300788031684%"),
    height: hp("25.94285350028283%"),
    minHeight: hp("25.94285350028283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.25202389039855%"),
    top: hp("12.869412781762293%"),
    backgroundColor: "rgba(242, 245, 250, 1)",
    opacity: 0.5
  },
  View_1037_196: {
    width: wp("28.12300788031684%"),
    minWidth: wp("28.12300788031684%"),
    height: hp("25.94285350028283%"),
    minHeight: hp("25.94285350028283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.25202389039855%"),
    top: hp("-0.47253884904371546%"),
    backgroundColor: "rgba(242, 245, 250, 1)",
    opacity: 0.5
  },
  ImageBackground_1037_197: {
    width: wp("11.411137051052517%"),
    minWidth: wp("11.411137051052517%"),
    height: hp("6.073372220732475%"),
    minHeight: hp("6.073372220732475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.705519229317632%"),
    top: hp("5.061181907445359%")
  },
  View_1037_198: {
    width: wp("78.99740467900816%"),
    minWidth: wp("78.99740467900816%"),
    height: hp("11.13460936832949%"),
    minHeight: hp("11.13460936832949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.705519229317632%"),
    top: hp("13.158912867144807%")
  },
  View_1037_199: {
    width: wp("57.689637262464146%"),
    minWidth: wp("57.689637262464146%"),
    minHeight: hp("4.048914726966066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00005897116546016434%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1037_199: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_200: {
    width: wp("25.04110290232488%"),
    minWidth: wp("25.04110290232488%"),
    minHeight: hp("3.5428005489495282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.95631651947464%"),
    top: hp("7.591839566256837%"),
    justifyContent: "flex-start"
  },
  Text_1037_200: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_201: {
    width: wp("24.724131045134172%"),
    minWidth: wp("24.724131045134172%"),
    minHeight: hp("3.5428005489495282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.591839566256837%"),
    justifyContent: "flex-start"
  },
  Text_1037_201: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_202: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.98550724637681%"),
    top: hp("2.6991547131147513%")
  },
  ImageBackground_1037_203: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1037_204: {
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    top: hp("0.8198055413251382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4492753623188435%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1037_205: {
    width: wp("2.318840902208706%"),
    height: hp("1.3114754619494162%"),
    top: hp("0.16382769808744513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.28972533589976024%")
  },
  ImageBackground_1037_208: {
    width: wp("2.318840902208706%"),
    height: hp("1.3114754619494162%"),
    top: hp("0.16382769808744513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.28972533589976024%")
  },
  View_1037_257: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("37.84153005464481%")
  },
  View_1037_258: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(236, 236, 236, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_1037_259: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1037_260: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1037_261: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(8, 35, 102, 1)",
    borderColor: "rgba(242, 245, 250, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_1037_262: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("29.523334607400532%"),
    minHeight: hp("29.523334607400532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 245, 250, 1)",
    opacity: 0.5
  },
  View_1037_263: {
    width: wp("28.12300788031684%"),
    minWidth: wp("28.12300788031684%"),
    height: hp("25.94285350028283%"),
    minHeight: hp("25.94285350028283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.192307329408214%"),
    top: hp("12.869412781762293%"),
    backgroundColor: "rgba(242, 245, 250, 1)",
    opacity: 0.5
  },
  View_1037_264: {
    width: wp("28.12300788031684%"),
    minWidth: wp("28.12300788031684%"),
    height: hp("25.94285350028283%"),
    minHeight: hp("25.94285350028283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.25202389039855%"),
    top: hp("12.869412781762293%"),
    backgroundColor: "rgba(242, 245, 250, 1)",
    opacity: 0.5
  },
  View_1037_265: {
    width: wp("28.12300788031684%"),
    minWidth: wp("28.12300788031684%"),
    height: hp("25.94285350028283%"),
    minHeight: hp("25.94285350028283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.25202389039855%"),
    top: hp("-0.47253884904371546%"),
    backgroundColor: "rgba(242, 245, 250, 1)",
    opacity: 0.5
  },
  ImageBackground_1037_278: {
    width: wp("11.428571323265777%"),
    minWidth: wp("11.428571323265777%"),
    height: hp("6.463700174633923%"),
    minHeight: hp("6.463700174633923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275361%"),
    top: hp("5.05464480874317%")
  },
  View_1037_267: {
    width: wp("78.99740467900816%"),
    minWidth: wp("78.99740467900816%"),
    height: hp("11.13460936832949%"),
    minHeight: hp("11.13460936832949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.705519229317632%"),
    top: hp("13.158912867144807%")
  },
  View_1037_268: {
    width: wp("57.689637262464146%"),
    minWidth: wp("57.689637262464146%"),
    minHeight: hp("4.048914726966066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00005897116546016434%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1037_268: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_269: {
    width: wp("25.04110290232488%"),
    minWidth: wp("25.04110290232488%"),
    minHeight: hp("3.5428005489495282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.95631651947464%"),
    top: hp("7.59183956625683%"),
    justifyContent: "flex-start"
  },
  Text_1037_269: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_270: {
    width: wp("24.724131045134172%"),
    minWidth: wp("24.724131045134172%"),
    minHeight: hp("3.5428005489495282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.59183956625683%"),
    justifyContent: "flex-start"
  },
  Text_1037_270: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_271: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.98550724637681%"),
    top: hp("2.6991547131147513%")
  },
  ImageBackground_1037_272: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1037_273: {
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    top: hp("0.8198055413251453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4492753623188435%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1037_274: {
    width: wp("2.318840902208706%"),
    height: hp("1.3114754619494162%"),
    top: hp("0.1638276980874238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.28972533589976024%")
  },
  ImageBackground_1037_277: {
    width: wp("2.318840902208706%"),
    height: hp("1.3114754619494162%"),
    top: hp("0.1638276980874238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.28972533589976024%")
  },
  View_1035_2598: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("23.770491803278688%")
  },
  View_1035_2599: {
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
  View_1035_2600: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.188405797101453%"),
    top: hp("3.8251366120218577%")
  },
  View_1035_2601: {
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
  ImageBackground_1035_2602: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1035_2606: {
    width: wp("35.990338164251206%"),
    minWidth: wp("35.990338164251206%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033808%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_1035_2606: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_151: {
    width: wp("35.748792270531396%"),
    minWidth: wp("35.748792270531396%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.02747584541063%"),
    top: hp("120.21857923497268%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1037_152: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(228, 230, 235, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
