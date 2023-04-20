import { useRef, useEffect } from "react";

export default function StudentModal({ modal, closeModal }) {
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
      className="modal-container student-modal-container"
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

      <div className="student-form-wrapper">
        <form className="form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter student name"
              required
              ref={focused}
            />
          </div>

          <div className="form-group">
            <label htmlFor="class">Class</label>
            <select name="class" id="class" required>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(ele => (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-primary">Create</button>
        </form>
      </div>
      <div className="modal-overlay test-modal-overlay"></div>
    </div>
  );
}
