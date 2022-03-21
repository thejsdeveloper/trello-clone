import React, { createContext, Dispatch, FC, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../DragItem";
import { Action } from "./actions";
import { AppState, List, Task, appStateReducer } from "./appStateReducer";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
  draggedItem: null,
};

type AppStateContextProps = {
  lists: List[];
  draggedItem: DragItem | null;
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC = (props) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);

  const { lists, draggedItem } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{ lists, getTasksByListId, dispatch, draggedItem }}
      {...props}
    />
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error(`useAppState must be used within AppStateProvider`);
  }

  return context;
};
