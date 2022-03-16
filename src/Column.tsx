import React from "react";
import { CardContainer, ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
  children?: React.ReactNode;
};

export function Column({ text }: ColumnProps) {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Generate app scaffold</CardContainer>
      <CardContainer>Learn TypeScript</CardContainer>
      <CardContainer>Begin to use static typing</CardContainer>
    </ColumnContainer>
  );
}
