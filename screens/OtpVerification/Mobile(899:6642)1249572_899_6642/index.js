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
      <View style={styles.View_909_738} />
      <View style={styles.View_909_739} />
      <View style={styles.View_899_6643}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d2a/3e39/125345e886cb449a39f3b38d970b08e2"
          }}
          style={styles.ImageBackground_899_6644}
        />
        <View style={styles.View_899_6647}>
          <View style={styles.View_899_6648}>
            <Text style={styles.Text_899_6648}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_899_6649}>
        <View style={styles.View_899_6650}>
          <View style={styles.View_899_6651} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_899_6652}
          />
          <View style={styles.View_899_6653} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_899_6654}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_899_6658}
        />
        <View style={styles.View_899_6663}>
          <View style={styles.View_899_6664}>
            <Text style={styles.Text_899_6664}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_899_6665}>
        <View style={styles.View_899_6666}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7769/da99/ac9bdaeeb9f77bfcc2985d876769fc17"
            }}
            style={styles.ImageBackground_899_6667}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d9f/c8f6/683291931398eb863cd331a056f30903"
            }}
            style={styles.ImageBackground_899_6669}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1879/92b3/21f2b8621ff3d29cb8d267474c5fb82d"
            }}
            style={styles.ImageBackground_899_6671}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/023a/b70b/86139a0799838f8dd7d871bd2e18d5c9"
            }}
            style={styles.ImageBackground_899_6673}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5997/fff0/b634a71e4f48624e7c3e8fe598af40a6"
            }}
            style={styles.ImageBackground_899_6675}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e497/3aec/c5d0e6071fe0b67057b62d1bf5c46285"
            }}
            style={styles.ImageBackground_899_6677}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe65/8972/f072069662a0d191087d1d90ebb42b2a"
            }}
            style={styles.ImageBackground_899_6679}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/180c/a795/c33a845720f4c52f2287830a4135b76f"
            }}
            style={styles.ImageBackground_899_6681}
          />
        </View>
        <View style={styles.View_899_6683}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8a8/9fe1/dcde15cffa0de6bad83f132c3ff35394"
            }}
            style={styles.ImageBackground_899_6684}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a31d/1bb0/beb0917310e1cefe3e0eb34fb7001fe3"
            }}
            style={styles.ImageBackground_899_6686}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7559/adc4/c30f6384e1e8487c803547f14f7ca39e"
            }}
            style={styles.ImageBackground_899_6688}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b269/a8e9/c4f4c2d500b9afe001282991a8261b2b"
            }}
            style={styles.ImageBackground_899_6690}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df21/592b/4894bd6f8d4d95c7a591836e342ad2af"
            }}
            style={styles.ImageBackground_899_6692}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967e/8f5d/93794bc93540e5a2e3e2c34b20f56664"
            }}
            style={styles.ImageBackground_899_6694}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74d4/d6b7/581031d4712fe04976ed9633a9238739"
            }}
            style={styles.ImageBackground_899_6696}
          />
        </View>
      </View>
      <View style={styles.View_899_6698}>
        <View style={styles.View_899_6699} />
        <View style={styles.View_899_6700} />
        <View style={styles.View_899_6701} />
        <View style={styles.View_899_6702} />
      </View>
      <View style={styles.View_899_6703}>
        <Text style={styles.Text_899_6703}>
          Create a 4-digit pin to be used for verification during transactions
        </Text>
      </View>
      <View style={styles.View_899_6704}>
        <Text style={styles.Text_899_6704}>Set up 4-digit pin</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9200/99ac/debc85118149d58c540f6e04cd5911db"
        }}
        style={styles.ImageBackground_899_6705}
      />
      <View style={styles.View_899_6706}>
        <View style={styles.View_899_6707}>
          <View style={styles.View_899_6708}>
            <View style={styles.View_899_6709}>
              <Text style={styles.Text_899_6709}>1</Text>
            </View>
            <View style={styles.View_899_6710}>
              <Text style={styles.Text_899_6710}>2</Text>
            </View>
            <View style={styles.View_899_6711}>
              <Text style={styles.Text_899_6711}>3</Text>
            </View>
          </View>
          <View style={styles.View_899_6712}>
            <View style={styles.View_899_6713}>
              <Text style={styles.Text_899_6713}>4</Text>
            </View>
            <View style={styles.View_899_6714}>
              <Text style={styles.Text_899_6714}>5</Text>
            </View>
            <View style={styles.View_899_6715}>
              <Text style={styles.Text_899_6715}>6</Text>
            </View>
          </View>
          <View style={styles.View_899_6716}>
            <View style={styles.View_899_6717}>
              <Text style={styles.Text_899_6717}>7</Text>
            </View>
            <View style={styles.View_899_6718}>
              <Text style={styles.Text_899_6718}>8</Text>
            </View>
            <View style={styles.View_899_6719}>
              <Text style={styles.Text_899_6719}>9</Text>
            </View>
          </View>
          <View style={styles.View_899_6720}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b09c/fb13/9bf2b489b610c906923e5fca6a3d6094"
              }}
              style={styles.ImageBackground_899_6721}
            />
            <View style={styles.View_899_6723}>
              <Text style={styles.Text_899_6723}>0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb82/f2b1/57f9bf722cf93ed1c626ef5df18ad4df"
              }}
              style={styles.ImageBackground_899_6724}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_899_6726}>
        <View style={styles.View_899_6727}>
          <Text style={styles.Text_899_6727}>Forgot you PIN?</Text>
        </View>
        <View style={styles.View_899_6728}>
          <Text style={styles.Text_899_6728}>Reset PIN</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_909_738: {
    width: wp("136.271940222109%"),
    minWidth: wp("136.271940222109%"),
    height: hp("86.63260871595372%"),
    minHeight: hp("86.63260871595372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.75398615592919%"),
    top: hp("59.15301380261697%"),
    backgroundColor: "rgba(0, 204, 173, 1)"
  },
  View_909_739: {
    width: wp("63.55769945227582%"),
    minWidth: wp("63.55769945227582%"),
    height: hp("37.483511335862794%"),
    minHeight: hp("37.483511335862794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22217799384812%"),
    top: hp("28.004647343536544%"),
    backgroundColor: "rgba(249, 169, 2, 1)"
  },
  View_899_6643: {
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
  ImageBackground_899_6644: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_6647: {
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
  View_899_6648: {
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
  Text_899_6648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6649: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1097748245018116%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_6650: {
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
  View_899_6651: {
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
  ImageBackground_899_6652: {
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
  View_899_6653: {
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
  ImageBackground_899_6654: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_899_6658: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413481832202015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100846%")
  },
  View_899_6663: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600049299894324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_6664: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_899_6664: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6665: {
    width: wp("21.739126749084768%"),
    minWidth: wp("21.739126749084768%"),
    height: hp("4.217979816791138%"),
    minHeight: hp("4.217979816791138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("13.524590163934427%")
  },
  View_899_6666: {
    width: wp("13.300396278860488%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.9320451913635566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.43872954879982%")
  },
  ImageBackground_899_6667: {
    width: wp("1.5982291548724337%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000016676272203142162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_6669: {
    width: wp("1.6361547553020974%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136101571081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.058285330804651%")
  },
  ImageBackground_899_6671: {
    width: wp("0.520099591517794%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136101571081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.155771743848128%")
  },
  ImageBackground_899_6673: {
    width: wp("1.0943805537937918%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136101571081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.973539638058568%")
  },
  ImageBackground_899_6675: {
    width: wp("1.5819782220223102%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136101571081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5287124707503%")
  },
  ImageBackground_899_6677: {
    width: wp("1.7445125441620315%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136101571081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.489444751094503%")
  },
  ImageBackground_899_6679: {
    width: wp("0.5201020678460311%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136101571081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.695040053215578%")
  },
  ImageBackground_899_6681: {
    width: wp("1.5982304218310663%"),
    height: hp("2.2000411820541963%"),
    top: hp("0.000008338136101571081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.70216435971468%")
  },
  View_899_6683: {
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
  ImageBackground_899_6684: {
    width: wp("1.6250870653972533%"),
    height: hp("1.4608385784378468%"),
    top: hp("1.4899999066128746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1333296771210755%")
  },
  ImageBackground_899_6686: {
    width: wp("3.921305614969005%"),
    height: hp("1.3634285640195418%"),
    top: hp("2.854560893741464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.130440090013586%")
  },
  ImageBackground_899_6688: {
    width: wp("2.0214912396122293%"),
    height: hp("1.426042103376545%"),
    top: hp("2.4842726076886947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_899_6690: {
    width: wp("6.061486691092523%"),
    height: hp("1.201222372836754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7460294714296509%")
  },
  ImageBackground_899_6692: {
    width: wp("4.711908994665468%"),
    height: hp("2.002339415211495%"),
    top: hp("1.8546349363900259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5796275852958956%")
  },
  ImageBackground_899_6694: {
    width: wp("2.8729215336306657%"),
    height: hp("2.4459880557868%"),
    top: hp("0.3494596220756492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.916658410703505%")
  },
  ImageBackground_899_6696: {
    width: wp("3.4470707897978703%"),
    height: hp("2.654067284422494%"),
    top: hp("0.6564281025870891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1305067274305571%")
  },
  View_899_6698: {
    width: wp("76.32850241545893%"),
    minWidth: wp("76.32850241545893%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("38.54156660903347%")
  },
  View_899_6699: {
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
  View_899_6700: {
    width: wp("15.041204811870188%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.85820147380736%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_899_6701: {
    width: wp("15.041204811870188%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.429100736903685%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_899_6702: {
    width: wp("15.041204811870188%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.287302210711054%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_899_6703: {
    width: wp("75.1207729468599%"),
    minWidth: wp("75.1207729468599%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_899_6703: {
    color: "rgba(242, 245, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6704: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.917874396135264%"),
    top: hp("20.21857923497268%"),
    justifyContent: "center"
  },
  Text_899_6704: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_899_6705: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.120772946859905%"),
    top: hp("26.775956284153008%")
  },
  View_899_6706: {
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
  View_899_6707: {
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
  View_899_6708: {
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
  View_899_6709: {
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
  Text_899_6709: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6710: {
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
  Text_899_6710: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6711: {
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
  Text_899_6711: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6712: {
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
  View_899_6713: {
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
  Text_899_6713: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6714: {
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
  Text_899_6714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6715: {
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
  Text_899_6715: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6716: {
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
  View_899_6717: {
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
  Text_899_6717: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6718: {
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
  Text_899_6718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6719: {
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
  Text_899_6719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6720: {
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
  ImageBackground_899_6721: {
    width: wp("8.695652173913043%"),
    height: hp("4.918032786885246%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_899_6723: {
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
  Text_899_6723: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_899_6724: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.28502415458938%")
  },
  View_899_6726: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("53.68852459016394%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_899_6727: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.570048309178745%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_899_6727: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_6728: {
    width: wp("17.14975845410628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.884057971014492%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_899_6728: {
    color: "rgba(249, 169, 2, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
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
