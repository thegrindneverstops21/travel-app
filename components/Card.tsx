import { View, StyleSheet, ViewProps } from 'react-native';
import { colors, scale } from '../theme';

export default function Card({ style, ...rest }: ViewProps) {
  return <View style={[styles.card, style]} {...rest} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: scale(16),
    padding: scale(16),
    marginBottom: scale(12),
  },
});