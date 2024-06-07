import { colors } from '@/styles/colors';
import { paddings } from '@/styles/sizes';
import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

export const CustomButton = ({ title, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: paddings.small,
      }}
    >
      <Text style={{ color: colors.primaryText, fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
};
