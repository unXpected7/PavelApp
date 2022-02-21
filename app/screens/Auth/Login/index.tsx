import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  Dimensions,
  Animated,
  TextInput,
  Keyboard,
  BackHandler,
  StatusBar,
} from 'react-native';
import {colors} from '../../../utils';
import {Wavebackground, Button, LoadingSuper} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Loading from './Loading';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function index() {
  const boxNormalY = useRef(new Animated.Value(0));
  const boxLoginY = useRef(new Animated.Value(500));
  const nav = useNavigation<NativeStackNavigationProp<any, any>>();
  const loginShow = useRef(false);

  const [state, setstate] = useState({
    loading: false,
    error: false,
    msg: '',
  });

  const setLoginShow = (bool: boolean) => {
    loginShow.current = bool;
  };

  const showLoginBox = () => {
    setLoginShow(true);
    Animated.parallel([
      Animated.spring(boxNormalY.current, {
        toValue: 700,
        useNativeDriver: true,
      }),
      Animated.spring(boxLoginY.current, {
        toValue: 0,
        useNativeDriver: true,
        tension: 10,
        friction: 4,
      }),
    ]).start();
  };

  const showNormalBox = () => {
    setLoginShow(false);
    Animated.parallel([
      Animated.spring(boxLoginY.current, {
        toValue: 700,
        useNativeDriver: true,
      }),
      Animated.spring(boxNormalY.current, {
        toValue: 0,
        useNativeDriver: true,
        tension: 10,
        friction: 4,
      }),
    ]).start(() => {
      Keyboard.dismiss();
    });
  };

  const Login = (email: string, password: string) => {
    try {
      setstate(prev => {
        return {...prev, loading: true};
      });
      setTimeout(() => {
        setstate(prev => {
          return {...prev, loading: false};
        });
        nav.navigate('Welcome');
      }, 1000);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  useFocusEffect(() => {
    showNormalBox();
  });

  useEffect(() => {
    // const backHandler = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   () => {
    //     if (loginShow.current) {
    //       showNormalBox();
    //       return true;
    //     }
    //     Alert.alert(
    //       'Pavel Clean',
    //       'Apakah anda yakin ingin keluar aplikasi ?',
    //       [
    //         {
    //           text: 'Tidak',
    //           style: 'cancel',
    //         },
    //         {
    //           text: 'Ya',
    //           onPress: () => BackHandler.exitApp(),
    //         },
    //       ],
    //     );
    //     return true;
    //   },
    // );
    // return () => {
    //   backHandler.remove();
    // };
  }, []);

  return (
    <Wavebackground>
      <StatusBar backgroundColor={colors.blue} barStyle={'light-content'} />
      <LoadingSuper isLoading={state.loading} />
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: Dimensions.get('window').height / 5.5,
        }}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: boxNormalY.current,
              },
            ],
          }}>
          <Button onPress={showLoginBox} title="Masuk" />

          <Text
            style={{
              fontFamily: 'Rubik',
              fontSize: 22,
              color: colors.black,
              textAlign: 'center',
              marginVertical: 15,
              fontWeight: 'bold',
            }}>
            Atau
          </Text>
          <Pressable
            style={{
              backgroundColor: colors.fff,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
              borderRadius: 10,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: colors.blue + 'aa',
            }}>
            <Icon
              name="logo-google"
              size={20}
              color={colors.blue}
              style={{
                marginHorizontal: 20,
              }}
            />
            <Text
              style={{
                fontFamily: 'Rubik',
                fontSize: 18,
                color: colors.black,
                flex: 1,
              }}>
              Masuk Dengan Google
            </Text>
          </Pressable>
          <Pressable
            style={{
              alignSelf: 'flex-end',
              marginTop: 20,
            }}
            onPress={() => {
              nav.navigate('AuthRegister');
            }}
            hitSlop={{
              left: 20,
              right: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: colors.blueDark,
              }}>
              Daftar Akun
            </Text>
          </Pressable>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: boxLoginY.current,
              },
            ],
            position: 'absolute',
            width: Dimensions.get('window').width / 1.2,
            paddingHorizontal: 20,
            bottom: Dimensions.get('window').height / 6,
            alignSelf: 'center',
            backgroundColor: colors.fff,
            borderColor: colors.blue + 'aa',
            borderWidth: 1,
            borderRadius: 10,
            paddingVertical: 15,
          }}>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={showNormalBox}>
            <Icon name="arrow-back" color={colors.black} size={20} />
            <Text
              style={{
                paddingLeft: 10,
              }}>
              Kembali
            </Text>
          </Pressable>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: colors.blueDark + 'aa',
            }}
            placeholder="Email"
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: colors.blueDark + 'aa',
              marginTop: 5,
            }}
            placeholder="Password"
            secureTextEntry
          />
          <Pressable
            onPress={_ => Login('andrenuryana@gmail.com', 'password')}
            style={{
              alignSelf: 'flex-end',
              marginTop: 15,
              backgroundColor: colors.blue,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: colors.white,
              }}>
              Masuk
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </Wavebackground>
  );
}
