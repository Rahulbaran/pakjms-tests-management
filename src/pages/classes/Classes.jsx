import { Link } from "react-router-dom";

export default function Classes() {
  return (
    <div className="classes-wrapper">
      <div className="add-student-wrapper">
        <button className="btn btn-primary">
          <span className="material-icons">add_circle</span>
          <span>Add a Student</span>
        </button>
      </div>

      <main className="classes-container">
        <h1>All Classes</h1>
        <div className="classes">
          <Link to="1" className="btn btn-primary btn-link">
            Class-1
          </Link>
          <Link to="2" className="btn btn-primary btn-link">
            Class-2
          </Link>
          <Link to="3" className="btn btn-primary btn-link">
            Class-3
          </Link>
          <Link to="4" className="btn btn-primary btn-link">
            Class-4
          </Link>
          <Link to="5" className="btn btn-primary btn-link">
            Class-5
          </Link>
          <Link to="6" className="btn btn-primary btn-link">
            Class-6
          </Link>
          <Link to="7" className="btn btn-primary btn-link">
            Class-7
          </Link>
          <Link to="8" className="btn btn-primary btn-link">
            Class-8
          </Link>
        </div>
      </main>
    </div>
  );
}
