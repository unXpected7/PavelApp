import React from 'react';
import {TextStyle, View} from 'react-native';
import {colors} from '../../utils';
import Text from '../Text';

const index = ({
  title,
  titleStyle = {},
}: {
  title: string;
  titleStyle?: TextStyle;
}) => {
  return (
    <View
      style={{
        backgroundColor: colors.blue,
        paddingHorizontal: 20,
        height: 60,
        borderBottomRightRadius: 50,
        justifyContent: 'center',
      }}>
      <Text
        style={[
          {
            color: colors.white,
            fontWeight: 'bold',
            fontSize: 20,
          },
          titleStyle,
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default index;
