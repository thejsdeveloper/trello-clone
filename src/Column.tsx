import React from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
  children?: React.ReactNode;
};

export function Column({ text }: ColumnProps) {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate app scaffold" />
      <Card text="Learn TypeScript" />
      <Card text="Begin to use static typing" />
      <AddNewItem text="+ Add another card" onAdd={console.log} dark />
    </ColumnContainer>
  );
}
