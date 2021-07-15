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
      <View style={styles.View_1041_685}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3be0/b6fa/08bbbcfd1f1e4eecd24e35760a9e4e72"
          }}
          style={styles.ImageBackground_1041_686}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b83/f39b/1b1d02273eaea90227ac7d5d0b1c5879"
          }}
          style={styles.ImageBackground_1041_688}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb8/1852/c5a4c1ccf07ad5152166fae30119f59a"
          }}
          style={styles.ImageBackground_1041_690}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_1041_692}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4cc/7ffd/aab9da46518bcbad00beb4b1efe69461"
          }}
          style={styles.ImageBackground_1041_694}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7829/f76b/ee2c4e5f399c682d3c4d923f8aeb443b"
          }}
          style={styles.ImageBackground_1041_696}
        />
      </View>
      <View style={styles.View_1041_698}>
        <View style={styles.View_1041_699}>
          <View style={styles.View_1041_700} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1041_701}
          />
          <View style={styles.View_1041_702} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1041_703}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3140/3364/dcb34336c22cf6768bf19015ef21733f"
          }}
          style={styles.ImageBackground_1041_707}
        />
        <View style={styles.View_1041_712}>
          <View style={styles.View_1041_713}>
            <Text style={styles.Text_1041_713}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1041_714} />
      <View style={styles.View_1041_715}>
        <View style={styles.View_1041_716}>
          <View style={styles.View_1041_717}>
            <View style={styles.View_1041_718} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1897/45c5/4db112ebde753936936f8cec24a439c7"
              }}
              style={styles.ImageBackground_1041_719}
            />
          </View>
          <View style={styles.View_1041_720}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c156/8667/23fdc213ec971b756bd862a88008680c"
              }}
              style={styles.ImageBackground_1041_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e683/3e75/62557ab74a9977698cc03868a1e45827"
              }}
              style={styles.ImageBackground_1041_722}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18e6/e9d9/bf2f151873dc37697ded8a2b92df92b9"
              }}
              style={styles.ImageBackground_1041_724}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4405/6190/bddd7962c6d5137fd9b5730896594bc2"
            }}
            style={styles.ImageBackground_1041_725}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3cd/6309/3062a489db25c5c3073abf0fa8079380"
            }}
            style={styles.ImageBackground_1041_729}
          />
          <View style={styles.View_1041_733} />
          <View style={styles.View_1041_734}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb69/1053/0c9b6f677ab53dac246545db47dd4187"
              }}
              style={styles.ImageBackground_1041_735}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eba7/5c21/29be686fb6af7f24d7caa9c93693e90f"
              }}
              style={styles.ImageBackground_1041_736}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1484/ff2b/aaed454002a10e86337000d4a8c92fe2"
              }}
              style={styles.ImageBackground_1041_737}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1484/ff2b/aaed454002a10e86337000d4a8c92fe2"
              }}
              style={styles.ImageBackground_1041_740}
            />
          </View>
        </View>
        <View style={styles.View_1042_7}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32b0/af45/0ff93186ad2bb74489739e7569908b64"
            }}
            style={styles.ImageBackground_1042_0}
          />
          <View style={styles.View_1042_1}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60cc/8a5e/327405b484a6804f54c3b0cf4ee2b210"
              }}
              style={styles.ImageBackground_1042_2}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1041_1321}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_1041_1322}
        />
        <View style={styles.View_1041_1324}>
          <View style={styles.View_1041_1325}>
            <Text style={styles.Text_1041_1325}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1041_743}>
        <View style={styles.View_1041_744}>
          <Text style={styles.Text_1041_744}>Narayana Kirana</Text>
        </View>
        <View style={styles.View_1041_745}>
          <Text style={styles.Text_1041_745}>@naraya.kirana</Text>
        </View>
      </View>
      <View style={styles.View_1034_5}>
        <View style={styles.View_1034_6}>
          <View style={styles.View_1034_7}>
            <Text style={styles.Text_1034_7}>My account</Text>
          </View>
        </View>
        <View style={styles.View_1034_8}>
          <View style={styles.View_1034_9}>
            <Text style={styles.Text_1034_9}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1042_8}>
        <View style={styles.View_1042_9}>
          <Text style={styles.Text_1042_9}>Basic information</Text>
        </View>
        <View style={styles.View_1042_10}>
          <Text style={styles.Text_1042_10}>
            Let’s get to know you. Set up your name and contact details in
            simple steps.
          </Text>
        </View>
      </View>
      <View style={styles.View_1042_11}>
        <View style={styles.View_1042_12} />
        <View style={styles.View_1042_13}>
          <Text style={styles.Text_1042_13}>First name</Text>
        </View>
        <View style={styles.View_1042_14}>
          <Text style={styles.Text_1042_14}>Thelma |</Text>
        </View>
      </View>
      <View style={styles.View_1042_15}>
        <View style={styles.View_1042_16} />
        <View style={styles.View_1042_17}>
          <Text style={styles.Text_1042_17}>Last name</Text>
        </View>
        <View style={styles.View_1042_18}>
          <Text style={styles.Text_1042_18}>Dike</Text>
        </View>
      </View>
      <View style={styles.View_1042_19}>
        <View style={styles.View_1042_20} />
        <View style={styles.View_1042_21}>
          <Text style={styles.Text_1042_21}>Email</Text>
        </View>
        <View style={styles.View_1042_22}>
          <Text style={styles.Text_1042_22}>elizabethadekola@gmail.com</Text>
        </View>
        <View style={styles.View_1042_23}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/419a/d3cb/e04da6fe68f975112fb2783830379a02"
            }}
            style={styles.ImageBackground_1042_24}
          />
          <View style={styles.View_1042_26}>
            <Text style={styles.Text_1042_26}>Verify email</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1042_28}>
        <View style={styles.View_1042_29} />
        <View style={styles.View_1042_30}>
          <Text style={styles.Text_1042_30}>Phone number</Text>
        </View>
        <View style={styles.View_1042_31}>
          <Text style={styles.Text_1042_31}>09048764612</Text>
        </View>
        <View style={styles.View_1042_32}>
          <View style={styles.View_1042_33}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc79/c73e/232981a508c772c5832753f0e8383f2b"
              }}
              style={styles.ImageBackground_1042_34}
            />
          </View>
          <View style={styles.View_1042_37}>
            <Text style={styles.Text_1042_37}>Verified</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1042_38}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1eb/efa1/e5294a86e964b0e8044a23761ff25bc7"
          }}
          style={styles.ImageBackground_1042_39}
        />
        <View style={styles.View_1042_40}>
          <Text style={styles.Text_1042_40}>Save changes</Text>
        </View>
      </View>
      <View style={styles.View_1041_804}>
        <View style={styles.View_1041_805} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1041_685: {
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
  ImageBackground_1041_686: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25803129269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_1041_688: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97792862021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_1041_690: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.285182932035519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_1041_692: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.2770609204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_1041_694: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5036554388661205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_1041_696: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.63973382001366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_1041_698: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1041_699: {
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
  View_1041_700: {
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
  ImageBackground_1041_701: {
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
  View_1041_702: {
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
  ImageBackground_1041_703: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1041_707: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1041_712: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1041_713: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1041_713: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_714: {
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
  View_1041_715: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%")
  },
  View_1041_716: {
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
  View_1041_717: {
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
  View_1041_718: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(165, 171, 193, 1)"
  },
  ImageBackground_1041_719: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1041_720: {
    width: wp("12.7027225955097%"),
    height: hp("9.01639344262295%"),
    top: hp("3.381147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.679951690821255%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1041_721: {
    width: wp("12.7027225955097%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1041_722: {
    width: wp("1.9214012772564726%"),
    height: hp("1.0145262942288091%"),
    top: hp("4.17200307377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.233782929498787%")
  },
  ImageBackground_1041_724: {
    width: wp("0.2646068443998622%"),
    height: hp("0.3908172982637999%"),
    top: hp("2.4095212175546443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.114536156400966%")
  },
  ImageBackground_1041_725: {
    width: wp("12.7027225955097%"),
    height: hp("4.132513661202186%"),
    top: hp("8.265027322404372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.679951690821255%")
  },
  ImageBackground_1041_729: {
    width: wp("8.691339907438858%"),
    height: hp("4.132513661202186%"),
    top: hp("2.629781420765026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.354176102053138%")
  },
  View_1041_733: {
    width: wp("7.35420927333371%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.883879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.022673233695649%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1041_734: {
    width: wp("3.3428228995650286%"),
    height: hp("1.8784153005464481%"),
    top: hp("4.883879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.365630661231876%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1041_735: {
    width: wp("3.3428228995650286%"),
    height: hp("1.8784153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1041_736: {
    width: wp("0.841550089886799%"),
    height: hp("0.24831203815064143%"),
    top: hp("2.2348872950819665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2623367678140127%")
  },
  ImageBackground_1041_737: {
    width: wp("0.7690756793183405%"),
    height: hp("0.47800052361410167%"),
    top: hp("0.7054730191256837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4988960597826093%")
  },
  ImageBackground_1041_740: {
    width: wp("0.7690766007428008%"),
    height: hp("0.47800058875579%"),
    top: hp("0.6191566342213104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5615894852053245%")
  },
  View_1042_7: {
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
  ImageBackground_1042_0: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1042_1: {
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
  ImageBackground_1042_2: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1041_1321: {
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
  ImageBackground_1041_1322: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1041_1324: {
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
  View_1041_1325: {
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
  Text_1041_1325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_743: {
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
  View_1041_744: {
    width: wp("45.893719806763286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1041_744: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_745: {
    width: wp("24.154589371980677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391305%"),
    top: hp("4.918032786885242%"),
    justifyContent: "flex-start"
  },
  Text_1041_745: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1034_5: {
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
  View_1034_6: {
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
  View_1034_7: {
    width: wp("24.516908212560388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.741545893719808%"),
    top: hp("3.2786885245901587%"),
    justifyContent: "flex-start"
  },
  Text_1034_7: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1034_8: {
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
  View_1034_9: {
    width: wp("24.516908212560388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.74154589371981%"),
    top: hp("3.2786885245901587%"),
    justifyContent: "flex-start"
  },
  Text_1034_9: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_8: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("48.224043715846996%")
  },
  View_1042_9: {
    width: wp("39.130434782608695%"),
    minWidth: wp("39.130434782608695%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1042_9: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_10: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%"),
    justifyContent: "flex-start"
  },
  Text_1042_10: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_11: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("62.431693989071036%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_12: {
    width: wp("90.33816425120773%"),
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
  View_1042_13: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_1042_13: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_14: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.41530054644808%"),
    justifyContent: "flex-start"
  },
  Text_1042_14: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_15: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("73.36065573770492%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_16: {
    width: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 245, 250, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1042_17: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_1042_17: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_18: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.41530054644808%"),
    justifyContent: "flex-start"
  },
  Text_1042_18: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_19: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("84.2896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_20: {
    width: wp("90.33816425120773%"),
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
  View_1042_21: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_1042_21: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1042_22: {
    width: wp("51.449275362318836%"),
    minWidth: wp("51.449275362318836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.41530054644808%"),
    justifyContent: "flex-start"
  },
  Text_1042_22: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_23: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.28502415458938%"),
    top: hp("2.4590163934426243%")
  },
  ImageBackground_1042_24: {
    width: wp("3.3816425120772946%"),
    height: hp("2.185792349726776%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1042_26: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956516%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1042_26: {
    color: "rgba(235, 87, 87, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_28: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("95.21857923497268%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1042_29: {
    width: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 245, 250, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1042_30: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_1042_30: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_31: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.41530054644808%"),
    justifyContent: "flex-start"
  },
  Text_1042_31: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_32: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.35748792270532%"),
    top: hp("2.4590163934426243%")
  },
  View_1042_33: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1042_34: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1042_37: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1042_37: {
    color: "rgba(33, 150, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1042_38: {
    width: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    top: hp("107.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1042_39: {
    width: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1042_40: {
    width: wp("75.06975551734224%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.634171195652174%"),
    justifyContent: "flex-start"
  },
  Text_1042_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_804: {
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
  View_1041_805: {
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
