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
      <View style={styles.View_923_433}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3be0/b6fa/08bbbcfd1f1e4eecd24e35760a9e4e72"
          }}
          style={styles.ImageBackground_923_434}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/7b9b/1f628b184155cee27f10a693d3b68162"
          }}
          style={styles.ImageBackground_923_436}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feb8/1852/c5a4c1ccf07ad5152166fae30119f59a"
          }}
          style={styles.ImageBackground_923_438}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_923_440}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11dd/e31e/fe16941fcb0d47281db11555e7a4a442"
          }}
          style={styles.ImageBackground_923_442}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7829/f76b/ee2c4e5f399c682d3c4d923f8aeb443b"
          }}
          style={styles.ImageBackground_923_444}
        />
      </View>
      <View style={styles.View_923_446}>
        <View style={styles.View_923_447}>
          <View style={styles.View_923_448} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_923_449}
          />
          <View style={styles.View_923_450} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_923_451}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_923_455}
        />
        <View style={styles.View_923_460}>
          <View style={styles.View_923_461}>
            <Text style={styles.Text_923_461}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_923_462}>
        <View style={styles.View_923_478}>
          <Text style={styles.Text_923_478}>Transaction History</Text>
        </View>
      </View>
      <View style={styles.View_923_484}>
        <Text style={styles.Text_923_484}>
          Keep track of the ins &amp; outs
        </Text>
      </View>
      <View style={styles.View_923_485}>
        <View style={styles.View_923_486}>
          <View style={styles.View_923_487}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d38/f7cf/9fc2168829f369bb7935d816b414de27"
              }}
              style={styles.ImageBackground_923_488}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28bb/e31b/f666bbd440ad60bfe779cca3de7d76af"
            }}
            style={styles.ImageBackground_923_491}
          />
        </View>
        <View style={styles.View_923_492}>
          <View style={styles.View_923_493}>
            <View style={styles.View_923_494}>
              <View style={styles.View_923_495} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f370/44e5/fca889631942fd1db84d9b42cee5f892"
                }}
                style={styles.ImageBackground_923_496}
              />
            </View>
            <View style={styles.View_923_497}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4231/d1f1/283f3fc2b5658849089d5c52f35615b6"
                }}
                style={styles.ImageBackground_923_498}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf56/ca63/7165d359edc5d640898501355b8510bc"
                }}
                style={styles.ImageBackground_923_499}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c73a/9a87/5d76a20ae35da8c5b76921a830612283"
                }}
                style={styles.ImageBackground_923_501}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d8e/eb73/90cebec5c99a507a90f1f1eaab422eed"
              }}
              style={styles.ImageBackground_923_502}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16d9/9fc7/576703c92fa6041100ec99662bfc05a5"
              }}
              style={styles.ImageBackground_923_506}
            />
            <View style={styles.View_923_510} />
            <View style={styles.View_923_511}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd09/4c5b/d105f300b2029f3473c246d6843debe0"
                }}
                style={styles.ImageBackground_923_512}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26db/0172/3ed25bbe2cc74e08230ea0473407f7c7"
                }}
                style={styles.ImageBackground_923_513}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc90/4987/8202fde27fdfffcf835e0bc8c885fb63"
                }}
                style={styles.ImageBackground_923_514}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc90/4987/8202fde27fdfffcf835e0bc8c885fb63"
                }}
                style={styles.ImageBackground_923_517}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_923_520} />
      <View style={styles.View_932_6}>
        <View style={styles.View_932_7}>
          <View style={styles.View_932_8} />
          <View style={styles.View_932_9}>
            <View style={styles.View_932_10}>
              <Text style={styles.Text_932_10}>Total Income</Text>
            </View>
            <View style={styles.View_932_11}>
              <Text style={styles.Text_932_11}>$980</Text>
            </View>
          </View>
          <View style={styles.View_932_12}>
            <View style={styles.View_932_13} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0be5/5cf9/0e9fdba6a296b0967cc7c70e27beeaed"
              }}
              style={styles.ImageBackground_932_14}
            />
          </View>
        </View>
        <View style={styles.View_932_17}>
          <View style={styles.View_932_18} />
          <View style={styles.View_932_19}>
            <View style={styles.View_932_20}>
              <Text style={styles.Text_932_20}>Total Spent</Text>
            </View>
            <View style={styles.View_932_21}>
              <Text style={styles.Text_932_21}>$2,860</Text>
            </View>
          </View>
          <View style={styles.View_932_22}>
            <View style={styles.View_932_23} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4053/6ad6/375761080be35b6f5637aa1ad19acf37"
              }}
              style={styles.ImageBackground_932_24}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_924_3}>
        <View style={styles.View_924_4}>
          <Text style={styles.Text_924_4}>All</Text>
        </View>
        <View style={styles.View_924_5}>
          <Text style={styles.Text_924_5}>Income</Text>
        </View>
        <View style={styles.View_924_6}>
          <Text style={styles.Text_924_6}>Expense</Text>
        </View>
      </View>
      <View style={styles.View_923_521}>
        <View style={styles.View_923_522}>
          <Text style={styles.Text_923_522}>Mar 2021</Text>
        </View>
      </View>
      <View style={styles.View_923_895}>
        <View style={styles.View_923_896}>
          <Text style={styles.Text_923_896}>Feb 2021</Text>
        </View>
      </View>
      <View style={styles.View_923_532}>
        <View style={styles.View_923_533}>
          <View style={styles.View_923_534}>
            <Text style={styles.Text_923_534}>Ijeoma Ogbuafor</Text>
          </View>
          <View style={styles.View_923_535}>
            <Text style={styles.Text_923_535}>08 Apr 2020 10:00</Text>
          </View>
        </View>
        <View style={styles.View_923_536}>
          <View style={styles.View_923_537}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
              }}
              style={styles.ImageBackground_923_538}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75b/355b/a5d49f4a16681081c32af48be8a28ab8"
              }}
              style={styles.ImageBackground_923_540}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
              }}
              style={styles.ImageBackground_923_542}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af38/901a/8dfec4f2a8b47e942d9872100edad66d"
              }}
              style={styles.ImageBackground_923_544}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d22/01f2/6d414b53dfda06ee9393182eda3902bf"
              }}
              style={styles.ImageBackground_923_546}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdda/f105/02916da6878576b3789d2c3640f79324"
              }}
              style={styles.ImageBackground_923_548}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cac/e9c6/5860c3edbbc67c76c727567ad5ff1cea"
              }}
              style={styles.ImageBackground_923_550}
            />
          </View>
          <View style={styles.View_923_552}>
            <Text style={styles.Text_923_552}>+ 32,123</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_923_897}>
        <View style={styles.View_923_898}>
          <View style={styles.View_923_899}>
            <Text style={styles.Text_923_899}>Ijeoma Ogbuafor</Text>
          </View>
          <View style={styles.View_923_900}>
            <Text style={styles.Text_923_900}>08 Apr 2020 10:00</Text>
          </View>
        </View>
        <View style={styles.View_923_901}>
          <View style={styles.View_923_902}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
              }}
              style={styles.ImageBackground_923_903}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75b/355b/a5d49f4a16681081c32af48be8a28ab8"
              }}
              style={styles.ImageBackground_923_905}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
              }}
              style={styles.ImageBackground_923_907}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af38/901a/8dfec4f2a8b47e942d9872100edad66d"
              }}
              style={styles.ImageBackground_923_909}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d22/01f2/6d414b53dfda06ee9393182eda3902bf"
              }}
              style={styles.ImageBackground_923_911}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdda/f105/02916da6878576b3789d2c3640f79324"
              }}
              style={styles.ImageBackground_923_913}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cac/e9c6/5860c3edbbc67c76c727567ad5ff1cea"
              }}
              style={styles.ImageBackground_923_915}
            />
          </View>
          <View style={styles.View_923_917}>
            <Text style={styles.Text_923_917}>+ 32,123</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/938a/16ac/ddde74b7c867bbd78c03b2b0fa45ac58"
        }}
        style={styles.ImageBackground_923_553}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/938a/16ac/ddde74b7c867bbd78c03b2b0fa45ac58"
        }}
        style={styles.ImageBackground_923_918}
      />
      <View style={styles.View_923_554}>
        <View style={styles.View_923_555}>
          <View style={styles.View_923_556}>
            <Text style={styles.Text_923_556}>Moyin baby</Text>
          </View>
          <View style={styles.View_923_557}>
            <Text style={styles.Text_923_557}>08 Apr 2020 10:00</Text>
          </View>
        </View>
        <View style={styles.View_923_558}>
          <View style={styles.View_923_559}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
              }}
              style={styles.ImageBackground_923_560}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75b/355b/a5d49f4a16681081c32af48be8a28ab8"
              }}
              style={styles.ImageBackground_923_562}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
              }}
              style={styles.ImageBackground_923_564}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af38/901a/8dfec4f2a8b47e942d9872100edad66d"
              }}
              style={styles.ImageBackground_923_566}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d22/01f2/6d414b53dfda06ee9393182eda3902bf"
              }}
              style={styles.ImageBackground_923_568}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdda/f105/02916da6878576b3789d2c3640f79324"
              }}
              style={styles.ImageBackground_923_570}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cac/e9c6/5860c3edbbc67c76c727567ad5ff1cea"
              }}
              style={styles.ImageBackground_923_572}
            />
          </View>
          <View style={styles.View_923_574}>
            <Text style={styles.Text_923_574}>+ 500</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_923_919}>
        <View style={styles.View_923_920}>
          <View style={styles.View_923_921}>
            <Text style={styles.Text_923_921}>Moyin baby</Text>
          </View>
          <View style={styles.View_923_922}>
            <Text style={styles.Text_923_922}>08 Apr 2020 10:00</Text>
          </View>
        </View>
        <View style={styles.View_923_923}>
          <View style={styles.View_923_924}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
              }}
              style={styles.ImageBackground_923_925}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75b/355b/a5d49f4a16681081c32af48be8a28ab8"
              }}
              style={styles.ImageBackground_923_927}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
              }}
              style={styles.ImageBackground_923_929}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af38/901a/8dfec4f2a8b47e942d9872100edad66d"
              }}
              style={styles.ImageBackground_923_931}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d22/01f2/6d414b53dfda06ee9393182eda3902bf"
              }}
              style={styles.ImageBackground_923_933}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdda/f105/02916da6878576b3789d2c3640f79324"
              }}
              style={styles.ImageBackground_923_935}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cac/e9c6/5860c3edbbc67c76c727567ad5ff1cea"
              }}
              style={styles.ImageBackground_923_937}
            />
          </View>
          <View style={styles.View_923_939}>
            <Text style={styles.Text_923_939}>+ 500</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/938a/16ac/ddde74b7c867bbd78c03b2b0fa45ac58"
        }}
        style={styles.ImageBackground_923_575}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/938a/16ac/ddde74b7c867bbd78c03b2b0fa45ac58"
        }}
        style={styles.ImageBackground_923_940}
      />
      <View style={styles.View_923_576}>
        <View style={styles.View_923_577}>
          <View style={styles.View_923_578}>
            <Text style={styles.Text_923_578}>Ijeoma Ogbuafor</Text>
          </View>
          <View style={styles.View_923_579}>
            <Text style={styles.Text_923_579}>08 Apr 2020 10:00</Text>
          </View>
        </View>
        <View style={styles.View_923_580}>
          <View style={styles.View_923_581}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
              }}
              style={styles.ImageBackground_923_582}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75b/355b/a5d49f4a16681081c32af48be8a28ab8"
              }}
              style={styles.ImageBackground_923_584}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
              }}
              style={styles.ImageBackground_923_586}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af38/901a/8dfec4f2a8b47e942d9872100edad66d"
              }}
              style={styles.ImageBackground_923_588}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d22/01f2/6d414b53dfda06ee9393182eda3902bf"
              }}
              style={styles.ImageBackground_923_590}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdda/f105/02916da6878576b3789d2c3640f79324"
              }}
              style={styles.ImageBackground_923_592}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cac/e9c6/5860c3edbbc67c76c727567ad5ff1cea"
              }}
              style={styles.ImageBackground_923_594}
            />
          </View>
          <View style={styles.View_923_596}>
            <Text style={styles.Text_923_596}>- 32,123</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_923_941}>
        <View style={styles.View_923_942}>
          <View style={styles.View_923_943}>
            <Text style={styles.Text_923_943}>Ijeoma Ogbuafor</Text>
          </View>
          <View style={styles.View_923_944}>
            <Text style={styles.Text_923_944}>08 Apr 2020 10:00</Text>
          </View>
        </View>
        <View style={styles.View_923_945}>
          <View style={styles.View_923_946}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
              }}
              style={styles.ImageBackground_923_947}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75b/355b/a5d49f4a16681081c32af48be8a28ab8"
              }}
              style={styles.ImageBackground_923_949}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
              }}
              style={styles.ImageBackground_923_951}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af38/901a/8dfec4f2a8b47e942d9872100edad66d"
              }}
              style={styles.ImageBackground_923_953}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d22/01f2/6d414b53dfda06ee9393182eda3902bf"
              }}
              style={styles.ImageBackground_923_955}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdda/f105/02916da6878576b3789d2c3640f79324"
              }}
              style={styles.ImageBackground_923_957}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cac/e9c6/5860c3edbbc67c76c727567ad5ff1cea"
              }}
              style={styles.ImageBackground_923_959}
            />
          </View>
          <View style={styles.View_923_961}>
            <Text style={styles.Text_923_961}>- 32,123</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_924_11}>
        <View style={styles.View_924_12}>
          <Text style={styles.Text_924_12}>Sort by</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f4e/6b5a/46ace27baf7cf040e121302339f0bc8f"
          }}
          style={styles.ImageBackground_924_13}
        />
      </View>
      <View style={styles.View_923_677}>
        <View style={styles.View_I923_677_893_130} />
        <View style={styles.View_I923_677_893_131}>
          <Text style={styles.Text_I923_677_893_131}>Home</Text>
        </View>
        <View style={styles.View_I923_677_893_138}>
          <View style={styles.View_I923_677_897_0}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4b2/7baf/7fc9f659aa7b9182347dffe673e2164a"
              }}
              style={styles.ImageBackground_I923_677_897_1}
            />
          </View>
        </View>
        <View style={styles.View_I923_677_899_3343}>
          <View style={styles.View_I923_677_899_3364}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/163f/6a0e/0f3590136b556d75c1de87588fe2caae"
              }}
              style={styles.ImageBackground_I923_677_899_3365}
            />
          </View>
          <View style={styles.View_I923_677_899_3349}>
            <Text style={styles.Text_I923_677_899_3349}>Transactions</Text>
          </View>
        </View>
        <View style={styles.View_I923_677_899_3350}>
          <View style={styles.View_I923_677_899_3351}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9747/cfaf/da36727aa67ec35e7b8e6c50afa74ec0"
              }}
              style={styles.ImageBackground_I923_677_899_3352}
            />
          </View>
          <View style={styles.View_I923_677_899_3356}>
            <Text style={styles.Text_I923_677_899_3356}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_923_678}>
        <View style={styles.View_923_679} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_923_433: {
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
  ImageBackground_923_434: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25803129269126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_923_436: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97792862021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_923_438: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.285182932035519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_923_440: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.2770609204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_923_442: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5036554388661205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_923_444: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.63973382001366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_923_446: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_447: {
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
  View_923_448: {
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
  ImageBackground_923_449: {
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
  View_923_450: {
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
  ImageBackground_923_451: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3676304217896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_923_455: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413523522882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_923_460: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_461: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_923_461: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_462: {
    width: wp("51.690821256038646%"),
    minWidth: wp("51.690821256038646%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_478: {
    width: wp("51.690821256038646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_923_478: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_484: {
    width: wp("41.54589371980676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("15.983606557377051%"),
    justifyContent: "flex-start"
  },
  Text_923_484: {
    color: "rgba(242, 245, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_485: {
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
  View_923_486: {
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
  View_923_487: {
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
  ImageBackground_923_488: {
    width: wp("5.072463768115942%"),
    height: hp("3.0481614701734867%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%")
  },
  ImageBackground_923_491: {
    width: wp("1.6908212560386473%"),
    height: hp("0.9562841530054645%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995176%")
  },
  View_923_492: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429944%")
  },
  View_923_493: {
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
  View_923_494: {
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
  View_923_495: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(165, 171, 193, 1)"
  },
  ImageBackground_923_496: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_923_497: {
    width: wp("6.062663350128322%"),
    height: hp("4.30327868852459%"),
    top: hp("1.6137295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.233591862922708%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_923_498: {
    width: wp("6.062663350128322%"),
    height: hp("4.30327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_923_499: {
    width: wp("0.9170322602497782%"),
    height: hp("0.4842057254145054%"),
    top: hp("1.9911469006147549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.975213239734302%")
  },
  ImageBackground_923_501: {
    width: wp("0.1262895151036949%"),
    height: hp("0.18652618908491292%"),
    top: hp("1.149995730874318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9637398097826093%")
  },
  ImageBackground_923_502: {
    width: wp("6.062663350128322%"),
    height: hp("1.9723360655737705%"),
    top: hp("3.9446721311475397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.233591862922708%")
  },
  ImageBackground_923_506: {
    width: wp("4.148139124331267%"),
    height: hp("1.9723360655737705%"),
    top: hp("1.255122950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.509963768115952%")
  },
  View_923_510: {
    width: wp("3.509963998472057%"),
    height: hp("1.4344262295081966%"),
    top: hp("2.3309426229508183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8290567444142596%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_511: {
    width: wp("1.5954376994699673%"),
    height: hp("0.8965163934426229%"),
    top: hp("2.3309426229508183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.4244626547403385%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_923_512: {
    width: wp("1.5954376994699673%"),
    height: hp("0.8965163934426229%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_923_513: {
    width: wp("0.4016487494758938%"),
    height: hp("0.11851259919463612%"),
    top: hp("1.0666143698770512%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6025083974939633%")
  },
  ImageBackground_923_514: {
    width: wp("0.3670613546878243%"),
    height: hp("0.22814358518423278%"),
    top: hp("0.3367272882513692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2380665949577292%")
  },
  ImageBackground_923_517: {
    width: wp("0.3670614122768531%"),
    height: hp("0.22814338975916795%"),
    top: hp("0.29550354337431806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2225902022946968%")
  },
  View_923_520: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("90.43715846994536%"),
    minHeight: hp("90.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.967213114754102%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_932_6: {
    width: wp("90.33816425120773%"),
    height: hp("6.830601092896176%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  View_932_7: {
    width: wp("39.130434782608695%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_932_8: {
    width: wp("39.130434782608695%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_932_9: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.217391304347828%"),
    top: hp("0.2732240437158495%")
  },
  View_932_10: {
    width: wp("19.806763285024154%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_932_10: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_932_11: {
    width: wp("11.352657004830919%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_932_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_932_12: {
    width: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_932_13: {
    width: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 255, 247, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_932_14: {
    width: wp("3.3816425120772946%"),
    height: hp("3.1420765027322406%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%")
  },
  View_932_17: {
    width: wp("39.371980676328505%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.96618357487923%")
  },
  View_932_18: {
    width: wp("39.371980676328505%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_932_19: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.311332370923914%"),
    top: hp("0.2732240437158495%")
  },
  View_932_20: {
    width: wp("17.391304347826086%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_932_20: {
    color: "rgba(228, 230, 235, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_932_21: {
    width: wp("14.975845410628018%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_932_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_932_22: {
    width: wp("11.665771779230827%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_932_23: {
    width: wp("11.665771779230827%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 217, 217, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_932_24: {
    width: wp("3.402516922513068%"),
    height: hp("3.1420765027322406%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.131637794384055%")
  },
  View_924_3: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("35.24590163934426%")
  },
  View_924_4: {
    width: wp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_924_4: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_924_5: {
    width: wp("11.352657004830919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.386473429951693%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_924_5: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_924_6: {
    width: wp("12.80193236714976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.019323671497588%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_924_6: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_521: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("40.84699453551913%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_522: {
    width: wp("15.70048309178744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_923_522: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_895: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("76.36612021857924%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_896: {
    width: wp("15.217391304347828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_923_896: {
    color: "rgba(165, 171, 193, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_532: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("45.90163934426229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_533: {
    width: wp("69.44619883661684%"),
    minWidth: wp("69.44619883661684%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_534: {
    width: wp("69.44619883661684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_923_534: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_535: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%"),
    justifyContent: "flex-start"
  },
  Text_923_535: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_536: {
    width: wp("17.027231115073974%"),
    minWidth: wp("17.027231115073974%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.31094787892512%"),
    top: hp("2.0833333333333357%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_537: {
    width: wp("4.225298287211985%"),
    minWidth: wp("4.225298287211985%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_923_538: {
    width: wp("0.9737177171568939%"),
    height: hp("0.875303458646347%"),
    top: hp("0.8927809084699447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.877347052385261%")
  },
  ImageBackground_923_540: {
    width: wp("2.349563266920007%"),
    height: hp("0.816937548215272%"),
    top: hp("1.710318476775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8757548309178844%")
  },
  ImageBackground_923_542: {
    width: wp("1.2112345672459994%"),
    height: hp("0.854454144754045%"),
    top: hp("1.4888575819672099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_923_544: {
    width: wp("3.6319147561483334%"),
    height: hp("0.7197469961447793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4470014341787447%")
  },
  ImageBackground_923_546: {
    width: wp("2.8232761051343833%"),
    height: hp("1.199759290518005%"),
    top: hp("1.1113067793715814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472811933876727%")
  },
  ImageBackground_923_548: {
    width: wp("1.7213937740970926%"),
    height: hp("1.4655840201456038%"),
    top: hp("0.20918715846994473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.346757529438406%")
  },
  ImageBackground_923_550: {
    width: wp("2.0654116275805783%"),
    height: hp("1.5902609121604043%"),
    top: hp("0.393293203551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6774017776268124%")
  },
  View_923_552: {
    width: wp("11.83574879227053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1914675800120875%"),
    top: hp("0.03415300546448208%"),
    justifyContent: "flex-start"
  },
  Text_923_552: {
    color: "rgba(33, 150, 83, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_897: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("82.37704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_898: {
    width: wp("69.44619883661684%"),
    minWidth: wp("69.44619883661684%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_899: {
    width: wp("69.44619883661684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_923_899: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_900: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    justifyContent: "flex-start"
  },
  Text_923_900: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_901: {
    width: wp("17.027231115073974%"),
    minWidth: wp("17.027231115073974%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.31094787892512%"),
    top: hp("2.0833333333333286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_902: {
    width: wp("4.225298287211985%"),
    minWidth: wp("4.225298287211985%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_923_903: {
    width: wp("0.9737177171568939%"),
    height: hp("0.875303458646347%"),
    top: hp("0.8927809084699447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.877347052385261%")
  },
  ImageBackground_923_905: {
    width: wp("2.349563266920007%"),
    height: hp("0.816937548215272%"),
    top: hp("1.710318476775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8757548309178844%")
  },
  ImageBackground_923_907: {
    width: wp("1.2112345672459994%"),
    height: hp("0.854454144754045%"),
    top: hp("1.488857581967224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_923_909: {
    width: wp("3.6319147561483334%"),
    height: hp("0.7197469961447793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4470014341787447%")
  },
  ImageBackground_923_911: {
    width: wp("2.8232761051343833%"),
    height: hp("1.199759290518005%"),
    top: hp("1.1113067793715743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472811933876727%")
  },
  ImageBackground_923_913: {
    width: wp("1.7213937740970926%"),
    height: hp("1.4655840201456038%"),
    top: hp("0.20918715846994473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.346757529438406%")
  },
  ImageBackground_923_915: {
    width: wp("2.0654116275805783%"),
    height: hp("1.5902609121604043%"),
    top: hp("0.3932932035519201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6774017776268124%")
  },
  View_923_917: {
    width: wp("11.83574879227053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1914675800120875%"),
    top: hp("0.03415300546447497%"),
    justifyContent: "flex-start"
  },
  Text_923_917: {
    color: "rgba(33, 150, 83, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_923_553: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("0.000003988962752338693%"),
    minHeight: hp("0.000003988962752338693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("54.50819672131148%")
  },
  ImageBackground_923_918: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("0.000003988962752338693%"),
    minHeight: hp("0.000003988962752338693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("90.98360655737704%")
  },
  View_923_554: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("56.4207650273224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_555: {
    width: wp("72.34474956125453%"),
    minWidth: wp("72.34474956125453%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_556: {
    width: wp("72.34474956125453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_923_556: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_557: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    justifyContent: "flex-start"
  },
  Text_923_557: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_558: {
    width: wp("14.128680390436294%"),
    minWidth: wp("14.128680390436294%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.20949860356279%"),
    top: hp("2.083333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_559: {
    width: wp("4.225298287211985%"),
    minWidth: wp("4.225298287211985%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_923_560: {
    width: wp("0.9737177171568939%"),
    height: hp("0.875303458646347%"),
    top: hp("0.8927809084699305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.877347052385275%")
  },
  ImageBackground_923_562: {
    width: wp("2.349563266920007%"),
    height: hp("0.816937548215272%"),
    top: hp("1.7103184767759458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8757548309178844%")
  },
  ImageBackground_923_564: {
    width: wp("1.2112345672459994%"),
    height: hp("0.854454144754045%"),
    top: hp("1.4888575819672027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_923_566: {
    width: wp("3.6319147561483334%"),
    height: hp("0.7197469961447793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4470014341787589%")
  },
  ImageBackground_923_568: {
    width: wp("2.8232761051343833%"),
    height: hp("1.199759290518005%"),
    top: hp("1.1113067793715743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472811933876869%")
  },
  ImageBackground_923_570: {
    width: wp("1.7213937740970926%"),
    height: hp("1.4655840201456038%"),
    top: hp("0.20918715846993052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3467575294384204%")
  },
  ImageBackground_923_572: {
    width: wp("2.0654116275805783%"),
    height: hp("1.5902609121604043%"),
    top: hp("0.3932932035518988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6774017776268266%")
  },
  View_923_574: {
    width: wp("8.937198067632849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1914675800120875%"),
    top: hp("0.03415300546447497%"),
    justifyContent: "flex-start"
  },
  Text_923_574: {
    color: "rgba(33, 150, 83, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_919: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("92.89617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_920: {
    width: wp("72.34474956125453%"),
    minWidth: wp("72.34474956125453%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_921: {
    width: wp("72.34474956125453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_923_921: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_922: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    justifyContent: "flex-start"
  },
  Text_923_922: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_923: {
    width: wp("14.128680390436294%"),
    minWidth: wp("14.128680390436294%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.20949860356279%"),
    top: hp("2.0833333333333286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_924: {
    width: wp("4.225298287211985%"),
    minWidth: wp("4.225298287211985%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_923_925: {
    width: wp("0.9737177171568939%"),
    height: hp("0.875303458646347%"),
    top: hp("0.8927809084699447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.877347052385275%")
  },
  ImageBackground_923_927: {
    width: wp("2.349563266920007%"),
    height: hp("0.816937548215272%"),
    top: hp("1.710318476775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8757548309178844%")
  },
  ImageBackground_923_929: {
    width: wp("1.2112345672459994%"),
    height: hp("0.854454144754045%"),
    top: hp("1.4888575819672099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_923_931: {
    width: wp("3.6319147561483334%"),
    height: hp("0.7197469961447793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4470014341787589%")
  },
  ImageBackground_923_933: {
    width: wp("2.8232761051343833%"),
    height: hp("1.199759290518005%"),
    top: hp("1.1113067793715885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472811933876869%")
  },
  ImageBackground_923_935: {
    width: wp("1.7213937740970926%"),
    height: hp("1.4655840201456038%"),
    top: hp("0.20918715846994473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3467575294384204%")
  },
  ImageBackground_923_937: {
    width: wp("2.0654116275805783%"),
    height: hp("1.5902609121604043%"),
    top: hp("0.3932932035519059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6774017776268266%")
  },
  View_923_939: {
    width: wp("8.937198067632849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1914675800120875%"),
    top: hp("0.03415300546448918%"),
    justifyContent: "flex-start"
  },
  Text_923_939: {
    color: "rgba(33, 150, 83, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_923_575: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("0.000003988962752338693%"),
    minHeight: hp("0.000003988962752338693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("65.02732240437157%")
  },
  ImageBackground_923_940: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("0.000003988962752338693%"),
    minHeight: hp("0.000003988962752338693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("101.50273224043715%")
  },
  View_923_576: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("66.93989071038251%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_577: {
    width: wp("69.92929062405646%"),
    minWidth: wp("69.92929062405646%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_578: {
    width: wp("69.92929062405646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_923_578: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_579: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_923_579: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_580: {
    width: wp("16.544139327634362%"),
    minWidth: wp("16.544139327634362%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.79403966636472%"),
    top: hp("2.0833333333333286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_581: {
    width: wp("4.225298287211985%"),
    minWidth: wp("4.225298287211985%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_923_582: {
    width: wp("0.9737177171568939%"),
    height: hp("0.875303458646347%"),
    top: hp("0.892780908469959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.877347052385275%")
  },
  ImageBackground_923_584: {
    width: wp("2.349563266920007%"),
    height: hp("0.816937548215272%"),
    top: hp("1.710318476775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8757548309178844%")
  },
  ImageBackground_923_586: {
    width: wp("1.2112345672459994%"),
    height: hp("0.854454144754045%"),
    top: hp("1.488857581967224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_923_588: {
    width: wp("3.6319147561483334%"),
    height: hp("0.7197469961447793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4470014341787589%")
  },
  ImageBackground_923_590: {
    width: wp("2.8232761051343833%"),
    height: hp("1.199759290518005%"),
    top: hp("1.1113067793715885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472811933876869%")
  },
  ImageBackground_923_592: {
    width: wp("1.7213937740970926%"),
    height: hp("1.4655840201456038%"),
    top: hp("0.20918715846995894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3467575294384204%")
  },
  ImageBackground_923_594: {
    width: wp("2.0654116275805783%"),
    height: hp("1.5902609121604043%"),
    top: hp("0.3932932035519201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6774017776268266%")
  },
  View_923_596: {
    width: wp("11.352657004830919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1914675800120875%"),
    top: hp("0.03415300546447497%"),
    justifyContent: "flex-start"
  },
  Text_923_596: {
    color: "rgba(235, 87, 87, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_941: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("103.4153005464481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_942: {
    width: wp("69.92929062405646%"),
    minWidth: wp("69.92929062405646%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_943: {
    width: wp("69.92929062405646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_923_943: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_944: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218364%"),
    justifyContent: "flex-start"
  },
  Text_923_944: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_945: {
    width: wp("16.544139327634362%"),
    minWidth: wp("16.544139327634362%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.79403966636472%"),
    top: hp("2.0833333333333286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_923_946: {
    width: wp("4.225298287211985%"),
    minWidth: wp("4.225298287211985%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_923_947: {
    width: wp("0.9737177171568939%"),
    height: hp("0.875303458646347%"),
    top: hp("0.8927809084699305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.877347052385275%")
  },
  ImageBackground_923_949: {
    width: wp("2.349563266920007%"),
    height: hp("0.816937548215272%"),
    top: hp("1.7103184767759672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8757548309178844%")
  },
  ImageBackground_923_951: {
    width: wp("1.2112345672459994%"),
    height: hp("0.854454144754045%"),
    top: hp("1.488857581967224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_923_953: {
    width: wp("3.6319147561483334%"),
    height: hp("0.7197469961447793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4470014341787589%")
  },
  ImageBackground_923_955: {
    width: wp("2.8232761051343833%"),
    height: hp("1.199759290518005%"),
    top: hp("1.1113067793715885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472811933876869%")
  },
  ImageBackground_923_957: {
    width: wp("1.7213937740970926%"),
    height: hp("1.4655840201456038%"),
    top: hp("0.20918715846993052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3467575294384204%")
  },
  ImageBackground_923_959: {
    width: wp("2.0654116275805783%"),
    height: hp("1.5902609121604043%"),
    top: hp("0.3932932035519059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6774017776268266%")
  },
  View_923_961: {
    width: wp("11.352657004830919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1914675800120875%"),
    top: hp("0.03415300546447497%"),
    justifyContent: "flex-start"
  },
  Text_923_961: {
    color: "rgba(235, 87, 87, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_924_11: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.50241545893721%"),
    top: hp("35.24590163934426%")
  },
  View_924_12: {
    width: wp("10.869565217391305%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_924_12: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_924_13: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.801932367149746%")
  },
  View_923_677: {
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
  View_I923_677_893_130: {
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
  View_I923_677_893_131: {
    flexGrow: 1,
    width: wp("9.866665642042667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.00002830615942%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_I923_677_893_131: {
    color: "rgba(52, 67, 86, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I923_677_893_138: {
    flexGrow: 1,
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("2.4590163934426243%")
  },
  View_I923_677_897_0: {
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
  ImageBackground_I923_677_897_1: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I923_677_899_3343: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("5.831488103814464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.78743961352657%"),
    top: hp("2.4590163934426243%")
  },
  View_I923_677_899_3364: {
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
  ImageBackground_I923_677_899_3365: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I923_677_899_3349: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.3724758794398895%"),
    justifyContent: "flex-start"
  },
  Text_I923_677_899_3349: {
    color: "rgba(0, 204, 173, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I923_677_899_3350: {
    flexGrow: 1,
    width: wp("16.425120772946862%"),
    height: hp("5.831492272882514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%"),
    top: hp("2.4590163934426243%")
  },
  View_I923_677_899_3351: {
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
  ImageBackground_I923_677_899_3352: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I923_677_899_3356: {
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
  Text_I923_677_899_3356: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_923_678: {
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
  View_923_679: {
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
