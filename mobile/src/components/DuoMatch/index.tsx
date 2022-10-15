/* React */
import { useState } from 'react';
/* React Native */
import { View, Modal, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
/* Dependencies */
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';
/* Components */
import { Heading } from '../Heading';
/* Types */
import { DuoMatchProps } from '../../types';
/* Theme */
import { THEME } from '../../theme';
/* Styles */
import { styles } from './styles';


export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscordToClipboard() {
    setIsCopping(true);

    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copiado!', 'Usuário copiado para você colocar no Discord');

    setIsCopping(false);
  };

  return (
    <Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight='bold'
          />

          <Heading
            title="Let's play!"
            subtitle='Agora é só começar a jogar!'
            style={styles.heading}
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping
                ? <ActivityIndicator color={THEME.COLORS.PRIMARY} />
                : discord
              }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};