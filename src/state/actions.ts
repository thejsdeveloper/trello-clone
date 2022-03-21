import { DragItem } from "../DragItem";

export type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    }
  | {
      type: "MOVE_ITEM";
      payload: {
        draggedId: string;
        hoverId: string;
      };
    }
  | {
      type: "SET_DRAGGED_ITEM";
      payload: DragItem | null;
    };

export const addTask = (text: string, listId: string): Action => {
  return {
    type: "ADD_TASK",
    payload: { text, listId },
  };
};

export const addList = (text: string): Action => {
  return {
    type: "ADD_LIST",
    payload: text,
  };
};

export const moveList = (draggedId: string, hoverId: string): Action => {
  return {
    type: "MOVE_ITEM",
    payload: {
      draggedId,
      hoverId,
    },
  };
};

export const setDragItem = (draggedItem: DragItem | null): Action => {
  return {
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem,
  };
};
