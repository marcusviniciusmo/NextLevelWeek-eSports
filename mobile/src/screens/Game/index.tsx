/* React */
import { useEffect, useState } from 'react';
/* React Native */
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
/* API */
import { Axios } from '../../utils/Api';
/* Dependecies */
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { GameParams } from '../../@types/navigation';
/* Components */
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';
import { EmptyList } from '../../components/EmptyList';
/* Icons */
import { Entypo } from '@expo/vector-icons';
/* Image */
import LogoImg from '../../assets/logo-nlw-esports.png';
/* Types */
import { DuoCardProps } from '../../types';
/* Theme */
import { THEME } from '../../theme';
/* Styles */
import { styles } from './styles';


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
          contentContainerStyle={ads.length > 0
            ? styles.contentList
            : styles.emptyListContent}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyList />
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