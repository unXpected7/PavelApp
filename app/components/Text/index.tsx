import React, {ReactChild} from 'react';
import {View, Text, TextProps, TextStyle} from 'react-native';

const index = ({
  children,
  props,
  style,
}: {
  children?: ReactChild | ReactChild[];
  props?: TextProps;
  style?: TextStyle | TextStyle[];
}) => {
  return (
    <Text style={[{fontFamily: 'Monseratt'}, style]} {...props}>
      {children}
    </Text>
  );
};

export default index;
