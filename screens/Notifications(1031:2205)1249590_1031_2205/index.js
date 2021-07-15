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
      <View style={styles.View_1031_2206}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ae/a680/3c944c9cc89b1bcb9408c55626431326"
          }}
          style={styles.ImageBackground_1031_2207}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/7b9b/1f628b184155cee27f10a693d3b68162"
          }}
          style={styles.ImageBackground_1031_2209}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb8/1852/c5a4c1ccf07ad5152166fae30119f59a"
          }}
          style={styles.ImageBackground_1031_2211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_1031_2213}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828c/e88e/a68a170748e6856356870ce9130f81f4"
          }}
          style={styles.ImageBackground_1031_2215}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7829/f76b/ee2c4e5f399c682d3c4d923f8aeb443b"
          }}
          style={styles.ImageBackground_1031_2217}
        />
      </View>
      <View style={styles.View_1031_2219}>
        <View style={styles.View_1031_2220}>
          <View style={styles.View_1031_2221} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_1031_2222}
          />
          <View style={styles.View_1031_2223} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_1031_2224}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_1031_2228}
        />
        <View style={styles.View_1031_2233}>
          <View style={styles.View_1031_2234}>
            <Text style={styles.Text_1031_2234}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1031_2235}>
        <View style={styles.View_1031_2236}>
          <Text style={styles.Text_1031_2236}>Notifications</Text>
        </View>
      </View>
      <View style={styles.View_1031_2237} />
      <View style={styles.View_1031_2238}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/727e/928b/9143c608085b4fcd5703d91ef434bcee"
          }}
          style={styles.ImageBackground_1031_2239}
        />
        <View style={styles.View_1031_2241}>
          <View style={styles.View_1031_2242}>
            <Text style={styles.Text_1031_2242}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1031_2319}>
        <View style={styles.View_1031_2320}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0474/66e1/4425c5903b39b7bd282f33624bd45828"
            }}
            style={styles.ImageBackground_1031_2321}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aefc/214e/a57b4d3ce89bac9987e1842bb7912606"
            }}
            style={styles.ImageBackground_1031_2324}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/755b/4f14/94acbb4fbb84ab7049eda68588db20a3"
            }}
            style={styles.ImageBackground_1031_2327}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f676/77b7/4d317d42d2607295cfd5a3da5f03c752"
            }}
            style={styles.ImageBackground_1031_2330}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ff4/cf94/c97e15e7eeab78b12f01081dcd7b5580"
            }}
            style={styles.ImageBackground_1031_2333}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5864/3667/06036b91898427fd2aed0e00d98d023c"
            }}
            style={styles.ImageBackground_1031_2336}
          />
        </View>
        <View style={styles.View_1031_2339}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd0b/5f08/c7dd51702153b5cd660463eb2ca4918c"
            }}
            style={styles.ImageBackground_1031_2340}
          />
          <View style={styles.View_1031_2341}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef5/69ba/a384ac08564002e58f36310f9d605eb8"
              }}
              style={styles.ImageBackground_1031_2342}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65a4/d3c3/16faeb8fe506c0762c397fc8564e792a"
              }}
              style={styles.ImageBackground_1031_2343}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65a4/d3c3/16faeb8fe506c0762c397fc8564e792a"
              }}
              style={styles.ImageBackground_1031_2344}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d675/1735/5f6d1feaf7ed29d32be67145d949c76f"
              }}
              style={styles.ImageBackground_1031_2345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/516d/43fc/f258fa3da5348bab87d9768cf7f2b790"
              }}
              style={styles.ImageBackground_1031_2346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c130/0106/e19bfc29da93002441b59090b7edf1f7"
              }}
              style={styles.ImageBackground_1031_2347}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c25/1cbf/3bdc0410f637c650064edb1d8cf277b9"
              }}
              style={styles.ImageBackground_1031_2348}
            />
            <View style={styles.View_1031_2349}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fbf/84da/28c20583658da65018b0e1bfcc2bb88e"
                }}
                style={styles.ImageBackground_1031_2350}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e6e/d435/790348d6b75b8da5d5ee45cb1aef7c72"
                }}
                style={styles.ImageBackground_1031_2353}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ffe/a8b8/6335bc1f1c53e890aa5c395545d00c85"
              }}
              style={styles.ImageBackground_1031_2356}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e362/32ec/2afcb5e3d742e47309234a2310a2ba9a"
              }}
              style={styles.ImageBackground_1031_2357}
            />
          </View>
        </View>
        <View style={styles.View_1031_2358}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9e6/79d8/e71231f018ad5bf2542f7f8edb4158b2"
            }}
            style={styles.ImageBackground_1031_2359}
          />
          <View style={styles.View_1031_2360} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d41/7817/7991974ad96519472ca03440cc87d731"
            }}
            style={styles.ImageBackground_1031_2361}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f0/c6e6/6a1888d14399b7c94078ed5ef71ab084"
            }}
            style={styles.ImageBackground_1031_2362}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbdf/a1f0/6df427140f2a52f7e0daf7577376f908"
            }}
            style={styles.ImageBackground_1031_2363}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e6/c7ff/2ee3ef8ea0e8be9c81fdf2f4cf9ac41e"
            }}
            style={styles.ImageBackground_1031_2364}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f2f/aa6e/7af30ac47568f5f79d3c34e27c8bd56d"
            }}
            style={styles.ImageBackground_1031_2365}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe98/4c7d/185954e0de0dbcb39eceee6ffa82cf10"
            }}
            style={styles.ImageBackground_1031_2366}
          />
          <View style={styles.View_1031_2370} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c85/65a8/a959194e5f4da9d8311a3721cad2025b"
            }}
            style={styles.ImageBackground_1031_2371}
          />
        </View>
      </View>
      <View style={styles.View_1031_2372}>
        <Text style={styles.Text_1031_2372}>
          You have no notification activities ongoing here
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1031_2206: {
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
  ImageBackground_1031_2207: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25803129269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_1031_2209: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97792862021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_1031_2211: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.285182932035519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_1031_2213: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.2770609204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_1031_2215: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5036554388661205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_1031_2217: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.63973382001366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_1031_2219: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1031_2220: {
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
  View_1031_2221: {
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
  ImageBackground_1031_2222: {
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
  View_1031_2223: {
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
  ImageBackground_1031_2224: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_1031_2228: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_1031_2233: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1031_2234: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1031_2234: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1031_2235: {
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
  View_1031_2236: {
    width: wp("34.54106280193236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1031_2236: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1031_2237: {
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
  View_1031_2238: {
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
  ImageBackground_1031_2239: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1031_2241: {
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
  View_1031_2242: {
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
  Text_1031_2242: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1031_2319: {
    width: wp("36.47344469448219%"),
    minWidth: wp("36.47344469448219%"),
    height: hp("12.384931637289744%"),
    minHeight: hp("12.384931637289744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.88405797101449%"),
    top: hp("51.79676827185792%")
  },
  View_1031_2320: {
    width: wp("9.175910581137249%"),
    minWidth: wp("9.175910581137249%"),
    height: hp("5.925635040783491%"),
    minHeight: hp("5.925635040783491%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1031_2321: {
    width: wp("1.4846011636337797%"),
    height: hp("0.8396514777928753%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.362863734148558%")
  },
  ImageBackground_1031_2324: {
    width: wp("0.6563152667980839%"),
    height: hp("0.37119470007432614%"),
    top: hp("4.928705601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.703547233544686%")
  },
  ImageBackground_1031_2327: {
    width: wp("1.454447432992539%"),
    height: hp("0.8225973186597146%"),
    top: hp("5.103072703210387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8419973769625635%")
  },
  ImageBackground_1031_2330: {
    width: wp("2.8125440440892024%"),
    height: hp("1.5907011396897948%"),
    top: hp("2.1445686048497237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.379408684329714%")
  },
  ImageBackground_1031_2333: {
    width: wp("2.603352588155995%"),
    height: hp("1.3464801298464584%"),
    top: hp("2.4239295167349795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1031_2336: {
    width: wp("1.0497275182014503%"),
    height: hp("0.5149560873625708%"),
    top: hp("0.8698343579235015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.126167629076097%")
  },
  View_1031_2339: {
    width: wp("22.794902267087487%"),
    minWidth: wp("22.794902267087487%"),
    height: hp("10.989890593648608%"),
    minHeight: hp("10.989890593648608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.678538741696865%"),
    top: hp("1.3950702271174862%")
  },
  ImageBackground_1031_2340: {
    width: wp("7.444678412543403%"),
    height: hp("1.1612825706356862%"),
    top: hp("9.828594603825138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.915758510718597%")
  },
  View_1031_2341: {
    width: wp("22.794902267087487%"),
    minWidth: wp("22.794902267087487%"),
    height: hp("10.46839542076236%"),
    minHeight: hp("10.46839542076236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1031_2342: {
    width: wp("15.646500518356543%"),
    height: hp("8.849250293168867%"),
    top: hp("0.0024013831967266697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9878401456823696%")
  },
  ImageBackground_1031_2343: {
    width: wp("1.2443134750145068%"),
    height: hp("2.829260643714113%"),
    top: hp("7.6392001793032875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.477944784118357%")
  },
  ImageBackground_1031_2344: {
    width: wp("1.2443134750145068%"),
    height: hp("2.829260643714113%"),
    top: hp("7.6392001793032875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.718860865791058%")
  },
  ImageBackground_1031_2345: {
    width: wp("5.598645970441293%"),
    height: hp("1.4461547299160984%"),
    top: hp("4.638004824112016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1031_2346: {
    width: wp("15.646500518356543%"),
    height: hp("8.849250293168867%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.317069085899753%")
  },
  ImageBackground_1031_2347: {
    width: wp("13.734092343832561%"),
    height: hp("7.745259185957779%"),
    top: hp("0.551784494535525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2732865338164245%")
  },
  ImageBackground_1031_2348: {
    width: wp("11.73263678804112%"),
    height: hp("6.635671626023256%"),
    top: hp("1.1067708333333357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.274027211654591%")
  },
  View_1031_2349: {
    width: wp("5.205561688556763%"),
    minWidth: wp("5.205561688556763%"),
    height: hp("2.6154429534745347%"),
    minHeight: hp("2.6154429534745347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.368716032608695%"),
    top: hp("3.337255592554648%")
  },
  ImageBackground_1031_2350: {
    width: wp("5.205561688556763%"),
    height: hp("1.4873163296225294%"),
    top: hp("1.1281164617486397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1031_2353: {
    width: wp("4.908218475931508%"),
    height: hp("0.7193484592958878%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11369640700482364%")
  },
  ImageBackground_1031_2356: {
    width: wp("3.7229344464730523%"),
    height: hp("2.833270505477822%"),
    top: hp("5.077724769467217%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.071982563405797%")
  },
  ImageBackground_1031_2357: {
    width: wp("9.526487709819406%"),
    height: hp("6.138314314878703%"),
    top: hp("1.1067708333333357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.274027211654591%")
  },
  View_1031_2358: {
    width: wp("9.55558260857771%"),
    minWidth: wp("9.55558260857771%"),
    height: hp("5.872927597963094%"),
    minHeight: hp("5.872927597963094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.110750207578509%"),
    top: hp("1.767151212431692%")
  },
  ImageBackground_1031_2359: {
    width: wp("2.3948019829349243%"),
    height: hp("2.1703621077407256%"),
    top: hp("3.702532658811478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.093162647192024%")
  },
  View_1031_2360: {
    width: wp("1.7129334850587707%"),
    height: hp("0.6136063018131777%"),
    top: hp("3.7034665300546408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.774869319897341%"),
    backgroundColor: "rgba(193, 0, 0, 1)"
  },
  ImageBackground_1031_2361: {
    width: wp("7.761528641705352%"),
    height: hp("3.5484668335627987%"),
    top: hp("0.24934362192623638%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5452473958333286%")
  },
  ImageBackground_1031_2362: {
    width: wp("6.344067301727148%"),
    height: hp("2.3681317522226135%"),
    top: hp("0.5942089310109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8439693727355078%")
  },
  ImageBackground_1031_2363: {
    width: wp("3.2285715646789845%"),
    height: hp("2.0449016914993035%"),
    top: hp("1.7526095030737778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.078242942330917%")
  },
  ImageBackground_1031_2364: {
    width: wp("2.6036709403070275%"),
    height: hp("3.8420322814274357%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1031_2365: {
    width: wp("3.703016935339296%"),
    height: hp("2.0749260167606542%"),
    top: hp("1.9181715334699447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.852593315972221%")
  },
  ImageBackground_1031_2366: {
    width: wp("1.2192106477304356%"),
    height: hp("0.6459496711772648%"),
    top: hp("2.5873569842896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.226975298158209%")
  },
  View_1031_2370: {
    width: wp("1.2696789082697624%"),
    height: hp("1.823412916047977%"),
    top: hp("1.9191054047131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.852534344806763%"),
    backgroundColor: "rgba(233, 241, 249, 1)"
  },
  ImageBackground_1031_2371: {
    width: wp("1.464276382888573%"),
    height: hp("2.0445501869493494%"),
    top: hp("1.7412696379781494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434605695199274%")
  },
  View_1031_2372: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.014492753623188%"),
    top: hp("68.5792349726776%"),
    justifyContent: "flex-start"
  },
  Text_1031_2372: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
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
