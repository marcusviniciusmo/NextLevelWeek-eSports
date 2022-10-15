/* React */
import { useEffect, useState } from 'react';
/* React Native */
import { Image, FlatList } from 'react-native';
/* API */
import { Axios } from '../../utils/Api';
/* Dependencies */
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
/* Components */
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
/* Image */
import Logo from '../../assets/logo-nlw-esports.png';
/* Types */
import { GameCardProps } from '../../types';
/* Styles */
import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    Axios.get('games')
    .then((response) => {
      setGames(response.data);
    });
  }, []);

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={Logo}
          style={styles.logo}
        />

        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
};