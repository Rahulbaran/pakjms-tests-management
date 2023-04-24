import { useState, useEffect } from "react";

/* Custom Hooks */
import useModal from "../../hooks/useModal";

/* Components */
import TestModal from "../../components/class/modal/TestModal";
import SubjectsTabs from "../../components/class/SubjectsTabs";
import TestTables from "../../components/class/TestTables";

export default function ClassContent({ subjects, classId }) {
  const [subject, setSubject] = useState("Hindi");
  const [tests, setTests] = useState([]);

  const { modal, toggleModal } = useModal();

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
      />
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
