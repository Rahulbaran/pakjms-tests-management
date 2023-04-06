import { useParams } from "react-router-dom";

export default function Class() {
  const { classId } = useParams();

  return (
    <div className="class-wrapper">
      <h1>Welcome to class - {classId}</h1>
    </div>
  );
}
