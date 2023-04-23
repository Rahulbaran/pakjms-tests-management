import { useRef, useEffect, useState } from "react";

export default function StudentModal({ modal, closeModal }) {
  const focused = useRef(null);
  const [student, setStudent] = useState({
    name: "",
    class: "1"
  });
  const [msg, setMsg] = useState({
    label: "",
    error: false
  });

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

  /* Form related functions */
  const handleInput = e => {
    setStudent(stud => ({ ...stud, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await (
      await fetch("/.netlify/functions/addStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      })
    ).json();

    if (response.status === 200) {
      setMsg(message => ({ ...message, label: response.msg }));
    } else if (response.status === 500) {
      setMsg({ label: response.msg, error: true });
    }
    setStudent({ name: "", class: 1 });
    closeModal();
  };

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
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter student name"
              ref={focused}
              value={student.name}
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="class">Class</label>
            <select
              name="class"
              id="class"
              value={student.class}
              onChange={handleInput}
              required
            >
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
