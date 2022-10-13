/* React */
import { FormEvent, useEffect, useState } from 'react';
/* API */
import { Axios } from '../../utils/Api';
/* Types */
import { GameProps } from '../../types';
/* Dependencies */
import { Check, GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
/* Components */
import Input from '../Input';
/* Mocked Data */
import { DaysOfWeekData } from '../../Mocks/CreateAdModal';
/* Styles */
import './styles.css';

function CreateAdModal() {
  const [games, setGames] = useState<GameProps[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  useEffect(() => {
    Axios.get('games')
      .then((response) => {
        setGames(response.data);
      });
  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (!data.name) {
      return;
    }

    try {
      await Axios.post(`games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
      });

      alert('Anúncio criado com sucesso!');
    }
    catch (error) {
      console.log(error);
      alert('Erro ao criar o anúncio');
    };
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='createAdModalOverlay' />

      <Dialog.Content className='createAdModalContent'>
        <Dialog.Title className='createAdModalTitle'>Publique um anúncio</Dialog.Title>

        <form onSubmit={handleCreateAd}>
          <div className='createAdModalInput'>
            <label htmlFor="game">Qual o game?</label>

            <select id='game' name='game' defaultValue="">
              <option disabled value="">Selecione o game que deseja jogar</option>

              {
                games.map(game => {
                  return (
                    <option
                      key={game.id}
                      value={game.id}
                    >
                      {game.title}
                    </option>
                  )
                })
              }
            </select>
          </div>

          <div className='createAdModalInput'>
            <label htmlFor="name">Seu nome (ou nickname)</label>

            <Input name='name' id="name" placeholder='Como te chamam dentro do game?' />
          </div>

          <div className='createAdModalGridInput'>
            <div className='createAdModalInput'>
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>

              <Input name='yearsPlaying' type="number" min={0} id="yearsPlaying" placeholder='Tudo bem ser ZERO' />
            </div>

            <div className='createAdModalInput'>
              <label htmlFor="discord">Qual seu discord?</label>

              <Input name='discord' id='discord' placeholder='usuario#0000' />
            </div>
          </div>

          <div className='createAdModalGridDaysOfWeek'>
            <div className='createAdModalInput'>
              <label htmlFor="weekDays">Quando costuma jogar?</label>

              <ToggleGroup.Root
                type='multiple'
                className='createAdModalGridToggleGroupDays'
                onValueChange={setWeekDays}
              >
                {
                  DaysOfWeekData.map((day) => {
                    return (
                      <ToggleGroup.Item
                        key={day.value}
                        value={day.value}
                        title={day.title}
                        className={`createAdModalGridToggleItemDay  
                          ${weekDays.includes(day.value)
                            ? 'daySelected'
                            : 'dayNonSelected'}`}
                      >
                        {day.label}
                      </ToggleGroup.Item>
                    )
                  })
                }
              </ToggleGroup.Root>
            </div>
            <div className='createAtModalInputTime'>
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div>
                <Input name='hourStart' type="time" id="hourStart" placeholder='De' />
                <Input name='hourEnd' type="time" id="hourEnd" placeholder='Até' />
              </div>
            </div>
          </div>

          <label className='createAdModalCheckboxLabel'>
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked) {
                  setUseVoiceChannel(true)
                } else {
                  setUseVoiceChannel(false)
                }
              }}
              className='createAdModalCheckbox'
            >
              <Checkbox.Indicator>
                <Check className='createAdModalCheckboxIndicator' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer>
            <Dialog.Close type='button' className='buttonCancelar'>
              Cancelar
            </Dialog.Close>
            <button type="submit" className='buttonEcontrarDuo'>
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default CreateAdModal;