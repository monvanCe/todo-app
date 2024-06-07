import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { zustandStorage } from './storage';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export interface TodosStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const useTodosStore = create<TodosStore>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (text) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Math.random().toString(36).substr(2, 9),
              text,
              done: false,
            },
          ],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          ),
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: 'todos-store',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useTodosStore;
