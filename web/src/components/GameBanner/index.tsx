/* Types */
import { GameBannerProps } from '../../types';
/* Styles */
import './styles.css';

function GameBanner(props: GameBannerProps) {
  return (
    <div id='gameBannerContainer'>
      <img src={props.bannerUrl} alt={props.title} />

      <div>
        <strong>{props.title}</strong>
        <span>{props.adsCount} anúncio(s)</span>
      </div>
    </div>
  );
};

export default GameBanner;