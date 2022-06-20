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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy1}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy2}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy3}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy4}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy6}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy2}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy3}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy1}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy4}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy1}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy4}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy2}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy3}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy1}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="2.000.000"
        image={FoodDummy6}
        rating={3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);
  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

const styles = StyleSheet.create({});
