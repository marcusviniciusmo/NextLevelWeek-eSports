import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  ImageSourcePropType
} from 'react-native';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType
};

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
};

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <ImageBackground
        source={data.cover}
      />

      <Text>{data.name}</Text>
      <Text>{data.ads} anúncios</Text>
    </TouchableOpacity>
  );
};