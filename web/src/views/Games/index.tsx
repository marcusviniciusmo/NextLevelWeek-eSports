/* React */
import { useEffect, useState } from 'react';
/* API */
import { Axios } from '../../utils/Api';
/* Types */
import { GameProps } from '../../types';
/* Image */
import LogoImage from '../../assets/logo-nlw-esports.svg';
/* Dependencies */
import { Link } from 'react-router-dom';
import { useKeenSlider } from "keen-slider/react";
import * as Dialog from '@radix-ui/react-dialog';
/* Components */
import GameBanner from '../../components/GameBanner';
import CreateAdBanner from '../../components/CreateAdBanner';
import CreateAdModal from '../../components/CreateAdModal';
import ArrowSlider from '../../components/ArrowSlider';
/* Styles */
import "keen-slider/keen-slider.min.css";
import '../../styles/main.css';
import './styles.css';

function Games() {
  const perVierDefault = 6;

  const [games, setGames] = useState<GameProps[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [gameSlider, gameInstanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: perVierDefault,
      spacing: 20
    }
  });

  useEffect(() => {
    Axios.get('games')
      .then((response) => {
        setGames(response.data);
      });
  }, []);

  return (
    <div id='gamesViewContainer'>
      <img src={LogoImage} alt="Logo NLW eSports" />

      <h1>
        Seu <span>duo</span> está aqui.
      </h1>

      <div ref={gameSlider} className="slider keen-slider">
        {
          games.map(game => {
            return (
              <div className="keen-slider__slide" key={game.id}>
                <Link to={`games/${game.id}/ads`}>
                  <GameBanner
                    title={game.title}
                    bannerUrl={game.bannerUrl}
                    adsCount={game._count.ads}
                  />
                </Link>
              </div>
            )
          })
        }
        {
          loaded &&
          gameInstanceRef.current && (
            <>
              <ArrowSlider
                left
                disabled={currentSlide === 0}
                onClick={e => e.stopPropagation() || gameInstanceRef.current?.prev()}
              />

              <ArrowSlider
                disabled={currentSlide >= games.length - perVierDefault}
                onClick={e => e.stopPropagation() || gameInstanceRef.current?.next()}
              />
            </>
          )
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