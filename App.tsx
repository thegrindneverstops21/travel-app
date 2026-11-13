import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import AppText from './components/AppText';
import AppButton from './components/AppButton';
import Card from './components/Card';
import { colors, scale } from './theme';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <AppText variant="title">Welcome</AppText>
        <AppText variant="caption">Replace with the design content</AppText>
        <Card><AppText>Reusable card</AppText></Card>
        <Card><AppText>Another card</AppText></Card>
        <AppButton title="Get Started" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: scale(20), gap: scale(12) },
});