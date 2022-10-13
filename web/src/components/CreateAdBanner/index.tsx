/* Dependencies */
import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
/* Styles */
import './styles.css';

function CreateAdBanner() {
  return (
    <div id='createAdBannerContainer'>
      <div className='bannerContainer'>
        <div>
          <strong>Não encontrou seu duo?</strong>

          <span>Publique um anúncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className='buttonCreateAd'>
          <MagnifyingGlassPlus size={24} />

          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
};

export default CreateAdBanner;