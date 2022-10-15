/* React Native */
import { ImageBackground } from 'react-native';
/* Image */
import BackgroundImg from '../../assets/background-galaxy.png';
/* Types */
import { BackgroundProps } from '../../types';
/* Styles */
import { styles } from './styles';

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={BackgroundImg}
      defaultSource={BackgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
};