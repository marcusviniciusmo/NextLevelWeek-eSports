import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { GameParams } from '../../@types/navigation';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import LogoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { useEffect, useState } from 'react';
import { DuoMatch } from '../../components/DuoMatch';
/* API */
import { Axios } from '../../utils/Api';

export function Game() {
  const [ads, setAds] = useState<DuoCardProps[]>([]);
  const [discorDuoSelected, setDiscordDuoSelected] = useState('');

  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  };

  async function getDiscordByAd(adsId: string) {
    Axios.get(`ads/${adsId}/discord`)
      .then((response) => {
        setDiscordDuoSelected(response.data.discord);
      });
  };

  useEffect(() => {
    Axios.get(`games/${game.id}/ads`)
      .then((response) => {
        setAds(response.data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={LogoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <FlatList
          data={ads}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <DuoCard
                data={item}
                onConnect={() => getDiscordByAd(item.id)}
              />
            )
          }}
          horizontal
          style={styles.containerList}
          contentContainerStyle={ads.length > 0 ? styles.contentList : styles.emptyListContent}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />

        <DuoMatch
          visible={discorDuoSelected.length > 0}
          onClose={() => setDiscordDuoSelected('')}
          discord={discorDuoSelected}
        />
      </SafeAreaView>
    </Background>
  );
};