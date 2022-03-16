import React from "react";
import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { AppContainer } from "./styles";

export function App() {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem text="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}
