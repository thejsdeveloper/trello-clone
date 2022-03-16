import React, { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import { useFocus } from "./util/useFocus";

type NewItemFormType = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormType) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
