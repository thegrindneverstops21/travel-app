import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("window");
const BASE_WIDTH = 375;

export const scale = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel((width / BASE_WIDTH) * size));

export const colors = {
    primary: '#4F46E5',
    primaryPressd: '#3730A3',
    background: 'FFFFFF',
    text: '#111827',
    muted: '#6B7280',
    card: '#F3F4F6'
};