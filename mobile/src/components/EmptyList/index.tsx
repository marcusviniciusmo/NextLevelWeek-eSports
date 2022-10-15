/* React Native */
import { Text } from "react-native";
/* Styles */
import { styles } from "./styles";

export function EmptyList() {
  return (
    <Text style={styles.emptyListText}>
      Não há anúncios publicados ainda.
    </Text>
  );
};