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
      <View style={styles.View_922_429} />
      <View style={styles.View_922_430} />
      <View style={styles.View_922_431}>
        <View style={styles.View_922_432}>
          <View style={styles.View_922_433} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_922_434}
          />
          <View style={styles.View_922_435} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_922_436}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_922_440}
        />
        <View style={styles.View_922_445}>
          <View style={styles.View_922_446}>
            <Text style={styles.Text_922_446}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_922_447}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_922_448}
        />
        <View style={styles.View_922_450}>
          <View style={styles.View_922_451}>
            <Text style={styles.Text_922_451}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_922_452}>
        <Text style={styles.Text_922_452}>Use QR code</Text>
      </View>
      <View style={styles.View_922_570}>
        <View style={styles.View_922_571} />
        <View style={styles.View_922_572}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8a6/2bb7/cd711dcb5568a45a3b7aeafcecb027c4"
            }}
            style={styles.ImageBackground_922_573}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/9730/d92675f8982951f89862e1450a688fd3"
            }}
            style={styles.ImageBackground_922_574}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ac/b39d/4d69bc28c87993889d5a7e329f2efe5d"
            }}
            style={styles.ImageBackground_922_575}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe50/f793/e7e2a7d7679f9154b798b72be19d064e"
            }}
            style={styles.ImageBackground_922_576}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2e8/cace/306923f5f27dce8f1d500bf239752214"
            }}
            style={styles.ImageBackground_922_577}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2e8/cace/306923f5f27dce8f1d500bf239752214"
            }}
            style={styles.ImageBackground_922_578}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2e8/cace/306923f5f27dce8f1d500bf239752214"
            }}
            style={styles.ImageBackground_922_579}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3d6/9141/5c22b166a2f802bc2489e22d34186436"
            }}
            style={styles.ImageBackground_922_580}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f629/3098/40003c6ee67ca37755a186f40e70536e"
            }}
            style={styles.ImageBackground_922_581}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f53/6d9e/0b886d0b4144bfd6e1f3a3402d2ead0b"
            }}
            style={styles.ImageBackground_922_582}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f9b/eab6/75f1afbd76d94983dcacfe1fbccdb107"
            }}
            style={styles.ImageBackground_922_583}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/939d/6692/33e9fc063fb368149834567290312bb1"
            }}
            style={styles.ImageBackground_922_584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0a6/fe42/60b82d0e8b401939826fc64c254111f4"
            }}
            style={styles.ImageBackground_922_585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9005/d048/9e7daff1bf22a518abe5dd510e0d3da3"
            }}
            style={styles.ImageBackground_922_586}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ca7/00a5/06772f367308cbd1ed8d67d83db19390"
            }}
            style={styles.ImageBackground_922_587}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cea/575e/e8bdce2629408d6515e7e662d04223f4"
            }}
            style={styles.ImageBackground_922_588}
          />
          <View style={styles.View_922_589}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/793a/a1b9/e550e8fd96db32bcc0e1b8712fcce801"
              }}
              style={styles.ImageBackground_922_590}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccc6/2864/e03eb40270bf2fb947db11f9e7d52f01"
              }}
              style={styles.ImageBackground_922_592}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32f9/8ea2/1b1f8ef8c58f71a32b103b79883b784f"
              }}
              style={styles.ImageBackground_922_594}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e529/8932/695f7904976b855f2868baf055f2073f"
              }}
              style={styles.ImageBackground_922_596}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4e4/29be/aff3769bff982eed7cf27316daad7561"
              }}
              style={styles.ImageBackground_922_598}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5934/a1a8/8b9638ff51ab178348a60aac1d46a44d"
              }}
              style={styles.ImageBackground_922_600}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dd7/89d9/58aba56b46bae87237d00ea7c7e638cb"
              }}
              style={styles.ImageBackground_922_602}
            />
          </View>
          <View style={styles.View_922_604}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/793a/a1b9/e550e8fd96db32bcc0e1b8712fcce801"
              }}
              style={styles.ImageBackground_922_605}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccc6/2864/e03eb40270bf2fb947db11f9e7d52f01"
              }}
              style={styles.ImageBackground_922_607}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32f9/8ea2/1b1f8ef8c58f71a32b103b79883b784f"
              }}
              style={styles.ImageBackground_922_609}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e529/8932/695f7904976b855f2868baf055f2073f"
              }}
              style={styles.ImageBackground_922_611}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4e4/29be/aff3769bff982eed7cf27316daad7561"
              }}
              style={styles.ImageBackground_922_613}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5934/a1a8/8b9638ff51ab178348a60aac1d46a44d"
              }}
              style={styles.ImageBackground_922_615}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dd7/89d9/58aba56b46bae87237d00ea7c7e638cb"
              }}
              style={styles.ImageBackground_922_617}
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
  View_922_429: {
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
  View_922_430: {
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
  View_922_431: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_432: {
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
  View_922_433: {
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
  ImageBackground_922_434: {
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
  View_922_435: {
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
  ImageBackground_922_436: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_922_440: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_922_445: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_446: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_922_446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_447: {
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
  ImageBackground_922_448: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_922_450: {
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
  View_922_451: {
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
  Text_922_451: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_452: {
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
  Text_922_452: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_570: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("47.6775956284153%"),
    minHeight: hp("47.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("29.23497267759563%")
  },
  View_922_571: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("47.6775956284153%"),
    minHeight: hp("47.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 245, 250, 1)",
    borderColor: "rgba(165, 171, 193, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_922_572: {
    width: wp("64.25120772946859%"),
    minWidth: wp("64.25120772946859%"),
    height: hp("36.33879781420765%"),
    minHeight: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869563%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_922_573: {
    width: wp("7.948409186469184%"),
    height: hp("4.4954081050685195%"),
    top: hp("29.922035092213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.338586484752419%")
  },
  ImageBackground_922_574: {
    width: wp("7.948409186469184%"),
    height: hp("4.495412274136569%"),
    top: hp("1.9217736082650205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.338586484752419%")
  },
  ImageBackground_922_575: {
    width: wp("7.948410107893644%"),
    height: hp("4.495412274136569%"),
    top: hp("1.9217736082650205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.96425167949879%")
  },
  ImageBackground_922_576: {
    width: wp("7.948410107893644%"),
    height: hp("4.4954081050685195%"),
    top: hp("29.922035092213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.96425167949879%")
  },
  ImageBackground_922_577: {
    width: wp("9.225815851331333%"),
    height: hp("5.217879456900508%"),
    top: hp("6.895038208674862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.19122697765701%")
  },
  ImageBackground_922_578: {
    width: wp("9.225810322784572%"),
    height: hp("5.217879456900508%"),
    top: hp("6.895038208674862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.16364970184179%")
  },
  ImageBackground_922_579: {
    width: wp("9.225815851331333%"),
    height: hp("5.217876330099471%"),
    top: hp("24.41219475751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.19122697765701%")
  },
  ImageBackground_922_580: {
    width: wp("9.225810322784572%"),
    height: hp("5.217876330099471%"),
    top: hp("24.41219475751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.16364970184179%")
  },
  ImageBackground_922_581: {
    width: wp("9.225812165633492%"),
    height: hp("4.28611359309629%"),
    top: hp("6.895038208674862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.67746782533213%")
  },
  ImageBackground_922_582: {
    width: wp("0%"),
    height: hp("5.963290063409858%"),
    top: hp("10.435744322062838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.903270776721016%")
  },
  ImageBackground_922_583: {
    width: wp("15.486189247905344%"),
    height: hp("4.472466765857134%"),
    top: hp("16.399045850409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.19122697765701%")
  },
  ImageBackground_922_584: {
    width: wp("9.225812165633492%"),
    height: hp("5.217876330099471%"),
    top: hp("24.41219475751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.67746782533213%")
  },
  ImageBackground_922_585: {
    width: wp("2.965438769059481%"),
    height: hp("0%"),
    top: hp("24.41219475751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.93778777928745%")
  },
  ImageBackground_922_586: {
    width: wp("9.225815851331333%"),
    height: hp("0%"),
    top: hp("15.653616483094261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.19122697765701%")
  },
  ImageBackground_922_587: {
    width: wp("9.225810322784572%"),
    height: hp("1.6771754280465547%"),
    top: hp("15.653616483094261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.16364970184179%")
  },
  ImageBackground_922_588: {
    width: wp("18.451628016964825%"),
    height: hp("0%"),
    top: hp("20.871488644125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.93778777928745%")
  },
  View_922_589: {
    width: wp("5.296373597665685%"),
    height: hp("3.1679982044657726%"),
    top: hp("7.826841594091526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.14059905268719%")
  },
  ImageBackground_922_590: {
    width: wp("1.2205483256906702%"),
    height: hp("1.0971934417557847%"),
    top: hp("1.119044569672134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3533622999698167%")
  },
  ImageBackground_922_592: {
    width: wp("2.9451784880264946%"),
    height: hp("1.024030466548732%"),
    top: hp("2.1439682590505456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.351180366847828%")
  },
  ImageBackground_922_594: {
    width: wp("1.5182826829993206%"),
    height: hp("1.071057554151191%"),
    top: hp("1.865941448941257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_922_596: {
    width: wp("4.552603459012681%"),
    height: hp("0.9022024811291304%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5602850430253667%")
  },
  ImageBackground_922_598: {
    width: wp("3.5389775815217392%"),
    height: hp("1.5038964526900829%"),
    top: hp("1.392935664275953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4353251434178773%")
  },
  ImageBackground_922_600: {
    width: wp("2.157766001236036%"),
    height: hp("1.8371092165754142%"),
    top: hp("0.2624178193306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.941717617753625%")
  },
  ImageBackground_922_602: {
    width: wp("2.588992648654514%"),
    height: hp("1.9933919437596055%"),
    top: hp("0.49308401639344623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8490668402777786%")
  },
  View_922_604: {
    width: wp("5.296373597665685%"),
    height: hp("3.167997683332266%"),
    top: hp("25.343998142930324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.168235299667877%")
  },
  ImageBackground_922_605: {
    width: wp("1.2205538542374321%"),
    height: hp("1.0971903149547473%"),
    top: hp("1.119044569672134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3533622999698025%")
  },
  ImageBackground_922_607: {
    width: wp("2.945176645177574%"),
    height: hp("1.0240335933497695%"),
    top: hp("2.1439682590505456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.351180366847821%")
  },
  ImageBackground_922_609: {
    width: wp("1.5182826829993206%"),
    height: hp("1.0710585964182036%"),
    top: hp("1.865941448941257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_922_611: {
    width: wp("4.552603459012681%"),
    height: hp("0.9022009177286118%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5602850430253596%")
  },
  ImageBackground_922_613: {
    width: wp("3.5389757386728187%"),
    height: hp("1.5038974949570953%"),
    top: hp("1.392935664275953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4353251434178702%")
  },
  ImageBackground_922_615: {
    width: wp("2.157767844084956%"),
    height: hp("1.8371102588424264%"),
    top: hp("0.2624178193306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.941717617753625%")
  },
  ImageBackground_922_617: {
    width: wp("2.5889944915034344%"),
    height: hp("1.9933940282936304%"),
    top: hp("0.49308401639344623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8490668402777786%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
