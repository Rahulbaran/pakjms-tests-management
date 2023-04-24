import { useCallback, useState, useEffect } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = useCallback(() => setModal(value => !value), []);

  useEffect(() => {
    const close = e => {
      if (e.key === "Escape" && modal) toggleModal();
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [toggleModal, modal]);

  return { modal, toggleModal };
};

export default useModal;
