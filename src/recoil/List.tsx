import { useRecoilValue } from "recoil";
import { max18ListState, todoListState } from "./store";

export function List() {
  const list = useRecoilValue(todoListState);

  return (
    <ul>
      {list.map(i => <li>{i.name}:{i.age}</li>)}
    </ul>
  )
}

export function Max18List() {
  const list = useRecoilValue(max18ListState);

  return (
    <ul>
      {list.map(i => <li>{i.name}:{i.age}</li>)}
    </ul>
  )
}