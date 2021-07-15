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
      <View style={styles.View_1180_346} />
      <View style={styles.View_1180_347} />
      <View style={styles.View_1180_348}>
        <View style={styles.View_1180_349}>
          <View style={styles.View_1180_350} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1180_351}
          />
          <View style={styles.View_1180_352} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1180_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3140/3364/dcb34336c22cf6768bf19015ef21733f"
          }}
          style={styles.ImageBackground_1180_357}
        />
        <View style={styles.View_1180_362}>
          <View style={styles.View_1180_363}>
            <Text style={styles.Text_1180_363}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1180_364}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_1180_365}
        />
        <View style={styles.View_1180_367}>
          <View style={styles.View_1180_368}>
            <Text style={styles.Text_1180_368}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1180_369}>
        <Text style={styles.Text_1180_369}>Send money</Text>
      </View>
      <View style={styles.View_1180_370}>
        <View style={styles.View_1180_371}>
          <Text style={styles.Text_1180_371}>
            Using Email address or mobile number
          </Text>
        </View>
        <View style={styles.View_1180_372}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_373}
          />
        </View>
      </View>
      <View style={styles.View_1180_375}>
        <View style={styles.View_1180_376}>
          <Text style={styles.Text_1180_376}>Using QR code</Text>
        </View>
        <View style={styles.View_1180_377}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_378}
          />
        </View>
      </View>
      <View style={styles.View_1180_380}>
        <View style={styles.View_1180_381}>
          <Text style={styles.Text_1180_381}>as Gift Card</Text>
        </View>
        <View style={styles.View_1180_382}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_383}
          />
        </View>
      </View>
      <View style={styles.View_1180_385}>
        <View style={styles.View_1180_386} />
        <View style={styles.View_1180_387}>
          <Text style={styles.Text_1180_387}>Search</Text>
        </View>
        <View style={styles.View_1180_388}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b98/8534/98842f80158530fd186edf22b7d9644f"
            }}
            style={styles.ImageBackground_1180_389}
          />
        </View>
      </View>
      <View style={styles.View_1180_393}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
          }}
          style={styles.ImageBackground_1180_394}
        />
        <View style={styles.View_1180_395}>
          <Text style={styles.Text_1180_395}>Kachi Ibeji</Text>
        </View>
        <View style={styles.View_1180_396}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e291/00ad/68825776c09bb837bdb0ce0fc6c06315"
            }}
            style={styles.ImageBackground_1180_397}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce5e/7090/ad9ef71a9d60fc5fc8dd297ef61d9408"
            }}
            style={styles.ImageBackground_1180_399}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/de9a/3d70a5e4d18762f25d15b5e655cc384d"
            }}
            style={styles.ImageBackground_1180_401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a984/218a/e247181ea655ea15001a3267dd885f3d"
            }}
            style={styles.ImageBackground_1180_403}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47ad/2aa1/b171a17497d7f17008ff7929eb983681"
            }}
            style={styles.ImageBackground_1180_405}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911b/905c/04b4e3b1f2aa2b0e4263964af2d8303d"
            }}
            style={styles.ImageBackground_1180_407}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7968/3d3c/bc6d0ad276474c92fc3f891c4c4126b1"
            }}
            style={styles.ImageBackground_1180_409}
          />
        </View>
        <View style={styles.View_1180_411}>
          <Text style={styles.Text_1180_411}>@kachiibeji44</Text>
        </View>
        <View style={styles.View_1180_412}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b90c/4235/7562363566bff08908068a0900f204a6"
            }}
            style={styles.ImageBackground_1180_413}
          />
        </View>
      </View>
      <View style={styles.View_1180_416}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
          }}
          style={styles.ImageBackground_1180_417}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e26b/7f04/3b611c388112ded7ebd7923e94bd05d8"
          }}
          style={styles.ImageBackground_1180_418}
        />
        <View style={styles.View_1180_419}>
          <Text style={styles.Text_1180_419}>Muhammed Ibrahim</Text>
        </View>
        <View style={styles.View_1180_420}>
          <Text style={styles.Text_1180_420}>@muhIbrahim</Text>
        </View>
        <View style={styles.View_1180_421}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_422}
          />
        </View>
      </View>
      <View style={styles.View_1180_424}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
          }}
          style={styles.ImageBackground_1180_425}
        />
        <View style={styles.View_1180_426}>
          <Text style={styles.Text_1180_426}>Kachi Ibeji</Text>
        </View>
        <View style={styles.View_1180_427}>
          <Text style={styles.Text_1180_427}>+2347035647893</Text>
        </View>
        <View style={styles.View_1180_428}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_429}
          />
        </View>
      </View>
      <View style={styles.View_1180_431}>
        <View style={styles.View_1180_432}>
          <View style={styles.View_1180_433}>
            <View style={styles.View_1180_434} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae2c/80f7/aeccf3eacc80a38c6b76d099f629782d"
              }}
              style={styles.ImageBackground_1180_435}
            />
          </View>
          <View style={styles.View_1180_436}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b45d/7ce9/f6f13995e1503107d165f6bc27ed7d1a"
              }}
              style={styles.ImageBackground_1180_437}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a9/542f/66099c51345a1f80ecee6d7a4718638a"
              }}
              style={styles.ImageBackground_1180_438}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ad/1173/d1297ae99479e4c32e0e4c178fdf435c"
              }}
              style={styles.ImageBackground_1180_440}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7b/cbec/9cb3616baf9c40a2b511f6dbba4d0961"
            }}
            style={styles.ImageBackground_1180_441}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a61/8e15/6660807d3a19c92a59032d6792d1fae8"
            }}
            style={styles.ImageBackground_1180_445}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a4/f190/a4c2a0829da395aaeba8c4c2faa6dbd6"
            }}
            style={styles.ImageBackground_1180_449}
          />
          <View style={styles.View_1180_451}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd8c/6dd0/d79a32f86f41c8856b505f4489e1f61f"
              }}
              style={styles.ImageBackground_1180_452}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_1180_454}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_1180_457}
            />
          </View>
        </View>
        <View style={styles.View_1180_460}>
          <Text style={styles.Text_1180_460}>Favour Adamu</Text>
        </View>
        <View style={styles.View_1180_461}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e291/00ad/68825776c09bb837bdb0ce0fc6c06315"
            }}
            style={styles.ImageBackground_1180_462}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce5e/7090/ad9ef71a9d60fc5fc8dd297ef61d9408"
            }}
            style={styles.ImageBackground_1180_464}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/de9a/3d70a5e4d18762f25d15b5e655cc384d"
            }}
            style={styles.ImageBackground_1180_466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a984/218a/e247181ea655ea15001a3267dd885f3d"
            }}
            style={styles.ImageBackground_1180_468}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47ad/2aa1/b171a17497d7f17008ff7929eb983681"
            }}
            style={styles.ImageBackground_1180_470}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911b/905c/04b4e3b1f2aa2b0e4263964af2d8303d"
            }}
            style={styles.ImageBackground_1180_472}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7968/3d3c/bc6d0ad276474c92fc3f891c4c4126b1"
            }}
            style={styles.ImageBackground_1180_474}
          />
        </View>
        <View style={styles.View_1180_476}>
          <Text style={styles.Text_1180_476}>@thefavouramu</Text>
        </View>
        <View style={styles.View_1180_477}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_478}
          />
        </View>
      </View>
      <View style={styles.View_1180_480}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f363/f21c/b37defd1f888a0fdc9e221ae0b33cd6e"
          }}
          style={styles.ImageBackground_1180_481}
        />
        <View style={styles.View_1180_509}>
          <Text style={styles.Text_1180_509}>Favour Adamu</Text>
        </View>
        <View style={styles.View_1180_510}>
          <Text style={styles.Text_1180_510}>@favradamu</Text>
        </View>
        <View style={styles.View_1180_511}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_512}
          />
        </View>
      </View>
      <View style={styles.View_1180_514}>
        <View style={styles.View_1180_515}>
          <View style={styles.View_1180_516}>
            <View style={styles.View_1180_517} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae2c/80f7/aeccf3eacc80a38c6b76d099f629782d"
              }}
              style={styles.ImageBackground_1180_518}
            />
          </View>
          <View style={styles.View_1180_519}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b45d/7ce9/f6f13995e1503107d165f6bc27ed7d1a"
              }}
              style={styles.ImageBackground_1180_520}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a9/542f/66099c51345a1f80ecee6d7a4718638a"
              }}
              style={styles.ImageBackground_1180_521}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ad/1173/d1297ae99479e4c32e0e4c178fdf435c"
              }}
              style={styles.ImageBackground_1180_523}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d7b/cbec/9cb3616baf9c40a2b511f6dbba4d0961"
            }}
            style={styles.ImageBackground_1180_524}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0b/1f6d/d60c5b436c9278950faeb99b694b1483"
            }}
            style={styles.ImageBackground_1180_528}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a4/f190/a4c2a0829da395aaeba8c4c2faa6dbd6"
            }}
            style={styles.ImageBackground_1180_532}
          />
          <View style={styles.View_1180_534}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd8c/6dd0/d79a32f86f41c8856b505f4489e1f61f"
              }}
              style={styles.ImageBackground_1180_535}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_1180_537}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/5687/0efaa4f00eb5b886bcb43f291cc6abd8"
              }}
              style={styles.ImageBackground_1180_540}
            />
          </View>
        </View>
        <View style={styles.View_1180_543}>
          <Text style={styles.Text_1180_543}>Favour Adamu</Text>
        </View>
        <View style={styles.View_1180_544}>
          <Text style={styles.Text_1180_544}>+2347035647893</Text>
        </View>
        <View style={styles.View_1180_545}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c45/7cda/fc1406aa69533570b77be18c5450b849"
            }}
            style={styles.ImageBackground_1180_546}
          />
        </View>
      </View>
      <View style={styles.View_1180_548}>
        <View style={styles.View_1180_549}>
          <Text style={styles.Text_1180_549}>Send Again</Text>
        </View>
        <View style={styles.View_1180_550}>
          <View style={styles.View_1180_551}>
            <View style={styles.View_1180_552}>
              <Text style={styles.Text_1180_552}>Kachi Ibeji</Text>
            </View>
            <View style={styles.View_1180_553}>
              <Text style={styles.Text_1180_553}>@kachiibeji44</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/1fb5/dea4db65d3924fc26aeb4534fb8c917c"
              }}
              style={styles.ImageBackground_1180_554}
            />
          </View>
          <View style={styles.View_1180_555}>
            <View style={styles.View_1180_556}>
              <Text style={styles.Text_1180_556}>Kachi Ibeji</Text>
            </View>
            <View style={styles.View_1180_557}>
              <Text style={styles.Text_1180_557}>@kachiibeji44</Text>
            </View>
            <View style={styles.View_1180_558}>
              <View style={styles.View_1180_559}>
                <View style={styles.View_1180_560} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0794/9ae4/9c2ee5924b249f8c7446899fb897db0b"
                  }}
                  style={styles.ImageBackground_1180_561}
                />
              </View>
              <View style={styles.View_1180_562}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4aa/0800/a851bfdb583e5eec11c3fb3951a17775"
                  }}
                  style={styles.ImageBackground_1180_563}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf56/ca63/7165d359edc5d640898501355b8510bc"
                  }}
                  style={styles.ImageBackground_1180_564}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c73a/9a87/5d76a20ae35da8c5b76921a830612283"
                  }}
                  style={styles.ImageBackground_1180_566}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4cc/753c/0429e57ecbd354595072baf890bbe139"
                }}
                style={styles.ImageBackground_1180_567}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31f9/6d88/4b4b53149eaa6b024fc7015e07c09c11"
                }}
                style={styles.ImageBackground_1180_571}
              />
              <View style={styles.View_1180_575} />
              <View style={styles.View_1180_576}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09a6/0755/8cb0b6076717b3163385435e4b181653"
                  }}
                  style={styles.ImageBackground_1180_577}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d9/6cf6/330abf600519939399a0cda2de766cdb"
                  }}
                  style={styles.ImageBackground_1180_578}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc90/4987/8202fde27fdfffcf835e0bc8c885fb63"
                  }}
                  style={styles.ImageBackground_1180_579}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc90/4987/8202fde27fdfffcf835e0bc8c885fb63"
                  }}
                  style={styles.ImageBackground_1180_582}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1180_585}>
            <View style={styles.View_1180_586}>
              <Text style={styles.Text_1180_586}>Kachi Ibeji</Text>
            </View>
            <View style={styles.View_1180_587}>
              <Text style={styles.Text_1180_587}>@kachiibeji44</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e7d/6dc2/af3d29bfaa2b7a220bab6a91aba2e2fe"
              }}
              style={styles.ImageBackground_1180_588}
            />
          </View>
          <View style={styles.View_1180_589}>
            <View style={styles.View_1180_590}>
              <Text style={styles.Text_1180_590}>Kachi Ibeji</Text>
            </View>
            <View style={styles.View_1180_591}>
              <Text style={styles.Text_1180_591}>@kachiibeji44</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e7d/6dc2/af3d29bfaa2b7a220bab6a91aba2e2fe"
              }}
              style={styles.ImageBackground_1180_592}
            />
          </View>
          <View style={styles.View_1180_593}>
            <View style={styles.View_1180_594}>
              <Text style={styles.Text_1180_594}>Kachi Ibeji</Text>
            </View>
            <View style={styles.View_1180_595}>
              <Text style={styles.Text_1180_595}>@kachiibeji44</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d75/e478/229cc8cf70f5430d55b79f819e9ee150"
              }}
              style={styles.ImageBackground_1180_596}
            />
          </View>
          <View style={styles.View_1180_597}>
            <View style={styles.View_1180_598}>
              <Text style={styles.Text_1180_598}>Kachi Ibeji</Text>
            </View>
            <View style={styles.View_1180_599}>
              <Text style={styles.Text_1180_599}>@kachiibeji44</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e7d/6dc2/af3d29bfaa2b7a220bab6a91aba2e2fe"
              }}
              style={styles.ImageBackground_1180_600}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/850d/40a7/594bfea5714716bdb0c46ec44955abd0"
        }}
        style={styles.ImageBackground_1180_601}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1180_346: {
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
  View_1180_347: {
    width: wp("63.55769945227582%"),
    minWidth: wp("63.55769945227582%"),
    height: hp("37.483511335862794%"),
    minHeight: hp("37.483511335862794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22216325105676%"),
    top: hp("28.004664019808743%"),
    backgroundColor: "rgba(249, 169, 2, 1)"
  },
  View_1180_348: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_349: {
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
  View_1180_350: {
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
  ImageBackground_1180_351: {
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
  View_1180_352: {
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
  ImageBackground_1180_353: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1180_357: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1180_362: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_363: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1180_363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_364: {
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
  ImageBackground_1180_365: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1180_367: {
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
  View_1180_368: {
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
  Text_1180_368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_369: {
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
  Text_1180_369: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_370: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("23.633879781420767%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_371: {
    width: wp("58.454106280193244%"),
    minWidth: wp("58.454106280193244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869563%"),
    top: hp("2.3224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_1180_371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_372: {
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
  ImageBackground_1180_373: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11379888148906758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20132755887681064%")
  },
  View_1180_375: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("44.12568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_376: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869563%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_1180_376: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_377: {
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
  ImageBackground_1180_378: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11379888148906758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20132755887681064%")
  },
  View_1180_380: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("33.87978142076503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_381: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869563%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_1180_381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_382: {
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
  ImageBackground_1180_383: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11379888148906758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20132755887681064%")
  },
  View_1180_385: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("77.45901639344262%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_386: {
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
  View_1180_387: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_1180_387: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_388: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376807%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1180_389: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1180_393: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("86.74863387978142%")
  },
  ImageBackground_1180_394: {
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
  View_1180_395: {
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
  Text_1180_395: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_396: {
    width: wp("3.381647579911826%"),
    height: hp("2.022711696520529%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.64251207729469%")
  },
  ImageBackground_1180_397: {
    width: wp("0.7793029725263659%"),
    height: hp("0.7005383408134752%"),
    top: hp("0.7145449112021822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5025852958937165%")
  },
  ImageBackground_1180_399: {
    width: wp("1.8804440751743776%"),
    height: hp("0.6538258875654043%"),
    top: hp("1.368921832308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.501169987922701%")
  },
  ImageBackground_1180_401: {
    width: wp("0.9693966971503364%"),
    height: hp("0.6838518413689618%"),
    top: hp("1.1913528859289642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_403: {
    width: wp("2.9067580826616517%"),
    height: hp("0.5760406535831306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35771908967391397%")
  },
  ImageBackground_1180_405: {
    width: wp("2.259574189854129%"),
    height: hp("0.9602125876588248%"),
    top: hp("0.8893122438524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27799007397342734%")
  },
  ImageBackground_1180_407: {
    width: wp("1.3776963459696747%"),
    height: hp("1.1729622147773784%"),
    top: hp("0.16756318306011053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8782316198671438%")
  },
  ImageBackground_1180_409: {
    width: wp("1.653026843416518%"),
    height: hp("1.2727458620331977%"),
    top: hp("0.3148480191256908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5420629528985472%")
  },
  View_1180_411: {
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
  Text_1180_411: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_412: {
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
  ImageBackground_1180_413: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11379888148906048%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_1180_416: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("103.14207650273224%")
  },
  ImageBackground_1180_417: {
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
  ImageBackground_1180_418: {
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
  View_1180_419: {
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
  Text_1180_419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_420: {
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
  Text_1180_420: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_421: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_422: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11379888148904627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_1180_424: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("119.53551912568305%")
  },
  ImageBackground_1180_425: {
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
  View_1180_426: {
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
  Text_1180_426: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_427: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.0054644808743376%"),
    justifyContent: "flex-end"
  },
  Text_1180_427: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_428: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_429: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11379888148904627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_1180_431: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("94.94535519125684%")
  },
  View_1180_432: {
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
  View_1180_433: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_434: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(140, 178, 165, 1)"
  },
  ImageBackground_1180_435: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1180_436: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("1.2053609545765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319227430555554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_437: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_438: {
    width: wp("0.9893479554549507%"),
    height: hp("0.5548967038347422%"),
    top: hp("2.2818476775956213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2098005359299524%")
  },
  ImageBackground_1180_440: {
    width: wp("0.13624827067057294%"),
    height: hp("0.2137574993196081%"),
    top: hp("1.3179591444671956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1185980902777786%")
  },
  ImageBackground_1180_441: {
    width: wp("6.763285024154589%"),
    height: hp("2.1215032358638575%"),
    top: hp("3.92159217042348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2218825483091793%")
  },
  ImageBackground_1180_445: {
    width: wp("4.674218587829295%"),
    height: hp("2.230732297636772%"),
    top: hp("0.8685002561475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5376471920289845%")
  },
  ImageBackground_1180_449: {
    width: wp("4.1576353248190765%"),
    height: hp("1.6071999659303757%"),
    top: hp("2.1054794228141986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9131755736714977%")
  },
  View_1180_451: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("2.026900828210387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.700355714070049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_452: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_454: {
    width: wp("0.46525646523001113%"),
    height: hp("0.247543398799792%"),
    top: hp("0.365277066256823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30169648248792136%")
  },
  ImageBackground_1180_457: {
    width: wp("0.4652570411202988%"),
    height: hp("0.247543398799792%"),
    top: hp("0.32058465676227854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5496442859299506%")
  },
  View_1180_460: {
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
  Text_1180_460: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_461: {
    width: wp("3.381647579911826%"),
    height: hp("2.022711696520529%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%")
  },
  ImageBackground_1180_462: {
    width: wp("0.7793029725263659%"),
    height: hp("0.7005383408134752%"),
    top: hp("0.7145449112021822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5025852958937165%")
  },
  ImageBackground_1180_464: {
    width: wp("1.8804440751743776%"),
    height: hp("0.6538258875654043%"),
    top: hp("1.368921832308743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.501169987922701%")
  },
  ImageBackground_1180_466: {
    width: wp("0.9693966971503364%"),
    height: hp("0.6838518413689618%"),
    top: hp("1.1913528859289642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_468: {
    width: wp("2.9067580826616517%"),
    height: hp("0.5760406535831306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35771908967391397%")
  },
  ImageBackground_1180_470: {
    width: wp("2.259574189854129%"),
    height: hp("0.9602125876588248%"),
    top: hp("0.8893122438524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27799007397342734%")
  },
  ImageBackground_1180_472: {
    width: wp("1.3776963459696747%"),
    height: hp("1.1729622147773784%"),
    top: hp("0.16756318306009632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.878231619867151%")
  },
  ImageBackground_1180_474: {
    width: wp("1.653026843416518%"),
    height: hp("1.2727458620331977%"),
    top: hp("0.3148480191256766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5420629528985472%")
  },
  View_1180_476: {
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
  Text_1180_476: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_477: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_478: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11379888148907469%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_1180_480: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("111.33879781420765%")
  },
  ImageBackground_1180_481: {
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
  View_1180_509: {
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
  Text_1180_509: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_510: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-end"
  },
  Text_1180_510: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_511: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_512: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11379888148906048%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_1180_514: {
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
  View_1180_515: {
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
  View_1180_516: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_517: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(140, 178, 165, 1)"
  },
  ImageBackground_1180_518: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1180_519: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("1.2053609545765056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3319227430555554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_520: {
    width: wp("6.54075687058306%"),
    height: hp("4.93153275036421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_521: {
    width: wp("0.9893479554549507%"),
    height: hp("0.5548967038347422%"),
    top: hp("2.2818476775956356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2098005359299524%")
  },
  ImageBackground_1180_523: {
    width: wp("0.13624827067057294%"),
    height: hp("0.2137574993196081%"),
    top: hp("1.3179591444672099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1185980902777786%")
  },
  ImageBackground_1180_524: {
    width: wp("6.763285024154589%"),
    height: hp("2.1215032358638575%"),
    top: hp("3.9215921704234944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2218825483091793%")
  },
  ImageBackground_1180_528: {
    width: wp("4.674218587829295%"),
    height: hp("2.230732297636772%"),
    top: hp("0.8685002561475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5376471920289845%")
  },
  ImageBackground_1180_532: {
    width: wp("4.1576353248190765%"),
    height: hp("1.6071999659303757%"),
    top: hp("2.105479422814213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9131755736714977%")
  },
  View_1180_534: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("2.0269008282103727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.700355714070049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_535: {
    width: wp("2.022253027284779%"),
    height: hp("0.9726440971666346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_537: {
    width: wp("0.46525646523001113%"),
    height: hp("0.247543398799792%"),
    top: hp("0.3652770662568514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30169648248792136%")
  },
  ImageBackground_1180_540: {
    width: wp("0.4652570411202988%"),
    height: hp("0.247543398799792%"),
    top: hp("0.3205846567623212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5496442859299506%")
  },
  View_1180_543: {
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
  Text_1180_543: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_544: {
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
  Text_1180_544: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_545: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_546: {
    width: wp("4.428341077721637%"),
    height: hp("2.504553560350762%"),
    top: hp("0.11379888148906048%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20126858771135403%")
  },
  View_1180_548: {
    width: wp("131.4009661835749%"),
    minWidth: wp("131.4009661835749%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("56.830601092896174%")
  },
  View_1180_549: {
    width: wp("17.632850241545896%"),
    minWidth: wp("17.632850241545896%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1180_549: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_550: {
    width: wp("131.4009661835749%"),
    minWidth: wp("131.4009661835749%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885249%")
  },
  View_1180_551: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1180_552: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792269%"),
    top: hp("5.737704918032776%"),
    justifyContent: "flex-start"
  },
  Text_1180_552: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_553: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%"),
    justifyContent: "flex-start"
  },
  Text_1180_553: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1180_554: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("0%")
  },
  View_1180_555: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.11594202898551%"),
    top: hp("0%")
  },
  View_1180_556: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.96618357487921%"),
    top: hp("5.737704918032776%"),
    justifyContent: "flex-start"
  },
  Text_1180_556: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_557: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%"),
    justifyContent: "flex-start"
  },
  Text_1180_557: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_558: {
    width: wp("9.599501384053253%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932366995%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_1180_559: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_560: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(165, 171, 193, 1)"
  },
  ImageBackground_1180_561: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1180_562: {
    width: wp("5.736714975845411%"),
    height: hp("4.098360655737705%"),
    top: hp("1.5368852459016438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1135265700483075%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_563: {
    width: wp("5.736714975845411%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_564: {
    width: wp("0.8677296016527258%"),
    height: hp("0.4611481734312297%"),
    top: hp("1.896292264344254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.815224467844203%")
  },
  ImageBackground_1180_566: {
    width: wp("0.11949976861188953%"),
    height: hp("0.17764398960467895%"),
    top: hp("1.0952975580600963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8581814236111285%")
  },
  ImageBackground_1180_567: {
    width: wp("5.736714975845411%"),
    height: hp("1.8784153005464481%"),
    top: hp("3.7568306010929007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1135265700483075%")
  },
  ImageBackground_1180_571: {
    width: wp("3.92512077294686%"),
    height: hp("1.8784153005464481%"),
    top: hp("1.19535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3212560386473484%")
  },
  View_1180_575: {
    width: wp("3.321256038647343%"),
    height: hp("1.366120218579235%"),
    top: hp("2.219945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971087%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1180_576: {
    width: wp("1.5096618357487923%"),
    height: hp("0.853825136612022%"),
    top: hp("2.219945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.132850241545896%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1180_577: {
    width: wp("1.5096618357487923%"),
    height: hp("0.853825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1180_578: {
    width: wp("0.38005476412565814%"),
    height: hp("0.11286904903057494%"),
    top: hp("1.0157850922131217%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5700742564915515%")
  },
  ImageBackground_1180_579: {
    width: wp("0.3473269190765233%"),
    height: hp("0.21727961269232746%"),
    top: hp("0.32071806693988947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22526985205314531%")
  },
  ImageBackground_1180_582: {
    width: wp("0.3473270342545809%"),
    height: hp("0.21727938469641847%"),
    top: hp("0.2813620645491852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.156837352807969%")
  },
  View_1180_585: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661837%"),
    top: hp("0%")
  },
  View_1180_586: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792242%"),
    top: hp("5.737704918032776%"),
    justifyContent: "flex-start"
  },
  Text_1180_586: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_587: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%"),
    justifyContent: "flex-start"
  },
  Text_1180_587: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1180_588: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("0%")
  },
  View_1180_589: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.82125603864735%"),
    top: hp("0%")
  },
  View_1180_590: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792242%"),
    top: hp("5.737704918032776%"),
    justifyContent: "flex-start"
  },
  Text_1180_590: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_591: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%"),
    justifyContent: "flex-start"
  },
  Text_1180_591: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1180_592: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("0%")
  },
  View_1180_593: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.410628019323674%"),
    top: hp("0%")
  },
  View_1180_594: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792313%"),
    top: hp("5.737704918032776%"),
    justifyContent: "flex-start"
  },
  Text_1180_594: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_595: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%"),
    justifyContent: "flex-start"
  },
  Text_1180_595: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1180_596: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236707%"),
    top: hp("0%")
  },
  View_1180_597: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("113.52657004830917%"),
    top: hp("0%")
  },
  View_1180_598: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792384%"),
    top: hp("5.737704918032776%"),
    justifyContent: "flex-start"
  },
  Text_1180_598: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1180_599: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%"),
    justifyContent: "flex-start"
  },
  Text_1180_599: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1180_600: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236742%"),
    top: hp("0%")
  },
  ImageBackground_1180_601: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000004944403337275284%"),
    minHeight: hp("0.000004944403337275284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.91803278688525%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
