import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "./components/IconButton";
import UnderlineLink from "./components/UnderlineLink";
import Rating from "./components/Rating";
import TourCard, { Tour } from "./components/TourCard";
import { colors, scale } from "./theme";

const HERO = require("./assets/rio.jpg");
const TOURS: Tour[] = [
  {
    id: "1",
    title: "Iconic Brazil",
    days: 8,
    price: 659,
    rating: "4.6",
    reviews: 56,
    image: require("./assets/iconic.jpg"),
  },
  {
    id: "2",
    title: "Beach Escape",
    days: 8,
    price: 540,
    rating: "4.8",
    reviews: 41,
    image: require("./assets/beach.jpg"),
  },
  {
    id: "3",
    title: "Amazon Trail",
    days: 6,
    price: 480,
    rating: "4.7",
    reviews: 33,
    image: require("./assets/amazon.jpg"),
  },
];

const DESC =
  "Rio de Janeiro, often simply called Rio, is one of Brazil's most iconic cities, renowned for its stunning beaches, lively carnival, and the towering Christ the Redeemer statue overlooking the bay.";

export default function App() {
  const { height } = useWindowDimensions();
  const heroH = height * 0.42;
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Image
        source={HERO}
        style={[styles.hero, { height: heroH + scale(40) }]}
      />

      <SafeAreaView
        style={styles.topBar}
        edges={["top"]}
        pointerEvents="box-none"
      >
        <IconButton name="chevron-back" onPress={() => {}} />
        <IconButton
          name={liked ? "heart" : "heart-outline"}
          onPress={() => setLiked(!liked)}
        />
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: heroH }}
      >
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <View style={styles.headRow}>
            <View>
              <Text style={styles.city}>Rio de Janeiro</Text>
              <View style={styles.country}>
                <Text style={styles.flag}>🇧🇷</Text>
                <Text style={styles.countryText}>Brazil</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Rating value="5.0" pill />
              <UnderlineLink label="143 reviews" />
            </View>
          </View>

          <Text style={styles.desc} numberOfLines={expanded ? undefined : 2}>
            {DESC}
          </Text>
          <UnderlineLink
            label={expanded ? "Show less" : "Read more"}
            onPress={() => setExpanded(!expanded)}
          />

          <View style={styles.sectionRow}>
            <Text style={styles.section}>Upcoming tours</Text>
            <UnderlineLink label="See all" />
          </View>

          <FlatList
            data={TOURS}
            keyExtractor={(t) => t.id}
            renderItem={({ item }) => <TourCard tour={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: scale(30) }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.sheet },
  hero: { position: "absolute", top: 0, width: "100%" },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingTop: Platform.OS === "android" ? scale(16) : 0,
  },
  sheet: {
    backgroundColor: colors.sheet,
    borderTopLeftRadius: scale(36),
    borderTopRightRadius: scale(36),
    paddingHorizontal: scale(20),
    paddingTop: scale(12),
    minHeight: 600,
  },
  handle: {
    alignSelf: "center",
    width: scale(48),
    height: scale(5),
    borderRadius: 3,
    backgroundColor: "#D1D5DB",
    marginBottom: scale(24),
  },
  headRow: { flexDirection: "row", justifyContent: "space-between" },
  city: { fontSize: scale(28), fontWeight: "700", color: colors.text },
  country: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
    marginTop: scale(10),
  },
  flag: { fontSize: scale(26) },
  countryText: { fontSize: scale(17), color: colors.text },
  right: { alignItems: "flex-end", gap: scale(14) },
  desc: {
    fontSize: scale(16),
    lineHeight: scale(26),
    color: "#374151",
    marginTop: scale(22),
    marginBottom: scale(10),
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale(28),
    marginBottom: scale(16),
  },
  section: { fontSize: scale(24), fontWeight: "700", color: colors.text },
});
