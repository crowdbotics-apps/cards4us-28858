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
      <View style={styles.View_1041_561}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ae/a680/3c944c9cc89b1bcb9408c55626431326"
          }}
          style={styles.ImageBackground_1041_562}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/7b9b/1f628b184155cee27f10a693d3b68162"
          }}
          style={styles.ImageBackground_1041_564}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb8/1852/c5a4c1ccf07ad5152166fae30119f59a"
          }}
          style={styles.ImageBackground_1041_566}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_1041_568}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c414/63ec/1eaf3cccc84fa523d09e93490b3f8941"
          }}
          style={styles.ImageBackground_1041_570}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35da/5c50/e56ac3f26f901c55886f5fe927721f4f"
          }}
          style={styles.ImageBackground_1041_572}
        />
      </View>
      <View style={styles.View_1041_574}>
        <View style={styles.View_1041_575}>
          <View style={styles.View_1041_576} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1041_577}
          />
          <View style={styles.View_1041_578} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1041_579}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_1041_583}
        />
        <View style={styles.View_1041_588}>
          <View style={styles.View_1041_589}>
            <Text style={styles.Text_1041_589}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1041_590}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_1041_591}
        />
        <View style={styles.View_1041_593}>
          <View style={styles.View_1041_594}>
            <Text style={styles.Text_1041_594}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1041_595}>
        <Text style={styles.Text_1041_595}>Security Questions</Text>
      </View>
      <View style={styles.View_1041_612}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f59/9371/6c3203c8d7863cf50f3f4d466d99f855"
          }}
          style={styles.ImageBackground_1041_613}
        />
        <View style={styles.View_1041_614}>
          <Text style={styles.Text_1041_614}>Save Changes</Text>
        </View>
      </View>
      <View style={styles.View_1041_641}>
        <View style={styles.View_1041_642}>
          <Text style={styles.Text_1041_642}>BVN Information</Text>
        </View>
        <View style={styles.View_1041_643}>
          <Text style={styles.Text_1041_643}>
            Please enter your BVN to help us with verification purposes
          </Text>
        </View>
      </View>
      <View style={styles.View_1041_655}>
        <View style={styles.View_1041_656}>
          <Text style={styles.Text_1041_656}>2FA - Security question</Text>
        </View>
        <View style={styles.View_1041_657}>
          <Text style={styles.Text_1041_657}>
            Select security questions that you can remember and give the answers
          </Text>
        </View>
      </View>
      <View style={styles.View_1041_647}>
        <View style={styles.View_1041_648} />
        <View style={styles.View_1041_649}>
          <Text style={styles.Text_1041_649}>BVN</Text>
        </View>
        <View style={styles.View_1041_650}>
          <Text style={styles.Text_1041_650}>22404***********</Text>
        </View>
      </View>
      <View style={styles.View_1041_658}>
        <View style={styles.View_1041_659} />
        <View style={styles.View_1041_660}>
          <Text style={styles.Text_1041_660}>Choose a first question</Text>
        </View>
        <View style={styles.View_1041_661}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/035e/3029/753cc84df853666d7d41164257bf19ca"
            }}
            style={styles.ImageBackground_1041_662}
          />
        </View>
      </View>
      <View style={styles.View_1041_674}>
        <View style={styles.View_1041_675} />
        <View style={styles.View_1041_676}>
          <Text style={styles.Text_1041_676}>Choose a second question</Text>
        </View>
        <View style={styles.View_1041_677}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/035e/3029/753cc84df853666d7d41164257bf19ca"
            }}
            style={styles.ImageBackground_1041_678}
          />
        </View>
      </View>
      <View style={styles.View_1041_665}>
        <View style={styles.View_1041_666} />
        <View style={styles.View_1041_667}>
          <Text style={styles.Text_1041_667}>Enter your answer</Text>
        </View>
      </View>
      <View style={styles.View_1041_681}>
        <View style={styles.View_1041_682} />
        <View style={styles.View_1041_683}>
          <Text style={styles.Text_1041_683}>Enter your answer</Text>
        </View>
      </View>
      <View style={styles.View_1041_615}>
        <View style={styles.View_1041_616} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1041_561: {
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
  ImageBackground_1041_562: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25803129269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_1041_564: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97792862021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_1041_566: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.285182932035519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_1041_568: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.2770609204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_1041_570: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5036554388661205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_1041_572: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.63973382001366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_1041_574: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1041_575: {
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
  View_1041_576: {
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
  ImageBackground_1041_577: {
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
  View_1041_578: {
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
  ImageBackground_1041_579: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1041_583: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1041_588: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1041_589: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1041_589: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_590: {
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
  ImageBackground_1041_591: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1041_593: {
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
  View_1041_594: {
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
  Text_1041_594: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_595: {
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
  Text_1041_595: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_612: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("105.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.690821256038646%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1041_613: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1041_614: {
    width: wp("36.12982708474864%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6741984639190832%"),
    justifyContent: "flex-start"
  },
  Text_1041_614: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_641: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("23.770491803278688%")
  },
  View_1041_642: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1041_642: {
    color: "rgba(242, 245, 250, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_643: {
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
  Text_1041_643: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_655: {
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
  View_1041_656: {
    width: wp("50.96618357487923%"),
    minWidth: wp("50.96618357487923%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1041_656: {
    color: "rgba(242, 245, 250, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_657: {
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
  Text_1041_657: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_647: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1041_648: {
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
  View_1041_649: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_1041_649: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_650: {
    width: wp("27.294685990338163%"),
    minWidth: wp("27.294685990338163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_1041_650: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_658: {
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
  View_1041_659: {
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
  View_1041_660: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_1041_660: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_661: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.64251207729468%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1041_662: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1041_674: {
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
  View_1041_675: {
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
  View_1041_676: {
    width: wp("45.893719806763286%"),
    minWidth: wp("45.893719806763286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_1041_676: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_677: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.64251207729468%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1041_678: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1041_665: {
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
  View_1041_666: {
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
  View_1041_667: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_1041_667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_681: {
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
  View_1041_682: {
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
  View_1041_683: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_1041_683: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_615: {
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
  View_1041_616: {
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
