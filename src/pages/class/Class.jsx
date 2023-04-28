import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* Custom Hooks */
import usePageTitle from "../../hooks/usePageTitle";

/* Components */
import Loader from "../../components/Loader";
import ClassContent from "./ClassContent";

export default function Class() {
  const { classId } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  usePageTitle(`Class - ${classId} | PAKJMS Tests Management`);

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await fetch(
        `/.netlify/functions/fetchSubjects?class=${classId}`
      );
      const data = await response.json();
      setSubjects(data.subjects);
      setLoading(false);
    };
    fetchClasses();
  }, [classId]);

  return (
    <div className="class-wrapper">
      {loading ? (
        <Loader />
      ) : (
        <ClassContent subjects={subjects} classId={classId} />
      )}
    </div>
  );
}
