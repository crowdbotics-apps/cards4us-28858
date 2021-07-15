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
      <View style={styles.View_1180_99} />
      <View style={styles.View_1180_100} />
      <View style={styles.View_1180_101}>
        <View style={styles.View_1180_102}>
          <View style={styles.View_1180_103} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1180_104}
          />
          <View style={styles.View_1180_105} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1180_106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_1180_110}
        />
        <View style={styles.View_1180_115}>
          <View style={styles.View_1180_116}>
            <Text style={styles.Text_1180_116}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1180_117}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_1180_118}
        />
        <View style={styles.View_1180_120}>
          <View style={styles.View_1180_121}>
            <Text style={styles.Text_1180_121}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1180_122}>
        <View style={styles.View_1180_123}>
          <View style={styles.View_1180_124}>
            <View style={styles.View_1180_125} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae2c/80f7/aeccf3eacc80a38c6b76d099f629782d"
              }}
              style={styles.ImageBackground_1180_126}
            />
          </View>
          <View style={styles.View_1180_127}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b45d/7ce9/f6f13995e1503107d165f6bc27ed7d1a"
              }}
              style={styles.ImageBackground_1180_128}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a9/542f/66099c51345a1f80ecee6d7a4718638a"
              }}
              style={styles.ImageBackground_1180_129}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ad/1173/d1297ae99479e4c32e0e4c178fdf435c"
              }}
              style={styles.ImageBackground_1180_131}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7b/cbec/9cb3616baf9c40a2b511f6dbba4d0961"
            }}
            style={styles.ImageBackground_1180_132}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0b/1f6d/d60c5b436c9278950faeb99b694b1483"
            }}
            style={styles.ImageBackground_1180_136}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a4/f190/a4c2a0829da395aaeba8c4c2faa6dbd6"
            }}
            style={styles.ImageBackground_1180_140}
          />
          <View style={styles.View_1180_142}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd8c/6dd0/d79a32f86f41c8856b505f4489e1f61f"
              }}
              style={styles.ImageBackground_1180_143}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_1180_145}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_1180_148}
            />
          </View>
        </View>
        <View style={styles.View_1180_151}>
          <Text style={styles.Text_1180_151}>Favour Adamu</Text>
        </View>
        <View style={styles.View_1180_152}>
          <Text style={styles.Text_1180_152}>+2347035647893</Text>
        </View>
        <View style={styles.View_1180_153}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_154}
          />
        </View>
      </View>
      <View style={styles.View_1180_156}>
        <View style={styles.View_1180_157}>
          <Text style={styles.Text_1180_157}>You’re sending money to</Text>
        </View>
      </View>
      <View style={styles.View_1180_158}>
        <View style={styles.View_1180_159}>
          <View style={styles.View_1180_160}>
            <Text style={styles.Text_1180_160}>Kachi Ibeji</Text>
          </View>
          <View style={styles.View_1180_161}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e291/00ad/68825776c09bb837bdb0ce0fc6c06315"
              }}
              style={styles.ImageBackground_1180_162}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce5e/7090/ad9ef71a9d60fc5fc8dd297ef61d9408"
              }}
              style={styles.ImageBackground_1180_164}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/de9a/3d70a5e4d18762f25d15b5e655cc384d"
              }}
              style={styles.ImageBackground_1180_166}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a984/218a/e247181ea655ea15001a3267dd885f3d"
              }}
              style={styles.ImageBackground_1180_168}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47ad/2aa1/b171a17497d7f17008ff7929eb983681"
              }}
              style={styles.ImageBackground_1180_170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911b/905c/04b4e3b1f2aa2b0e4263964af2d8303d"
              }}
              style={styles.ImageBackground_1180_172}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7968/3d3c/bc6d0ad276474c92fc3f891c4c4126b1"
              }}
              style={styles.ImageBackground_1180_174}
            />
          </View>
        </View>
        <View style={styles.View_1180_176}>
          <Text style={styles.Text_1180_176}>@kachiibeji44</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a28/1d31/49439f3ead60230396c83d2ae6baa22b"
          }}
          style={styles.ImageBackground_1180_177}
        />
      </View>
      <View style={styles.View_1180_178}>
        <View style={styles.View_1180_179}>
          <Text style={styles.Text_1180_179}>₦</Text>
        </View>
        <View style={styles.View_1180_180}>
          <Text style={styles.Text_1180_180}>0</Text>
        </View>
      </View>
      <View style={styles.View_1180_181}>
        <View style={styles.View_1180_182}>
          <View style={styles.View_1180_183}>
            <View style={styles.View_1180_184}>
              <Text style={styles.Text_1180_184}>1</Text>
            </View>
            <View style={styles.View_1180_185}>
              <Text style={styles.Text_1180_185}>2</Text>
            </View>
            <View style={styles.View_1180_186}>
              <Text style={styles.Text_1180_186}>3</Text>
            </View>
          </View>
          <View style={styles.View_1180_187}>
            <View style={styles.View_1180_188}>
              <Text style={styles.Text_1180_188}>4</Text>
            </View>
            <View style={styles.View_1180_189}>
              <Text style={styles.Text_1180_189}>5</Text>
            </View>
            <View style={styles.View_1180_190}>
              <Text style={styles.Text_1180_190}>6</Text>
            </View>
          </View>
          <View style={styles.View_1180_191}>
            <View style={styles.View_1180_192}>
              <Text style={styles.Text_1180_192}>7</Text>
            </View>
            <View style={styles.View_1180_193}>
              <Text style={styles.Text_1180_193}>8</Text>
            </View>
            <View style={styles.View_1180_194}>
              <Text style={styles.Text_1180_194}>9</Text>
            </View>
          </View>
          <View style={styles.View_1180_195}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b09c/fb13/9bf2b489b610c906923e5fca6a3d6094"
              }}
              style={styles.ImageBackground_1180_196}
            />
            <View style={styles.View_1180_198}>
              <Text style={styles.Text_1180_198}>0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb82/f2b1/57f9bf722cf93ed1c626ef5df18ad4df"
              }}
              style={styles.ImageBackground_1180_199}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1180_201}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f59/9371/6c3203c8d7863cf50f3f4d466d99f855"
          }}
          style={styles.ImageBackground_1180_202}
        />
        <View style={styles.View_1180_203}>
          <Text style={styles.Text_1180_203}>Continue</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1180_99: {
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
  View_1180_100: {
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
  View_1180_101: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_102: {
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
  View_1180_103: {
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
  ImageBackground_1180_104: {
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
  View_1180_105: {
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
  ImageBackground_1180_106: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1180_110: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1180_115: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_116: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1180_116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_117: {
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
  ImageBackground_1180_118: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1180_120: {
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
  View_1180_121: {
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
  Text_1180_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_122: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("127.73224043715847%")
  },
  View_1180_123: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_1180_124: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_125: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(140, 178, 165, 1)"
  },
  ImageBackground_1180_126: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1180_127: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("1.2054276596652898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319227430555554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_128: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_129: {
    width: wp("0.9893479554549507%"),
    height: hp("0.5548967038347422%"),
    top: hp("2.2817809725068514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2098005359299524%")
  },
  ImageBackground_1180_131: {
    width: wp("0.13624827067057294%"),
    height: hp("0.2137574993196081%"),
    top: hp("1.3178924393784257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1185980902777786%")
  },
  ImageBackground_1180_132: {
    width: wp("6.763285024154589%"),
    height: hp("2.1215032358638575%"),
    top: hp("3.921525465334682%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2219415194746377%")
  },
  ImageBackground_1180_136: {
    width: wp("4.674218587829295%"),
    height: hp("2.230732297636772%"),
    top: hp("0.8684335510587431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5376471920289845%")
  },
  ImageBackground_1180_140: {
    width: wp("4.1576353248190765%"),
    height: hp("1.6071999659303757%"),
    top: hp("2.105479422814213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9131755736714977%")
  },
  View_1180_142: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("2.0268341231215885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.700414685235508%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_143: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_145: {
    width: wp("0.46525646523001113%"),
    height: hp("0.247543398799792%"),
    top: hp("0.36521036116803884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3017554536533815%")
  },
  ImageBackground_1180_148: {
    width: wp("0.4652570411202988%"),
    height: hp("0.247543398799792%"),
    top: hp("0.32058465676229275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5495853147644922%")
  },
  View_1180_151: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_1180_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_152: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-end"
  },
  Text_1180_152: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_153: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_154: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657784462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_1180_156: {
    width: wp("58.454106280193244%"),
    minWidth: wp("58.454106280193244%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.77294685990338%"),
    top: hp("14.48087431693989%")
  },
  View_1180_157: {
    width: wp("58.454106280193244%"),
    minWidth: wp("58.454106280193244%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1180_157: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_158: {
    width: wp("22.946865431928405%"),
    minWidth: wp("22.946865431928405%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.405797101449274%"),
    top: hp("21.85792349726776%")
  },
  View_1180_159: {
    width: wp("22.946865431928405%"),
    minWidth: wp("22.946865431928405%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.704918032786882%")
  },
  View_1180_160: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1180_160: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_161: {
    width: wp("3.381647579911826%"),
    height: hp("2.022711696520529%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.56521739130435%")
  },
  ImageBackground_1180_162: {
    width: wp("0.7793029725263659%"),
    height: hp("0.7005383408134752%"),
    top: hp("0.714478206113391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5025852958937236%")
  },
  ImageBackground_1180_164: {
    width: wp("1.8804440751743776%"),
    height: hp("0.6538258875654043%"),
    top: hp("1.3688551272199447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5012289590881664%")
  },
  ImageBackground_1180_166: {
    width: wp("0.9693966971503364%"),
    height: hp("0.6838518413689618%"),
    top: hp("1.191352885928957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_168: {
    width: wp("2.9067580826616517%"),
    height: hp("0.5760406535831306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35777806083936525%")
  },
  ImageBackground_1180_170: {
    width: wp("2.259574189854129%"),
    height: hp("0.9602125876588248%"),
    top: hp("0.8893789489412569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27793110280796895%")
  },
  ImageBackground_1180_172: {
    width: wp("1.3776963459696747%"),
    height: hp("1.1729622147773784%"),
    top: hp("0.16756318306011053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8782316198671438%")
  },
  ImageBackground_1180_174: {
    width: wp("1.653026843416518%"),
    height: hp("1.2727458620331977%"),
    top: hp("0.31478131403687826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5421219240640127%")
  },
  View_1180_176: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792313%"),
    top: hp("15.710382513661198%"),
    justifyContent: "flex-start"
  },
  Text_1180_176: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1180_177: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584556%"),
    top: hp("0%")
  },
  View_1180_178: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%"),
    top: hp("45.62841530054645%")
  },
  View_1180_179: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_1180_179: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_180: {
    width: wp("6.521739130434782%"),
    minWidth: wp("6.521739130434782%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956523%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1180_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_181: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("38.79781420765027%"),
    minHeight: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    top: hp("61.47540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_182: {
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
  View_1180_183: {
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
  View_1180_184: {
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
  Text_1180_184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_185: {
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
  Text_1180_185: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_186: {
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
  Text_1180_186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_187: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.655737704918032%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_188: {
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
  Text_1180_188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_189: {
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
  Text_1180_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_190: {
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
  Text_1180_190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_191: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.31147540983607%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_192: {
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
  Text_1180_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_193: {
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
  Text_1180_193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_194: {
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
  Text_1180_194: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_195: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.96721311475411%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_196: {
    width: wp("8.695652173913043%"),
    height: hp("4.918032786885246%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1180_198: {
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
  Text_1180_198: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1180_199: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.28502415458938%")
  },
  View_1180_201: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("109.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091788%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_202: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1180_203: {
    width: wp("18.677281181593447%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.553604789402165%"),
    justifyContent: "flex-start"
  },
  Text_1180_203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
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
