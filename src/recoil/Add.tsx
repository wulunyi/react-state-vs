import { useState } from 'react';
import {useSetRecoilState} from 'recoil';
import { todoListState } from './store';

export function Add() {
  const setList = useSetRecoilState(todoListState);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <input value={age} onChange={(e) => setAge(e.target.value)}/>
      <button type="button" onClick={() =>{
        setList((val) => val.concat([{name, age: +age}]))
      }}>提交</button>
    </div>
  )
}