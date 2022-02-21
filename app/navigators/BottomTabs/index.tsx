import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed, Home, Order, Profile} from '../../screens';
import {colors} from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const Bottom = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        backgroundColor: colors.white,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: colors.gray,
      }}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;
        const icon = options.tabBarLabel;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon
              name={icon}
              color={isFocused ? colors.blue : "#999"}
              size={25}
            />
            <Text style={{color: isFocused ? colors.blue : "#999"}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const index = () => {
  return (
    <Bottom.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarLabel: 'home-outline',
        }}
      />
      <Bottom.Screen
        name="Order"
        component={Order}
        options={{
          title: 'Order',
          tabBarLabel: 'cart-outline',
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarLabel: 'person-circle-outline',
        }}
      />
      <Bottom.Screen
        name="Feed"
        component={Feed}
        options={{
          title: 'Feed',
          tabBarLabel: 'logo-rss',
        }}
      />
    </Bottom.Navigator>
  );
};

export default index;
