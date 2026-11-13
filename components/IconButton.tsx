import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../theme";

//define the props for the component
type Props = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  onPress?: () => void;
  size?: number;
  dark?: boolean;
  style?: object;
};

//define the icon button component
export default function IconButton({
  name,
  onPress,
  size = 52,
  dark,
  style,
}: Props) {
  const d = scale(size);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.btn,
        {
          width: d,
          height: d,
          borderRadius: d / 2,
          backgroundColor: dark
            ? pressed
              ? "#3A3F46"
              : "#1A1D21"
            : pressed
              ? "#E5E7EB"
              : "#fff",
        },
        style,
      ]}
    >
      <Ionicons name={name} size={d * 0.45} color={dark ? "#fff" : "#111827"} />
    </Pressable>
  );
}

//define the styles for the component
const styles = StyleSheet.create({
  btn: { alignItems: "center", justifyContent: "center" },
});
