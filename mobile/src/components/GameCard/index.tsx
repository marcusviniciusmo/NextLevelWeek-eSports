/* React Native */
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
/* Dependecies */
import { LinearGradient } from 'expo-linear-gradient';
/* Types */
import { GameProps } from '../../types';
/* Theme */
import { THEME } from '../../theme';
/* Styles */
import { styles } from './styles';

export function GameCard({ data, ...rest }: GameProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        source={{ uri: data.bannerUrl }}
        style={styles.bannerUrl}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};