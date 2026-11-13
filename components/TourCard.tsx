import { View, Image, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import IconButton from './IconButton';
import Rating from './Rating';
import { colors, scale } from '../theme';

export type Tour = {
  id: string; title: string; days: number; price: number;
  rating: string; reviews: number; image: string;
};

export default function TourCard({ tour, onPress }: { tour: Tour; onPress?: () => void }) {
  const { width } = useWindowDimensions();
  const [liked, setLiked] = useState(false);

  return (
    <View style={[styles.card, { width: width * 0.78 }]}>
      <View>
        <Image source={{ uri: tour.image }} style={styles.image} />
        <IconButton
          name={liked ? 'heart' : 'heart-outline'}
          size={44}
          onPress={() => setLiked(!liked)}
          style={styles.heart}
        />
      </View>
      <View style={styles.footer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{tour.title}</Text>
          <Text style={styles.meta}>{tour.days} days  •  from ${tour.price}/person</Text>
          <View style={styles.ratingRow}>
            <Rating value={tour.rating} />
            <Text style={styles.meta}>{tour.reviews} reviews</Text>
          </View>
        </View>
        <IconButton name="arrow-forward" dark size={52} onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', borderRadius: scale(28), padding: scale(10),
    marginRight: scale(14), elevation: 2,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10, shadowOffset: { width: 0, height: 4 },
  },
  image: { width: '100%', height: scale(190), borderRadius: scale(22) },
  heart: { position: 'absolute', top: scale(10), right: scale(10) },
  footer: { flexDirection: 'row', alignItems: 'flex-end', padding: scale(8), paddingTop: scale(12) },
  title: { fontSize: scale(20), fontWeight: '600', color: colors.text },
  meta: { fontSize: scale(14), color: colors.muted, marginTop: scale(4) },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: scale(10), marginTop: scale(8) },
});