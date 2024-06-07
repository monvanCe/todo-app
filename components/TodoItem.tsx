import { colors } from '@/styles/colors';
import { borderRadius, fontSizes, margins, paddings } from '@/styles/sizes';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from './CustomButton';
import useTodosStore from '@/store/todosStore';
import { ITodo } from '@/store/types';
import { Ionicons } from '@expo/vector-icons';

export default function TodoItem({
  todo,
  onRemove,
}: {
  todo: ITodo;
  onRemove: () => void;
}) {
  const toggleTodo = useTodosStore((state) => state.toggleTodo);
  const removeTodo = useTodosStore((state) => state.removeTodo);

  return (
    <View
      key={todo.id}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.surface,
        padding: paddings.medium,
        borderRadius: borderRadius.small,
        width: '95%',
        margin: 'auto',
        marginVertical: margins.small,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={1}
          style={{
            color: colors.primaryText,
            fontSize: fontSizes.medium,
            textDecorationLine: todo.done ? 'line-through' : 'none',
          }}
        >
          {todo.text}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <CustomButton title="Kaldır" onPress={onRemove} />
        <TouchableOpacity
          onPress={() => toggleTodo(todo.id)}
          style={{
            marginLeft: margins.small,
            justifyContent: 'center',
            paddingHorizontal: paddings.small,
          }}
        >
          <Text
            style={{ color: colors.primaryText, fontSize: fontSizes.medium }}
          >
            <Ionicons
              name={todo.done ? 'checkmark-circle' : 'ellipse-outline'}
              size={fontSizes.large}
              color={colors.primaryText}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
