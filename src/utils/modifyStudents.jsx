export default function modifyStudents(students) {
  const st = [];

  for (const student of students) {
    st.push(student.student_name);
  }
  return st;
}
