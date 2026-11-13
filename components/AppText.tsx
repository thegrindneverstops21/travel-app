import { Text, TextProps, StyleSheet } from "react-native";
import { colors, scale } from "../theme";

//define the props for the component
type Props = TextProps & {
  variant?: "title" | "body" | "caption";
};

//define the text component
export default function AppText({ variant = "body", style, ...rest }: Props) {
  return <Text style={[styles[variant], style]} {...rest} />;
}

//define the styles for the component
const styles = StyleSheet.create({
  title: { 
    fontSize: scale(28), 
    fontWeight: "700", 
    color: colors.text 
  },
  body: { 
    fontSize: scale(16), 
    color: colors.text 
  },
  caption: { 
    fontSize: scale(13), 
    color: colors.muted 
  },
});
