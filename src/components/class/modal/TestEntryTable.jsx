import { useState, useEffect } from "react";

/* Components */
import Loader from "../../Loader";

export default function TestTable({ classId }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(
        `/.netlify/functions/fetchStudents?classId=${classId}`
      );
      setStudents(await response.json());
    };
    fetchStudents();
  }, [classId]);

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
              <tr key={student._id}>
                <td>{index + 1}.</td>
                <td>{student.student_name}</td>
                <td>
                  <input type="number" min="0" max="100" step="5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
