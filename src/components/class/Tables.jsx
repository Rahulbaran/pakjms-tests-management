export default function Tables({ classId }) {
  const arr = new Array(20).fill(Math.random());

  return (
    <main className="tables-wrapper">
      <button className="btn btn-primary">
        <span className="material-icons">add_circle</span>
        <span>Add a test</span>
      </button>

      <h2>Class - {classId}</h2>

      <div className="tables">
        <div className="table-container">
          <div className="table-info">
            <p>Test Date - 05/09/2024</p>
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
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((ele, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>Rahul Kumar - {String(ele).slice(0, 10)}</td>
                  <td>45</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-primary table-delete-btn">
            <span className="material-icons">delete</span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </main>
  );
}
