import React from 'react';
import { AppContainer } from './styles';

import { Column } from './Column';
import { AddNewItem } from "./AddNewItem";
import { useAppState } from './AppStateContext';


function App() {
  const { state } = useAppState();
  return (
    <AppContainer>
      {
        state.lists.map((list, i) => {
          return (
            <Column text={list.text} key={list.id} index={i} />
          );
        })}

      <AddNewItem toggleButtontext="+ Add another list" onAdd={console.log}></AddNewItem>
    </AppContainer>
  );
}

export default App;
