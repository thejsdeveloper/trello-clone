import React from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  id: string;
  text: string;
};

export function Column({ text, id }: ColumnProps) {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} {...task} />
      ))}
      <AddNewItem text="+ Add another card" onAdd={console.log} dark />
    </ColumnContainer>
  );
}
