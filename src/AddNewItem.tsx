import React, { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
  onAdd(text: string): void;
  text: string;
  dark?: boolean;
};

export const AddNewItem = ({ onAdd, text, dark = false }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {text}
    </AddItemButton>
  );
};
