import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudentModal from "../../components/classes/StudentModal";

export default function Classes() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.document.title = "Classes | PAKJMS Tests Management";
  }, []);

  /* Modal Functions */
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className="classes-wrapper">
      <StudentModal closeModal={closeModal} modal={modal} />

      <div className="add-student-wrapper">
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          <span className="material-icons">arrow_back</span>
          <span>Go Back</span>
        </button>

        <button className="btn btn-primary" onClick={openModal}>
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
