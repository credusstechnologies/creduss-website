import React, { useEffect } from "react";

const useClickOutside = (ref, state, setState) => {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      // if where is being clicked is not same as the ref, change the state to false
      if (!ref.current?.contains(e.target)) {
        setState && setState(false);
      }
    });
  }, [state]);
};

export default useClickOutside;
