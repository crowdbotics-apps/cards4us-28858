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
      <View style={styles.View_935_1} />
      <View style={styles.View_935_2} />
      <View style={styles.View_935_3}>
        <View style={styles.View_935_4}>
          <View style={styles.View_935_5} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_935_6}
          />
          <View style={styles.View_935_7} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_935_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_935_12}
        />
        <View style={styles.View_935_17}>
          <View style={styles.View_935_18}>
            <Text style={styles.Text_935_18}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_935_19}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_935_20}
        />
        <View style={styles.View_935_22}>
          <View style={styles.View_935_23}>
            <Text style={styles.Text_935_23}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_935_24}>
        <Text style={styles.Text_935_24}>Send NaijCoin</Text>
      </View>
      <View style={styles.View_939_2097}>
        <View style={styles.View_939_2098}>
          <Text style={styles.Text_939_2098}>
            Using Email address or mobile number
          </Text>
        </View>
        <View style={styles.View_939_2099}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_939_2100}
          />
        </View>
      </View>
      <View style={styles.View_939_2102}>
        <View style={styles.View_939_2103}>
          <Text style={styles.Text_939_2103}>Using QR code</Text>
        </View>
        <View style={styles.View_939_2104}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_939_2105}
          />
        </View>
      </View>
      <View style={styles.View_939_2107}>
        <View style={styles.View_939_2108}>
          <Text style={styles.Text_939_2108}>as Gift Card</Text>
        </View>
        <View style={styles.View_939_2109}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_939_2110}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/850d/40a7/594bfea5714716bdb0c46ec44955abd0"
        }}
        style={styles.ImageBackground_935_28}
      />
      <View style={styles.View_935_29}>
        <View style={styles.View_935_30} />
        <View style={styles.View_935_31}>
          <Text style={styles.Text_935_31}>Search</Text>
        </View>
        <View style={styles.View_935_32}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b98/8534/98842f80158530fd186edf22b7d9644f"
            }}
            style={styles.ImageBackground_935_33}
          />
        </View>
      </View>
      <View style={styles.View_935_37}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
          }}
          style={styles.ImageBackground_935_38}
        />
        <View style={styles.View_935_39}>
          <Text style={styles.Text_935_39}>Kachi Ibeji</Text>
        </View>
        <View style={styles.View_940_134}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e291/00ad/68825776c09bb837bdb0ce0fc6c06315"
            }}
            style={styles.ImageBackground_940_135}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce5e/7090/ad9ef71a9d60fc5fc8dd297ef61d9408"
            }}
            style={styles.ImageBackground_940_137}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/de9a/3d70a5e4d18762f25d15b5e655cc384d"
            }}
            style={styles.ImageBackground_940_139}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a984/218a/e247181ea655ea15001a3267dd885f3d"
            }}
            style={styles.ImageBackground_940_141}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47ad/2aa1/b171a17497d7f17008ff7929eb983681"
            }}
            style={styles.ImageBackground_940_143}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911b/905c/04b4e3b1f2aa2b0e4263964af2d8303d"
            }}
            style={styles.ImageBackground_940_145}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7968/3d3c/bc6d0ad276474c92fc3f891c4c4126b1"
            }}
            style={styles.ImageBackground_940_147}
          />
        </View>
        <View style={styles.View_939_2112}>
          <Text style={styles.Text_939_2112}>@kachiibeji44</Text>
        </View>
        <View style={styles.View_935_40}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b90c/4235/7562363566bff08908068a0900f204a6"
            }}
            style={styles.ImageBackground_935_41}
          />
        </View>
      </View>
      <View style={styles.View_939_2114}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
          }}
          style={styles.ImageBackground_939_2115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e26b/7f04/3b611c388112ded7ebd7923e94bd05d8"
          }}
          style={styles.ImageBackground_940_165}
        />
        <View style={styles.View_939_2116}>
          <Text style={styles.Text_939_2116}>Muhammed Ibrahim</Text>
        </View>
        <View style={styles.View_939_2117}>
          <Text style={styles.Text_939_2117}>@ibrahimM</Text>
        </View>
        <View style={styles.View_946_2091}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_946_2092}
          />
        </View>
      </View>
      <View style={styles.View_939_2156}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
          }}
          style={styles.ImageBackground_939_2157}
        />
        <View style={styles.View_939_2158}>
          <Text style={styles.Text_939_2158}>Kachi Ibeji</Text>
        </View>
        <View style={styles.View_939_2159}>
          <Text style={styles.Text_939_2159}>@kachiibeji44</Text>
        </View>
        <View style={styles.View_946_2094}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_946_2095}
          />
        </View>
      </View>
      <View style={styles.View_935_44}>
        <View style={styles.View_935_45}>
          <View style={styles.View_935_46}>
            <View style={styles.View_935_47} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae2c/80f7/aeccf3eacc80a38c6b76d099f629782d"
              }}
              style={styles.ImageBackground_935_48}
            />
          </View>
          <View style={styles.View_935_49}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b45d/7ce9/f6f13995e1503107d165f6bc27ed7d1a"
              }}
              style={styles.ImageBackground_935_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a9/542f/66099c51345a1f80ecee6d7a4718638a"
              }}
              style={styles.ImageBackground_935_51}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ad/1173/d1297ae99479e4c32e0e4c178fdf435c"
              }}
              style={styles.ImageBackground_935_53}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7b/cbec/9cb3616baf9c40a2b511f6dbba4d0961"
            }}
            style={styles.ImageBackground_935_54}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0b/1f6d/d60c5b436c9278950faeb99b694b1483"
            }}
            style={styles.ImageBackground_935_58}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a4/f190/a4c2a0829da395aaeba8c4c2faa6dbd6"
            }}
            style={styles.ImageBackground_935_62}
          />
          <View style={styles.View_935_64}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd8c/6dd0/d79a32f86f41c8856b505f4489e1f61f"
              }}
              style={styles.ImageBackground_935_65}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_935_67}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_935_70}
            />
          </View>
        </View>
        <View style={styles.View_935_73}>
          <Text style={styles.Text_935_73}>Favour Adamu</Text>
        </View>
        <View style={styles.View_940_149}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e291/00ad/68825776c09bb837bdb0ce0fc6c06315"
            }}
            style={styles.ImageBackground_940_150}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce5e/7090/ad9ef71a9d60fc5fc8dd297ef61d9408"
            }}
            style={styles.ImageBackground_940_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/de9a/3d70a5e4d18762f25d15b5e655cc384d"
            }}
            style={styles.ImageBackground_940_154}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a984/218a/e247181ea655ea15001a3267dd885f3d"
            }}
            style={styles.ImageBackground_940_156}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47ad/2aa1/b171a17497d7f17008ff7929eb983681"
            }}
            style={styles.ImageBackground_940_158}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911b/905c/04b4e3b1f2aa2b0e4263964af2d8303d"
            }}
            style={styles.ImageBackground_940_160}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7968/3d3c/bc6d0ad276474c92fc3f891c4c4126b1"
            }}
            style={styles.ImageBackground_940_162}
          />
        </View>
        <View style={styles.View_939_2113}>
          <Text style={styles.Text_939_2113}>@thefavouramu</Text>
        </View>
        <View style={styles.View_935_74}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_935_75}
          />
        </View>
      </View>
      <View style={styles.View_939_2122}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f363/f21c/b37defd1f888a0fdc9e221ae0b33cd6e"
          }}
          style={styles.ImageBackground_939_2123}
        />
        <View style={styles.View_939_2151}>
          <Text style={styles.Text_939_2151}>Favour Adamu</Text>
        </View>
        <View style={styles.View_939_2152}>
          <Text style={styles.Text_939_2152}>@fvouradamu</Text>
        </View>
        <View style={styles.View_939_2153}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_939_2154}
          />
        </View>
      </View>
      <View style={styles.View_939_2164}>
        <View style={styles.View_939_2165}>
          <View style={styles.View_939_2166}>
            <View style={styles.View_939_2167} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae2c/80f7/aeccf3eacc80a38c6b76d099f629782d"
              }}
              style={styles.ImageBackground_939_2168}
            />
          </View>
          <View style={styles.View_939_2169}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b45d/7ce9/f6f13995e1503107d165f6bc27ed7d1a"
              }}
              style={styles.ImageBackground_939_2170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a9/542f/66099c51345a1f80ecee6d7a4718638a"
              }}
              style={styles.ImageBackground_939_2171}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ad/1173/d1297ae99479e4c32e0e4c178fdf435c"
              }}
              style={styles.ImageBackground_939_2173}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7b/cbec/9cb3616baf9c40a2b511f6dbba4d0961"
            }}
            style={styles.ImageBackground_939_2174}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0b/1f6d/d60c5b436c9278950faeb99b694b1483"
            }}
            style={styles.ImageBackground_939_2178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a4/f190/a4c2a0829da395aaeba8c4c2faa6dbd6"
            }}
            style={styles.ImageBackground_939_2182}
          />
          <View style={styles.View_939_2184}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd8c/6dd0/d79a32f86f41c8856b505f4489e1f61f"
              }}
              style={styles.ImageBackground_939_2185}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_939_2187}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_939_2190}
            />
          </View>
        </View>
        <View style={styles.View_939_2193}>
          <Text style={styles.Text_939_2193}>Favour Adamu</Text>
        </View>
        <View style={styles.View_939_2194}>
          <Text style={styles.Text_939_2194}>@fvouradamu</Text>
        </View>
        <View style={styles.View_939_2195}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_939_2196}
          />
        </View>
      </View>
      <View style={styles.View_1180_9}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06b9/f0d9/45463b90cbd27838cd4d661d4110978c"
          }}
          style={styles.ImageBackground_1180_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b707/a32d/62a5a4de0d61c54ba29aa1ade2546de6"
          }}
          style={styles.ImageBackground_1180_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
          }}
          style={styles.ImageBackground_1180_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e4a/d2c7/985f4969d23b7150ab25aff9c60573eb"
          }}
          style={styles.ImageBackground_1180_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7415/1d5c/548eac927ef2ea5f152357aecc0c2c4e"
          }}
          style={styles.ImageBackground_1180_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/300d/4c59/45f2e681668aee100f23067d5a72e457"
          }}
          style={styles.ImageBackground_1180_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60b5/5d28/1bd2e425eba715c05d46c0d442dd5f26"
          }}
          style={styles.ImageBackground_1180_22}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_935_1: {
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
  View_935_2: {
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
  View_935_3: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_935_4: {
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
  View_935_5: {
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
  ImageBackground_935_6: {
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
  View_935_7: {
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
  ImageBackground_935_8: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675637167008197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_935_12: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413456817793716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_935_17: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_935_18: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_935_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_935_19: {
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
  ImageBackground_935_20: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_935_22: {
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
  View_935_23: {
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
  Text_935_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_935_24: {
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
  Text_935_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2097: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("23.770491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_939_2098: {
    width: wp("58.454106280193244%"),
    minWidth: wp("58.454106280193244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869563%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_939_2098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2099: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835749%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_939_2100: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657786594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20132755887681064%")
  },
  View_939_2102: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("45.3551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_939_2103: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869563%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_939_2103: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2104: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835749%"),
    top: hp("2.4590163934426172%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_939_2105: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20132755887681064%")
  },
  View_939_2107: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("34.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_939_2108: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869563%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_939_2108: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2109: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835749%"),
    top: hp("2.4590163934426315%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_939_2110: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657786594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20132755887681064%")
  },
  ImageBackground_935_28: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000004944403337275284%"),
    minHeight: hp("0.000004944403337275284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57.786885245901644%")
  },
  View_935_29: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("61.885245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_935_30: {
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
  View_935_31: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_935_31: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_935_32: {
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
  ImageBackground_935_33: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_935_37: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("71.17486338797814%")
  },
  ImageBackground_935_38: {
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
  View_935_39: {
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
  Text_935_39: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_134: {
    width: wp("3.381647579911826%"),
    height: hp("2.022711696520529%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.64251207729469%")
  },
  ImageBackground_940_135: {
    width: wp("0.7793029725263659%"),
    height: hp("0.7005383408134752%"),
    top: hp("0.7144782061133839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5025852958937165%")
  },
  ImageBackground_940_137: {
    width: wp("1.8804440751743776%"),
    height: hp("0.6538258875654043%"),
    top: hp("1.3688551272199447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.501169987922701%")
  },
  ImageBackground_940_139: {
    width: wp("0.9693966971503364%"),
    height: hp("0.6838518413689618%"),
    top: hp("1.1913528859289642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_940_141: {
    width: wp("2.9067580826616517%"),
    height: hp("0.5760406535831306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35771908967391397%")
  },
  ImageBackground_940_143: {
    width: wp("2.259574189854129%"),
    height: hp("0.9602125876588248%"),
    top: hp("0.8893789489412569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27799007397342734%")
  },
  ImageBackground_940_145: {
    width: wp("1.3776963459696747%"),
    height: hp("1.1729622147773784%"),
    top: hp("0.16756318306011053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8782316198671438%")
  },
  ImageBackground_940_147: {
    width: wp("1.653026843416518%"),
    height: hp("1.2727458620331977%"),
    top: hp("0.31478131403687826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5420629528985472%")
  },
  View_939_2112: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "flex-end"
  },
  Text_939_2112: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_935_40: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_935_41: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_939_2114: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("87.56830601092896%")
  },
  ImageBackground_939_2115: {
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
  ImageBackground_940_165: {
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
  View_939_2116: {
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
  Text_939_2116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2117: {
    width: wp("14.975845410628018%"),
    minWidth: wp("14.975845410628018%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-end"
  },
  Text_939_2117: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_946_2091: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_946_2092: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657785883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_939_2156: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("103.9617486338798%")
  },
  ImageBackground_939_2157: {
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
  View_939_2158: {
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
  Text_939_2158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2159: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-end"
  },
  Text_939_2159: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_946_2094: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_946_2095: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657785883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_935_44: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("79.37158469945356%")
  },
  View_935_45: {
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
  View_935_46: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_935_47: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(140, 178, 165, 1)"
  },
  ImageBackground_935_48: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_935_49: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("1.2054276596652898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319227430555554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_935_50: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_935_51: {
    width: wp("0.9893479554549507%"),
    height: hp("0.5548967038347422%"),
    top: hp("2.281780972506823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2098005359299524%")
  },
  ImageBackground_935_53: {
    width: wp("0.13624827067057294%"),
    height: hp("0.2137574993196081%"),
    top: hp("1.3178924393784115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1185980902777786%")
  },
  ImageBackground_935_54: {
    width: wp("6.763285024154589%"),
    height: hp("2.1215032358638575%"),
    top: hp("3.921525465334696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2218825483091793%")
  },
  ImageBackground_935_58: {
    width: wp("4.674218587829295%"),
    height: hp("2.230732297636772%"),
    top: hp("0.8684335510587289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5376471920289845%")
  },
  ImageBackground_935_62: {
    width: wp("4.1576353248190765%"),
    height: hp("1.6071999659303757%"),
    top: hp("2.1054794228141986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9131755736714977%")
  },
  View_935_64: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("2.0268341231215743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.700355714070049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_935_65: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_935_67: {
    width: wp("0.46525646523001113%"),
    height: hp("0.247543398799792%"),
    top: hp("0.36521036116802463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30169648248792136%")
  },
  ImageBackground_935_70: {
    width: wp("0.4652570411202988%"),
    height: hp("0.247543398799792%"),
    top: hp("0.32058465676229275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5496442859299506%")
  },
  View_935_73: {
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
  Text_935_73: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_940_149: {
    width: wp("3.381647579911826%"),
    height: hp("2.022711696520529%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%")
  },
  ImageBackground_940_150: {
    width: wp("0.7793029725263659%"),
    height: hp("0.7005383408134752%"),
    top: hp("0.7144782061133839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5025852958937165%")
  },
  ImageBackground_940_152: {
    width: wp("1.8804440751743776%"),
    height: hp("0.6538258875654043%"),
    top: hp("1.3688551272199447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.501169987922701%")
  },
  ImageBackground_940_154: {
    width: wp("0.9693966971503364%"),
    height: hp("0.6838518413689618%"),
    top: hp("1.1913528859289642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_940_156: {
    width: wp("2.9067580826616517%"),
    height: hp("0.5760406535831306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35771908967391397%")
  },
  ImageBackground_940_158: {
    width: wp("2.259574189854129%"),
    height: hp("0.9602125876588248%"),
    top: hp("0.8893789489412569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27799007397342734%")
  },
  ImageBackground_940_160: {
    width: wp("1.3776963459696747%"),
    height: hp("1.1729622147773784%"),
    top: hp("0.16756318306011053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.878231619867151%")
  },
  ImageBackground_940_162: {
    width: wp("1.653026843416518%"),
    height: hp("1.2727458620331977%"),
    top: hp("0.31478131403689247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5420629528985472%")
  },
  View_939_2113: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-end"
  },
  Text_939_2113: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_935_74: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_935_75: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657785883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_939_2122: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("95.76502732240438%")
  },
  ImageBackground_939_2123: {
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
  View_939_2151: {
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
  Text_939_2151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2152: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-end"
  },
  Text_939_2152: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2153: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_939_2154: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_939_2164: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("112.1584699453552%")
  },
  View_939_2165: {
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
  View_939_2166: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_939_2167: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(140, 178, 165, 1)"
  },
  ImageBackground_939_2168: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_939_2169: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("1.205427659665304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319227430555554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_939_2170: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_939_2171: {
    width: wp("0.9893479554549507%"),
    height: hp("0.5548967038347422%"),
    top: hp("2.281780972506823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2098005359299524%")
  },
  ImageBackground_939_2173: {
    width: wp("0.13624827067057294%"),
    height: hp("0.2137574993196081%"),
    top: hp("1.3178924393784115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1185980902777786%")
  },
  ImageBackground_939_2174: {
    width: wp("6.763285024154589%"),
    height: hp("2.1215032358638575%"),
    top: hp("3.921525465334696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2218825483091793%")
  },
  ImageBackground_939_2178: {
    width: wp("4.674218587829295%"),
    height: hp("2.230732297636772%"),
    top: hp("0.8684335510587431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5376471920289845%")
  },
  ImageBackground_939_2182: {
    width: wp("4.1576353248190765%"),
    height: hp("1.6071999659303757%"),
    top: hp("2.1054794228141986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9131755736714977%")
  },
  View_939_2184: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("2.0268341231215885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.700355714070049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_939_2185: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_939_2187: {
    width: wp("0.46525646523001113%"),
    height: hp("0.247543398799792%"),
    top: hp("0.36521036116802463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30169648248792136%")
  },
  ImageBackground_939_2190: {
    width: wp("0.4652570411202988%"),
    height: hp("0.247543398799792%"),
    top: hp("0.32058465676229275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5496442859299506%")
  },
  View_939_2193: {
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
  Text_939_2193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2194: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-end"
  },
  Text_939_2194: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_939_2195: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_939_2196: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11386558657785883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_1180_9: {
    width: wp("4.589406534093589%"),
    height: hp("2.745062927079331%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.96618357487923%")
  },
  ImageBackground_1180_10: {
    width: wp("1.057623895470071%"),
    height: hp("0.9507291955374629%"),
    top: hp("0.9696251707650276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0392229015700494%")
  },
  ImageBackground_1180_12: {
    width: wp("2.5520274028685934%"),
    height: hp("0.8873338256377339%"),
    top: hp("1.8577367230191264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.037394795440818%")
  },
  ImageBackground_1180_14: {
    width: wp("1.315607886383499%"),
    height: hp("0.9280832738824231%"),
    top: hp("1.6168646473702175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_16: {
    width: wp("3.9448802597856756%"),
    height: hp("0.7817682672719487%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48556857638888573%")
  },
  ImageBackground_1180_18: {
    width: wp("3.0665602660985383%"),
    height: hp("1.3031437097351408%"),
    top: hp("1.2070285817964468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37717957427535254%")
  },
  ImageBackground_1180_20: {
    width: wp("1.8697279087011365%"),
    height: hp("1.5918748626292076%"),
    top: hp("0.2273976477117472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.54902862696256%")
  },
  ImageBackground_1180_22: {
    width: wp("2.2433902906334917%"),
    height: hp("1.7272953127251296%"),
    top: hp("0.42717938866120164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.735724260265691%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
