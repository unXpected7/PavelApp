import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Pressable, Dimensions, StatusBar} from 'react-native';
import Rive, {RiveRef} from 'rive-react-native';
import {colors} from '../../utils';

const index = () => {
  const riveRef = React.useRef<RiveRef>(null);
  const nav = useNavigation<NativeStackNavigationProp<any, any>>();
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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.whiteLight,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <StatusBar backgroundColor={colors.whiteLight} barStyle={'dark-content'} />
      <Pressable
        style={{
          height: 300,
          width: Dimensions.get('window').width - 40,
          backgroundColor: colors.whiteLight,
          alignItems: 'center',
          marginTop: Dimensions.get('window').height / 12,
        }}
        onPressIn={teddyHandUp}
        onPressOut={teddyHandRelease}>
        <Rive
          animationName="idle"
          ref={riveRef}
          autoplay={true}
          resourceName="teddy"
          style={{
            width: Dimensions.get('window').width / 1.2,
            height: 300,
          }}
        />
      </Pressable>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Monserrat',
            fontSize: 35,
            textAlign: 'center',
            width: Dimensions.get('window').width - 40,
          }}>
          Sukses Membuat Akun Baru
        </Text>
        <Text
          style={{
            fontFamily: 'Monserrat',
            textAlign: 'center',
            fontSize: 20,
            width: Dimensions.get('window').width - 80,
            marginTop: 20,
          }}>
          Selamat datang di{' '}
          <Text style={{color: colors.blueDark}}>Pavel Clean</Text> dan nikmati
          layanan terbaik {`\n`} dari kami.
        </Text>
        <Pressable
          onPress={() => {
            teddyHappy();
            setTimeout(() => {
              teddyHappy();
            }, 200);
            setTimeout(() => {
              nav.navigate('Bottom');
            }, 1000);
          }}
          style={{
            backgroundColor: colors.blueDark,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            borderRadius: 10,
            width: '100%',
            marginTop: 20,
          }}>
          <Text style={{fontFamily: 'Monserrat', fontSize: 20, color: colors.fff}}>
            Masuk
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default index;
