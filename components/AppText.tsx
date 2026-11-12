import { Text, TextProps, StyleSheet } from "react-native";
import { colors, scale } from "../theme";

type Props = TextProps & { variant?: "title" | "body" | "caption" };

export default function AppText({ variant = "body", style, ...rest }: Props) {
  return <Text style={[styles[variant], style]} {...rest} />;
}

const styles = StyleSheet.create({
  title: { fontSize: scale(28), fontWeight: "700", color: colors.text },
  body: { fontSize: scale(16), color: colors.text },
  caption: { fontSize: scale(13), color: colors.muted },
});
