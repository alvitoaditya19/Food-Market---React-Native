import React from 'react'

import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4
} from '../../assets';
import { Gap } from '../../components/atoms';
import { FoodCard, HomeProfile, HomeTabSection } from '../../components/molecules';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <HomeProfile/>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} />
              <FoodCard image={FoodDummy2} />
              <FoodCard image={FoodDummy3} />
              <FoodCard image={FoodDummy4} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection/>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
