import React, { useState } from "react";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
  onAdd(text: string): void;
  text: string;
  dark?: boolean;
};

export const AddNewItem = ({ onAdd, text, dark = false }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  if (showForm) {
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {text}
    </AddItemButton>
  );
};
