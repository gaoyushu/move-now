import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const head1 = {
  title: '我的个人中心',
  img: require('../img/mine.png'),
};
const list1 = [
  {title: '账户管理', img: require('../img/11.png')},
  {title: '收货地址', img: require('../img/12.png')},
  {title: '我的信息', img: require('../img/13.png')},
  {title: '我的订单', img: require('../img/14.png')},
  {title: '我的二维码', img: require('../img/15.png')},
  {title: '我的积分', img: require('../img/16.png')},
  {title: '我的收藏', img: require('../img/17.png')},
];

const head2 = {
  title: 'E族活动',
  img: require('../img/tip.png'),
};
const list2 = [
  {title: '居家维修保养', img: require('../img/21.png')},
  {title: '出行接送', img: require('../img/22.png')},
  {title: '我的受赠人', img: require('../img/23.png')},
  {title: '我的住宿优惠', img: require('../img/24.png')},
  {title: '我的活动', img: require('../img/25.png')},
  {title: '我的发布', img: require('../img/26.png')},
];

const styles = StyleSheet.create({
  head: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    backgroundColor: 'white',
  },
  headimg: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  headtext: {
    fontSize: 13,
    marginLeft: 10,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  item: {
    flex: 0,
    width: '33.3%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemimg: {
    width: 25,
    height: 25,
  },
  itemtext: {
    fontSize: 13,
    marginTop: 7,
  },
});

const Type = () => {
  return (
    <View>
      <View marginBottom={5}>
        <View style={styles.head}>
          <Image
            style={styles.headimg}
            source={head1.img}
            resizeMode="contain"
          />
          <Text style={styles.headtext}>{head1.title}</Text>
        </View>
        <View style={styles.list}>
          {list1.map((item, idx) => {
            return (
              <View style={styles.item}>
                <Image
                  style={styles.itemimg}
                  source={item.img}
                  resizeMode="contain"
                />
                <Text style={styles.itemtext}>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View>
        <View style={styles.head}>
          <Image
            style={styles.headimg}
            source={head2.img}
            resizeMode="contain"
          />
          <Text style={styles.headtext}>{head2.title}</Text>
        </View>
        <View style={styles.list}>
          {list2.map((item, idx) => {
            var ret;
            if (idx == list2.length - 1) {
              ret = (
                <TouchableWithoutFeedback onPress={() => Actions.publish()}>
                  <View style={styles.item}>
                    <Image
                      style={styles.itemimg}
                      source={item.img}
                      resizeMode="contain"
                    />
                    <Text style={styles.itemtext}>{item.title}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            } else {
              ret = (
                <View style={styles.item}>
                  <Image
                    style={styles.itemimg}
                    source={item.img}
                    resizeMode="contain"
                  />
                  <Text style={styles.itemtext}>{item.title}</Text>
                </View>
              );
            }
            return ret;
          })}
        </View>
      </View>
    </View>
  );
};

export default Type;
