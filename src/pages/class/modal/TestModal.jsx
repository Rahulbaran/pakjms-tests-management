import { useEffect, useRef, useState } from "react";

/* Components */
import TestTableInfo from "./TestTableInfo";
import TestEntryTable from "./TestEntryTable";

/* Utils */
import modifyStudents from "../../../utils/modifyStudents";

export default function TestModal({
  classId,
  subjects,
  modal,
  toggleModal,
  toggleState,
  setMsg
}) {
  const focused = useRef(null);
  const [studentsInfo, setStudentsInfo] = useState({
    subject: "Hindi",
    date: "",
    fm: "",
    students: []
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(
        `/.netlify/functions/fetchStudents?classId=${classId}`
      );
      const students = await response.json();
      setStudentsInfo(prev => ({
        ...prev,
        students: modifyStudents(students)
      }));
    };
    fetchStudents();
  }, [classId]);

  useEffect(() => {
    if (modal) focused.current.focus();
  }, [modal]);

  /* Functions for handling test form */
  function handleChange(e, field) {
    setStudentsInfo(data => ({ ...data, [field]: e.target.value }));
  }

  async function handleTest() {
    const { fm, date } = studentsInfo;
    if (!fm || !date) {
      setError("Either 'Date' or 'Full Marks' is missing");
      return undefined;
    }

    setError("");
    const marks = Array.from(document.getElementsByClassName("test-marks")).map(
      ele => ele.value
    );

    const response = await (
      await fetch(`/.netlify/functions/addTest?classId=${classId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...studentsInfo, marks })
      })
    ).json();

    Array.from(document.getElementsByClassName("test-marks")).forEach(
      mark => (mark.value = "")
    );
    setStudentsInfo(info => ({
      ...info,
      subject: "Hindi",
      date: "",
      fm: ""
    }));

    if (response.status === 200) {
      setMsg(message => ({ ...message, label: response.msg }));
    } else if (response.status === 500) {
      setMsg({ label: response.msg, error: true });
    }
    toggleModal();
    toggleState();
  }

  return (
    <div
      className="modal-container test-modal-container"
      role="dialog"
      aria-hidden={modal ? "false" : "true"}
      aria-labelledby="modal_title"
      style={{ display: modal ? "grid" : "none" }}
    >
      <button
        className="modal-close-btn"
        title="close modal"
        onClick={toggleModal}
      >
        <span className="material-icons">close</span>
      </button>

      <div className="test-modal">
        <div className="table-container">
          <TestTableInfo
            subjects={subjects}
            focused={focused}
            studentsInfo={studentsInfo}
            handleChange={handleChange}
          />
          <TestEntryTable students={studentsInfo.students} />
          <p
            className="error"
            style={{
              display: error ? "block" : "none",
              color: "hwb(0 40% 0%)"
            }}
          >
            {error}
          </p>
          <button
            className="btn btn-primary create-test-btn"
            onClick={handleTest}
          >
            <span className="material-icons">add</span>
            <span>Create Test</span>
          </button>
        </div>
      </div>

      <div className="modal-overlay test-modal-overlay"></div>
    </div>
  );
}
