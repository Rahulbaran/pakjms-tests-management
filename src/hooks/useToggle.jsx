import { useState, useCallback } from "react";

const useToggle = initialValue => {
  const [state, setState] = useState(initialValue);
  const toggleState = useCallback(() => setState(bool => !bool), []);

  return { state, toggleState };
};

export default useToggle;
