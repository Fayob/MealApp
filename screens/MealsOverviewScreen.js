import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy_data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation])

  function renderMealItem(itemData) {
    const item = itemData.item

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    }
    return <MealItem { ...mealItemProps } />
  }
  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview Screen - {categoryId}</Text> */}
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
