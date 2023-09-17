import { useState } from "react";

type Return = {
  isSwitch: boolean;
  handleSwitch: () => void;
};

export const useHidden = (): Return => {
  const [isSwitch, setSwitch] = useState(false);

  return {
    isSwitch,
    handleSwitch: () => setSwitch((prev) => !prev),
  };
};
