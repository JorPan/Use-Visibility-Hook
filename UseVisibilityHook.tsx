import { useCallback, useState } from "react";

export default function useVisibility(defaultVisible = false) {
  const [visible, setVisible] = useState<boolean>(defaultVisible);

  const show = useCallback(() => {
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  const toggle = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, []);

  return {
    visible,
    show,
    hide,
    toggle,
    setVisible,
  };
}
