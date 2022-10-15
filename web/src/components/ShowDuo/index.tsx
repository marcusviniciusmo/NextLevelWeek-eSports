/* React */
import { useEffect, useState } from 'react';
/* API */
import { Axios } from '../../utils/Api';
/* Dependencies */
import * as Dialog from '@radix-ui/react-dialog';
/* Types */
import { DiscordProps, ShowDuoProps } from '../../types';
/* Styles */
import './styles.css';

function ShowDuo(props: ShowDuoProps) {
  const [data, setData] = useState<DiscordProps>();

  useEffect(() => {
    Axios.get(`ads/${props.adId}/discord`)
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      });
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='dialogModalOverlay' />

      <Dialog.Content className='dialogModalContent'>
        <Dialog.Title className='dialogModalTitle'>
          Jogue com:
        </Dialog.Title>

        <div id='showDuoInfoContainer'>
          <div className='showDuoInfo'>
            <span>Nome</span>
            <strong>{props.name}</strong>
          </div>

          <div className='showDuoInfo'>
            <span>Discord</span>
            <strong>{data?.discord}</strong>
          </div>

          <Dialog.Close>
            <div className='showDuoCancel'>
              <button>Cancelar</button>
            </div>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default ShowDuo;