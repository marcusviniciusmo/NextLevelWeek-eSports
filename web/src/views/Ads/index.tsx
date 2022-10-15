/* React */
import { useEffect, useState } from 'react';
/* API */
import { Axios } from '../../utils/Api';
/* Dependencies */
import { GameController } from 'phosphor-react';
import { useParams } from "react-router-dom";
import * as Dialog from '@radix-ui/react-dialog';
/* Components */
import ShowDuo from '../../components/ShowDuo';
/* Types */
import { AdsProps, GameProps } from '../../types';
/* Images */
import Logo from '../../assets/logo-nlw-esports.svg';
/* Styles */
import './styles.css';

function Ads() {
  const { gameId } = useParams();

  const [game, setGame] = useState<GameProps>();
  const [ads, setAds] = useState<AdsProps[]>([]);

  useEffect(() => {
    Axios.get('games')
      .then((response) => {
        setGame(response.data.find((g: GameProps) => g.id === gameId));
      });
  }, [game]);

  useEffect(() => {
    Axios.get(`games/${gameId}/ads`)
      .then((response) => {
        setAds(response.data);
      });
  }, [game]);

  return (
    <div id='adsViewContainer'>
      <div className='adsViewLogo'>
        <img src={Logo} alt="NLW eSports logo" />
      </div>

      <div className='adViewGameSelected'>
        <div className='adViewGameSelectedImage'>
          <img src={game?.bannerUrl} alt={`${game?.title} logo`} />
        </div>

        <div className="adViewGameSpecs">
          <strong>{game?.title}</strong>
          <span>Anúncios: {game?._count.ads}</span>
        </div>

        {
          game!?._count.ads > 0
            ? <h1>
              Encontre seu <span>duo</span>!
            </h1>
            : <h1>
              <span>Duo</span> não encontrado!
            </h1>
        }
      </div>

      <div id='adsListedByGame'>
        {
          ads.map((ad) => {
            return (
              <div className='adByGame' key={ad.id}>
                <div>
                  <span>Nome</span>
                  <strong>{ad.name}</strong>
                </div>

                <div>
                  <span>Tempo de jogo</span>
                  <strong>{ad.yearsPlaying} ano(s)</strong>
                </div>

                <div>
                  <span>Disponibilidade</span>
                  <strong>
                    {`${ad.weekDays.length} dias \u2022 ${ad.hourStart} - ${ad.hourEnd}`}
                  </strong>
                </div>

                <div>
                  <span>Chamada de áudio?</span>
                  <strong className={ad.useVoiceChannel ? 'voiceChannel' : 'noVoiceChannel'}>
                    {ad.useVoiceChannel ? 'Sim' : 'Não'}
                  </strong>
                </div>

                <Dialog.Root>
                  <Dialog.Trigger>
                    <div className='conectDuo'>
                      <GameController size={20} />
                      Conectar
                    </div>
                  </Dialog.Trigger>

                  <ShowDuo
                    name={ad.name}
                    adId={ad.id}
                  />
                </Dialog.Root>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Ads;