import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* Hooks */
import useModal from "../../../hooks/useModal";
import useToggle from "../../../hooks/useToggle";

/* Components */
import Loader from "../../../components/Loader";
import TestTables from "./TestTables";
import Message from "../../../components/Message";

export default function TestTablesContent({
  classId,
  allTests,
  subject,
  toggleModal
}) {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [testId, setTestId] = useState("");
  const { modal, toggleModal: handleModal } = useModal();
  const [msg, setMsg] = useState({
    label: "",
    error: false
  });
  const { state, toggleState } = useToggle(false);

  /* Fetch Tests */
  useEffect(() => {
    setTests(allTests.filter(test => test.subject === subject));
  }, [allTests, subject]);

  /* Function to handle test table deletion  */
  const handleClick = e => {
    handleModal();
    setTestId(e.currentTarget.id);
  };
  const handleDelete = async () => {
    const response = await (
      await fetch(
        `/.netlify/functions/deleteTest?classId=${classId}&testId=${testId}`
      )
    ).json();

    if (response.status === 200) {
      setMsg(message => ({ ...message, label: response.msg }));
    } else {
      setMsg({ label: response.msg, error: true });
    }
    handleModal();
    toggleState();
    setTests(tests => tests.filter(test => test._id !== testId));
    setTimeout(() => navigate(0), 2000);
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
            <button className="btn btn-primary" onClick={handleDelete}>
              👍 Yes
            </button>
            <button className="btn btn-secondary" onClick={handleModal}>
              🚫 No
            </button>
          </div>
        </div>
        <div className="modal-overlay test-delete-overlay"></div>
      </div>

      {msg.label.length > 0 && (
        <Message msg={msg} state={state} toggleState={toggleState} />
      )}

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
