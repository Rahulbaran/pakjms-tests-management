import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

/* Custom Hooks */
import useModal from "../../hooks/useModal";
import usePageTitle from "../../hooks/usePageTitle";
import useToggle from "../../hooks/useToggle";

/* Components */
import StudentModal from "./StudentModal";
import Message from "../../components/Message";

export default function Classes() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState({
    label: "",
    error: false
  });
  const { modal, toggleModal } = useModal();
  const { state, toggleState } = useToggle(false);
  usePageTitle("Classes | PAKJMS Tests Management");

  useEffect(() => {
    if (state) setTimeout(() => toggleState(), 5000);
  }, [state, toggleState]);

  return (
    <div className="classes-wrapper">
      <StudentModal
        toggleModal={toggleModal}
        modal={modal}
        setMsg={setMsg}
        toggleState={toggleState}
      />

      {msg.label.length > 0 && (
        <Message msg={msg} state={state} toggleState={toggleState} />
      )}

      <div className="add-student-wrapper">
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          <span className="material-icons">arrow_back</span>
          <span>Go Back</span>
        </button>

        <button className="btn btn-primary" onClick={toggleModal}>
          <span className="material-icons">add_circle</span>
          <span>Add Student</span>
        </button>
      </div>

      <main className="classes-container">
        <h1>All Classes</h1>
        <div className="classes">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <Link to={`${num}`} key={num} className="btn btn-primary btn-link">
              Class-{num}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
