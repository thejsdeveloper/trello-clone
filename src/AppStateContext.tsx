import React, { createContext, useContext, useReducer } from 'react';

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }]
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }]
    }
  ]
};

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReucer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext);
}

type Action = | {
  type: 'ADD_LIST'
  payload: String
} | {
  type: 'ADD_TASK'
  payload: { text: string, listId: string }
}


const appStateReucer = (state: AppState, action: Action): AppState => {

  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state
      }
    }
    case "ADD_TASK": {
      return {
        ...state
      }
    }
    default: {
      return state;
    }
  }
}


