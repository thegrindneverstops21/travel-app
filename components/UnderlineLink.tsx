import { Pressable, Text, StyleSheet } from "react-native";
import { colors, scale } from "../theme";

export default function UnderlineLink({
  label,
  onPress,
}: {
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Text
          style={[
            styles.text,
            { color: pressed ? colors.primary : colors.text },
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: scale(15),
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
