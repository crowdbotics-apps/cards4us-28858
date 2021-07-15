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
      <View style={styles.View_1041_297} />
      <View style={styles.View_1041_298} />
      <View style={styles.View_1041_299}>
        <View style={styles.View_1041_300}>
          <View style={styles.View_1041_301} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1041_302}
          />
          <View style={styles.View_1041_303} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1041_304}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_1041_308}
        />
        <View style={styles.View_1041_313}>
          <View style={styles.View_1041_314}>
            <Text style={styles.Text_1041_314}>9:41</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1041_315}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("899_5657"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_1041_316}
        />
        <View style={styles.View_1041_318}>
          <View style={styles.View_1041_319}>
            <Text style={styles.Text_1041_319}>Back to home</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_1041_320}>
        <View style={styles.View_1041_321}>
          <Text style={styles.Text_1041_321}>Congratulations</Text>
        </View>
        <View style={styles.View_1041_322}>
          <Text style={styles.Text_1041_322}>
            Your Withdrawal from your Naijcoin wallet was successful
          </Text>
        </View>
      </View>
      <View style={styles.View_1041_323}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc51/c6e9/48134b8cb9081711b0970a2b017cd134"
          }}
          style={styles.ImageBackground_1041_324}
        />
        <View style={styles.View_1041_325}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7190/a502/536f7d8d5849470a1d42e2e6a99ded52"
            }}
            style={styles.ImageBackground_1041_326}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d99/ab45/26b3d4a668f7f191f462332ebd0fcac2"
            }}
            style={styles.ImageBackground_1041_327}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9ab/fa07/12631ca54d1766b22af392586400fa72"
            }}
            style={styles.ImageBackground_1041_328}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5763/cedd/d9e648394b1668099ec23eb331f0189c"
          }}
          style={styles.ImageBackground_1041_329}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/896f/b6b2/a35fddde6637df4f05df76654f1d8753"
          }}
          style={styles.ImageBackground_1041_330}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/651c/1249/ad271955318f46f60dad68dbffc7b20c"
          }}
          style={styles.ImageBackground_1041_331}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a03/1e60/440064a28e60327431fd4c4d53d5e22b"
          }}
          style={styles.ImageBackground_1041_332}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a058/b5cb/b586a8dcecc8bf7b2e89cbbfee871fbd"
          }}
          style={styles.ImageBackground_1041_333}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b6c/f818/e8432d4ae1c828abffb7cf2a09c69dab"
          }}
          style={styles.ImageBackground_1041_334}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2108/9920/a86a82f142d87692194bff60c3a0d178"
          }}
          style={styles.ImageBackground_1041_335}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d633/f159/5e0925539c6f53e751da5e6e5771fe4e"
          }}
          style={styles.ImageBackground_1041_336}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c1c/fc3a/003841d2c05a9dc16b3224a2dd6b8fb8"
          }}
          style={styles.ImageBackground_1041_337}
        />
      </View>
      <View style={styles.View_1041_338}>
        <View style={styles.View_1041_339}>
          <View style={styles.View_1041_340}>
            <View style={styles.View_1041_341}>
              <View style={styles.View_1041_342}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b1/a5b6/088e3316ccabdd73ba10ac6143fea272"
                  }}
                  style={styles.ImageBackground_1041_343}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/479f/3da3/0c353c1754d726e31f5489a51f6941a0"
                  }}
                  style={styles.ImageBackground_1041_344}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/485a/7aba/3ab1d35e97ffb90a66c33b36b10ee5b7"
                  }}
                  style={styles.ImageBackground_1041_345}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea66/36a1/4b273d759171cfc7f29f2dc6c2b285d9"
                  }}
                  style={styles.ImageBackground_1041_346}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/881d/a360/f872d6fc3bc233efc203f40191e30828"
                  }}
                  style={styles.ImageBackground_1041_347}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a00/4736/6ac0adbd685bed9ea1e16dbc705e0f50"
                  }}
                  style={styles.ImageBackground_1041_348}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a16b/571b/f3affd0a5abe757f34cd2e6a4460ac63"
                  }}
                  style={styles.ImageBackground_1041_349}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8383/ec51/e6af0e9d35866727f0214bbd2a92d932"
                  }}
                  style={styles.ImageBackground_1041_350}
                />
                <View style={styles.View_1041_351}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/529e/e351/f885eb7da920f8b12c3753b6cc2a21da"
                    }}
                    style={styles.ImageBackground_1041_352}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/820f/ae22/d814498fd13dd86ec7f67b2d7dd24893"
                    }}
                    style={styles.ImageBackground_1041_355}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6991/a9df/4e488d88824301185a05d09f682ec915"
                  }}
                  style={styles.ImageBackground_1041_358}
                />
              </View>
              <View style={styles.View_1041_359}>
                <View style={styles.View_1041_360} />
                <View style={styles.View_1041_361} />
                <View style={styles.View_1041_362} />
                <View style={styles.View_1041_363} />
                <View style={styles.View_1041_364} />
                <View style={styles.View_1041_365} />
                <View style={styles.View_1041_366} />
                <View style={styles.View_1041_367} />
                <View style={styles.View_1041_368} />
                <View style={styles.View_1041_369} />
                <View style={styles.View_1041_370} />
                <View style={styles.View_1041_371} />
                <View style={styles.View_1041_372} />
                <View style={styles.View_1041_373} />
                <View style={styles.View_1041_374} />
                <View style={styles.View_1041_375} />
                <View style={styles.View_1041_376} />
                <View style={styles.View_1041_377} />
                <View style={styles.View_1041_378} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e300/9a43/20c88f0d5030318134ed958df08c083d"
                }}
                style={styles.ImageBackground_1041_379}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1041_297: {
    width: wp("136.271940222109%"),
    minWidth: wp("136.271940222109%"),
    height: hp("86.63260871595372%"),
    minHeight: hp("86.63260871595372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.75399352732487%"),
    top: hp("59.15303881702527%"),
    backgroundColor: "rgba(0, 204, 173, 1)"
  },
  View_1041_298: {
    width: wp("63.55769945227582%"),
    minWidth: wp("63.55769945227582%"),
    height: hp("37.483511335862794%"),
    minHeight: hp("37.483511335862794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22216325105676%"),
    top: hp("28.004630667264347%"),
    backgroundColor: "rgba(249, 169, 2, 1)"
  },
  View_1041_299: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1041_300: {
    width: wp("5.876337502889587%"),
    minWidth: wp("5.876337502889587%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.3679305946892075%")
  },
  View_1041_301: {
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
  ImageBackground_1041_302: {
    width: wp("0.32078212010111784%"),
    minWidth: wp("0.32078212010111784%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("0.5009218643271858%")
  },
  View_1041_303: {
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
  ImageBackground_1041_304: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1041_308: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413490170338115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1041_313: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1041_314: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1041_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  TouchableOpacity_1041_315: {
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
  ImageBackground_1041_316: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1041_318: {
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
  View_1041_319: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1041_319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_320: {
    width: wp("77.05314009661835%"),
    minWidth: wp("77.05314009661835%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("50.09538827698088%")
  },
  View_1041_321: {
    width: wp("77.05314009661835%"),
    minWidth: wp("77.05314009661835%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1041_321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_322: {
    width: wp("77.05314009661835%"),
    minWidth: wp("77.05314009661835%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-start"
  },
  Text_1041_322: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1041_323: {
    width: wp("31.842464870876736%"),
    minWidth: wp("31.842464870876736%"),
    height: hp("16.257527877724236%"),
    minHeight: hp("16.257527877724236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.29951690821256%"),
    top: hp("29.78142076502732%")
  },
  ImageBackground_1041_324: {
    width: wp("4.966950071030769%"),
    minWidth: wp("4.966950071030769%"),
    height: hp("2.6612589268085083%"),
    minHeight: hp("2.6612589268085083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.875518946256037%"),
    top: hp("0.7402930754781458%")
  },
  View_1041_325: {
    width: wp("18.917962779169496%"),
    minWidth: wp("18.917962779169496%"),
    height: hp("10.699503539038487%"),
    minHeight: hp("10.699503539038487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.401235092089372%"),
    top: hp("2.5542379077015056%")
  },
  ImageBackground_1041_326: {
    width: wp("18.917962779169496%"),
    minWidth: wp("18.917962779169496%"),
    height: hp("10.699503539038487%"),
    minHeight: hp("10.699503539038487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1041_327: {
    width: wp("16.541257111922555%"),
    minWidth: wp("16.541257111922555%"),
    height: hp("9.355301153464396%"),
    minHeight: hp("9.355301153464396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1882689839975882%"),
    top: hp("0.6721204747267748%")
  },
  ImageBackground_1041_328: {
    width: wp("8.406948697739754%"),
    height: hp("3.435757902802014%"),
    top: hp("3.6318919697745926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.255451294535021%")
  },
  ImageBackground_1041_329: {
    width: wp("2.3768249917145514%"),
    minWidth: wp("2.3768249917145514%"),
    height: hp("1.731260226723926%"),
    minHeight: hp("1.731260226723926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.556333974939612%"),
    top: hp("13.253800855959703%")
  },
  ImageBackground_1041_330: {
    width: wp("6.864512254650466%"),
    minWidth: wp("6.864512254650466%"),
    height: hp("5.068029601717256%"),
    minHeight: hp("5.068029601717256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6904296875%")
  },
  ImageBackground_1041_331: {
    width: wp("1.8133291299792305%"),
    minWidth: wp("1.8133291299792305%"),
    height: hp("1.0255713931849746%"),
    minHeight: hp("1.0255713931849746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.25305706521739%"),
    top: hp("15.23197361680328%")
  },
  ImageBackground_1041_332: {
    width: wp("1.8133291299792305%"),
    minWidth: wp("1.8133291299792305%"),
    height: hp("1.0255713931849746%"),
    minHeight: hp("1.0255713931849746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.824162137681164%"),
    top: hp("7.111763042178964%")
  },
  ImageBackground_1041_333: {
    width: wp("1.9857482633728911%"),
    minWidth: wp("1.9857482633728911%"),
    height: hp("1.1230871325633565%"),
    minHeight: hp("1.1230871325633565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.345620565368357%"),
    top: hp("0%")
  },
  ImageBackground_1041_334: {
    width: wp("1.0486931040667105%"),
    minWidth: wp("1.0486931040667105%"),
    height: hp("0.5931133129557625%"),
    minHeight: hp("0.5931133129557625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.633204068538653%"),
    top: hp("1.2127985719774586%")
  },
  ImageBackground_1041_335: {
    width: wp("1.8378194403533197%"),
    minWidth: wp("1.8378194403533197%"),
    height: hp("1.0394224703637627%"),
    minHeight: hp("1.0394224703637627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.96056244338768%"),
    top: hp("5.344845297558059%")
  },
  ImageBackground_1041_336: {
    width: wp("2.02082574079578%"),
    minWidth: wp("2.02082574079578%"),
    height: hp("1.1429260337287612%"),
    minHeight: hp("1.1429260337287612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7009265549516925%"),
    top: hp("13.487969070184427%")
  },
  ImageBackground_1041_337: {
    width: wp("0.9654250697813171%"),
    minWidth: wp("0.9654250697813171%"),
    height: hp("0.5460190968435319%"),
    minHeight: hp("0.5460190968435319%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.8578842089372%"),
    top: hp("14.88367299564549%")
  },
  View_1041_338: {
    width: wp("86.23188405797102%"),
    minWidth: wp("86.23188405797102%"),
    height: hp("43.50709758821081%"),
    minHeight: hp("43.50709758821081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("86.82077543331626%")
  },
  View_1041_339: {
    width: wp("86.23188405797102%"),
    minWidth: wp("86.23188405797102%"),
    height: hp("43.50709758821081%"),
    minHeight: hp("43.50709758821081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1041_340: {
    width: wp("86.23188405797102%"),
    minWidth: wp("86.23188405797102%"),
    height: hp("43.50709758821081%"),
    minHeight: hp("43.50709758821081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1041_341: {
    width: wp("86.23188405797102%"),
    minWidth: wp("86.23188405797102%"),
    height: hp("43.50709758821081%"),
    minHeight: hp("43.50709758821081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1041_342: {
    width: wp("38.733864751990865%"),
    minWidth: wp("38.733864751990865%"),
    height: hp("18.90437850535242%"),
    minHeight: hp("18.90437850535242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.960142568689612%"),
    top: hp("2.83970233521174%")
  },
  ImageBackground_1041_343: {
    width: wp("6.772247719879887%"),
    height: hp("5.607931210043652%"),
    top: hp("13.296458760245912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.163654419535021%")
  },
  ImageBackground_1041_344: {
    width: wp("8.97194866972845%"),
    height: hp("4.577796706736414%"),
    top: hp("11.570231119791671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.392408288043477%")
  },
  ImageBackground_1041_345: {
    width: wp("27.45653788248698%"),
    height: hp("15.528697654849195%"),
    top: hp("0.6897306181694063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.601854996980677%")
  },
  ImageBackground_1041_346: {
    width: wp("8.52580876742008%"),
    height: hp("2.257883092744754%"),
    top: hp("5.210234428364089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1041_347: {
    width: wp("7.39546881781684%"),
    height: hp("3.6647861772547654%"),
    top: hp("11.357475239071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.338397777022948%")
  },
  ImageBackground_1041_348: {
    width: wp("27.45653788248698%"),
    height: hp("15.528697654849195%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.936063462409422%")
  },
  ImageBackground_1041_349: {
    width: wp("27.385776169634095%"),
    height: hp("9.266803303702934%"),
    top: hp("3.1310034579918096%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.97150513285024%")
  },
  ImageBackground_1041_350: {
    width: wp("20.58759311547026%"),
    height: hp("11.643802663667605%"),
    top: hp("1.942418833247956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.37054413873792%")
  },
  View_1041_351: {
    width: wp("9.632098617185141%"),
    minWidth: wp("9.632098617185141%"),
    height: hp("5.275526724226488%"),
    minHeight: hp("5.275526724226488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.732969127415458%"),
    top: hp("5.095968611253426%")
  },
  ImageBackground_1041_352: {
    width: wp("8.578728017023796%"),
    height: hp("3.5768985748291016%"),
    top: hp("1.6986450862363398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1041_355: {
    width: wp("8.186635187858544%"),
    height: hp("2.8447140761411904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4454422365640127%")
  },
  ImageBackground_1041_358: {
    width: wp("19.470913283490905%"),
    height: hp("9.06187797504696%"),
    top: hp("1.9407178534836191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.367713522795896%")
  },
  View_1041_359: {
    width: wp("86.23188405797102%"),
    minWidth: wp("86.23188405797102%"),
    height: hp("23.70242551376259%"),
    minHeight: hp("23.70242551376259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1041_360: {
    width: wp("2.1688417536049074%"),
    height: hp("1.066956233457138%"),
    top: hp("20.822493756403674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.9955677272041%"),
    backgroundColor: "rgba(106, 46, 195, 1)"
  },
  View_1041_361: {
    width: wp("2.0328798155853716%"),
    height: hp("1.2125262797204521%"),
    top: hp("17.549441811816948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.75868999094203%"),
    backgroundColor: "rgba(0, 148, 252, 1)"
  },
  View_1041_362: {
    width: wp("2.143887045302829%"),
    height: hp("1.1497435022573004%"),
    top: hp("1.0853918523736326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.7626953125%"),
    backgroundColor: "rgba(0, 148, 252, 1)"
  },
  View_1041_363: {
    width: wp("2.143887045302829%"),
    height: hp("1.1497435022573004%"),
    top: hp("10.718540546021174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 153, 0, 1)"
  },
  View_1041_364: {
    width: wp("2.09921938209718%"),
    height: hp("1.1872634210221755%"),
    top: hp("22.51516873719261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.143026305857482%"),
    backgroundColor: "rgba(255, 0, 128, 1)"
  },
  View_1041_365: {
    width: wp("1.986134340221755%"),
    height: hp("1.2211662824036644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.385999301781396%"),
    backgroundColor: "rgba(255, 0, 128, 1)"
  },
  View_1041_366: {
    width: wp("2.1351270629587957%"),
    height: hp("0.9498525838382909%"),
    top: hp("10.128267215249323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.350227392814013%"),
    backgroundColor: "rgba(106, 46, 195, 1)"
  },
  View_1041_367: {
    width: wp("2.1351270629587957%"),
    height: hp("0.9498525838382909%"),
    top: hp("16.81755357752732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.09671507019928%"),
    backgroundColor: "rgba(106, 46, 195, 1)"
  },
  View_1041_368: {
    width: wp("2.126508519269418%"),
    height: hp("0.9330672644526581%"),
    top: hp("9.168447692537569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.40055102657006%"),
    backgroundColor: "rgba(0, 153, 0, 1)"
  },
  View_1041_369: {
    width: wp("2.0269543652373234%"),
    height: hp("0.7888924228689057%"),
    top: hp("16.303924393784158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.08980600845411%"),
    backgroundColor: "rgba(0, 153, 0, 1)"
  },
  View_1041_370: {
    width: wp("2.100771291244433%"),
    height: hp("0.8891919922958957%"),
    top: hp("12.328501216700829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.51180838617151%"),
    backgroundColor: "rgba(255, 0, 128, 1)"
  },
  View_1041_371: {
    width: wp("2.117240371335532%"),
    height: hp("1.1757281308617096%"),
    top: hp("5.3849350559255384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.1606067897041%"),
    backgroundColor: "rgba(255, 0, 128, 1)"
  },
  View_1041_372: {
    width: wp("1.9833322884379956%"),
    height: hp("0.7381742117834873%"),
    top: hp("16.057349033043025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.73855723505435%"),
    backgroundColor: "rgba(255, 0, 128, 1)"
  },
  View_1041_373: {
    width: wp("1.9500727814752699%"),
    height: hp("0.7019115927440872%"),
    top: hp("12.552063321806699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.36502679649759%"),
    backgroundColor: "rgba(255, 231, 0, 1)"
  },
  View_1041_374: {
    width: wp("1.986134340221755%"),
    height: hp("1.2211662824036644%"),
    top: hp("19.059111381489075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.737323558272946%"),
    backgroundColor: "rgba(255, 231, 0, 1)"
  },
  View_1041_375: {
    width: wp("2.1591635717861895%"),
    height: hp("1.123305487502468%"),
    top: hp("21.877701556096312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.2601760643116%"),
    backgroundColor: "rgba(255, 231, 0, 1)"
  },
  View_1041_376: {
    width: wp("1.9292690903668241%"),
    height: hp("1.2259590169771122%"),
    top: hp("7.934903837943992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797809103260869%"),
    backgroundColor: "rgba(255, 231, 0, 1)"
  },
  View_1041_377: {
    width: wp("1.2102139744781641%"),
    height: hp("1.0934914396108826%"),
    top: hp("0.537876483521174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.09626453049518%"),
    backgroundColor: "rgba(0, 148, 252, 1)"
  },
  View_1041_378: {
    width: wp("1.640483722594625%"),
    height: hp("1.2010659025015076%"),
    top: hp("20.75312046405395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.03306867074275%"),
    backgroundColor: "rgba(0, 148, 252, 1)"
  },
  ImageBackground_1041_379: {
    width: wp("85.0559179333673%"),
    height: hp("22.299634172616763%"),
    top: hp("21.20744882385587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5757354883756047%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
