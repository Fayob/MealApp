import { useLayoutEffect } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy_data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList displayedMeal={displayedMeal} />  
}

export default MealsOverviewScreen;

