import React, {LegacyRef, useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  StatusBar,
} from 'react-native';
import {colors} from '../../../utils';
import {Button, TextInput} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

const index = () => {
  const [isfocus, setfocus] = useState<boolean>(false);
  const nav = useNavigation<NativeStackNavigationProp<any, any>>();
  return (
    <ScrollView
      style={{backgroundColor: colors.white, flex: 1, flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={colors.blue} barStyle={'light-content'} />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}>
        <View
          style={{
            position: 'absolute',
            width: Dimensions.get('window').width,
            backgroundColor: colors.blue,
            height: Dimensions.get('window').height / 3.8,
            borderBottomRightRadius: 100,
          }}
        />
        <Pressable
          style={{
            marginLeft: 10,
            marginTop: 10,
            alignItems: 'center',
            position: 'absolute',
          }}
          onPress={() => {
            nav.goBack();
          }}>
          <Icon name="chevron-back" color={colors.white} size={35} />
        </Pressable>
        <KeyboardAvoidingView style={{flex: 1}}>
          <Text
            style={{
              color: colors.white,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 22,
            }}>
            Buat Akun Baru
          </Text>
          <Text
            style={{
              color: colors.white,
              textAlign: 'center',
              fontSize: 16,
              marginTop: 20,
            }}>{`Silahkan Lengkapi Form dibawah ini \nuntuk membuat akun baru`}</Text>

          <View
            style={{
              marginTop: Dimensions.get('window').height / 8,
            }}>
            <TextInput
              style={{marginTop: 25}}
              label="Nama Lengkap"
              textInputProps={{
                contextMenuHidden: true,
                onChangeText: text => {},
              }}
            />
            <TextInput
              style={{marginTop: 25}}
              label="Email"
              textInputProps={{
                contextMenuHidden: true,
                onChangeText: text => {},
                keyboardType: 'email-address',
              }}
            />
            <TextInput
              style={{marginTop: 25}}
              label="Password"
              textInputProps={{
                contextMenuHidden: true,
                onChangeText: text => {},
                secureTextEntry: true,
              }}
            />
            <TextInput
              style={{marginTop: 25}}
              label="Ketik Ulang Password"
              textInputProps={{
                contextMenuHidden: true,
                onChangeText: text => {},
                secureTextEntry: true,
              }}
            />
          </View>
          <Button
            style={{marginTop: Dimensions.get('window').height / 15}}
            onPress={() => {
              nav.navigate('Welcome');
            }}
            title="Daftar"
          />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default index;
