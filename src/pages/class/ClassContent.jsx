import { useState, useEffect } from "react";

/* Custom Hooks */
import useModal from "../../hooks/useModal";
import useToggle from "../../hooks/useToggle";

/* Components */
import TestModal from "./testModal/TestModal";
import SubjectsTabs from "./content/SubjectsTabs";
import TestTables from "./content/TestTablesContent";
import Message from "../../components/Message";

export default function ClassContent({ subjects, classId }) {
  const [subject, setSubject] = useState("Hindi");
  const [tests, setTests] = useState([]);
  const [msg, setMsg] = useState({
    label: "",
    error: false
  });

  const { modal, toggleModal } = useModal();
  const { state, toggleState } = useToggle(false);
  useEffect(() => {
    if (state) setTimeout(() => toggleState(), 5000);
  }, [state, toggleState]);

  useEffect(() => {
    const fetchTests = async () => {
      const response = await fetch(
        `/.netlify/functions/fetchTests?classId=${classId}`
      );
      const tests = [...(await response.json())].reverse();
      setTests(tests);
    };
    fetchTests();
  }, [classId]);

  const handleSubject = e => setSubject(e.target.textContent);

  return (
    <div className="class-content-wrapper">
      <TestModal
        classId={classId}
        subjects={subjects}
        modal={modal}
        toggleModal={toggleModal}
        toggleState={toggleState}
        setMsg={setMsg}
      />

      {msg.label.length > 0 && (
        <Message msg={msg} state={state} toggleState={toggleState} />
      )}

      <SubjectsTabs
        subjects={subjects}
        subject={subject}
        handleSubject={handleSubject}
      />
      <TestTables
        classId={classId}
        allTests={tests}
        subject={subject}
        toggleModal={toggleModal}
      />
    </div>
  );
}
