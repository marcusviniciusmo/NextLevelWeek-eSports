import { ImageBackground } from 'react-native';
import BackgroundImg from '../../assets/background-galaxy.png';

interface BackgroundProps {
  children: React.ReactNode
};

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={BackgroundImg}
      defaultSource={BackgroundImg}
    >
      {children}
    </ImageBackground>
  );
};