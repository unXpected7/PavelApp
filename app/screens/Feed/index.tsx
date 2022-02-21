import React from 'react';
import {Dimensions, View} from 'react-native';
import {colors} from '../../utils';
import {Text, NavBarHeader} from '../../components';
import Rive, {Fit} from 'rive-react-native';

const EmptyPost = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 16, marginTop: 5}}>Belum Ada Feed</Text>
    </View>
  );
};

const index = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <NavBarHeader title="Feed" />
      <EmptyPost />
    </View>
  );
};

export default index;
