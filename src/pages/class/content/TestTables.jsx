/* Utils */
import modifyDateString from "../../../utils/modifyDateString";

export default function TestTables({ tests }) {
  if (tests.length > 0) {
    return tests.map(test => (
      <div className="table-container" key={test._id} id={test._id}>
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
}
