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
      <View style={styles.View_900_1841}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54ae/a680/3c944c9cc89b1bcb9408c55626431326"
          }}
          style={styles.ImageBackground_900_1842}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/7b9b/1f628b184155cee27f10a693d3b68162"
          }}
          style={styles.ImageBackground_900_1844}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba33/c0dd/f8f0067386506c2e1fcc0b951913dc17"
          }}
          style={styles.ImageBackground_900_1846}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/2a71/040de562c087f07914726d545155177a"
          }}
          style={styles.ImageBackground_900_1848}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c49/33e7/7b99c8271d91f19aac7e1aef27fbd1d2"
          }}
          style={styles.ImageBackground_900_1850}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35da/5c50/e56ac3f26f901c55886f5fe927721f4f"
          }}
          style={styles.ImageBackground_900_1852}
        />
      </View>
      <View style={styles.View_900_1797}>
        <View style={styles.View_900_1798}>
          <View style={styles.View_900_1799} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_900_1800}
          />
          <View style={styles.View_900_1801} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_900_1802}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_900_1806}
        />
        <View style={styles.View_900_1811}>
          <View style={styles.View_900_1812}>
            <Text style={styles.Text_900_1812}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_900_1764}>
        <View style={styles.View_901_1}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e923/25d9/00226a3c4d53904bbb64da27ac2d2eaf"
            }}
            style={styles.ImageBackground_901_2}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b05/96b0/a02c7f200eca4d03263a572b9d0b963a"
            }}
            style={styles.ImageBackground_901_4}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7559/adc4/c30f6384e1e8487c803547f14f7ca39e"
            }}
            style={styles.ImageBackground_901_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51cd/65c4/86a953901fc9234bbc30759715039c48"
            }}
            style={styles.ImageBackground_901_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4746/0fad/d14c8b944502bc6966c7792d4afd5b88"
            }}
            style={styles.ImageBackground_901_10}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a789/4740/6f43a72122b8df6d433a21a6f57afbd2"
            }}
            style={styles.ImageBackground_901_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3758/3b54/7f85ddaa9a32fe3fcb7254033d071551"
            }}
            style={styles.ImageBackground_901_14}
          />
        </View>
        <View style={styles.View_900_1765}>
          <Text style={styles.Text_900_1765}>24,420,000</Text>
        </View>
      </View>
      <View style={styles.View_901_16}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deba/8f6e/97ea92b06686d45615beaddc8f974fb0"
          }}
          style={styles.ImageBackground_901_17}
        />
      </View>
      <View style={styles.View_900_1766}>
        <Text style={styles.Text_900_1766}>Wallet Balance</Text>
      </View>
      <View style={styles.View_900_1767}>
        <View style={styles.View_900_1768}>
          <View style={styles.View_900_1867}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d38/f7cf/9fc2168829f369bb7935d816b414de27"
              }}
              style={styles.ImageBackground_900_1868}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28bb/e31b/f666bbd440ad60bfe779cca3de7d76af"
            }}
            style={styles.ImageBackground_900_1871}
          />
        </View>
        <View style={styles.View_900_1872}>
          <View style={styles.View_900_1873}>
            <View style={styles.View_900_1874}>
              <View style={styles.View_900_1875} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f370/44e5/fca889631942fd1db84d9b42cee5f892"
                }}
                style={styles.ImageBackground_900_1876}
              />
            </View>
            <View style={styles.View_900_1877}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4231/d1f1/283f3fc2b5658849089d5c52f35615b6"
                }}
                style={styles.ImageBackground_900_1878}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf56/ca63/7165d359edc5d640898501355b8510bc"
                }}
                style={styles.ImageBackground_900_1879}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c73a/9a87/5d76a20ae35da8c5b76921a830612283"
                }}
                style={styles.ImageBackground_900_1881}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d8e/eb73/90cebec5c99a507a90f1f1eaab422eed"
              }}
              style={styles.ImageBackground_900_1882}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16d9/9fc7/576703c92fa6041100ec99662bfc05a5"
              }}
              style={styles.ImageBackground_900_1886}
            />
            <View style={styles.View_900_1890} />
            <View style={styles.View_900_1891}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd09/4c5b/d105f300b2029f3473c246d6843debe0"
                }}
                style={styles.ImageBackground_900_1892}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26db/0172/3ed25bbe2cc74e08230ea0473407f7c7"
                }}
                style={styles.ImageBackground_900_1893}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc90/4987/8202fde27fdfffcf835e0bc8c885fb63"
                }}
                style={styles.ImageBackground_900_1894}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc90/4987/8202fde27fdfffcf835e0bc8c885fb63"
                }}
                style={styles.ImageBackground_900_1897}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_900_1813} />
      <View style={styles.View_906_0}>
        <View style={styles.View_906_1}>
          <Text style={styles.Text_906_1}>My Naijcoin</Text>
        </View>
        <View style={styles.View_906_70}>
          <View style={styles.View_906_71}>
            <View style={styles.View_906_72}>
              <View style={styles.View_906_73}>
                <Text style={styles.Text_906_73}>Last 7 days</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1432_74}>
        <View style={styles.View_901_73}>
          <View style={styles.View_901_74}>
            <Text style={styles.Text_901_74}>Transaction History</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b633/af59/e56fda1af144edacf44f30479611074d"
            }}
            style={styles.ImageBackground_901_75}
          />
        </View>
        <View style={styles.View_901_77}>
          <View style={styles.View_901_78}>
            <View style={styles.View_901_81}>
              <View style={styles.View_901_82}>
                <Text style={styles.Text_901_82}>Ijeoma Ogbuafor</Text>
              </View>
              <View style={styles.View_901_83}>
                <Text style={styles.Text_901_83}>08 Apr 2020 10:00</Text>
              </View>
            </View>
            <View style={styles.View_905_0}>
              <View style={styles.View_901_101}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
                  }}
                  style={styles.ImageBackground_901_102}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75b/355b/a5d49f4a16681081c32af48be8a28ab8"
                  }}
                  style={styles.ImageBackground_901_104}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
                  }}
                  style={styles.ImageBackground_901_106}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af38/901a/8dfec4f2a8b47e942d9872100edad66d"
                  }}
                  style={styles.ImageBackground_901_108}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d22/01f2/6d414b53dfda06ee9393182eda3902bf"
                  }}
                  style={styles.ImageBackground_901_110}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdda/f105/02916da6878576b3789d2c3640f79324"
                  }}
                  style={styles.ImageBackground_901_112}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cac/e9c6/5860c3edbbc67c76c727567ad5ff1cea"
                  }}
                  style={styles.ImageBackground_901_114}
                />
              </View>
              <View style={styles.View_901_84}>
                <Text style={styles.Text_901_84}>+ 32,123</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5edd/5722/0da24702089ad9a280ac0a63736b754b"
            }}
            style={styles.ImageBackground_901_85}
          />
          <View style={styles.View_905_22}>
            <View style={styles.View_905_23}>
              <View style={styles.View_905_24}>
                <Text style={styles.Text_905_24}>Moyin baby</Text>
              </View>
              <View style={styles.View_905_25}>
                <Text style={styles.Text_905_25}>08 Apr 2020 10:00</Text>
              </View>
            </View>
            <View style={styles.View_905_26}>
              <View style={styles.View_905_27}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
                  }}
                  style={styles.ImageBackground_905_28}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75b/355b/a5d49f4a16681081c32af48be8a28ab8"
                  }}
                  style={styles.ImageBackground_905_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
                  }}
                  style={styles.ImageBackground_905_32}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af38/901a/8dfec4f2a8b47e942d9872100edad66d"
                  }}
                  style={styles.ImageBackground_905_34}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d22/01f2/6d414b53dfda06ee9393182eda3902bf"
                  }}
                  style={styles.ImageBackground_905_36}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdda/f105/02916da6878576b3789d2c3640f79324"
                  }}
                  style={styles.ImageBackground_905_38}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cac/e9c6/5860c3edbbc67c76c727567ad5ff1cea"
                  }}
                  style={styles.ImageBackground_905_40}
                />
              </View>
              <View style={styles.View_905_42}>
                <Text style={styles.Text_905_42}>+ 500</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5edd/5722/0da24702089ad9a280ac0a63736b754b"
            }}
            style={styles.ImageBackground_905_43}
          />
          <View style={styles.View_905_65}>
            <View style={styles.View_905_66}>
              <View style={styles.View_905_67}>
                <Text style={styles.Text_905_67}>Ijeoma Ogbuafor</Text>
              </View>
              <View style={styles.View_905_68}>
                <Text style={styles.Text_905_68}>08 Apr 2020 10:00</Text>
              </View>
            </View>
            <View style={styles.View_905_69}>
              <View style={styles.View_905_70}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
                  }}
                  style={styles.ImageBackground_905_71}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75b/355b/a5d49f4a16681081c32af48be8a28ab8"
                  }}
                  style={styles.ImageBackground_905_73}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
                  }}
                  style={styles.ImageBackground_905_75}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af38/901a/8dfec4f2a8b47e942d9872100edad66d"
                  }}
                  style={styles.ImageBackground_905_77}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d22/01f2/6d414b53dfda06ee9393182eda3902bf"
                  }}
                  style={styles.ImageBackground_905_79}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdda/f105/02916da6878576b3789d2c3640f79324"
                  }}
                  style={styles.ImageBackground_905_81}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cac/e9c6/5860c3edbbc67c76c727567ad5ff1cea"
                  }}
                  style={styles.ImageBackground_905_83}
                />
              </View>
              <View style={styles.View_905_85}>
                <Text style={styles.Text_905_85}>- 32,123</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_906_4}>
        <View style={styles.View_906_78}>
          <View style={styles.View_906_79}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d25/aea7/8c76a4257caff2fc4f491bd32a9fc035"
              }}
              style={styles.ImageBackground_906_80}
            />
            <View style={styles.View_906_83}>
              <Text style={styles.Text_906_83}>0%</Text>
            </View>
            <View style={styles.View_906_84}>
              <Text style={styles.Text_906_84}>100%</Text>
            </View>
          </View>
          <View style={styles.View_906_85}>
            <Text style={styles.Text_906_85}>You’ve spent</Text>
          </View>
          <View style={styles.View_906_86}>
            <Text style={styles.Text_906_86}>Naijcoins this week</Text>
          </View>
          <View style={styles.View_906_87}>
            <View style={styles.View_906_88}>
              <Text style={styles.Text_906_88}>2,860</Text>
            </View>
            <View style={styles.View_906_89}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c387/fd0e/19c226f22e36f7fb0945f4969d4e7f83"
                }}
                style={styles.ImageBackground_906_90}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9390/0559/079d843a06266542bd58f2c57a662084"
                }}
                style={styles.ImageBackground_906_92}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ca/96c7/f8daa05c01038f2bb6707473ec15c76a"
                }}
                style={styles.ImageBackground_906_94}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c8e/c19c/4dab2bb42e3a4f445d02edec740181b1"
                }}
                style={styles.ImageBackground_906_96}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2227/226d/57f74fcd176fbc7b324a8cf124fa61fb"
                }}
                style={styles.ImageBackground_906_98}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/300d/4c59/45f2e681668aee100f23067d5a72e457"
                }}
                style={styles.ImageBackground_906_100}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60b5/5d28/1bd2e425eba715c05d46c0d442dd5f26"
                }}
                style={styles.ImageBackground_906_102}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_900_1747}>
        <View style={styles.View_1432_67}>
          <View style={styles.View_1432_68}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f9b/a0b7/ed4ce4716658457a5cbf27a939c45ad1"
              }}
              style={styles.ImageBackground_1432_69}
            />
          </View>
        </View>
        <View style={styles.View_900_1750}>
          <Text style={styles.Text_900_1750}>Receive</Text>
        </View>
      </View>
      <View style={styles.View_1432_38}>
        <View style={styles.View_1432_39}>
          <View style={styles.View_1432_40}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c5/9197/e6f3b6b07c405a2879efffb2734a5158"
              }}
              style={styles.ImageBackground_1432_41}
            />
          </View>
        </View>
        <View style={styles.View_1432_46}>
          <Text style={styles.Text_1432_46}>Withdraw</Text>
        </View>
      </View>
      <View style={styles.View_1432_29}>
        <View style={styles.View_1432_56}>
          <View style={styles.View_1432_57}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aac4/4e33/1d0206a8c500d426a84cbb46d3be3062"
              }}
              style={styles.ImageBackground_1432_58}
            />
          </View>
        </View>
        <View style={styles.View_1432_37}>
          <Text style={styles.Text_1432_37}>Send</Text>
        </View>
      </View>
      <View style={styles.View_1432_47}>
        <View style={styles.View_1432_61}>
          <View style={styles.View_1432_62}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90d9/6784/e25caff85ecd93e3906e3f1f5728a681"
              }}
              style={styles.ImageBackground_1432_63}
            />
          </View>
        </View>
        <View style={styles.View_1432_55}>
          <Text style={styles.Text_1432_55}>Fund</Text>
        </View>
      </View>
      <View style={styles.View_899_5748}>
        <View style={styles.View_899_5749} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(8, 35, 102, 1)" },
  View_2: { height: hp("157.37704918032787%") },
  View_900_1841: {
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
  ImageBackground_900_1842: {
    width: wp("96.5626739649381%"),
    height: hp("56.40084938924821%"),
    top: hp("41.25805213803151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.7541633642814%")
  },
  ImageBackground_900_1844: {
    width: wp("70.93567041959163%"),
    height: hp("39.52779300877305%"),
    top: hp("82.97794946555882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.67641813858695%")
  },
  ImageBackground_900_1846: {
    width: wp("122.75025740913723%"),
    height: hp("74.08375557654541%"),
    top: hp("2.2852663133965168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.78264171950483%")
  },
  ImageBackground_900_1848: {
    width: wp("126.68064872999697%"),
    height: hp("73.03355899664874%"),
    top: hp("43.27708176576375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.634454257246375%")
  },
  ImageBackground_900_1850: {
    width: wp("113.07981924158364%"),
    height: hp("62.23695265139387%"),
    top: hp("7.5037012986146685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.83261152626812%")
  },
  ImageBackground_900_1852: {
    width: wp("127.46549597108998%"),
    height: hp("70.61716715494791%"),
    top: hp("32.639779679762206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.54369055706522%")
  },
  View_900_1797: {
    width: wp("100.00084033910778%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10980431008454107%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_900_1798: {
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
  View_900_1799: {
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
  ImageBackground_900_1800: {
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
  View_900_1801: {
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
  ImageBackground_900_1802: {
    width: wp("4.072666168212891%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18570255887681%")
  },
  ImageBackground_900_1806: {
    width: wp("4.53323143115942%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31176168100845%")
  },
  View_900_1811: {
    width: wp("14.40012097934594%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311594%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_900_1812: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_900_1812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_900_1764: {
    width: wp("38.22644735879944%"),
    minWidth: wp("38.22644735879944%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_901_1: {
    width: wp("7.308574344800867%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_901_2: {
    width: wp("1.6842684308111957%"),
    height: hp("1.5140383621382583%"),
    top: hp("1.5442478200776986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.247424139492754%")
  },
  ImageBackground_901_4: {
    width: wp("4.064109359962353%"),
    height: hp("1.4130811222264024%"),
    top: hp("2.958504098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.244475581219806%")
  },
  ImageBackground_901_6: {
    width: wp("2.09510844686757%"),
    height: hp("1.4779747509565508%"),
    top: hp("2.5747622297109807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_901_8: {
    width: wp("6.28223050619669%"),
    height: hp("1.2449677524670877%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7732299214975846%")
  },
  ImageBackground_901_10: {
    width: wp("4.883504489769682%"),
    height: hp("2.0752592816378903%"),
    top: hp("1.9221196409131664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6006802913647338%")
  },
  ImageBackground_901_12: {
    width: wp("2.9775460561116533%"),
    height: hp("2.5350643637401813%"),
    top: hp("0.36212941987918335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0593391455314%")
  },
  ImageBackground_901_14: {
    width: wp("3.5726040457757775%"),
    height: hp("2.7507216552567613%"),
    top: hp("0.6803377078530559%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1716391153381638%")
  },
  View_900_1765: {
    width: wp("29.468599033816425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.757807782306763%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_900_1765: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_901_16: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.68599033816425%"),
    top: hp("11.202185792349727%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_901_17: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_900_1766: {
    width: wp("23.42995169082126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("15.983606557377051%"),
    justifyContent: "flex-start"
  },
  Text_900_1766: {
    color: "rgba(242, 245, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_900_1767: {
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
  View_900_1768: {
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
  View_900_1867: {
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
  ImageBackground_900_1868: {
    width: wp("5.072463768115942%"),
    height: hp("3.0481614701734867%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%")
  },
  ImageBackground_900_1871: {
    width: wp("1.6908212560386473%"),
    height: hp("0.9562841530054645%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995176%")
  },
  View_900_1872: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429944%")
  },
  View_900_1873: {
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
  View_900_1874: {
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
  View_900_1875: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(165, 171, 193, 1)"
  },
  ImageBackground_900_1876: {
    width: wp("10.144927536231885%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_900_1877: {
    width: wp("6.062663350128322%"),
    height: hp("4.30327868852459%"),
    top: hp("1.6137295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.233591862922708%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_900_1878: {
    width: wp("6.062663350128322%"),
    height: hp("4.30327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_900_1879: {
    width: wp("0.9170322602497782%"),
    height: hp("0.4842057254145054%"),
    top: hp("1.9911635768869527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.975213239734302%")
  },
  ImageBackground_900_1881: {
    width: wp("0.1262895151036949%"),
    height: hp("0.18652618908491292%"),
    top: hp("1.149995730874318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9637398097826093%")
  },
  ImageBackground_900_1882: {
    width: wp("6.062663350128322%"),
    height: hp("1.9723360655737705%"),
    top: hp("3.9446721311475397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.233591862922708%")
  },
  ImageBackground_900_1886: {
    width: wp("4.148139124331267%"),
    height: hp("1.9723360655737705%"),
    top: hp("1.255122950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.509963768115952%")
  },
  View_900_1890: {
    width: wp("3.509963998472057%"),
    height: hp("1.4344262295081966%"),
    top: hp("2.3309426229508183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8290567444142596%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_900_1891: {
    width: wp("1.5954376994699673%"),
    height: hp("0.8965163934426229%"),
    top: hp("2.3309426229508183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.4244626547403385%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_900_1892: {
    width: wp("1.5954376994699673%"),
    height: hp("0.8965163934426229%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_900_1893: {
    width: wp("0.4016487494758938%"),
    height: hp("0.11851259919463612%"),
    top: hp("1.0666435533534013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6025083974939633%")
  },
  ImageBackground_900_1894: {
    width: wp("0.3670613546878243%"),
    height: hp("0.22814358518423278%"),
    top: hp("0.33668559757086847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2380665949577292%")
  },
  ImageBackground_900_1897: {
    width: wp("0.3670614122768531%"),
    height: hp("0.22814338975916795%"),
    top: hp("0.29548269803406946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2225902022946968%")
  },
  View_900_1813: {
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
  View_906_0: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("109.69945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_906_1: {
    width: wp("20.77294685990338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_906_1: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_70: {
    width: wp("17.14975845410628%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.20491803278689247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06763285024155%")
  },
  View_906_71: {
    width: wp("17.14975845410628%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_906_72: {
    width: wp("17.14975845410628%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_906_73: {
    width: wp("17.14975845410628%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_906_73: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1432_74: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("41.93989904851861%"),
    minHeight: hp("41.93989904851861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("64.48087431693989%")
  },
  View_901_73: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_901_74: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_901_74: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_901_75: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86956521739131%")
  },
  View_901_77: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("36.47541817420167%"),
    minHeight: hp("36.47541817420167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_901_78: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_901_81: {
    width: wp("59.78436308782457%"),
    minWidth: wp("59.78436308782457%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_901_82: {
    width: wp("59.78436308782457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_901_82: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_901_83: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    justifyContent: "flex-start"
  },
  Text_901_83: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_905_0: {
    width: wp("17.027231115073974%"),
    minWidth: wp("17.027231115073974%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.64911213013285%"),
    top: hp("2.0833333333333286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_901_101: {
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
  ImageBackground_901_102: {
    width: wp("0.9737177171568939%"),
    height: hp("0.875303458646347%"),
    top: hp("0.892830937286547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.877347052385261%")
  },
  ImageBackground_901_104: {
    width: wp("2.349563266920007%"),
    height: hp("0.816937548215272%"),
    top: hp("1.7103851818647513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8757548309178702%")
  },
  ImageBackground_901_106: {
    width: wp("1.2112345672459994%"),
    height: hp("0.854454144754045%"),
    top: hp("1.488874258239406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_901_108: {
    width: wp("3.6319147561483334%"),
    height: hp("0.7197469961447793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4470014341787447%")
  },
  ImageBackground_901_110: {
    width: wp("2.8232761051343833%"),
    height: hp("1.199759290518005%"),
    top: hp("1.1112567505549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472811933876727%")
  },
  ImageBackground_901_112: {
    width: wp("1.7213937740970926%"),
    height: hp("1.4655840201456038%"),
    top: hp("0.2091704821977487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.346757529438406%")
  },
  ImageBackground_901_114: {
    width: wp("2.0654116275805783%"),
    height: hp("1.5902609121604043%"),
    top: hp("0.39335157050462044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6774017776268124%")
  },
  View_901_84: {
    width: wp("11.83574879227053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1914675800120875%"),
    top: hp("0.03415300546448918%"),
    justifyContent: "flex-start"
  },
  Text_901_84: {
    color: "rgba(33, 150, 83, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_901_85: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("0.000003988962752338693%"),
    minHeight: hp("0.000003988962752338693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("12.15846994535518%")
  },
  View_905_22: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("14.89071038251366%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_905_23: {
    width: wp("62.68291381246226%"),
    minWidth: wp("62.68291381246226%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_905_24: {
    width: wp("62.68291381246226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_905_24: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_905_25: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    justifyContent: "flex-start"
  },
  Text_905_25: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_905_26: {
    width: wp("14.128680390436294%"),
    minWidth: wp("14.128680390436294%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.54766285477052%"),
    top: hp("2.0833333333333286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_905_27: {
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
  ImageBackground_905_28: {
    width: wp("0.9737177171568939%"),
    height: hp("0.875303458646347%"),
    top: hp("0.892830937286547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.877347052385275%")
  },
  ImageBackground_905_30: {
    width: wp("2.349563266920007%"),
    height: hp("0.816937548215272%"),
    top: hp("1.7103851818647513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8757548309178844%")
  },
  ImageBackground_905_32: {
    width: wp("1.2112345672459994%"),
    height: hp("0.854454144754045%"),
    top: hp("1.48887425823942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_905_34: {
    width: wp("3.6319147561483334%"),
    height: hp("0.7197469961447793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4470014341787589%")
  },
  ImageBackground_905_36: {
    width: wp("2.8232761051343833%"),
    height: hp("1.199759290518005%"),
    top: hp("1.1112567505549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472811933876869%")
  },
  ImageBackground_905_38: {
    width: wp("1.7213937740970926%"),
    height: hp("1.4655840201456038%"),
    top: hp("0.2091704821977487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3467575294384204%")
  },
  ImageBackground_905_40: {
    width: wp("2.0654116275805783%"),
    height: hp("1.5902609121604043%"),
    top: hp("0.39335157050460623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6774017776268266%")
  },
  View_905_42: {
    width: wp("8.937198067632849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1914675800120875%"),
    top: hp("0.03415300546447497%"),
    justifyContent: "flex-start"
  },
  Text_905_42: {
    color: "rgba(33, 150, 83, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_905_43: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("0.000003988962752338693%"),
    minHeight: hp("0.000003988962752338693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("24.316939890710387%")
  },
  View_905_65: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("27.04918032786884%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_905_66: {
    width: wp("60.26745487526419%"),
    minWidth: wp("60.26745487526419%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_905_67: {
    width: wp("60.26745487526419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_905_67: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_905_68: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    justifyContent: "flex-start"
  },
  Text_905_68: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_905_69: {
    width: wp("16.544139327634362%"),
    minWidth: wp("16.544139327634362%"),
    height: hp("2.527322664938338%"),
    minHeight: hp("2.527322664938338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.13220391757245%"),
    top: hp("2.083333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_905_70: {
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
  ImageBackground_905_71: {
    width: wp("0.9737177171568939%"),
    height: hp("0.875303458646347%"),
    top: hp("0.892830937286547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.877347052385275%")
  },
  ImageBackground_905_73: {
    width: wp("2.349563266920007%"),
    height: hp("0.816937548215272%"),
    top: hp("1.7103851818647513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8757548309178844%")
  },
  ImageBackground_905_75: {
    width: wp("1.2112345672459994%"),
    height: hp("0.854454144754045%"),
    top: hp("1.488874258239406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_905_77: {
    width: wp("3.6319147561483334%"),
    height: hp("0.7197469961447793%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4470014341787589%")
  },
  ImageBackground_905_79: {
    width: wp("2.8232761051343833%"),
    height: hp("1.199759290518005%"),
    top: hp("1.1112567505549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3472811933876869%")
  },
  ImageBackground_905_81: {
    width: wp("1.7213937740970926%"),
    height: hp("1.4655840201456038%"),
    top: hp("0.2091704821977345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3467575294384204%")
  },
  ImageBackground_905_83: {
    width: wp("2.0654116275805783%"),
    height: hp("1.5902609121604043%"),
    top: hp("0.39335990864070425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6774017776268266%")
  },
  View_905_85: {
    width: wp("11.352657004830919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1914675800120875%"),
    top: hp("0.03415300546447497%"),
    justifyContent: "flex-start"
  },
  Text_905_85: {
    color: "rgba(235, 87, 87, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_4: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("115.1639344262295%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_906_78: {
    width: wp("68.11594202898551%"),
    height: hp("27.049180327868854%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.111111111111109%")
  },
  View_906_79: {
    width: wp("68.11594202898551%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_80: {
    width: wp("67.3913043478261%"),
    height: hp("23.778267115191685%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_906_83: {
    width: wp("4.830917874396135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0869565217391344%"),
    top: hp("24.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_906_83: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_84: {
    width: wp("7.487922705314009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.6280193236715%"),
    top: hp("24.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_906_84: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_85: {
    width: wp("16.183574879227052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.72463768115943%"),
    top: hp("9.97267759562844%"),
    justifyContent: "flex-start"
  },
  Text_906_85: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_86: {
    width: wp("24.637681159420293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.739130434782616%"),
    top: hp("18.306010928961754%"),
    justifyContent: "flex-start"
  },
  Text_906_86: {
    color: "rgba(79, 88, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_87: {
    width: wp("20.268360082653984%"),
    minWidth: wp("20.268360082653984%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260875%"),
    top: hp("13.251366120218577%")
  },
  View_906_88: {
    width: wp("14.734299516908212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.534090051328505%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_906_88: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_906_89: {
    width: wp("4.567866855197482%"),
    height: hp("2.73224043715847%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_90: {
    width: wp("1.0526677836542544%"),
    height: hp("0.9462740251926777%"),
    top: hp("0.9651726060877763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.029669572765698%")
  },
  ImageBackground_906_92: {
    width: wp("2.540068695510643%"),
    height: hp("0.8831757665331899%"),
    top: hp("1.849065061475386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0277824954710155%")
  },
  ImageBackground_906_94: {
    width: wp("1.3094429808538317%"),
    height: hp("0.9237343496312209%"),
    top: hp("1.6092102384306486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_906_96: {
    width: wp("3.9263946422632188%"),
    height: hp("0.7781048941481961%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4832097297705289%")
  },
  ImageBackground_906_98: {
    width: wp("3.052190421284109%"),
    height: hp("1.29703719759248%"),
    top: hp("1.2013586492486468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3754104393115938%")
  },
  ImageBackground_906_100: {
    width: wp("1.8609664290423555%"),
    height: hp("1.5844153576209896%"),
    top: hp("0.22634704256319083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5370574803744006%")
  },
  ImageBackground_906_102: {
    width: wp("2.232877758965976%"),
    height: hp("1.7192011973896963%"),
    top: hp("0.42519491226946116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7323039326690832%")
  },
  View_900_1747: {
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
  View_1432_67: {
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
  View_1432_68: {
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
  ImageBackground_1432_69: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_900_1750: {
    width: wp("12.077294685990339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.21739130434782%"),
    top: hp("11.065573770491806%"),
    justifyContent: "flex-start"
  },
  Text_900_1750: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1432_38: {
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
  View_1432_39: {
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
  View_1432_40: {
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
  ImageBackground_1432_41: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1432_46: {
    width: wp("15.217391304347828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.768115942028977%"),
    top: hp("11.065573770491802%"),
    justifyContent: "flex-start"
  },
  Text_1432_46: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1432_29: {
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
  View_1432_56: {
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
  View_1432_57: {
    width: wp("10.92449040804508%"),
    height: hp("6.178604709646089%"),
    top: hp("-1.0088310867059427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7837598128019287%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1432_58: {
    width: wp("10.92449040804508%"),
    height: hp("6.178604709646089%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1432_37: {
    width: wp("7.971014492753622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.14975845410628%"),
    top: hp("11.065573770491806%"),
    justifyContent: "flex-start"
  },
  Text_1432_37: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_1432_47: {
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
  View_1432_61: {
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
  View_1432_62: {
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
  ImageBackground_1432_63: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1432_55: {
    width: wp("7.971014492753622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    top: hp("11.065573770491802%"),
    justifyContent: "flex-start"
  },
  Text_1432_55: {
    color: "rgba(8, 35, 102, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_899_5748: {
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
  View_899_5749: {
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
