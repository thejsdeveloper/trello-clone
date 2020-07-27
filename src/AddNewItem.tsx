import React, { useState } from 'react';
import { AddItemButton } from './styles';
import { NewItemForm } from './NewItemForm';

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtontext: string;
  dark?: boolean;
}


export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtontext, dark } = props;

  if (showForm) {
    return (
      <NewItemForm onAdd={
        text => {
          onAdd(text);
          setShowForm(false);
        }
      }></NewItemForm>
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtontext}
    </AddItemButton>
  )
}
