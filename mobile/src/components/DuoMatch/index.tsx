import { View, Modal, ModalProps, Text } from 'react-native';

interface DuoMatchProps extends ModalProps {
  discord: string;
};

export function DuoMatch({ discord, ...rest }: DuoMatchProps) {
  return (
    <Modal {...rest}>
      <View>
        <Text>
          {discord}
        </Text>
      </View>
    </Modal>
  );
};