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
      <View style={styles.View_1042_42}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3be0/b6fa/08bbbcfd1f1e4eecd24e35760a9e4e72"
          }}
          style={styles.ImageBackground_1042_43}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b83/f39b/1b1d02273eaea90227ac7d5d0b1c5879"
          }}
          style={styles.ImageBackground_1042_45}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb8/1852/c5a4c1ccf07ad5152166fae30119f59a"
          }}
          style={styles.ImageBackground_1042_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_1042_49}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828c/e88e/a68a170748e6856356870ce9130f81f4"
          }}
          style={styles.ImageBackground_1042_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7829/f76b/ee2c4e5f399c682d3c4d923f8aeb443b"
          }}
          style={styles.ImageBackground_1042_53}
        />
      </View>
      <View style={styles.View_1042_55}>
        <View style={styles.View_1042_56}>
          <View style={styles.View_1042_57} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1042_58}
          />
          <View style={styles.View_1042_59} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1042_60}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3140/3364/dcb34336c22cf6768bf19015ef21733f"
          }}
          style={styles.ImageBackground_1042_64}
        />
        <View style={styles.View_1042_69}>
          <View style={styles.View_1042_70}>
            <Text style={styles.Text_1042_70}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1042_71} />
      <View style={styles.View_1042_72}>
        <View style={styles.View_1042_73}>
          <View style={styles.View_1042_74}>
            <View style={styles.View_1042_75} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1897/45c5/4db112ebde753936936f8cec24a439c7"
              }}
              style={styles.ImageBackground_1042_76}
            />
          </View>
          <View style={styles.View_1042_77}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c156/8667/23fdc213ec971b756bd862a88008680c"
              }}
              style={styles.ImageBackground_1042_78}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e683/3e75/62557ab74a9977698cc03868a1e45827"
              }}
              style={styles.ImageBackground_1042_79}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18e6/e9d9/bf2f151873dc37697ded8a2b92df92b9"
              }}
              style={styles.ImageBackground_1042_81}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4405/6190/bddd7962c6d5137fd9b5730896594bc2"
            }}
            style={styles.ImageBackground_1042_82}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3cd/6309/3062a489db25c5c3073abf0fa8079380"
            }}
            style={styles.ImageBackground_1042_86}
          />
          <View style={styles.View_1042_90} />
          <View style={styles.View_1042_91}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb69/1053/0c9b6f677ab53dac246545db47dd4187"
              }}
              style={styles.ImageBackground_1042_92}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eba7/5c21/29be686fb6af7f24d7caa9c93693e90f"
              }}
              style={styles.ImageBackground_1042_93}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1484/ff2b/aaed454002a10e86337000d4a8c92fe2"
              }}
              style={styles.ImageBackground_1042_94}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1484/ff2b/aaed454002a10e86337000d4a8c92fe2"
              }}
              style={styles.ImageBackground_1042_97}
            />
          </View>
        </View>
        <View style={styles.View_1042_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32b0/af45/0ff93186ad2bb74489739e7569908b64"
            }}
            style={styles.ImageBackground_1042_101}
          />
          <View style={styles.View_1042_102}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60cc/8a5e/327405b484a6804f54c3b0cf4ee2b210"
              }}
              style={styles.ImageBackground_1042_103}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1042_108}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_1042_109}
        />
        <View style={styles.View_1042_111}>
          <View style={styles.View_1042_112}>
            <Text style={styles.Text_1042_112}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1042_113}>
        <View style={styles.View_1042_114}>
          <Text style={styles.Text_1042_114}>Narayana Kirana</Text>
        </View>
        <View style={styles.View_1042_115}>
          <Text style={styles.Text_1042_115}>@naraya.kirana</Text>
        </View>
      </View>
      <View style={styles.View_1042_116}>
        <View style={styles.View_1042_119}>
          <View style={styles.View_1042_120}>
            <Text style={styles.Text_1042_120}>My account</Text>
          </View>
        </View>
        <View style={styles.View_1042_117}>
          <View style={styles.View_1042_118}>
            <Text style={styles.Text_1042_118}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1042_121}>
        <View style={styles.View_1042_122}>
          <Text style={styles.Text_1042_122}>Password</Text>
        </View>
        <View style={styles.View_1042_123}>
          <Text style={styles.Text_1042_123}>
            Change your NaijCoin password using the form below.
          </Text>
        </View>
      </View>
      <View style={styles.View_1042_150}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4906/59b8/aad87626775557ade1fef70f45ed8d84"
          }}
          style={styles.ImageBackground_1042_151}
        />
        <View style={styles.View_1042_152}>
          <Text style={styles.Text_1042_152}>Save changes</Text>
        </View>
      </View>
      <View style={styles.View_1042_155}>
        <View style={styles.View_1042_156} />
        <View style={styles.View_1042_157}>
          <Text style={styles.Text_1042_157}>Old Password</Text>
        </View>
        <View style={styles.View_1042_158}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79df/e97b/66207333d9a609c92a71b79872bf4a1d"
            }}
            style={styles.ImageBackground_1042_159}
          />
        </View>
      </View>
      <View style={styles.View_1042_176}>
        <View style={styles.View_1042_177} />
        <View style={styles.View_1042_178}>
          <Text style={styles.Text_1042_178}>New Password</Text>
        </View>
        <View style={styles.View_1042_179}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79df/e97b/66207333d9a609c92a71b79872bf4a1d"
            }}
            style={styles.ImageBackground_1042_180}
          />
        </View>
      </View>
      <View style={styles.View_1042_183}>
        <View style={styles.View_1042_184} />
        <View style={styles.View_1042_185}>
          <Text style={styles.Text_1042_185}>Confirm New Password</Text>
        </View>
        <View style={styles.View_1042_186}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79df/e97b/66207333d9a609c92a71b79872bf4a1d"
            }}
            style={styles.ImageBackground_1042_187}
          />
        </View>
      </View>
      <View style={styles.View_1042_153}>
        <View style={styles.View_1042_154} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1042_42: {
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
  ImageBackground_1042_43: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25803129269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_1042_45: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97792862021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_1042_47: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.285182932035519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_1042_49: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.2770609204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_1042_51: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5036554388661205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_1042_53: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.63973382001366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_1042_55: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_56: {
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
  View_1042_57: {
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
  ImageBackground_1042_58: {
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
  View_1042_59: {
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
  ImageBackground_1042_60: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1042_64: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1042_69: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_70: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1042_70: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_71: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("87.29508196721312%"),
    minHeight: hp("87.29508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1042_72: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%")
  },
  View_1042_73: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_1042_74: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_75: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(165, 171, 193, 1)"
  },
  ImageBackground_1042_76: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1042_77: {
    width: wp("12.7027225955097%"),
    height: hp("9.01639344262295%"),
    top: hp("3.381147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.679951690821255%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1042_78: {
    width: wp("12.7027225955097%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1042_79: {
    width: wp("1.9214012772564726%"),
    height: hp("1.0145262942288091%"),
    top: hp("4.17200307377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.233782929498787%")
  },
  ImageBackground_1042_81: {
    width: wp("0.2646068443998622%"),
    height: hp("0.3908172982637999%"),
    top: hp("2.4095212175546443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.114536156400966%")
  },
  ImageBackground_1042_82: {
    width: wp("12.7027225955097%"),
    height: hp("4.132513661202186%"),
    top: hp("8.265027322404372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.679951690821255%")
  },
  ImageBackground_1042_86: {
    width: wp("8.691339907438858%"),
    height: hp("4.132513661202186%"),
    top: hp("2.629781420765026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.354235073218597%")
  },
  View_1042_90: {
    width: wp("7.35420927333371%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.883879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.022732204861114%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_91: {
    width: wp("3.3428228995650286%"),
    height: hp("1.8784153005464481%"),
    top: hp("4.883879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.365630661231876%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1042_92: {
    width: wp("3.3428228995650286%"),
    height: hp("1.8784153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1042_93: {
    width: wp("0.841550089886799%"),
    height: hp("0.24831203815064143%"),
    top: hp("2.2348872950819665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2623367678140127%")
  },
  ImageBackground_1042_94: {
    width: wp("0.7690756793183405%"),
    height: hp("0.47800052361410167%"),
    top: hp("0.7054730191256837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4988960597826093%")
  },
  ImageBackground_1042_97: {
    width: wp("0.7690766007428008%"),
    height: hp("0.47800058875579%"),
    top: hp("0.6191566342213104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5615894852053245%")
  },
  View_1042_100: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908209%"),
    top: hp("8.333333333333332%")
  },
  ImageBackground_1042_101: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1042_102: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396121%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1042_103: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1042_108: {
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
  ImageBackground_1042_109: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1042_111: {
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
  View_1042_112: {
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
  Text_1042_112: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_113: {
    width: wp("45.893719806763286%"),
    minWidth: wp("45.893719806763286%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.053140096618357%"),
    top: hp("23.224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_114: {
    width: wp("45.893719806763286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1042_114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_115: {
    width: wp("24.154589371980677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391305%"),
    top: hp("4.918032786885242%"),
    justifyContent: "flex-start"
  },
  Text_1042_115: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_116: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1042_119: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1042_120: {
    width: wp("24.516908212560388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.741545893719808%"),
    top: hp("3.2786885245901587%"),
    justifyContent: "flex-start"
  },
  Text_1042_120: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_117: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1042_118: {
    width: wp("24.516908212560388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.74154589371981%"),
    top: hp("3.2786885245901587%"),
    justifyContent: "flex-start"
  },
  Text_1042_118: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_121: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("48.224043715846996%")
  },
  View_1042_122: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1042_122: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_123: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%"),
    justifyContent: "flex-start"
  },
  Text_1042_123: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_150: {
    width: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    top: hp("107.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1042_151: {
    width: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1042_152: {
    width: wp("75.06975551734224%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.634171195652174%"),
    justifyContent: "flex-start"
  },
  Text_1042_152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_155: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("59.42622950819673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_156: {
    width: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1042_157: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_1042_157: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_158: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.67632850241546%"),
    top: hp("2.5956284153005456%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1042_159: {
    width: wp("4.347817794136379%"),
    height: hp("1.639344262295082%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371981672%")
  },
  View_1042_176: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("70.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_177: {
    width: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185794252%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1042_178: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.3224043715847102%"),
    justifyContent: "flex-start"
  },
  Text_1042_178: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_179: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.67632850241546%"),
    top: hp("2.595628415300567%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1042_180: {
    width: wp("4.347817794136379%"),
    height: hp("1.639344262295082%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371981672%")
  },
  View_1042_183: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("81.83060109289617%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_184: {
    width: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(228, 230, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1042_185: {
    width: wp("40.33816425120773%"),
    minWidth: wp("40.33816425120773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.3224043715847102%"),
    justifyContent: "flex-start"
  },
  Text_1042_185: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_186: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.67632850241546%"),
    top: hp("2.5956284153005527%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1042_187: {
    width: wp("4.347817794136379%"),
    height: hp("1.639344262295082%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371981672%")
  },
  View_1042_153: {
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
  View_1042_154: {
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
