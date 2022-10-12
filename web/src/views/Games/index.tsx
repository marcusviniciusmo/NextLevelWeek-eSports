/* React */
import { useEffect, useState } from 'react';
/* API */
import { Axios } from '../../utils/Api';
/* Types */
import { GameProps } from '../../types';
/* Image */
import LogoImage from '../../assets/logo-nlw-esports.svg';
/* Dependencies */
import { useKeenSlider } from "keen-slider/react";
import * as Dialog from '@radix-ui/react-dialog';
/* Components */
import GameBanner from '../../components/GameBanner';
import CreateAdBanner from '../../components/CreateAdBanner';
import CreateAdModal from '../../components/CreateAdModal';
/* Styles */
import "keen-slider/keen-slider.min.css";
import '../../styles/main.css';

function Games() {
  const [games, setGames] = useState<GameProps[]>([]);
  const [gameSlider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6,
      spacing: 10
    }
  });

  useEffect(() => {
    Axios.get('games')
      .then((response) => {
        setGames(response.data);
      });
  }, []);

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={LogoImage} alt="Logo NLW eSports" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div ref={gameSlider} className="keen-slider grid grid-cols-6 gap-6 mt-16">
        {
          games.map(game => {
            return (
              <div className="keen-slider__slide">

                <GameBanner
                  key={game.id}
                  title={game.title}
                  bannerUrl={game.bannerUrl}
                  adsCount={game._count.ads}
                />
              </div>
            )
          })
        }
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
};

export default Games;