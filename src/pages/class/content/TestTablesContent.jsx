import { useNavigate } from "react-router-dom";

/* Components */
import Loader from "../../../components/Loader";
import TestTables from "./TestTables";

export default function TestTablesContent({
  classId,
  allTests,
  subject,
  toggleModal
}) {
  const navigate = useNavigate();
  const tests = allTests.filter(test => test.subject === subject);

  return (
    <main className="tables-wrapper">
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
        {allTests.length === 0 ? <Loader /> : <TestTables tests={tests} />}
      </div>
    </main>
  );
}
