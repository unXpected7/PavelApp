import React from 'react';
import {
  View,
  Pressable,
  Dimensions,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Rive, {RiveRef} from 'rive-react-native';
import {colors} from '../../utils';
import {Text} from '../../components';

const products = [
  {
    name: 'Fast Cleaning',
    picture: 'water-outline',
    price: 20000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum veniam soluta eius vero numquam',
  },
  {
    name: 'Deep Cleaning',
    picture: 'cloudy-outline',
    price: 30000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum veniam soluta eius vero numquam',
  },
  {
    name: 'Repaint',
    picture: 'color-palette-outline',
    price: 50000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum veniam soluta eius vero numquam',
  },
];

const index = () => {
  const riveRef = React.useRef<RiveRef>(null);

  const teddyHappy = () => {
    riveRef.current?.fireState('State Machine 1', 'success');
  };

  const teddyHandUp = () => {
    riveRef.current?.setInputState('State Machine 1', 'hands_up', true);
  };

  const teddyHandRelease = () => {
    setTimeout(() => {
      riveRef.current?.setInputState('State Machine 1', 'hands_up', false);
    }, 500);
  };
  const renderItem = ({item, index}: any) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: colors.gray,
          paddingVertical: 10,
        }}>
        <View style={{flexDirection: 'row', width: '100%', marginBottom: 10}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: Dimensions.get('window').width / 4,
            }}>
            <Icon name={item?.picture} size={50} color={colors.blue} />
          </View>
          <Text style={{flex: 1, marginLeft: 20}}>{item?.description}</Text>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection:'row'
          }}>
          <Text style={{flex:1}}>{item?.name}</Text>
          <Text>{item?.price}</Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
      <StatusBar backgroundColor={colors.blue} barStyle={'light-content'} />
      <View
        style={{
          backgroundColor: colors.blue,
          height: 60,
          position: 'absolute',
          width: Dimensions.get('window').width,
          justifyContent: 'flex-end',
          borderBottomRightRadius: 40,
        }}
      />
      <Image
        style={{width: 80, height: 80, borderRadius: 100}}
        source={require('../../assets/images/logo.jpeg')}
      />
      <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.blue,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            width: 35,
            height: 35,
          }}>
          <Text style={{color: colors.white}}>A</Text>
        </View>
        <View style={{marginLeft: 10}}>
          <Text>Ilyas Abdurahman Yusuf</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}>
          <Icon name="chatbox-ellipses" size={25} color={colors.black} />
          <Icon
            style={{marginLeft: 5}}
            name="notifications"
            size={25}
            color={colors.black}
          />
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 20,
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderColor: colors.gray,
          }}
        />
        <View
          style={{
            backgroundColor: colors.blueDark,
            width: 32,
            borderRadius: 50,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'flex-end',
            top: 3,
            right: 5,
          }}>
          <Icon name="search" color={colors.white} size={22} />
        </View>
        <FlatList
          style={{
            marginTop: 20,
            flexGrow:1,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          data={products}
          keyExtractor={(item,index)=>index.toString()}
          ListFooterComponent={()=><View style={{marginBottom:220}} />}
        />
      </View>
    </View>
  );
};

export default index;
