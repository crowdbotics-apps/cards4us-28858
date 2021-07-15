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
      <View style={styles.View_922_1} />
      <View style={styles.View_922_2} />
      <View style={styles.View_922_3}>
        <View style={styles.View_922_4}>
          <View style={styles.View_922_5} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_922_6}
          />
          <View style={styles.View_922_7} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_922_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_922_12}
        />
        <View style={styles.View_922_17}>
          <View style={styles.View_922_18}>
            <Text style={styles.Text_922_18}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_922_19}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_922_20}
        />
        <View style={styles.View_922_22}>
          <View style={styles.View_922_23}>
            <Text style={styles.Text_922_23}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_922_24}>
        <Text style={styles.Text_922_24}>Request money from </Text>
      </View>
      <View style={styles.View_922_25}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/974a/980c/5eebc7052f15c9dd6e9c3d0b232e233a"
          }}
          style={styles.ImageBackground_922_26}
        />
        <View style={styles.View_922_27}>
          <Text style={styles.Text_922_27}>Continue</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/850d/40a7/594bfea5714716bdb0c46ec44955abd0"
        }}
        style={styles.ImageBackground_922_73}
      />
      <View style={styles.View_922_275}>
        <View style={styles.View_922_276} />
        <View style={styles.View_922_277}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c94/8b0d/75fe95cee47c46609cdac7e930f0d1fc"
            }}
            style={styles.ImageBackground_922_278}
          />
        </View>
        <View style={styles.View_922_282}>
          <View style={styles.View_922_283}>
            <Text style={styles.Text_922_283}>Share Naijcoin ID</Text>
          </View>
          <View style={styles.View_922_284}>
            <Text style={styles.Text_922_284}>%dikethelmak</Text>
          </View>
          <View style={styles.View_922_285}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b54f/bf9c/50392b2dd47653f7c276566969a61bb2"
              }}
              style={styles.ImageBackground_922_286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5581/953f/a4dfbdef1b9d70514c2fb32217d7efcb"
              }}
              style={styles.ImageBackground_922_288}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32f9/8ea2/1b1f8ef8c58f71a32b103b79883b784f"
              }}
              style={styles.ImageBackground_922_290}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e529/8932/695f7904976b855f2868baf055f2073f"
              }}
              style={styles.ImageBackground_922_292}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21b8/d10d/1c4c64405b40b8911eb742eeb8caf54d"
              }}
              style={styles.ImageBackground_922_294}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6cf/3cb2/e6c23b85accdb52a6dfcf2cb5cd444de"
              }}
              style={styles.ImageBackground_922_296}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f0/7b89/4d4fb0835cf0e20510e3390ce34f6085"
              }}
              style={styles.ImageBackground_922_298}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_922_301}>
        <View style={styles.View_922_302}>
          <Text style={styles.Text_922_302}>Use QR code</Text>
        </View>
        <View style={styles.View_922_303}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a4/e700/15344da0a91557e1314b4030726780ae"
            }}
            style={styles.ImageBackground_922_304}
          />
        </View>
      </View>
      <View style={styles.View_940_0}>
        <View style={styles.View_940_1} />
        <View style={styles.View_940_2}>
          <Text style={styles.Text_940_2}>Search wallet id</Text>
        </View>
        <View style={styles.View_940_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b98/8534/98842f80158530fd186edf22b7d9644f"
            }}
            style={styles.ImageBackground_940_4}
          />
        </View>
      </View>
      <View style={styles.View_940_166}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
          }}
          style={styles.ImageBackground_940_167}
        />
        <View style={styles.View_940_168}>
          <Text style={styles.Text_940_168}>Kachi Ibeji</Text>
        </View>
        <View style={styles.View_940_169}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e291/00ad/68825776c09bb837bdb0ce0fc6c06315"
            }}
            style={styles.ImageBackground_940_170}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce5e/7090/ad9ef71a9d60fc5fc8dd297ef61d9408"
            }}
            style={styles.ImageBackground_940_172}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/de9a/3d70a5e4d18762f25d15b5e655cc384d"
            }}
            style={styles.ImageBackground_940_174}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a984/218a/e247181ea655ea15001a3267dd885f3d"
            }}
            style={styles.ImageBackground_940_176}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47ad/2aa1/b171a17497d7f17008ff7929eb983681"
            }}
            style={styles.ImageBackground_940_178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911b/905c/04b4e3b1f2aa2b0e4263964af2d8303d"
            }}
            style={styles.ImageBackground_940_180}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7968/3d3c/bc6d0ad276474c92fc3f891c4c4126b1"
            }}
            style={styles.ImageBackground_940_182}
          />
        </View>
        <View style={styles.View_940_184}>
          <Text style={styles.Text_940_184}>@kachiibeji44</Text>
        </View>
        <View style={styles.View_940_185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b90c/4235/7562363566bff08908068a0900f204a6"
            }}
            style={styles.ImageBackground_940_186}
          />
        </View>
      </View>
      <View style={styles.View_940_189}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
          }}
          style={styles.ImageBackground_940_190}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e26b/7f04/3b611c388112ded7ebd7923e94bd05d8"
          }}
          style={styles.ImageBackground_940_191}
        />
        <View style={styles.View_940_192}>
          <Text style={styles.Text_940_192}>Muhammed Ibrahim</Text>
        </View>
        <View style={styles.View_940_193}>
          <Text style={styles.Text_940_193}>@muhammedIbr</Text>
        </View>
        <View style={styles.View_1180_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_4}
          />
        </View>
      </View>
      <View style={styles.View_940_198}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
          }}
          style={styles.ImageBackground_940_199}
        />
        <View style={styles.View_940_200}>
          <Text style={styles.Text_940_200}>Kachi Ibeji</Text>
        </View>
        <View style={styles.View_940_201}>
          <Text style={styles.Text_940_201}>@kachiIbej</Text>
        </View>
        <View style={styles.View_1180_6}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_7}
          />
        </View>
      </View>
      <View style={styles.View_940_206}>
        <View style={styles.View_940_207}>
          <View style={styles.View_940_208}>
            <View style={styles.View_940_209} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae2c/80f7/aeccf3eacc80a38c6b76d099f629782d"
              }}
              style={styles.ImageBackground_940_210}
            />
          </View>
          <View style={styles.View_940_211}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b45d/7ce9/f6f13995e1503107d165f6bc27ed7d1a"
              }}
              style={styles.ImageBackground_940_212}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a9/542f/66099c51345a1f80ecee6d7a4718638a"
              }}
              style={styles.ImageBackground_940_213}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ad/1173/d1297ae99479e4c32e0e4c178fdf435c"
              }}
              style={styles.ImageBackground_940_215}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7b/cbec/9cb3616baf9c40a2b511f6dbba4d0961"
            }}
            style={styles.ImageBackground_940_216}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0b/1f6d/d60c5b436c9278950faeb99b694b1483"
            }}
            style={styles.ImageBackground_940_220}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a4/f190/a4c2a0829da395aaeba8c4c2faa6dbd6"
            }}
            style={styles.ImageBackground_940_224}
          />
          <View style={styles.View_940_226}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd8c/6dd0/d79a32f86f41c8856b505f4489e1f61f"
              }}
              style={styles.ImageBackground_940_227}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_940_229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_940_232}
            />
          </View>
        </View>
        <View style={styles.View_940_235}>
          <Text style={styles.Text_940_235}>Favour Adamu</Text>
        </View>
        <View style={styles.View_940_236}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e291/00ad/68825776c09bb837bdb0ce0fc6c06315"
            }}
            style={styles.ImageBackground_940_237}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce5e/7090/ad9ef71a9d60fc5fc8dd297ef61d9408"
            }}
            style={styles.ImageBackground_940_239}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/de9a/3d70a5e4d18762f25d15b5e655cc384d"
            }}
            style={styles.ImageBackground_940_241}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a984/218a/e247181ea655ea15001a3267dd885f3d"
            }}
            style={styles.ImageBackground_940_243}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47ad/2aa1/b171a17497d7f17008ff7929eb983681"
            }}
            style={styles.ImageBackground_940_245}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911b/905c/04b4e3b1f2aa2b0e4263964af2d8303d"
            }}
            style={styles.ImageBackground_940_247}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7968/3d3c/bc6d0ad276474c92fc3f891c4c4126b1"
            }}
            style={styles.ImageBackground_940_249}
          />
        </View>
        <View style={styles.View_940_251}>
          <Text style={styles.Text_940_251}>@thefavouramu</Text>
        </View>
        <View style={styles.View_940_252}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_940_253}
          />
        </View>
      </View>
      <View style={styles.View_940_255}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f363/f21c/b37defd1f888a0fdc9e221ae0b33cd6e"
          }}
          style={styles.ImageBackground_940_256}
        />
        <View style={styles.View_940_284}>
          <Text style={styles.Text_940_284}>Favour Adamu</Text>
        </View>
        <View style={styles.View_940_285}>
          <Text style={styles.Text_940_285}>@fvouradamu</Text>
        </View>
        <View style={styles.View_940_286}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_940_287}
          />
        </View>
      </View>
      <View style={styles.View_940_289}>
        <View style={styles.View_940_290}>
          <View style={styles.View_940_291}>
            <View style={styles.View_940_292} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae2c/80f7/aeccf3eacc80a38c6b76d099f629782d"
              }}
              style={styles.ImageBackground_940_293}
            />
          </View>
          <View style={styles.View_940_294}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b45d/7ce9/f6f13995e1503107d165f6bc27ed7d1a"
              }}
              style={styles.ImageBackground_940_295}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a9/542f/66099c51345a1f80ecee6d7a4718638a"
              }}
              style={styles.ImageBackground_940_296}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ad/1173/d1297ae99479e4c32e0e4c178fdf435c"
              }}
              style={styles.ImageBackground_940_298}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7b/cbec/9cb3616baf9c40a2b511f6dbba4d0961"
            }}
            style={styles.ImageBackground_940_299}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0b/1f6d/d60c5b436c9278950faeb99b694b1483"
            }}
            style={styles.ImageBackground_940_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a4/f190/a4c2a0829da395aaeba8c4c2faa6dbd6"
            }}
            style={styles.ImageBackground_940_307}
          />
          <View style={styles.View_940_309}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd8c/6dd0/d79a32f86f41c8856b505f4489e1f61f"
              }}
              style={styles.ImageBackground_940_310}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_940_312}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_940_315}
            />
          </View>
        </View>
        <View style={styles.View_940_318}>
          <Text style={styles.Text_940_318}>Favour Adamu</Text>
        </View>
        <View style={styles.View_940_319}>
          <Text style={styles.Text_940_319}>@fvouradamu</Text>
        </View>
        <View style={styles.View_940_320}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_940_321}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_922_1: {
    width: wp("136.271940222109%"),
    minWidth: wp("136.271940222109%"),
    height: hp("86.63260871595372%"),
    minHeight: hp("86.63260871595372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55.75393455615942%"),
    top: hp("59.15300546448088%"),
    backgroundColor: "rgba(0, 204, 173, 1)"
  },
  View_922_2: {
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
  View_922_3: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_4: {
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
  View_922_5: {
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
  ImageBackground_922_6: {
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
  View_922_7: {
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
  ImageBackground_922_8: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_922_12: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_922_17: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_922_18: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_922_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_19: {
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
  ImageBackground_922_20: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_922_22: {
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
  View_922_23: {
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
  Text_922_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_24: {
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
  Text_922_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_25: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("105.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.690821256038646%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_922_26: {
    width: wp("43.47826086956522%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_922_27: {
    width: wp("18.677281181593447%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.553604789402172%"),
    justifyContent: "flex-start"
  },
  Text_922_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_922_73: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000004944403337275284%"),
    minHeight: hp("0.000004944403337275284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.0327868852459%")
  },
  View_922_275: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("24.863387978142075%")
  },
  View_922_276: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 237, 199, 1)",
    borderColor: "rgba(249, 169, 2, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_922_277: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.71014492753623%"),
    top: hp("2.7322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_922_278: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_922_282: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.1857923497267784%")
  },
  View_922_283: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475379%"),
    justifyContent: "center"
  },
  Text_922_283: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_284: {
    width: wp("32.367149758454104%"),
    minWidth: wp("32.367149758454104%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_922_284: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_285: {
    width: wp("5.072471139511625%"),
    height: hp("3.034067414497417%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.743961352657003%")
  },
  ImageBackground_922_286: {
    width: wp("1.1689544299950345%"),
    height: hp("1.050807543791057%"),
    top: hp("1.0718173668032804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2538779438405854%")
  },
  ImageBackground_922_288: {
    width: wp("2.820666170350595%"),
    height: hp("0.9807388639189507%"),
    top: hp("2.05331604337432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.251754981884055%")
  },
  ImageBackground_922_290: {
    width: wp("1.4540951033145333%"),
    height: hp("1.025777827195131%"),
    top: hp("1.7874295594262364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_922_292: {
    width: wp("4.360137699882765%"),
    height: hp("0.8640610455163841%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5366376056763329%")
  },
  ImageBackground_922_294: {
    width: wp("3.3893615151373084%"),
    height: hp("1.440318816346549%"),
    top: hp("1.334101775956288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41692613979468973%")
  },
  ImageBackground_922_296: {
    width: wp("2.066544518954512%"),
    height: hp("1.7594433873077557%"),
    top: hp("0.2510779542349759%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.817288458635268%")
  },
  ImageBackground_922_298: {
    width: wp("2.479540322713806%"),
    height: hp("1.90911866276642%"),
    top: hp("0.47207191342213406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8132123716787447%")
  },
  View_922_301: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("36.33879781420765%")
  },
  View_922_302: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033817%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_922_302: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_922_303: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_922_304: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_940_0: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_940_1: {
    width: wp("90.33816425120773%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
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
  View_940_2: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_940_2: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_3: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376807%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_940_4: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_940_166: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("56.14754098360656%")
  },
  ImageBackground_940_167: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_940_168: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_940_168: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_169: {
    width: wp("3.381647579911826%"),
    height: hp("2.022711696520529%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.64251207729469%")
  },
  ImageBackground_940_170: {
    width: wp("0.7793029725263659%"),
    height: hp("0.7005383408134752%"),
    top: hp("0.7144782061133839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5025852958937165%")
  },
  ImageBackground_940_172: {
    width: wp("1.8804440751743776%"),
    height: hp("0.6538258875654043%"),
    top: hp("1.3688551272199447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.501169987922701%")
  },
  ImageBackground_940_174: {
    width: wp("0.9693966971503364%"),
    height: hp("0.6838518413689618%"),
    top: hp("1.1913528859289642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_940_176: {
    width: wp("2.9067580826616517%"),
    height: hp("0.5760406535831306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35771908967391397%")
  },
  ImageBackground_940_178: {
    width: wp("2.259574189854129%"),
    height: hp("0.9602125876588248%"),
    top: hp("0.8893789489412498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27799007397342734%")
  },
  ImageBackground_940_180: {
    width: wp("1.3776963459696747%"),
    height: hp("1.1729622147773784%"),
    top: hp("0.16756318306011053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8782316198671438%")
  },
  ImageBackground_940_182: {
    width: wp("1.653026843416518%"),
    height: hp("1.2727458620331977%"),
    top: hp("0.31478131403689247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5420629528985472%")
  },
  View_940_184: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.0054644808743163%"),
    justifyContent: "flex-end"
  },
  Text_940_184: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_185: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_940_186: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657786594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_940_189: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("72.54098360655738%")
  },
  ImageBackground_940_190: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_940_191: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_940_192: {
    width: wp("35.748792270531396%"),
    minWidth: wp("35.748792270531396%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_940_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_193: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-end"
  },
  Text_940_193: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_3: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_4: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657785883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_940_198: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("88.9344262295082%")
  },
  ImageBackground_940_199: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_940_200: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_940_200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_201: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-end"
  },
  Text_940_201: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_6: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_7: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_940_206: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("64.34426229508196%")
  },
  View_940_207: {
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
  View_940_208: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_940_209: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(140, 178, 165, 1)"
  },
  ImageBackground_940_210: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_940_211: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("1.205427659665304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319227430555554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_940_212: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_940_213: {
    width: wp("0.9893479554549507%"),
    height: hp("0.5548967038347422%"),
    top: hp("2.281780972506837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2098005359299524%")
  },
  ImageBackground_940_215: {
    width: wp("0.13624827067057294%"),
    height: hp("0.2137574993196081%"),
    top: hp("1.3178924393784115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1185980902777786%")
  },
  ImageBackground_940_216: {
    width: wp("6.763285024154589%"),
    height: hp("2.1215032358638575%"),
    top: hp("3.921525465334696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2218825483091793%")
  },
  ImageBackground_940_220: {
    width: wp("4.674218587829295%"),
    height: hp("2.230732297636772%"),
    top: hp("0.8684335510587573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5376471920289845%")
  },
  ImageBackground_940_224: {
    width: wp("4.1576353248190765%"),
    height: hp("1.6071999659303757%"),
    top: hp("2.105479422814213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9131755736714977%")
  },
  View_940_226: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("2.0268341231216027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.700355714070049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_940_227: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_940_229: {
    width: wp("0.46525646523001113%"),
    height: hp("0.247543398799792%"),
    top: hp("0.3652103611680104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30169648248792136%")
  },
  ImageBackground_940_232: {
    width: wp("0.4652570411202988%"),
    height: hp("0.247543398799792%"),
    top: hp("0.32058465676227854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5496442859299506%")
  },
  View_940_235: {
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
  Text_940_235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_236: {
    width: wp("3.381647579911826%"),
    height: hp("2.022711696520529%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%")
  },
  ImageBackground_940_237: {
    width: wp("0.7793029725263659%"),
    height: hp("0.7005383408134752%"),
    top: hp("0.7144782061133981%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5025852958937165%")
  },
  ImageBackground_940_239: {
    width: wp("1.8804440751743776%"),
    height: hp("0.6538258875654043%"),
    top: hp("1.368855127219959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.501169987922701%")
  },
  ImageBackground_940_241: {
    width: wp("0.9693966971503364%"),
    height: hp("0.6838518413689618%"),
    top: hp("1.1913528859289642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_940_243: {
    width: wp("2.9067580826616517%"),
    height: hp("0.5760406535831306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35771908967391397%")
  },
  ImageBackground_940_245: {
    width: wp("2.259574189854129%"),
    height: hp("0.9602125876588248%"),
    top: hp("0.8893789489412569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27799007397342734%")
  },
  ImageBackground_940_247: {
    width: wp("1.3776963459696747%"),
    height: hp("1.1729622147773784%"),
    top: hp("0.16756318306011053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.878231619867151%")
  },
  ImageBackground_940_249: {
    width: wp("1.653026843416518%"),
    height: hp("1.2727458620331977%"),
    top: hp("0.31478131403689247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5420629528985472%")
  },
  View_940_251: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-end"
  },
  Text_940_251: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_252: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_940_253: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657788726%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_940_255: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("80.73770491803278%")
  },
  ImageBackground_940_256: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_940_284: {
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
  Text_940_284: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_285: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-end"
  },
  Text_940_285: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_286: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_940_287: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_940_289: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("97.1311475409836%")
  },
  View_940_290: {
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
  View_940_291: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_940_292: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(140, 178, 165, 1)"
  },
  ImageBackground_940_293: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_940_294: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("1.205427659665304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319227430555554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_940_295: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_940_296: {
    width: wp("0.9893479554549507%"),
    height: hp("0.5548967038347422%"),
    top: hp("2.281780972506823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2098005359299524%")
  },
  ImageBackground_940_298: {
    width: wp("0.13624827067057294%"),
    height: hp("0.2137574993196081%"),
    top: hp("1.3178924393784115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1185980902777786%")
  },
  ImageBackground_940_299: {
    width: wp("6.763285024154589%"),
    height: hp("2.1215032358638575%"),
    top: hp("3.921525465334696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2218825483091793%")
  },
  ImageBackground_940_303: {
    width: wp("4.674218587829295%"),
    height: hp("2.230732297636772%"),
    top: hp("0.8684335510587431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5376471920289845%")
  },
  ImageBackground_940_307: {
    width: wp("4.1576353248190765%"),
    height: hp("1.6071999659303757%"),
    top: hp("2.105479422814213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9131755736714977%")
  },
  View_940_309: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("2.0268341231215885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.700355714070049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_940_310: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_940_312: {
    width: wp("0.46525646523001113%"),
    height: hp("0.247543398799792%"),
    top: hp("0.36521036116802463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30169648248792136%")
  },
  ImageBackground_940_315: {
    width: wp("0.4652570411202988%"),
    height: hp("0.247543398799792%"),
    top: hp("0.32058465676229275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5496442859299506%")
  },
  View_940_318: {
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
  Text_940_318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_319: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-end"
  },
  Text_940_319: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_320: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_940_321: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
