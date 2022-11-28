import { atom, selector } from 'recoil';

interface Item {
  name: string;
  age: number;
}

export const todoListState = atom<Item[]>({
  key: 'todoListState',
  default: [],
});

export const max18ListState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const list = get(todoListState);

    return list.filter(item => item.age > 18);
  },
});