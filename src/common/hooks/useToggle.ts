import { useReducer } from "react";

type UseToggleReturnType = {
  isToggled: boolean;
  toggle: () => void;
};

export const useToggle = (initialState: boolean): UseToggleReturnType => {
  const [isToggled, toggle] = useReducer((previousValue) => !previousValue, initialState);

  return { isToggled, toggle };
};
