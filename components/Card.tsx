import { View, StyleSheet, ViewProps } from "react-native";
import { colors, scale } from "../theme";

//define the card component
export default function Card({ style, ...rest }: ViewProps) {
  return <View style={[styles.card, style]} {...rest} />;
}

//define the styles for the component
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: scale(16),
    padding: scale(16),
    marginBottom: scale(12),
  },
});
