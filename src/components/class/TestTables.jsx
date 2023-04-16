/* Components */
import Loader from "../Loader";

/* Utils */
import modifyDateString from "../../utils/modifyDateString";

export default function Tables({ classId, tests, openModal }) {
  return (
    <main className="tables-wrapper">
      <div className="page-info">
        <button className="btn btn-primary" title="refresh">
          <span className="material-icons">refresh</span>
        </button>

        <h2>Class - {classId}</h2>

        <button
          className="btn btn-primary"
          onClick={openModal}
          title="Add a new test"
        >
          <span className="material-icons">add_circle</span>
          <span>Test</span>
        </button>
      </div>

      <div className="tables">
        {tests.length === 0 ? (
          <Loader />
        ) : (
          tests.map(test => (
            <div className="table-container" key={test._id}>
              <div className="table-info">
                <p>Test Date - {modifyDateString(test.date)}</p>
                <div className="chart-container">
                  <button className="btn btn-primary">
                    <span className="material-icons">analytics</span>
                    <span>See Chart</span>
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
          ))
        )}
      </div>
    </main>
  );
}
