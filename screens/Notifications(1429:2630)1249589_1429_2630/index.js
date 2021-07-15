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
      <View style={styles.View_1429_2631}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ae/a680/3c944c9cc89b1bcb9408c55626431326"
          }}
          style={styles.ImageBackground_1429_2632}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/7b9b/1f628b184155cee27f10a693d3b68162"
          }}
          style={styles.ImageBackground_1429_2634}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb8/1852/c5a4c1ccf07ad5152166fae30119f59a"
          }}
          style={styles.ImageBackground_1429_2636}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_1429_2638}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4cc/7ffd/aab9da46518bcbad00beb4b1efe69461"
          }}
          style={styles.ImageBackground_1429_2640}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7829/f76b/ee2c4e5f399c682d3c4d923f8aeb443b"
          }}
          style={styles.ImageBackground_1429_2642}
        />
      </View>
      <View style={styles.View_1429_2644}>
        <View style={styles.View_1429_2645}>
          <View style={styles.View_1429_2646} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1429_2647}
          />
          <View style={styles.View_1429_2648} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1429_2649}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_1429_2653}
        />
        <View style={styles.View_1429_2658}>
          <View style={styles.View_1429_2659}>
            <Text style={styles.Text_1429_2659}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1429_2660}>
        <View style={styles.View_1429_2661}>
          <Text style={styles.Text_1429_2661}>Notifications</Text>
        </View>
      </View>
      <View style={styles.View_1429_2662} />
      <View style={styles.View_1429_2663}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_1429_2664}
        />
        <View style={styles.View_1429_2666}>
          <View style={styles.View_1429_2667}>
            <Text style={styles.Text_1429_2667}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1429_2668}>
        <Text style={styles.Text_1429_2668}>Today</Text>
      </View>
      <View style={styles.View_1429_2670}>
        <View style={styles.View_1429_2671} />
        <View style={styles.View_1438_496}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2576/32e7/bb4c80f17a93814e4df0b2cf9b24df8b"
            }}
            style={styles.ImageBackground_1438_497}
          />
          <View style={styles.View_1438_498}>
            <Text style={styles.Text_1438_498}>Accept</Text>
          </View>
        </View>
        <View style={styles.View_1438_499}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7b4/e319/0a610921f5f5606bb0842e88c40c757e"
            }}
            style={styles.ImageBackground_1438_500}
          />
          <View style={styles.View_1438_501}>
            <Text style={styles.Text_1438_501}>Reject</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cbb/0ac3/a05cba7fa00895c4bf40459522e98a5a"
          }}
          style={styles.ImageBackground_1429_2672}
        />
        <View style={styles.View_1429_2675}>
          <View style={styles.View_1429_2676}>
            <View style={styles.View_1429_2677}>
              <Text style={styles.Text_1429_2677}>
                Kachi Ibeji @prettyset sent a request 300 from you
              </Text>
            </View>
            <View style={styles.View_1438_481}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94c3/27f6/0c6955b2a15e0ae9b83347e272462567"
                }}
                style={styles.ImageBackground_1438_482}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5a5/b89e/b80af810d669d7baf99567373bba0143"
                }}
                style={styles.ImageBackground_1438_484}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b79d/33b3/6d08b25b4d64d92da6492021f24701e2"
                }}
                style={styles.ImageBackground_1438_486}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7996/81a5/756a66ddb7f6845fa27eebda6171e5bd"
                }}
                style={styles.ImageBackground_1438_488}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0257/c575/a28eeb8bf86893a7650cba5045431a5d"
                }}
                style={styles.ImageBackground_1438_490}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5b/dd97/1526f5c2088913182d562fe1a1021e51"
                }}
                style={styles.ImageBackground_1438_492}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7b3/e73f/1cd8edf7369607f583a6dae408b9f545"
                }}
                style={styles.ImageBackground_1438_494}
              />
            </View>
            <View style={styles.View_1429_2678}>
              <Text style={styles.Text_1429_2678}>08:58 PM</Text>
            </View>
          </View>
          <View style={styles.View_1429_2679}>
            <View style={styles.View_1429_2680} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abda/dfb8/d0b455b9590185cd5b0ad46074b11263"
              }}
              style={styles.ImageBackground_1429_2681}
            />
          </View>
        </View>
        <View style={styles.View_1429_2684}>
          <View style={styles.View_1429_2685}>
            <View style={styles.View_1439_0}>
              <View style={styles.View_1439_1}>
                <Text style={styles.Text_1439_1}>
                  You rejected request of 202 from Jessica @jaybaby
                </Text>
              </View>
              <View style={styles.View_1439_2}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94c3/27f6/0c6955b2a15e0ae9b83347e272462567"
                  }}
                  style={styles.ImageBackground_1439_3}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5a5/b89e/b80af810d669d7baf99567373bba0143"
                  }}
                  style={styles.ImageBackground_1439_5}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b79d/33b3/6d08b25b4d64d92da6492021f24701e2"
                  }}
                  style={styles.ImageBackground_1439_7}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7996/81a5/756a66ddb7f6845fa27eebda6171e5bd"
                  }}
                  style={styles.ImageBackground_1439_9}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0257/c575/a28eeb8bf86893a7650cba5045431a5d"
                  }}
                  style={styles.ImageBackground_1439_11}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac5b/dd97/1526f5c2088913182d562fe1a1021e51"
                  }}
                  style={styles.ImageBackground_1439_13}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7b3/e73f/1cd8edf7369607f583a6dae408b9f545"
                  }}
                  style={styles.ImageBackground_1439_15}
                />
              </View>
            </View>
            <View style={styles.View_1429_2687}>
              <Text style={styles.Text_1429_2687}>08:40 PM</Text>
            </View>
          </View>
          <View style={styles.View_1439_21}>
            <View style={styles.View_1439_22} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abda/dfb8/d0b455b9590185cd5b0ad46074b11263"
              }}
              style={styles.ImageBackground_1439_23}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1429_2742}>
        <View style={styles.View_1429_2743}>
          <Text style={styles.Text_1429_2743}>All</Text>
        </View>
        <View style={styles.View_1429_2744}>
          <Text style={styles.Text_1429_2744}>Requests</Text>
        </View>
        <View style={styles.View_1429_2745}>
          <Text style={styles.Text_1429_2745}>Activity</Text>
        </View>
      </View>
      <View style={styles.View_1429_2746}>
        <View style={styles.View_1429_2747} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1429_2631: {
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
  ImageBackground_1429_2632: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25803129269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_1429_2634: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97792862021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_1429_2636: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.285182932035519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_1429_2638: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.2770609204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_1429_2640: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5036554388661205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_1429_2642: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.63973382001366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_1429_2644: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1429_2645: {
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
  View_1429_2646: {
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
  ImageBackground_1429_2647: {
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
  View_1429_2648: {
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
  ImageBackground_1429_2649: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1429_2653: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1429_2658: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1429_2659: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1429_2659: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2660: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("13.934426229508196%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1429_2661: {
    width: wp("34.54106280193236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1429_2661: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2662: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100.5464480874317%"),
    minHeight: hp("100.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726776%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1429_2663: {
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
  ImageBackground_1429_2664: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1429_2666: {
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
  View_1429_2667: {
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
  Text_1429_2667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2668: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("30.737704918032787%"),
    justifyContent: "flex-start"
  },
  Text_1429_2668: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2670: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("33.33333333333333%"),
    minHeight: hp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("35.38251366120219%")
  },
  View_1429_2671: {
    width: wp("90.33816425120773%"),
    height: hp("33.33333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1438_496: {
    width: wp("25.36231884057971%"),
    height: hp("5.191256830601093%"),
    top: hp("12.568306010928957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.42512077294686%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1438_497: {
    width: wp("25.36231884057971%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1438_498: {
    width: wp("10.869565217391305%"),
    top: hp("1.3497107667349724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.314665421195656%"),
    justifyContent: "flex-start"
  },
  Text_1438_498: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1438_499: {
    width: wp("25.36231884057971%"),
    height: hp("5.191256830601093%"),
    top: hp("12.568306010928957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.893719806763286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1438_500: {
    width: wp("25.36231884057971%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1438_501: {
    width: wp("9.66183574879227%"),
    top: hp("1.3497107667349724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.797757208635261%"),
    justifyContent: "flex-start"
  },
  Text_1438_501: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_1429_2672: {
    width: wp("81.64251207729468%"),
    height: hp("0.0000036164719908488048%"),
    top: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%")
  },
  View_1429_2675: {
    width: wp("82.1256038647343%"),
    height: hp("8.469945355191257%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%")
  },
  View_1429_2676: {
    width: wp("69.56521739130434%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%")
  },
  View_1429_2677: {
    width: wp("69.56521739130434%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1429_2677: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1438_481: {
    width: wp("2.740715321711296%"),
    minWidth: wp("2.740715321711296%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.24637681159422%"),
    top: hp("0.8196721311475414%")
  },
  ImageBackground_1438_482: {
    width: wp("0.6316006471569411%"),
    height: hp("0.5677644020872689%"),
    top: hp("0.5791335809426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.217754566727038%")
  },
  ImageBackground_1438_484: {
    width: wp("1.5240410099858823%"),
    height: hp("0.5299054208349009%"),
    top: hp("1.1094390368852487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.216693085748787%")
  },
  ImageBackground_1438_486: {
    width: wp("0.7856656963698531%"),
    height: hp("0.5542405316087067%"),
    top: hp("0.9657562756147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1438_488: {
    width: wp("2.3558365550018165%"),
    height: hp("0.46686292346057995%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2899612205615796%")
  },
  ImageBackground_1438_490: {
    width: wp("1.8313141836636306%"),
    height: hp("0.7782222143287867%"),
    top: hp("0.7208151895491852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2252698520531311%")
  },
  ImageBackground_1438_492: {
    width: wp("1.1165797422473558%"),
    height: hp("0.9506491364025679%"),
    top: hp("0.1356781506147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5222226939915373%")
  },
  ImageBackground_1438_494: {
    width: wp("1.3397265171659167%"),
    height: hp("1.0315205881504415%"),
    top: hp("0.2550802595628454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4393941538345274%")
  },
  View_1429_2678: {
    width: wp("12.318840579710146%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1429_2678: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2679: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1429_2680: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(236, 236, 236, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_1429_2681: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_1429_2684: {
    width: wp("82.1256038647343%"),
    height: hp("7.923497267759563%"),
    top: hp("21.721311475409827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%")
  },
  View_1429_2685: {
    width: wp("69.56521739130434%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%")
  },
  View_1439_0: {
    width: wp("69.56521739130434%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1439_1: {
    width: wp("69.56521739130434%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1439_1: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1439_2: {
    width: wp("2.740715321711296%"),
    minWidth: wp("2.740715321711296%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_1439_3: {
    width: wp("0.6316006471569411%"),
    height: hp("0.5677644020872689%"),
    top: hp("0.5791335809426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2177545667270593%")
  },
  ImageBackground_1439_5: {
    width: wp("1.5240410099858823%"),
    height: hp("0.5299054208349009%"),
    top: hp("1.1094390368852487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2166930857488012%")
  },
  ImageBackground_1439_7: {
    width: wp("0.7856656963698531%"),
    height: hp("0.5542405316087067%"),
    top: hp("0.9657562756147584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1439_9: {
    width: wp("2.3558365550018165%"),
    height: hp("0.46686292346057995%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2899612205616009%")
  },
  ImageBackground_1439_11: {
    width: wp("1.8313141836636306%"),
    height: hp("0.7782222143287867%"),
    top: hp("0.7208151895491852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22526985205314531%")
  },
  ImageBackground_1439_13: {
    width: wp("1.1165797422473558%"),
    height: hp("0.9506491364025679%"),
    top: hp("0.1356781506147584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5222226939915515%")
  },
  ImageBackground_1439_15: {
    width: wp("1.3397265171659167%"),
    height: hp("1.0315205881504415%"),
    top: hp("0.2550802595628454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4393941538345487%")
  },
  View_1429_2687: {
    width: wp("12.560386473429952%"),
    top: hp("5.464480874316948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1429_2687: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1439_21: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1439_22: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(236, 236, 236, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_1439_23: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_1429_2742: {
    width: wp("41.06280193236715%"),
    minWidth: wp("41.06280193236715%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("25.136612021857925%")
  },
  View_1429_2743: {
    width: wp("4.1062801932367154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1429_2743: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2744: {
    width: wp("14.009661835748794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231883%"),
    top: hp("0.27322404371584597%"),
    justifyContent: "flex-start"
  },
  Text_1429_2744: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2745: {
    width: wp("11.352657004830919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.710144927536227%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1429_2745: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1429_2746: {
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
  View_1429_2747: {
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
