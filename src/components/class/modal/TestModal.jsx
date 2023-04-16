import { useEffect, useRef, useState } from "react";

/* Components */
import TestTableInfo from "./TestTableInfo";
import TestEntryTable from "./TestEntryTable";

/* Utils */
import modifyStudents from "../../../utils/modifyStudents";

export default function TestModal({ classId, subjects, modal, closeModal }) {
  const focused = useRef(null);
  const [studentsInfo, setStudentsInfo] = useState({
    subject: "Hindi",
    date: "",
    fm: "",
    students: []
  });
  const [marks, setMarks] = useState([]);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

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
      setMarks(new Array(students.length).fill(""));
    };
    fetchStudents();
  }, [classId]);

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

  /* Handle Form Change */
  function handleChange(e, field) {
    setStudentsInfo(data => ({ ...data, [field]: e.target.value }));
  }

  function handleMarks(e, index) {
    setMarks(marks => [
      ...marks.slice(0, index),
      marks[index] + e.target.value.at(-1),
      ...marks.slice(index + 1, -1)
    ]);
  }

  async function handleTest() {
    const { fm, date } = studentsInfo;

    if (!fm || !date) {
      setError("Either 'Date' or 'Full Marks' is missing");
      return undefined;
    }
    setError("");

    try {
      const response = await fetch(
        `/.netlify/functions/addTest?classId=${classId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ...studentsInfo, marks })
        }
      );
      closeModal();

      setStudentsInfo(info => ({
        ...info,
        subject: "Hindi",
        date: "",
        fm: ""
      }));
      setMarks([]);
      setMsg(await response.json());
    } catch (error) {
      setMsg(error);
    }
  }

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
          <TestTableInfo
            subjects={subjects}
            focused={focused}
            studentsInfo={studentsInfo}
            handleChange={handleChange}
          />
          <TestEntryTable
            students={studentsInfo.students}
            marks={marks}
            handleMarks={handleMarks}
          />
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

      <div className="test-modal-overlay"></div>
    </div>
  );
}
