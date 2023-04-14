import { useEffect, useRef, useState } from "react";

/* Components */
import TestTableInfo from "./TestTableInfo";
import TestEntryTable from "./TestEntryTable";

export default function TestModal({ classId, subjects, modal, closeModal }) {
  const focused = useRef(null);
  const [studentsInfo, setStudentsInfo] = useState({
    subject: "Hindi",
    date: "",
    fm: "",
    students: []
  });
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(
        `/.netlify/functions/fetchStudents?classId=${classId}`
      );
      const students = await response.json();
      setStudentsInfo(prev => ({
        ...prev,
        students
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

  function handleTest() {
    const { fm, date } = studentsInfo;

    if (!fm || !date) {
      console.log("either date or fm is missing");
      return undefined;
    }

    console.log(studentsInfo, marks);
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
