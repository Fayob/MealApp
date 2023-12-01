import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy_data';
import MealDetails from '../components/MealDetails';

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectMeal.imageUrl }} style={styles.image} />
      <Text style={[styles.text, { fontWeight: 'bold'}]}> {selectMeal.title} </Text>
      <View>
        <MealDetails
          duration={selectMeal.duration}
          complexity={selectMeal.complexity}
          affordability={selectMeal.affordability}
        />
      </View>
      <Text style={styles.text}>Ingredient </Text>
      {selectMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text style={styles.text}>Steps: {selectMeal.steps}</Text>
      {selectMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 400,
  },
  text: {
    margin: 8
  }
})
