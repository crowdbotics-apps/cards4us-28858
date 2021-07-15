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
      <View style={styles.View_924_602}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ae/a680/3c944c9cc89b1bcb9408c55626431326"
          }}
          style={styles.ImageBackground_924_603}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/7b9b/1f628b184155cee27f10a693d3b68162"
          }}
          style={styles.ImageBackground_924_605}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb8/1852/c5a4c1ccf07ad5152166fae30119f59a"
          }}
          style={styles.ImageBackground_924_607}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_924_609}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4cc/7ffd/aab9da46518bcbad00beb4b1efe69461"
          }}
          style={styles.ImageBackground_924_611}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7829/f76b/ee2c4e5f399c682d3c4d923f8aeb443b"
          }}
          style={styles.ImageBackground_924_613}
        />
      </View>
      <View style={styles.View_924_615}>
        <View style={styles.View_924_616}>
          <View style={styles.View_924_617} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_924_618}
          />
          <View style={styles.View_924_619} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_924_620}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_924_624}
        />
        <View style={styles.View_924_629}>
          <View style={styles.View_924_630}>
            <Text style={styles.Text_924_630}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_924_631}>
        <View style={styles.View_924_632}>
          <Text style={styles.Text_924_632}>Notifications</Text>
        </View>
      </View>
      <View style={styles.View_924_669} />
      <View style={styles.View_931_0}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_931_1}
        />
        <View style={styles.View_931_3}>
          <View style={styles.View_931_4}>
            <Text style={styles.Text_931_4}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_933_2091}>
        <Text style={styles.Text_933_2091}>Today</Text>
      </View>
      <View style={styles.View_933_2092}>
        <Text style={styles.Text_933_2092}>Yesterday</Text>
      </View>
      <View style={styles.View_933_2163}>
        <View style={styles.View_933_2093} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cbb/0ac3/a05cba7fa00895c4bf40459522e98a5a"
          }}
          style={styles.ImageBackground_933_2094}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cbb/0ac3/a05cba7fa00895c4bf40459522e98a5a"
          }}
          style={styles.ImageBackground_933_2095}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cbb/0ac3/a05cba7fa00895c4bf40459522e98a5a"
          }}
          style={styles.ImageBackground_933_2096}
        />
        <View style={styles.View_933_2097}>
          <View style={styles.View_933_2098}>
            <View style={styles.View_933_2099}>
              <Text style={styles.Text_933_2099}>
                Transfered money to William
              </Text>
            </View>
            <View style={styles.View_933_2100}>
              <Text style={styles.Text_933_2100}>08:58 PM</Text>
            </View>
          </View>
          <View style={styles.View_933_2101}>
            <View style={styles.View_933_2102} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf7/7253/fe595f1bd5174626fa9ff4f8d9e0fea1"
              }}
              style={styles.ImageBackground_933_2103}
            />
          </View>
        </View>
        <View style={styles.View_933_2106}>
          <View style={styles.View_933_2107}>
            <View style={styles.View_933_2108}>
              <Text style={styles.Text_933_2108}>
                Received money $20 from Dito
              </Text>
            </View>
            <View style={styles.View_933_2109}>
              <Text style={styles.Text_933_2109}>08:40 PM</Text>
            </View>
          </View>
          <View style={styles.View_933_2110}>
            <View style={styles.View_933_2111} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e6/9d3d/69d736a9af2458b234e05193ae685e1f"
              }}
              style={styles.ImageBackground_933_2112}
            />
          </View>
        </View>
        <View style={styles.View_933_2115}>
          <View style={styles.View_933_2116}>
            <View style={styles.View_933_2117}>
              <Text style={styles.Text_933_2117}>
                Transfered Money to Ilham
              </Text>
            </View>
            <View style={styles.View_933_2118}>
              <Text style={styles.Text_933_2118}>08:20 AM</Text>
            </View>
          </View>
          <View style={styles.View_933_2119}>
            <View style={styles.View_933_2120} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf7/7253/fe595f1bd5174626fa9ff4f8d9e0fea1"
              }}
              style={styles.ImageBackground_933_2121}
            />
          </View>
        </View>
        <View style={styles.View_933_2124}>
          <View style={styles.View_933_2125}>
            <View style={styles.View_933_2126}>
              <Text style={styles.Text_933_2126}>
                Received money $400 from Jonas
              </Text>
            </View>
            <View style={styles.View_933_2127}>
              <Text style={styles.Text_933_2127}>06:58 AM</Text>
            </View>
          </View>
          <View style={styles.View_933_2128}>
            <View style={styles.View_933_2129} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e6/9d3d/69d736a9af2458b234e05193ae685e1f"
              }}
              style={styles.ImageBackground_933_2130}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_933_2164}>
        <View style={styles.View_933_2133} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cbb/0ac3/a05cba7fa00895c4bf40459522e98a5a"
          }}
          style={styles.ImageBackground_933_2134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cbb/0ac3/a05cba7fa00895c4bf40459522e98a5a"
          }}
          style={styles.ImageBackground_933_2135}
        />
        <View style={styles.View_933_2136}>
          <View style={styles.View_933_2137}>
            <View style={styles.View_933_2138}>
              <Text style={styles.Text_933_2138}>Withdraw money From ATM</Text>
            </View>
            <View style={styles.View_933_2139}>
              <Text style={styles.Text_933_2139}>02:45 PM</Text>
            </View>
          </View>
          <View style={styles.View_933_2140}>
            <View style={styles.View_933_2141} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf7/7253/fe595f1bd5174626fa9ff4f8d9e0fea1"
              }}
              style={styles.ImageBackground_933_2142}
            />
          </View>
        </View>
        <View style={styles.View_933_2145}>
          <View style={styles.View_933_2146}>
            <View style={styles.View_933_2147}>
              <Text style={styles.Text_933_2147}>
                Received cashback $5 on interest{" "}
              </Text>
            </View>
            <View style={styles.View_933_2148}>
              <Text style={styles.Text_933_2148}>11:28 AM</Text>
            </View>
          </View>
          <View style={styles.View_933_2149}>
            <View style={styles.View_933_2150} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e6/9d3d/69d736a9af2458b234e05193ae685e1f"
              }}
              style={styles.ImageBackground_933_2151}
            />
          </View>
        </View>
        <View style={styles.View_933_2154}>
          <View style={styles.View_933_2155}>
            <View style={styles.View_933_2156}>
              <Text style={styles.Text_933_2156}>
                Transfered Money to James
              </Text>
            </View>
            <View style={styles.View_933_2157}>
              <Text style={styles.Text_933_2157}>05:58 AM</Text>
            </View>
          </View>
          <View style={styles.View_933_2158}>
            <View style={styles.View_933_2159} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf7/7253/fe595f1bd5174626fa9ff4f8d9e0fea1"
              }}
              style={styles.ImageBackground_933_2160}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1362_2030}>
        <View style={styles.View_1362_2031}>
          <Text style={styles.Text_1362_2031}>All</Text>
        </View>
        <View style={styles.View_1362_2032}>
          <Text style={styles.Text_1362_2032}>Requests</Text>
        </View>
        <View style={styles.View_1362_2033}>
          <Text style={styles.Text_1362_2033}>Activity</Text>
        </View>
      </View>
      <View style={styles.View_924_813}>
        <View style={styles.View_924_814} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_924_602: {
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
  ImageBackground_924_603: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25803129269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_924_605: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97792862021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_924_607: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.285182932035519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_924_609: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.2770609204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_924_611: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5036554388661205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_924_613: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.63973382001366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_924_615: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_924_616: {
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
  View_924_617: {
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
  ImageBackground_924_618: {
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
  View_924_619: {
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
  ImageBackground_924_620: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_924_624: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_924_629: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_924_630: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_924_630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_924_631: {
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
  View_924_632: {
    width: wp("34.54106280193236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_924_632: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_924_669: {
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
  View_931_0: {
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
  ImageBackground_931_1: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_931_3: {
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
  View_931_4: {
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
  Text_931_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2091: {
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
  Text_933_2091: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2092: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("80.87431693989072%"),
    justifyContent: "flex-start"
  },
  Text_933_2092: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2163: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("35.38251366120219%")
  },
  View_933_2093: {
    width: wp("90.33816425120773%"),
    height: hp("41.66666666666667%"),
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
  ImageBackground_933_2094: {
    width: wp("81.64251207729468%"),
    height: hp("0.0000036164719908488048%"),
    top: hp("10.245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%")
  },
  ImageBackground_933_2095: {
    width: wp("81.64251207729468%"),
    height: hp("0.0000036164719908488048%"),
    top: hp("20.628415300546443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%")
  },
  ImageBackground_933_2096: {
    width: wp("81.64251207729468%"),
    height: hp("0.0000036164719908488048%"),
    top: hp("31.010928961748625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%")
  },
  View_933_2097: {
    width: wp("56.763285024154584%"),
    height: hp("5.737704918032787%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%")
  },
  View_933_2098: {
    width: wp("44.20289855072464%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%")
  },
  View_933_2099: {
    width: wp("44.20289855072464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2099: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2100: {
    width: wp("12.318840579710146%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2100: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2101: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_933_2102: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 87, 87, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_933_2103: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_933_2106: {
    width: wp("68.59903381642512%"),
    height: hp("5.8743169398907105%"),
    top: hp("12.431693989071029%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%")
  },
  View_933_2107: {
    width: wp("56.038647342995176%"),
    height: hp("5.8743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%")
  },
  View_933_2108: {
    width: wp("56.038647342995176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2108: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2109: {
    width: wp("12.560386473429952%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2109: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2110: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_933_2111: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(39, 174, 96, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_933_2112: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_933_2115: {
    width: wp("53.62318840579711%"),
    height: hp("5.737704918032787%"),
    top: hp("23.087431693989068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%")
  },
  View_933_2116: {
    width: wp("41.06280193236715%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%")
  },
  View_933_2117: {
    width: wp("41.06280193236715%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2117: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2118: {
    width: wp("12.560386473429952%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2118: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2119: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_933_2120: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 87, 87, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_933_2121: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_933_2124: {
    width: wp("67.6328502415459%"),
    height: hp("5.8743169398907105%"),
    top: hp("33.46994535519125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%")
  },
  View_933_2125: {
    width: wp("55.072463768115945%"),
    height: hp("5.8743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%")
  },
  View_933_2126: {
    width: wp("55.072463768115945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2126: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2127: {
    width: wp("12.560386473429952%"),
    top: hp("3.415300546448094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2127: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2128: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_933_2129: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(39, 174, 96, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_933_2130: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_933_2164: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("85.51912568306011%")
  },
  View_933_2133: {
    width: wp("90.33816425120773%"),
    height: hp("30.737704918032787%"),
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
  ImageBackground_933_2134: {
    width: wp("81.64251207729468%"),
    height: hp("0.0000036164719908488048%"),
    top: hp("10.245901639344268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%")
  },
  ImageBackground_933_2135: {
    width: wp("81.64251207729468%"),
    height: hp("0.0000036164719908488048%"),
    top: hp("20.491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%")
  },
  View_933_2136: {
    width: wp("55.55555555555556%"),
    height: hp("5.601092896174864%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%")
  },
  View_933_2137: {
    width: wp("42.99516908212561%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%")
  },
  View_933_2138: {
    width: wp("42.99516908212561%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2138: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2139: {
    width: wp("12.077294685990339%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2139: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2140: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_933_2141: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 87, 87, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_933_2142: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_933_2145: {
    width: wp("63.76811594202898%"),
    height: hp("5.601092896174864%"),
    top: hp("12.704918032786892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%")
  },
  View_933_2146: {
    width: wp("51.20772946859904%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%")
  },
  View_933_2147: {
    width: wp("51.20772946859904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2147: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2148: {
    width: wp("11.11111111111111%"),
    top: hp("3.1420765027322233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2148: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2149: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_933_2150: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(39, 174, 96, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_933_2151: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_933_2154: {
    width: wp("54.830917874396135%"),
    height: hp("5.601092896174864%"),
    top: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169076%")
  },
  View_933_2155: {
    width: wp("42.270531400966185%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.56038647342995%")
  },
  View_933_2156: {
    width: wp("42.270531400966185%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2156: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2157: {
    width: wp("12.318840579710146%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_933_2157: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_933_2158: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_933_2159: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 87, 87, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_933_2160: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%")
  },
  View_1362_2030: {
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
  View_1362_2031: {
    width: wp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_1362_2031: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1362_2032: {
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231883%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1362_2032: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1362_2033: {
    width: wp("11.352657004830919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.710144927536227%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1362_2033: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_924_813: {
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
  View_924_814: {
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
