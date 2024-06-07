import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/styles/colors';
import useTodosStore from '@/store/todosStore';
import { useEffect, useState } from 'react';
import { CustomButton } from '@/components/CustomButton';

import TodoItem from '@/components/TodoItem';
import { borderRadius, fontSizes, margins, paddings } from '@/styles/sizes';
import RemoveAlert from '@/components/RemoveAlert';

export default function Index() {
  const [text, setText] = useState('');
  const insets = useSafeAreaInsets();
  const todos = useTodosStore((state) => state.todos);
  const addTodo = useTodosStore((state) => state.addTodo);
  const [alertId, setAlertId] = useState<string | null>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      StatusBar.setBarStyle('light-content');
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View style={{ flex: 1 }}>
        <ScrollView>
          {todos.map((todo) => (
            <TodoItem
              onRemove={() => setAlertId(todo.id)}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          placeholder="Yeni Yapılacak"
          style={{
            backgroundColor: colors.surface,
            color: colors.primaryText,
            fontSize: fontSizes.medium,
            padding: paddings.medium,
            margin: margins.medium,
            borderRadius: borderRadius.small,
          }}
          placeholderTextColor={colors.tertiaryText}
          value={text}
          onChangeText={setText}
        />
        <CustomButton
          title="Ekle"
          onPress={() => {
            addTodo(text);
            setText('');
          }}
        />
      </KeyboardAvoidingView>

      {alertId && <RemoveAlert id={alertId} close={() => setAlertId(null)} />}
    </View>
  );
}
