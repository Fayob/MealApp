// import { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"

import MealsList from "../components/MealsList/MealsList"
// import { FavoritesContext } from "../store/context/favorite-context"
import { MEALS } from "../data/dummy_data"

function FavoritesScreen() {
  // const favoriteMealsContext = useContext(FavoritesContext)
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));
  
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet!</Text>
      </View>
    )
  }

  return <MealsList displayedMeal={favoriteMeals} />
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})