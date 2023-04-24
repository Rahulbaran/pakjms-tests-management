import { useNavigate } from "react-router-dom";

/* Components */
import Loader from "../Loader";

/* Utils */
import modifyDateString from "../../utils/modifyDateString";

export default function Tables({ classId, allTests, subject, toggleModal }) {
  const navigate = useNavigate();

  const tests = allTests.filter(test => test.subject === subject);

  const testTables = () => {
    if (tests.length > 0) {
      return tests.map(test => (
        <div className="table-container" key={test._id}>
          <div className="table-info">
            <p>Test Date - {modifyDateString(test.date)}</p>
            <div className="chart-container">
              <button className="btn btn-primary">
                <span className="material-icons">analytics</span>
                <span>Chart</span>
              </button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>SL. No.</th>
                <th>Students</th>
                <th>Marks ({test.fm})</th>
              </tr>
            </thead>
            <tbody>
              {test.students.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{student}</td>
                  <td>{test.marks[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-primary table-delete-btn">
            <span className="material-icons">delete</span>
            <span>Delete</span>
          </button>
        </div>
      ));
    } else {
      return (
        <h3 style={{ fontSize: "2.25rem", marginBlockStart: "1em" }}>
          No test found
        </h3>
      );
    }
  };

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
        {allTests.length === 0 ? <Loader /> : testTables()}
      </div>
    </main>
  );
}
