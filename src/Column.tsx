import React, { useRef } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask, moveList } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useItemDrag } from "./util/useItemDrag";
import { throttle } from "throttle-debounce-ts";
import { useDrop } from "react-dnd";

type ColumnProps = {
  id: string;
  text: string;
};

export function Column({ text, id }: ColumnProps) {
  const { getTasksByListId, dispatch, draggedItem } = useAppState();
  const tasks = getTasksByListId(id);

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }

        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  const { drag } = useItemDrag({ type: "COLUMN", id, text });

  drag(drop(ref));

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} {...task} />
      ))}
      <AddNewItem
        text="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
}
