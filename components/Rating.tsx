import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, scale } from "../theme";

//define the rating component
export default function Rating({
  value,
  pill,
}: {
  value: string;
  pill?: boolean;
}) {
  return (
    <View style={[styles.row, pill && styles.pill]}>
      <Ionicons name="star-outline" size={scale(18)} color={colors.text} />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

//define the styles for the component
const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: scale(6) },
  pill: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: scale(20),
    paddingHorizontal: scale(12),
    paddingVertical: scale(6),
    backgroundColor: "#fff",
  },
  value: { fontSize: scale(16), fontWeight: "500", color: colors.text },
});
