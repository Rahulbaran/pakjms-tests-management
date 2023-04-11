import { useEffect } from "react";

/* Components */
import TestEntryTable from "./TestEntryTable";
import TestTableInfo from "./TestTableInfo";

export default function TestModal({ classId, subjects, modal, closeModal }) {
  useEffect(() => {
    const close = e => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [closeModal]);

  return (
    <div
      className="test-modal-container dialog"
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
          <TestTableInfo subjects={subjects} />
          <TestEntryTable classId={classId} />
        </div>
      </div>

      <div className="test-modal-overlay"></div>
    </div>
  );
}
