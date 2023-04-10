import SubjectsTabs from "../../components/class/SubjectsTabs";
import Tables from "../../components/class/Tables";

export default function ClassContent({ subjects, classId }) {
  return (
    <div className="class-content-wrapper">
      <SubjectsTabs subjects={subjects} />
      <Tables classId={classId} />
    </div>
  );
}
