import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* Hooks */
import useModal from "../../../hooks/useModal";

/* Components */
import Loader from "../../../components/Loader";
import TestTables from "./TestTables";

export default function TestTablesContent({
  classId,
  allTests,
  subject,
  toggleModal
}) {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [testId, setTestId] = useState("");

  useEffect(() => {
    setTests(allTests.filter(test => test.subject === subject));
  }, [subject, allTests]);

  const { modal, toggleModal: handleModal } = useModal();

  /* Function to handle test table deletion  */
  const handleClick = e => {
    handleModal();
    setTestId(e.currentTarget.id);
  };

  return (
    <main className="tables-wrapper">
      <div
        className="modal-container test-delete-modal-container"
        role="dialog"
        aria-hidden={modal ? "false" : "true"}
        aria-labelledby="modal_title"
        style={{ display: modal ? "grid" : "none" }}
      >
        <div className="modal">
          <p>Do you want to delete the table?</p>
          <div className="buttons">
            <button className="btn btn-primary">👍 Yes</button>
            <button className="btn btn-secondary" onClick={handleModal}>
              🚫 No
            </button>
          </div>
        </div>
        <div className="modal-overlay test-delete-overlay"></div>
      </div>

      <div className="page-info">
        <button
          className="btn btn-primary"
          title="refresh"
          onClick={() => navigate(0)}
        >
          <span className="material-icons">refresh</span>
        </button>
        <h2>Class - {classId}</h2>
        <button
          className="btn btn-primary"
          onClick={toggleModal}
          title="Add a new test"
        >
          <span className="material-icons">add_circle</span>
          <span>Test</span>
        </button>
      </div>

      <div className="tables">
        {allTests.length === 0 ? (
          <Loader />
        ) : (
          <TestTables tests={tests} handleClick={handleClick} />
        )}
      </div>
    </main>
  );
}
