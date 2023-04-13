import { useEffect, useRef } from "react";

/* Components */
import TestTableInfo from "./TestTableInfo";
import TestEntryTable from "./TestEntryTable";

export default function TestModal({ classId, modal, closeModal }) {
  const focused = useRef(null);

  useEffect(() => {
    if (modal) focused.current.focus();
  }, [modal]);

  useEffect(() => {
    const close = e => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [closeModal]);

  return (
    <div
      className="test-modal-container"
      role="dialog"
      aria-hidden={modal ? "false" : "true"}
      aria-labelledby="modal_title"
      style={{ display: modal ? "grid" : "none" }}
    >
      <button
        className="modal-close-btn"
        title="close modal"
        onClick={closeModal}
      >
        <span className="material-icons">close</span>
      </button>

      <div className="test-modal">
        <div className="table-container">
          <TestTableInfo focused={focused} />
          <TestEntryTable classId={classId} />
          <button className="btn btn-primary create-test-btn">
            <span className="material-icons">add</span>
            <span>Create Test</span>
          </button>
        </div>
      </div>

      <div className="test-modal-overlay"></div>
    </div>
  );
}
