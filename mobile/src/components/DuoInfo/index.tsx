/* React Native */
import { View, Text } from 'react-native';
/* Types */
import { DuoInfoProps} from '../../types';
/* Theme */
import { THEME } from '../../theme';
/* Styles */
import { styles } from './styles';

export function DuoInfo({ label, value, colorValue = THEME.COLORS.TEXT }: DuoInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Text
        style={[styles.value, { color: colorValue }]}
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
};