import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import {colors} from '../../utils';

const index = ({
  label,
  style,
  textInputStyle,
  textInputProps,
  labelStyle,
}: {
  label?: string;
  style?: ViewStyle;
  textInputStyle?: TextStyle;
  textInputProps?: TextInputProps;
  labelStyle?: TextStyle;
}) => {
  const [isfocus, setfocus] = useState<boolean>(false);
  return (
    <View style={style}>
      {label && (
        <Text
          style={[
            {
              color: colors.blue,
              fontSize: 15,
              marginBottom:-10
            },
            labelStyle,
          ]}>
          {label}
        </Text>
      )}
      <TextInput
        style={[
          {
            borderBottomColor: isfocus ? colors.blueDark : colors.gray,
            borderBottomWidth: 1,
            fontSize: 15,
            fontFamily:"Monserrat"
          },
          textInputStyle,
        ]}
        onFocus={() => setfocus(true)}
        onBlur={() => setfocus(false)}
        {...textInputProps}
      />
    </View>
  );
};

export default index;
