import React from 'react';
import {View} from 'react-native';
import {colors} from '../../utils';
import {Text, NavBarHeader} from '../../components';

const index = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <NavBarHeader title="Order" />
      <View style={{paddingHorizontal:20}}>

      </View>
    </View>
  );
};

export default index;
