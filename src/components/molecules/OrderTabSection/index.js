import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy6,
} from '../../../assets';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      marginLeft: '3%',
      width: '15%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 14,
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={FoodDummy1}
        rating={3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Avosalado"
      />
      <ItemListFood
        image={FoodDummy2}
        rating={3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Kopi Kudda"
      />
      <ItemListFood
        image={FoodDummy3}
        rating={3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Es Tong-Tong"
      />
      <ItemListFood
        image={FoodDummy4}
        rating={3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Bwang Puttie"
      />
    </View>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={FoodDummy2}
        rating={3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        price="2.000.000"
        name="Kari Sleman"
        date="Jun 12, 14:00"
        status="Cancelled"
      />
      <ItemListFood
        image={FoodDummy3}
        rating={3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        price="2.000.000"
        name="Avosalado"
        date="Jun 12, 14:00"
        status="Cancelled"
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);
  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrder,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
