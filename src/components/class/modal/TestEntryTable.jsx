/* Components */
import Loader from "../../Loader";

export default function TestTable({ students }) {
  return (
    <>
      {students.length === 0 ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th>SL. No.</th>
              <th>Student Name</th>
              <th>Student Marks</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{student}</td>
                <td>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="5"
                    className="test-marks"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
