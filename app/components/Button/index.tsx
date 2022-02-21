import React from 'react';
import {Text, Pressable, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../utils';

const index = ({
  onPress,
  title,
  style,
  textStyle,
}: {
  onPress: Function;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}) => {
  onPress = onPress ?? function () {};
  style = style ?? {};
  textStyle = textStyle ?? {};
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={[
        {
          backgroundColor: colors.blueDark,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          borderRadius: 10,
          width: '100%',
        },
        style,
      ]}>
      <Text
        style={[
          {fontFamily: 'Rubik', fontSize: 20, color: colors.fff},
          textStyle,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default index;
