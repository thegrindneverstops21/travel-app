import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors, scale } from "../theme";

//define the props for the component
type Props = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

//define the button component
export default function AppButton({
  title,
  onPress,
  disabled = false,
  style,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.btn,
        {
          backgroundColor: disabled
            ? colors.primaryPressed
            : pressed
              ? colors.primaryPressed
              : colors.primary,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

//define the styles for the component
const styles = StyleSheet.create({
  btn: {
    paddingVertical: scale(14),
    borderRadius: scale(12),
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontSize: scale(16),
    fontWeight: "600",
  },
});
