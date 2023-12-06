import { StyleSheet, Text, View } from 'react-native';

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>
        DURATION: {duration} minutes
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        COMPLEXITY: {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        AFFORDABILITY: {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginBottom: 12,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 8,
  },
});
