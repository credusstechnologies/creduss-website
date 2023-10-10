import React, { useEffect } from "react";

const useClickOutside = (ref, state, setState) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) {
        setState && setState(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [state, ref, setState]);
};

export default useClickOutside;
