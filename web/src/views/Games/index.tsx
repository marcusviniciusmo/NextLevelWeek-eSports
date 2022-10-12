/* React */
import { useEffect, useState } from 'react';
/* API */
import { Axios } from '../../utils/Api';
/* Types */
import { ArrowSliderProps, GameProps } from '../../types';
/* Image */
import LogoImage from '../../assets/logo-nlw-esports.svg';
/* Dependencies */
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

  function Arrow(props: ArrowSliderProps) {
    return (
      <ArrowSlider
        disabled={props.disabled}
        left={props.left}
        onClick={props.onClick}
      />
    )
  }

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

      <div ref={gameSlider} className="keen-slider mt-16">
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
        {
          loaded &&
          gameInstanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || gameInstanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || gameInstanceRef.current?.next()
                }
                disabled={
                  currentSlide >= games.length - perVierDefault
                }
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