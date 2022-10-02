import { View, Text, ColorValue } from 'react-native';
import { THEME } from '../../theme';

interface DuoInfoProps {
  label: string;
  value: string;
  colorValue?: ColorValue;
};

export function DuoInfo({ label, value, colorValue = THEME.COLORS.TEXT }: DuoInfoProps) {
  return (
    <View>
      <Text>{label}</Text>
      <Text style={[{ color: colorValue }]}>
        {value}
      </Text>
    </View>
  );
};