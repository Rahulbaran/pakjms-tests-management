import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* Custom Hooks */
import useModal from "../../hooks/useModal";

/* Components */
import StudentModal from "../../components/classes/StudentModal";

export default function Classes() {
  const navigate = useNavigate();
  const { modal, toggleModal } = useModal();

  useEffect(() => {
    window.document.title = "Classes | PAKJMS Tests Management";
  }, []);

  return (
    <div className="classes-wrapper">
      <StudentModal toggleModal={toggleModal} modal={modal} />

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
