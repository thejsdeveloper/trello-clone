import React from 'react';
import { AppContainer } from './styles';

import { Card } from './Card';
import { Column } from './Column';
import { AddNewItem } from "./AddNewItem";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold"></Card>
      </Column>
      <Column text="In Progress">
        <Card text="Learning react"></Card>
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typings"></Card>
      </Column>
      <AddNewItem toggleButtontext="+ Add another list" onAdd={console.log}></AddNewItem>
    </AppContainer>
  );
}

export default App;
