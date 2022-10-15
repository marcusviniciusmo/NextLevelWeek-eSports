/* React Native */
import { View, Text } from 'react-native';
/* Types */
import { HeadingProps } from '../../types';
/* Styles */
import { styles } from './styles';

export function Heading({ title, subtitle, ...rest}: HeadingProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};