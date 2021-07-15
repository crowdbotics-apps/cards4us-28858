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
      <View style={styles.View_1034_11}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ae/a680/3c944c9cc89b1bcb9408c55626431326"
          }}
          style={styles.ImageBackground_1034_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/7b9b/1f628b184155cee27f10a693d3b68162"
          }}
          style={styles.ImageBackground_1034_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb8/1852/c5a4c1ccf07ad5152166fae30119f59a"
          }}
          style={styles.ImageBackground_1034_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_1034_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11dd/e31e/fe16941fcb0d47281db11555e7a4a442"
          }}
          style={styles.ImageBackground_1034_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35da/5c50/e56ac3f26f901c55886f5fe927721f4f"
          }}
          style={styles.ImageBackground_1034_22}
        />
      </View>
      <View style={styles.View_1034_24}>
        <View style={styles.View_1034_25}>
          <View style={styles.View_1034_26} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1034_27}
          />
          <View style={styles.View_1034_28} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1034_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_1034_33}
        />
        <View style={styles.View_1034_38}>
          <View style={styles.View_1034_39}>
            <Text style={styles.Text_1034_39}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1034_78} />
      <View style={styles.View_1034_50}>
        <View style={styles.View_1034_51}>
          <View style={styles.View_1034_52}>
            <View style={styles.View_1034_53} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1897/45c5/4db112ebde753936936f8cec24a439c7"
              }}
              style={styles.ImageBackground_1034_54}
            />
          </View>
          <View style={styles.View_1034_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c156/8667/23fdc213ec971b756bd862a88008680c"
              }}
              style={styles.ImageBackground_1034_56}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e683/3e75/62557ab74a9977698cc03868a1e45827"
              }}
              style={styles.ImageBackground_1034_57}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18e6/e9d9/bf2f151873dc37697ded8a2b92df92b9"
              }}
              style={styles.ImageBackground_1034_59}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4405/6190/bddd7962c6d5137fd9b5730896594bc2"
            }}
            style={styles.ImageBackground_1034_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f771/7511/a2112dbaae90546fc0c319560bb29c6d"
            }}
            style={styles.ImageBackground_1034_64}
          />
          <View style={styles.View_1034_68} />
          <View style={styles.View_1034_69}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb69/1053/0c9b6f677ab53dac246545db47dd4187"
              }}
              style={styles.ImageBackground_1034_70}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7c1/3f64/8e7c3ad86af4b4e3d70464a6ef3f969c"
              }}
              style={styles.ImageBackground_1034_71}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1484/ff2b/aaed454002a10e86337000d4a8c92fe2"
              }}
              style={styles.ImageBackground_1034_72}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1484/ff2b/aaed454002a10e86337000d4a8c92fe2"
              }}
              style={styles.ImageBackground_1034_75}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1034_270}>
        <View style={styles.View_1034_271}>
          <Text style={styles.Text_1034_271}>Narayana Kirana</Text>
        </View>
        <View style={styles.View_1041_1211}>
          <View style={styles.View_1041_1212}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddea/b983/28e95477960759505ab6ce3ff9f44fc9"
              }}
              style={styles.ImageBackground_1041_1213}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccc6/2864/e03eb40270bf2fb947db11f9e7d52f01"
              }}
              style={styles.ImageBackground_1041_1215}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1be7/a4b9/f78e0870c3fc8dd6391ef0fe83172245"
              }}
              style={styles.ImageBackground_1041_1217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fdd/95ec/8c3e03ec9803bc11005af0502056f491"
              }}
              style={styles.ImageBackground_1041_1219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d0c/d5d4/ebd127fbc12eea3b739e109feab51d78"
              }}
              style={styles.ImageBackground_1041_1221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a99/0cc3/a4694943ed417ea0a96750420bd07e5f"
              }}
              style={styles.ImageBackground_1041_1223}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b04/5732/726af5f21b4239bf98bd66b6a5d7f599"
              }}
              style={styles.ImageBackground_1041_1225}
            />
          </View>
          <View style={styles.View_1041_1227}>
            <Text style={styles.Text_1041_1227}>NaijCoin: %dikethelma</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1034_275}>
        <View style={styles.View_1034_273} />
        <View style={styles.View_1034_274}>
          <Text style={styles.Text_1034_274}>Edit Profile</Text>
        </View>
      </View>
      <View style={styles.View_1035_2620}>
        <View style={styles.View_1035_2694}>
          <View style={styles.View_1035_2695} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f8f/5889/04982566d0135637ae0ed29e7f788846"
            }}
            style={styles.ImageBackground_1035_2696}
          />
          <View style={styles.View_1035_2697}>
            <Text style={styles.Text_1035_2697}>My Banks</Text>
          </View>
          <View style={styles.View_1037_0}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2474/6f70/454650da4a655d9f1eb738e515a1bd52"
              }}
              style={styles.ImageBackground_1037_1}
            />
          </View>
          <View style={styles.View_1035_2698}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9062/9f98/8183810dfb95530b78787df5062f4970"
              }}
              style={styles.ImageBackground_1035_2699}
            />
          </View>
        </View>
        <View style={styles.View_1035_2686}>
          <View style={styles.View_1035_2687} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f8f/5889/04982566d0135637ae0ed29e7f788846"
            }}
            style={styles.ImageBackground_1035_2688}
          />
          <View style={styles.View_1035_2689}>
            <Text style={styles.Text_1035_2689}>Security</Text>
          </View>
          <View style={styles.View_1037_10}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d845/f804/968e5521b6666fbd9f99fd9efc09b829"
              }}
              style={styles.ImageBackground_1037_11}
            />
          </View>
          <View style={styles.View_1035_2690}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9062/9f98/8183810dfb95530b78787df5062f4970"
              }}
              style={styles.ImageBackground_1035_2691}
            />
          </View>
        </View>
        <View style={styles.View_1035_2678}>
          <View style={styles.View_1035_2679} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f8f/5889/04982566d0135637ae0ed29e7f788846"
            }}
            style={styles.ImageBackground_1035_2680}
          />
          <View style={styles.View_1035_2681}>
            <Text style={styles.Text_1035_2681}>Support</Text>
          </View>
          <View style={styles.View_1037_25}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6bb/6d4d/4f6781a7acd0bf8c4c291a7607171a9b"
              }}
              style={styles.ImageBackground_1037_26}
            />
          </View>
          <View style={styles.View_1035_2682}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9062/9f98/8183810dfb95530b78787df5062f4970"
              }}
              style={styles.ImageBackground_1035_2683}
            />
          </View>
        </View>
        <View style={styles.View_1035_2662}>
          <View style={styles.View_1035_2663} />
          <View style={styles.View_1037_30}>
            <View style={styles.View_1035_2665}>
              <Text style={styles.Text_1035_2665}>Logout</Text>
            </View>
            <View style={styles.View_1037_15}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/128d/5de7/95d43743a10cbbddb560757029ae7070"
                }}
                style={styles.ImageBackground_1037_16}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1035_2626}>
          <Text style={styles.Text_1035_2626}>NaijCoin version 1.0</Text>
        </View>
      </View>
      <View style={styles.View_1034_242}>
        <View style={styles.View_I1034_242_893_130} />
        <View style={styles.View_I1034_242_893_131}>
          <Text style={styles.Text_I1034_242_893_131}>Home</Text>
        </View>
        <View style={styles.View_I1034_242_893_138}>
          <View style={styles.View_I1034_242_897_0}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/666f/8863/aa3d3b0fd413cb7f030e8a9b600cb124"
              }}
              style={styles.ImageBackground_I1034_242_897_1}
            />
          </View>
        </View>
        <View style={styles.View_I1034_242_899_3343}>
          <View style={styles.View_I1034_242_899_3364}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d65b/784f/48e0a5972c433620e01932db5b08d49f"
              }}
              style={styles.ImageBackground_I1034_242_899_3365}
            />
          </View>
          <View style={styles.View_I1034_242_899_3349}>
            <Text style={styles.Text_I1034_242_899_3349}>Transactions</Text>
          </View>
        </View>
        <View style={styles.View_I1034_242_899_3350}>
          <View style={styles.View_I1034_242_899_3351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e49c/2e70/2e8d057936f5c84dd72e85bbaf496366"
              }}
              style={styles.ImageBackground_I1034_242_899_3352}
            />
          </View>
          <View style={styles.View_I1034_242_899_3356}>
            <Text style={styles.Text_I1034_242_899_3356}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1034_243}>
        <View style={styles.View_1034_244} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1034_11: {
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
  ImageBackground_1034_12: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25803129269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_1034_14: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97792862021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_1034_16: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.285182932035519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_1034_18: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.2770609204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_1034_20: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5036554388661205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_1034_22: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.63973382001366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_1034_24: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1034_25: {
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
  View_1034_26: {
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
  ImageBackground_1034_27: {
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
  View_1034_28: {
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
  ImageBackground_1034_29: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1034_33: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1034_38: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1034_39: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1034_39: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1034_78: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("94.67213114754098%"),
    minHeight: hp("94.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.732240437158467%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1034_50: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  View_1034_51: {
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
  View_1034_52: {
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
  View_1034_53: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(165, 171, 193, 1)"
  },
  ImageBackground_1034_54: {
    width: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1034_55: {
    width: wp("12.7027225955097%"),
    height: hp("9.01639344262295%"),
    top: hp("3.381147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.679951690821257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1034_56: {
    width: wp("12.7027225955097%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1034_57: {
    width: wp("1.9214012772564726%"),
    height: hp("1.0145262942288091%"),
    top: hp("4.17200307377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.23372395833333%")
  },
  ImageBackground_1034_59: {
    width: wp("0.2646068443998622%"),
    height: hp("0.3908172982637999%"),
    top: hp("2.4095212175546443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.114536156400966%")
  },
  ImageBackground_1034_60: {
    width: wp("12.7027225955097%"),
    height: hp("4.132513661202186%"),
    top: hp("8.265027322404372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.679951690821257%")
  },
  ImageBackground_1034_64: {
    width: wp("8.691339907438858%"),
    height: hp("4.132513661202186%"),
    top: hp("2.629781420765026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.35417610205314%")
  },
  View_1034_68: {
    width: wp("7.35420927333371%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.883879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.022673233695652%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1034_69: {
    width: wp("3.3428228995650286%"),
    height: hp("1.8784153005464481%"),
    top: hp("4.883879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.365630661231883%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1034_70: {
    width: wp("3.3428228995650286%"),
    height: hp("1.8784153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1034_71: {
    width: wp("0.841550089886799%"),
    height: hp("0.24831203815064143%"),
    top: hp("2.2348872950819665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2623367678140092%")
  },
  ImageBackground_1034_72: {
    width: wp("0.7690756793183405%"),
    height: hp("0.47800052361410167%"),
    top: hp("0.7054730191256837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4988960597826093%")
  },
  ImageBackground_1034_75: {
    width: wp("0.7690766007428008%"),
    height: hp("0.47800058875579%"),
    top: hp("0.6191566342213104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5615894852053174%")
  },
  View_1034_270: {
    width: wp("45.893719806763286%"),
    minWidth: wp("45.893719806763286%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.40096618357488%"),
    top: hp("10.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1034_271: {
    width: wp("45.893719806763286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1034_271: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_1211: {
    width: wp("43.40413411458333%"),
    minWidth: wp("43.40413411458333%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316939%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1041_1212: {
    width: wp("5.481430643422592%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1041_1213: {
    width: wp("1.2632012943138822%"),
    height: hp("1.1355288041745377%"),
    top: hp("1.158267161885247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4355091334541044%")
  },
  ImageBackground_1041_1215: {
    width: wp("3.0480820199717646%"),
    height: hp("1.0598108416698018%"),
    top: hp("2.218878073770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.433386171497581%")
  },
  ImageBackground_1041_1217: {
    width: wp("1.5713313927397061%"),
    height: hp("1.1084810632174134%"),
    top: hp("1.9311123206967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1041_1219: {
    width: wp("4.711672649291403%"),
    height: hp("0.9337257166377834%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5799224411231876%")
  },
  ImageBackground_1041_1221: {
    width: wp("3.6626283673272613%"),
    height: hp("1.55644455894095%"),
    top: hp("1.4416303790983616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45053970410627997%")
  },
  ImageBackground_1041_1223: {
    width: wp("2.2331594844947116%"),
    height: hp("1.9012982728051357%"),
    top: hp("0.2716231215846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.044445387983089%")
  },
  ImageBackground_1041_1225: {
    width: wp("2.6794530343318335%"),
    height: hp("2.063041176300883%"),
    top: hp("0.5102939293032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8787883076690832%")
  },
  View_1041_1227: {
    width: wp("35.02415458937198%"),
    minWidth: wp("35.02415458937198%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.380038496376812%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1041_1227: {
    color: "rgba(242, 245, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1034_275: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.40096618357488%"),
    top: hp("20.081967213114755%")
  },
  View_1034_273: {
    width: wp("56.763285024154584%"),
    minWidth: wp("56.763285024154584%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(86, 117, 195, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1034_274: {
    width: wp("33.27502927918365%"),
    minWidth: wp("33.27502927918365%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.744107601147341%"),
    top: hp("1.0928961748633874%"),
    justifyContent: "flex-start"
  },
  Text_1034_274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1035_2620: {
    width: wp("90.09661835748793%"),
    minWidth: wp("90.09661835748793%"),
    height: hp("74.4535519125683%"),
    minHeight: hp("74.4535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("30.05464480874317%")
  },
  View_1035_2694: {
    width: wp("90.09661835748793%"),
    minWidth: wp("90.09661835748793%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1035_2695: {
    width: wp("90.09661835748793%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1035_2696: {
    width: wp("90.09661835748793%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%")
  },
  View_1035_2697: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("2.868852459016388%"),
    justifyContent: "flex-start"
  },
  Text_1035_2697: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_0: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005456%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1037_1: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1035_2698: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("3.0054644808743163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1035_2699: {
    width: wp("3.1400387989726046%"),
    height: hp("1.7759562841530054%"),
    top: hp("0.4781420765027349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792384%")
  },
  View_1035_2686: {
    width: wp("90.09661835748793%"),
    minWidth: wp("90.09661835748793%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1035_2687: {
    width: wp("90.09661835748793%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1035_2688: {
    width: wp("90.09661835748793%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907106%")
  },
  View_1035_2689: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("2.732240437158474%"),
    justifyContent: "flex-start"
  },
  Text_1035_2689: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_10: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1037_11: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1035_2690: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1035_2691: {
    width: wp("3.1400387989726046%"),
    height: hp("1.7759562841530054%"),
    top: hp("0.4781420765027278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792384%")
  },
  View_1035_2678: {
    width: wp("90.09661835748793%"),
    minWidth: wp("90.09661835748793%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.486338797814206%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1035_2679: {
    width: wp("90.09661835748793%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1035_2680: {
    width: wp("90.09661835748793%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%")
  },
  View_1035_2681: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("2.732240437158474%"),
    justifyContent: "flex-start"
  },
  Text_1035_2681: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_25: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1037_26: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1035_2682: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("3.0054644808743163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1035_2683: {
    width: wp("3.1400387989726046%"),
    height: hp("1.7759562841530054%"),
    top: hp("0.4781420765027349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792384%")
  },
  View_1035_2662: {
    width: wp("90.09661835748793%"),
    minWidth: wp("90.09661835748793%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.972677595628404%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1035_2663: {
    width: wp("90.09661835748793%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1037_30: {
    width: wp("17.632850241545896%"),
    minWidth: wp("17.632850241545896%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.231884057971016%"),
    top: hp("2.732240437158481%")
  },
  View_1035_2665: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154591%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1035_2665: {
    color: "rgba(242, 90, 104, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1037_15: {
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
  ImageBackground_1037_16: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1035_2626: {
    width: wp("26.811594202898554%"),
    minWidth: wp("26.811594202898554%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.64251207729469%"),
    top: hp("71.72131147540983%"),
    justifyContent: "flex-start"
  },
  Text_1035_2626: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1034_242: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("109.8360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1034_242_893_130: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I1034_242_893_131: {
    flexGrow: 1,
    width: wp("9.866665642042667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.00002830615942%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_I1034_242_893_131: {
    color: "rgba(52, 67, 86, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1034_242_893_138: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("2.4590163934426243%")
  },
  View_I1034_242_897_0: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1034_242_897_1: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1034_242_899_3343: {
    flexGrow: 1,
    width: wp("16.425120772946862%"),
    height: hp("5.831488103814464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.78743961352657%"),
    top: hp("2.4590163934426243%")
  },
  View_I1034_242_899_3364: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.79710144927536%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1034_242_899_3365: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1034_242_899_3349: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.3724758794398895%"),
    justifyContent: "flex-start"
  },
  Text_I1034_242_899_3349: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I1034_242_899_3350: {
    flexGrow: 1,
    width: wp("16.425120772946862%"),
    height: hp("5.831492272882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("2.4590163934426243%")
  },
  View_I1034_242_899_3351: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.79710144927536%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1034_242_899_3352: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1034_242_899_3356: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.3724758794398895%"),
    justifyContent: "flex-start"
  },
  Text_I1034_242_899_3356: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1034_243: {
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
  View_1034_244: {
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
