import { colors } from '@/styles/colors';
import { borderRadius, fontSizes, margins, paddings } from '@/styles/sizes';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from './CustomButton';
import useTodosStore from '@/store/todosStore';

export default function RemoveAlert({
  id,
  close,
}: {
  id: string;
  close: () => void;
}) {
  const removeTodo = useTodosStore((state) => state.removeTodo);

  const handleRemove = () => {
    close();
    removeTodo(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.text}>Silmek İstediğinize Emin Misiniz?</Text>
        <View style={styles.buttonContainer}>
          <CustomButton title="Cancel" onPress={close} />
          <View style={{ width: 1, backgroundColor: colors.divider }} />
          <CustomButton title="Remove" onPress={handleRemove} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  boxContainer: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.small,
    margin: margins.medium,
  },
  text: {
    color: colors.primaryText,
    fontSize: fontSizes.medium,
    padding: paddings.medium,
  },
  buttonContainer: {
    padding: paddings.small,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: margins.medium,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
});
