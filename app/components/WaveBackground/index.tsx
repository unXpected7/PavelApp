import React, { ReactChild, ReactChildren, ReactNode } from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import { colors } from '../../utils'

const index = ({children}:{children:ReactNode}) => {
    return (
        <View style={{flex: 1, backgroundColor: colors.fff}}>
      <View
        style={{
          height: Dimensions.get('window').height / 2.5,
          backgroundColor: colors.blue,
          borderBottomLeftRadius: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo.jpeg')}
          style={{
            width: 100,
            height: 100,
            borderRadius:100,
            marginBottom:20
          }}
        />
        <Text
          style={{
            color: colors.whiteLight,
            fontFamily: 'Rubik',
            fontSize:20,
            fontWeight:"bold"
          }}>
          Pavel Clean ID
        </Text>
      </View>
      <View
        style={{
          backgroundColor: colors.blue,
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.fff,
            borderTopRightRadius: 150,
          }}>
              {children}
          </View>
      </View>
    </View>
    )
}

export default index
