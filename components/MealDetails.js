import { StyleSheet, Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability}) {
  return (
    <View style={styles.details}>
      <Text>DURATION: {duration} minutes</Text>
      <Text>COMPLEXITY: {complexity.toUpperCase()}</Text>
      <Text>AFFORDABILITY: {affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    // flexDirection: 'row',
    // alignItems: 'center',
    padding: 8,
  },
})
