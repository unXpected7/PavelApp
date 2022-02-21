import React from 'react';
import {ScrollView, View} from 'react-native';
import {colors} from '../../utils';
import {Text, NavBarHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomProfileButton = ({title, icon}: {title: string; icon: string}) => {
  return (
    <View
      style={{
        // marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.gray,
        paddingVertical: 22,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Icon name={icon} size={18} color={'#666'} />
        <Text style={{fontSize: 14, marginLeft: 10}}>{title}</Text>
      </View>
      <Icon name="chevron-forward" size={18} color={'#666'} />
    </View>
  );
};

const index = () => {
  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <NavBarHeader title="Profile" />
      <ScrollView style={{paddingHorizontal: 20, flexGrow: 1}}>
        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: colors.blue,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              width: 35,
              height: 35,
            }}>
            <Text style={{color: colors.white}}>A</Text>
          </View>
          <View style={{marginLeft: 10}}>
            <Text>Ilyas Abdurahman Yusuf</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}>
            <Icon
              style={{marginLeft: 5}}
              name="settings"
              size={25}
              color={colors.black}
            />
          </View>
        </View>
        <View style={{marginTop: 20,marginBottom:60}}>
          <Text style={{fontSize: 18, marginTop: 20}}>Akun Saya</Text>
          <View
            style={{
              borderBottomWidth: 1,
              marginTop: 5,
              borderColor: colors.gray,
            }}
          />
          <CustomProfileButton title="Riwayat Order" icon="cart-outline" />
          <CustomProfileButton title="Voucher Saya" icon="pricetags-outline" />
          <CustomProfileButton title="Masukan Kode Promo" icon="pricetag-outline" />
          <CustomProfileButton title="Alamat Saya" icon="map-outline" />
          <CustomProfileButton title="Keluar Aplikasi" icon="exit-outline" />
          <Text style={{fontSize: 18, marginTop: 40}}>Pavel Clean</Text>
          <View
            style={{
              borderBottomWidth: 1,
              marginTop: 5,
              borderColor: colors.gray,
            }}
          />
          <CustomProfileButton title="Pusat Bantuan" icon="help-circle-outline" />
          <CustomProfileButton title="Undang Teman" icon="share-social-outline" />
          <CustomProfileButton title="Berikan Kami Rating" icon="star-outline" />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
