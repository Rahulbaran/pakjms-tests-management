import { useState, useEffect } from "react";

/* Components */
import TestModal from "../../components/class/modal/TestModal";
import SubjectsTabs from "../../components/class/SubjectsTabs";
import TestTables from "../../components/class/TestTables";

export default function ClassContent({ subjects, classId }) {
  const [modal, setModal] = useState(false);
  const [subject, setSubject] = useState("Hindi");
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      const response = await fetch(
        `/.netlify/functions/fetchTests?subject=${subject}&classId=${classId}`
      );
      const tests = [...(await response.json())].reverse();
      setTests(tests);
    };
    fetchTests();
  }, [subject, classId]);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className="class-content-wrapper">
      <TestModal
        classId={classId}
        subjects={subjects}
        modal={modal}
        closeModal={closeModal}
      />
      <SubjectsTabs subjects={subjects} />
      <TestTables classId={classId} tests={tests} openModal={openModal} />
    </div>
  );
}
