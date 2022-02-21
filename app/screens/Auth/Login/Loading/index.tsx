import React from 'react';
import {View, Text, Modal} from 'react-native';
import Rive, {Fit} from 'rive-react-native';
import {colors} from '../../../../utils';

const index = ({isLoading}: {isLoading: boolean}) => {
  return (
    <Modal visible={isLoading} transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#eaeaeaaa"
        }}>
        <View
          style={{
            padding: 20,
            backgroundColor: colors.fff,
            borderWidth: 1,
            borderColor: colors.blue + 'aa',
            elevation: 4,
            borderRadius: 10,
          }}>
          <View
            style={{
              height: 70,
            }}>
            <Rive
              autoplay
              resourceName={'runner_boy'}
              style={{
                width: 70,
                height: 70,
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default index;
