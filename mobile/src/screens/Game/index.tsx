import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { GameParams } from '../../@types/navigation';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import LogoImg from '../../assets/logo-nlw-esports.png';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  return (
    <Background>
      <SafeAreaView>
        <View>
          <TouchableOpacity>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={LogoImg}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
};