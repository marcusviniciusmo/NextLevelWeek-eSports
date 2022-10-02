import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

export function DuoCard() {
  return (
    <View>
      <DuoInfo
        label='Nome'
        value='Diego Fernandes'
      />
    </View>
  );
};