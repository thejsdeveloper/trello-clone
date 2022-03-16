export type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { id: string; listId: string };
    };

export const addTask = (id: string, listId: string): Action => {
  return {
    type: "ADD_TASK",
    payload: { id, listId },
  };
};

export const addList = (text: string): Action => {
  return {
    type: "ADD_LIST",
    payload: text,
  };
};
