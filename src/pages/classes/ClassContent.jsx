import { useState } from "react";

/* Components */
import TestModal from "../../components/class/modal/TestModal";
import SubjectsTabs from "../../components/class/SubjectsTabs";
import TestTables from "../../components/class/TestTables";

export default function ClassContent({ subjects, classId }) {
  const [modal, setModal] = useState(false);

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
      <TestTables classId={classId} openModal={openModal} />
    </div>
  );
}
