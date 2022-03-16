import React from "react";
import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

export function App() {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column key={list.id} {...list} />
      ))}

      <AddNewItem text="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}
