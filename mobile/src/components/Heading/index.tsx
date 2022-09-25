import { View, Text, ViewProps } from 'react-native';

interface HeadingProps extends ViewProps {
  title: string;
  subtitle: string;
};

export function Heading({ title, subtitle, ...rest}: HeadingProps) {
  return (
    <View {...rest}>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
};