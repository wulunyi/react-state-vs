import { RecoilRoot } from 'recoil';
import { Add } from './Add';
import { List, Max18List } from './List';

export function App() {
  return (
    <>
     <RecoilRoot>
      <Add />
      <List />
      <Max18List />
    </RecoilRoot>
    <RecoilRoot>
      <Add />
      <List />
      <Max18List />
    </RecoilRoot>
    </>
   
  )
}