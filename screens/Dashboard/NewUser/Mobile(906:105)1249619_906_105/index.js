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
      <View style={styles.View_906_106}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ae/a680/3c944c9cc89b1bcb9408c55626431326"
          }}
          style={styles.ImageBackground_906_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/7b9b/1f628b184155cee27f10a693d3b68162"
          }}
          style={styles.ImageBackground_906_109}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba33/c0dd/f8f0067386506c2e1fcc0b951913dc17"
          }}
          style={styles.ImageBackground_906_111}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_906_113}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a027/060b/76478a8265ad7b9c48c00656677101dc"
          }}
          style={styles.ImageBackground_906_115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35da/5c50/e56ac3f26f901c55886f5fe927721f4f"
          }}
          style={styles.ImageBackground_906_117}
        />
      </View>
      <View style={styles.View_906_119}>
        <View style={styles.View_906_120}>
          <View style={styles.View_906_121} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_906_122}
          />
          <View style={styles.View_906_123} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_906_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_906_128}
        />
        <View style={styles.View_906_133}>
          <View style={styles.View_906_134}>
            <Text style={styles.Text_906_134}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_906_135}>
        <View style={styles.View_906_136}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e923/25d9/00226a3c4d53904bbb64da27ac2d2eaf"
            }}
            style={styles.ImageBackground_906_137}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b05/96b0/a02c7f200eca4d03263a572b9d0b963a"
            }}
            style={styles.ImageBackground_906_139}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7559/adc4/c30f6384e1e8487c803547f14f7ca39e"
            }}
            style={styles.ImageBackground_906_141}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51cd/65c4/86a953901fc9234bbc30759715039c48"
            }}
            style={styles.ImageBackground_906_143}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4746/0fad/d14c8b944502bc6966c7792d4afd5b88"
            }}
            style={styles.ImageBackground_906_145}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a789/4740/6f43a72122b8df6d433a21a6f57afbd2"
            }}
            style={styles.ImageBackground_906_147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3758/3b54/7f85ddaa9a32fe3fcb7254033d071551"
            }}
            style={styles.ImageBackground_906_149}
          />
        </View>
        <View style={styles.View_906_151}>
          <Text style={styles.Text_906_151}>0</Text>
        </View>
      </View>
      <View style={styles.View_906_152}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deba/8f6e/97ea92b06686d45615beaddc8f974fb0"
          }}
          style={styles.ImageBackground_906_153}
        />
      </View>
      <View style={styles.View_906_157}>
        <Text style={styles.Text_906_157}>Wallet Balance</Text>
      </View>
      <View style={styles.View_906_158}>
        <View style={styles.View_906_159}>
          <View style={styles.View_906_160}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d38/f7cf/9fc2168829f369bb7935d816b414de27"
              }}
              style={styles.ImageBackground_906_161}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28bb/e31b/f666bbd440ad60bfe779cca3de7d76af"
            }}
            style={styles.ImageBackground_906_164}
          />
        </View>
        <View style={styles.View_906_165}>
          <View style={styles.View_906_166}>
            <View style={styles.View_906_167}>
              <View style={styles.View_906_168} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f370/44e5/fca889631942fd1db84d9b42cee5f892"
                }}
                style={styles.ImageBackground_906_169}
              />
            </View>
            <View style={styles.View_906_170}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4231/d1f1/283f3fc2b5658849089d5c52f35615b6"
                }}
                style={styles.ImageBackground_906_171}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf56/ca63/7165d359edc5d640898501355b8510bc"
                }}
                style={styles.ImageBackground_906_172}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c73a/9a87/5d76a20ae35da8c5b76921a830612283"
                }}
                style={styles.ImageBackground_906_174}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d8e/eb73/90cebec5c99a507a90f1f1eaab422eed"
              }}
              style={styles.ImageBackground_906_175}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16d9/9fc7/576703c92fa6041100ec99662bfc05a5"
              }}
              style={styles.ImageBackground_906_179}
            />
            <View style={styles.View_906_183} />
            <View style={styles.View_906_184}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd09/4c5b/d105f300b2029f3473c246d6843debe0"
                }}
                style={styles.ImageBackground_906_185}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26db/0172/3ed25bbe2cc74e08230ea0473407f7c7"
                }}
                style={styles.ImageBackground_906_186}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc90/4987/8202fde27fdfffcf835e0bc8c885fb63"
                }}
                style={styles.ImageBackground_906_187}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc90/4987/8202fde27fdfffcf835e0bc8c885fb63"
                }}
                style={styles.ImageBackground_906_190}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_906_193} />
      <View style={styles.View_906_194}>
        <View style={styles.View_906_195}>
          <Text style={styles.Text_906_195}>Transaction History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b633/af59/e56fda1af144edacf44f30479611074d"
          }}
          style={styles.ImageBackground_906_196}
        />
      </View>
      <View style={styles.View_906_198}>
        <View style={styles.View_906_199}>
          <Text style={styles.Text_906_199}>My Naijcoin</Text>
        </View>
        <View style={styles.View_906_200}>
          <View style={styles.View_906_201}>
            <View style={styles.View_906_202}>
              <View style={styles.View_906_203}>
                <Text style={styles.Text_906_203}>Last 7 days</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_906_204}>
        <View style={styles.View_906_401}>
          <Text style={styles.Text_906_401}>
            You have no recent transactions
          </Text>
        </View>
      </View>
      <View style={styles.View_906_270}>
        <View style={styles.View_906_271}>
          <View style={styles.View_906_272}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1141/74e1/0177ca5c347d3afc4c5965304e1921d0"
              }}
              style={styles.ImageBackground_906_273}
            />
            <View style={styles.View_906_276}>
              <Text style={styles.Text_906_276}>0%</Text>
            </View>
            <View style={styles.View_906_277}>
              <Text style={styles.Text_906_277}>100%</Text>
            </View>
          </View>
          <View style={styles.View_906_278}>
            <Text style={styles.Text_906_278}>You’ve spent</Text>
          </View>
          <View style={styles.View_906_279}>
            <Text style={styles.Text_906_279}>Naijcoins this week</Text>
          </View>
          <View style={styles.View_906_280}>
            <View style={styles.View_906_281}>
              <Text style={styles.Text_906_281}>0</Text>
            </View>
            <View style={styles.View_906_282}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
                }}
                style={styles.ImageBackground_906_283}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9390/0559/079d843a06266542bd58f2c57a662084"
                }}
                style={styles.ImageBackground_906_285}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
                }}
                style={styles.ImageBackground_906_287}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c8e/c19c/4dab2bb42e3a4f445d02edec740181b1"
                }}
                style={styles.ImageBackground_906_289}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2227/226d/57f74fcd176fbc7b324a8cf124fa61fb"
                }}
                style={styles.ImageBackground_906_291}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/300d/4c59/45f2e681668aee100f23067d5a72e457"
                }}
                style={styles.ImageBackground_906_293}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60b5/5d28/1bd2e425eba715c05d46c0d442dd5f26"
                }}
                style={styles.ImageBackground_906_295}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1432_75}>
        <View style={styles.View_1432_76}>
          <View style={styles.View_1432_77}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f9b/a0b7/ed4ce4716658457a5cbf27a939c45ad1"
              }}
              style={styles.ImageBackground_1432_78}
            />
          </View>
        </View>
        <View style={styles.View_1432_83}>
          <Text style={styles.Text_1432_83}>Receive</Text>
        </View>
      </View>
      <View style={styles.View_1432_84}>
        <View style={styles.View_1432_85}>
          <View style={styles.View_1432_86}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c5/9197/e6f3b6b07c405a2879efffb2734a5158"
              }}
              style={styles.ImageBackground_1432_87}
            />
          </View>
        </View>
        <View style={styles.View_1432_92}>
          <Text style={styles.Text_1432_92}>Withdraw</Text>
        </View>
      </View>
      <View style={styles.View_1432_93}>
        <View style={styles.View_1432_94}>
          <View style={styles.View_1432_95}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aac4/4e33/1d0206a8c500d426a84cbb46d3be3062"
              }}
              style={styles.ImageBackground_1432_96}
            />
          </View>
        </View>
        <View style={styles.View_1432_99}>
          <Text style={styles.Text_1432_99}>Send</Text>
        </View>
      </View>
      <View style={styles.View_1432_100}>
        <View style={styles.View_1432_101}>
          <View style={styles.View_1432_102}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90d9/6784/e25caff85ecd93e3906e3f1f5728a681"
              }}
              style={styles.ImageBackground_1432_103}
            />
          </View>
        </View>
        <View style={styles.View_1432_107}>
          <Text style={styles.Text_1432_107}>Fund</Text>
        </View>
      </View>
      <View style={styles.View_906_350}>
        <View style={styles.View_I906_350_893_130} />
        <View style={styles.View_I906_350_893_131}>
          <Text style={styles.Text_I906_350_893_131}>Home</Text>
        </View>
        <View style={styles.View_I906_350_893_138}>
          <View style={styles.View_I906_350_897_0}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b840/05de/f17df7cb8e6b31f506c188eecce3511a"
              }}
              style={styles.ImageBackground_I906_350_897_1}
            />
          </View>
        </View>
        <View style={styles.View_I906_350_899_3343}>
          <View style={styles.View_I906_350_899_3364}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e82/bf58/8287fbec6b20890a67c4b13efa160bef"
              }}
              style={styles.ImageBackground_I906_350_899_3365}
            />
          </View>
          <View style={styles.View_I906_350_899_3349}>
            <Text style={styles.Text_I906_350_899_3349}>Transactions</Text>
          </View>
        </View>
        <View style={styles.View_I906_350_899_3350}>
          <View style={styles.View_I906_350_899_3351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9747/cfaf/da36727aa67ec35e7b8e6c50afa74ec0"
              }}
              style={styles.ImageBackground_I906_350_899_3352}
            />
          </View>
          <View style={styles.View_I906_350_899_3356}>
            <Text style={styles.Text_I906_350_899_3356}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_906_351}>
        <View style={styles.View_906_352} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("157.37704918032787%") },
  View_906_106: {
    width: wp("225.31679310084542%"),
    minWidth: wp("225.31679310084542%"),
    height: hp("126.95264138810623%"),
    minHeight: hp("126.95264138810623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-43.39440387228261%"),
    top: hp("-9.289621655406847%")
  },
  ImageBackground_906_107: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25805213803151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_906_109: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97794946555882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_906_111: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.2852663133965168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_906_113: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.27708176576375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_906_115: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5037012986146685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_906_117: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.639779679762206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_906_119: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_120: {
    width: wp("5.876337502889587%"),
    minWidth: wp("5.876337502889587%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.367943101893357%")
  },
  View_906_121: {
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
  ImageBackground_906_122: {
    width: wp("0.32078212010111784%"),
    minWidth: wp("0.32078212010111784%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("0.5009093571230361%")
  },
  View_906_123: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(165, 171, 193, 1)",
    borderWidth: 1
  },
  ImageBackground_906_124: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_906_128: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_906_133: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_134: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_906_134: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_135: {
    width: wp("12.622584467348846%"),
    minWidth: wp("12.622584467348846%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_136: {
    width: wp("7.308574344800867%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_137: {
    width: wp("1.6842684308111957%"),
    height: hp("1.5140383621382583%"),
    top: hp("1.5442478200776986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.247424139492754%")
  },
  ImageBackground_906_139: {
    width: wp("4.064109359962353%"),
    height: hp("1.4130811222264024%"),
    top: hp("2.958504098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.244475581219806%")
  },
  ImageBackground_906_141: {
    width: wp("2.09510844686757%"),
    height: hp("1.4779747509565508%"),
    top: hp("2.5747622297109807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_143: {
    width: wp("6.28223050619669%"),
    height: hp("1.2449677524670877%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7731709503321254%")
  },
  ImageBackground_906_145: {
    width: wp("4.883504489769682%"),
    height: hp("2.0752592816378903%"),
    top: hp("1.9221196409131664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.600739262530193%")
  },
  ImageBackground_906_147: {
    width: wp("2.9775460561116533%"),
    height: hp("2.5350643637401813%"),
    top: hp("0.36212941987918335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0592801743659415%")
  },
  ImageBackground_906_149: {
    width: wp("3.5726040457757775%"),
    height: hp("2.7507216552567613%"),
    top: hp("0.6803377078530559%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.171698086503623%")
  },
  View_906_151: {
    width: wp("3.864734299516908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.757866753472223%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_906_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_152: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.902794289704104%"),
    top: hp("11.202185792349727%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_906_153: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_906_157: {
    width: wp("23.42995169082126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("15.983606557377051%"),
    justifyContent: "flex-start"
  },
  Text_906_157: {
    color: "rgba(242, 245, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_158: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.46376811594203%"),
    top: hp("10.792349726775956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_159: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_160: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("1.2295081967213104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4492753623188293%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_906_161: {
    width: wp("5.072463768115942%"),
    height: hp("3.0481614701734867%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%")
  },
  ImageBackground_906_164: {
    width: wp("1.6908212560386473%"),
    height: hp("0.9562841530054645%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995176%")
  },
  View_906_165: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429944%")
  },
  View_906_166: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_906_167: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_168: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(165, 171, 193, 1)"
  },
  ImageBackground_906_169: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_906_170: {
    width: wp("6.062663350128322%"),
    height: hp("4.30327868852459%"),
    top: hp("1.6137295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.233591862922708%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_906_171: {
    width: wp("6.062663350128322%"),
    height: hp("4.30327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_172: {
    width: wp("0.9170322602497782%"),
    height: hp("0.4842057254145054%"),
    top: hp("1.9911635768869527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.975213239734302%")
  },
  ImageBackground_906_174: {
    width: wp("0.1262895151036949%"),
    height: hp("0.18652618908491292%"),
    top: hp("1.149995730874318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9637398097826093%")
  },
  ImageBackground_906_175: {
    width: wp("6.062663350128322%"),
    height: hp("1.9723360655737705%"),
    top: hp("3.9446721311475397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.233591862922708%")
  },
  ImageBackground_906_179: {
    width: wp("4.148139124331267%"),
    height: hp("1.9723360655737705%"),
    top: hp("1.255122950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.509963768115952%")
  },
  View_906_183: {
    width: wp("3.509963998472057%"),
    height: hp("1.4344262295081966%"),
    top: hp("2.3309426229508183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8290567444142596%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_184: {
    width: wp("1.5954376994699673%"),
    height: hp("0.8965163934426229%"),
    top: hp("2.3309426229508183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.4244626547403385%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_906_185: {
    width: wp("1.5954376994699673%"),
    height: hp("0.8965163934426229%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_186: {
    width: wp("0.4016487494758938%"),
    height: hp("0.11851259919463612%"),
    top: hp("1.0666435533534013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6025083974939633%")
  },
  ImageBackground_906_187: {
    width: wp("0.3670613546878243%"),
    height: hp("0.22814358518423278%"),
    top: hp("0.33668559757086847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2380665949577292%")
  },
  ImageBackground_906_190: {
    width: wp("0.3670614122768531%"),
    height: hp("0.22814338975916795%"),
    top: hp("0.29548269803406946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2225902022946968%")
  },
  View_906_193: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("136.33879781420765%"),
    minHeight: hp("136.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.03825136612022%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_906_194: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("64.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_195: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_906_195: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_906_196: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86956521739131%")
  },
  View_906_198: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("109.8360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_199: {
    width: wp("20.77294685990338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_906_199: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_200: {
    width: wp("17.14975845410628%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.20491803278689247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06763285024155%")
  },
  View_906_201: {
    width: wp("17.14975845410628%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_906_202: {
    width: wp("17.14975845410628%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_906_203: {
    width: wp("17.14975845410628%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_906_203: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_204: {
    width: wp("90.33816425120773%"),
    height: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("69.94535519125684%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_906_401: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.75845410628019%"),
    top: hp("15.027322404371589%"),
    justifyContent: "flex-start"
  },
  Text_906_401: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_270: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("115.30054644808743%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_906_271: {
    width: wp("68.11594202898551%"),
    height: hp("27.049180327868854%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.111111111111109%")
  },
  View_906_272: {
    width: wp("68.11594202898551%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_273: {
    width: wp("67.3913043478261%"),
    height: hp("23.778267115191685%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_906_276: {
    width: wp("4.830917874396135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0869565217391344%"),
    top: hp("24.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_906_276: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_277: {
    width: wp("7.487922705314009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("24.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_906_277: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_278: {
    width: wp("16.183574879227052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.72463768115943%"),
    top: hp("9.972677595628411%"),
    justifyContent: "flex-start"
  },
  Text_906_278: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_279: {
    width: wp("24.637681159420293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.739130434782616%"),
    top: hp("18.306010928961754%"),
    justifyContent: "flex-start"
  },
  Text_906_279: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_280: {
    width: wp("9.640370244565217%"),
    minWidth: wp("9.640370244565217%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.227053140096622%"),
    top: hp("13.251366120218577%")
  },
  View_906_281: {
    width: wp("3.864734299516908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7756359450483075%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_906_281: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_282: {
    width: wp("4.567866855197482%"),
    height: hp("2.73224043715847%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_283: {
    width: wp("1.0526677836542544%"),
    height: hp("0.9462740251926777%"),
    top: hp("0.9651726060877763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0296695727657053%")
  },
  ImageBackground_906_285: {
    width: wp("2.540068695510643%"),
    height: hp("0.8831757665331899%"),
    top: hp("1.8490650614754145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0277824954710155%")
  },
  ImageBackground_906_287: {
    width: wp("1.3094429808538317%"),
    height: hp("0.9237343496312209%"),
    top: hp("1.609210238430677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_289: {
    width: wp("3.9263946422632188%"),
    height: hp("0.7781048941481961%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4832687009359944%")
  },
  ImageBackground_906_291: {
    width: wp("3.052190421284109%"),
    height: hp("1.29703719759248%"),
    top: hp("1.2013586492486468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3754694104770522%")
  },
  ImageBackground_906_293: {
    width: wp("1.8609664290423555%"),
    height: hp("1.5844153576209896%"),
    top: hp("0.22634704256319083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5370574803743935%")
  },
  ImageBackground_906_295: {
    width: wp("2.232877758965976%"),
    height: hp("1.7192011973896963%"),
    top: hp("0.42519491226946116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7323039326690832%")
  },
  View_1432_75: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091788%"),
    top: hp("24.316939890710383%"),
    backgroundColor: "rgba(255, 237, 199, 1)"
  },
  View_1432_76: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("3.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1432_77: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1432_78: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1432_83: {
    width: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.21739130434782%"),
    top: hp("11.065573770491806%"),
    justifyContent: "flex-start"
  },
  Text_1432_83: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1432_84: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091788%"),
    top: hp("44.12568306010929%"),
    backgroundColor: "rgba(217, 230, 255, 1)"
  },
  View_1432_85: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    top: hp("3.6885245901639294%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1432_86: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.14866630812198878%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1432_87: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1432_92: {
    width: wp("15.217391304347828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.768115942028977%"),
    top: hp("11.065573770491802%"),
    justifyContent: "flex-start"
  },
  Text_1432_92: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1432_93: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("24.316939890710383%"),
    backgroundColor: "rgba(202, 255, 247, 1)"
  },
  View_1432_94: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("3.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1432_95: {
    width: wp("10.92449040804508%"),
    height: hp("6.178604709646089%"),
    top: hp("-1.0088310867059427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.783700841636474%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1432_96: {
    width: wp("10.92449040804508%"),
    height: hp("6.178604709646089%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1432_99: {
    width: wp("7.971014492753622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.14975845410628%"),
    top: hp("11.065573770491806%"),
    justifyContent: "flex-start"
  },
  Text_1432_99: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1432_100: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("44.12568306010929%"),
    backgroundColor: "rgba(235, 87, 87, 0.10000000149011612)"
  },
  View_1432_101: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("3.6885245901639294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1432_102: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1432_103: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1432_107: {
    width: wp("7.971014492753622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    top: hp("11.065573770491802%"),
    justifyContent: "flex-start"
  },
  Text_1432_107: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_350: {
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
  View_I906_350_893_130: {
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
  View_I906_350_893_131: {
    flexGrow: 1,
    width: wp("9.866665642042667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.00002830615942%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_I906_350_893_131: {
    color: "rgba(52, 67, 86, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I906_350_893_138: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("2.4590163934426243%")
  },
  View_I906_350_897_0: {
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
  ImageBackground_I906_350_897_1: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I906_350_899_3343: {
    flexGrow: 1,
    width: wp("16.425120772946862%"),
    height: hp("5.831488103814464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.78743961352657%"),
    top: hp("2.4590163934426243%")
  },
  View_I906_350_899_3364: {
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
  ImageBackground_I906_350_899_3365: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I906_350_899_3349: {
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
  Text_I906_350_899_3349: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I906_350_899_3350: {
    flexGrow: 1,
    width: wp("16.425120772946862%"),
    height: hp("5.831492272882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("2.4590163934426243%")
  },
  View_I906_350_899_3351: {
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
  ImageBackground_I906_350_899_3352: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I906_350_899_3356: {
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
  Text_I906_350_899_3356: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_351: {
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
  View_906_352: {
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
