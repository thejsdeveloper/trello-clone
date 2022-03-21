import { useDrag } from "react-dnd";
import { DragItem } from "../DragItem";
import { setDragItem } from "../state/actions";
import { useAppState } from "../state/AppStateContext";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();

  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDragItem(item));
      return item;
    },
    end: () => {
      dispatch(setDragItem(null));
    },
  });

  return { drag };
};
