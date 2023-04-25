export default function SubjectsTabs({ subjects, subject, handleSubject }) {
  return (
    <div className="subjects-navigation-wrapper">
      <h1>Subjects</h1>
      <nav className="subjects-navigation">
        {subjects.length > 0 &&
          subjects.map((sub, index) => {
            return (
              <button
                className="btn"
                key={index}
                style={{
                  backgroundColor:
                    subject === sub ? "var(--subject-hover-bg)" : ""
                }}
                onClick={handleSubject}
              >
                {sub}
              </button>
            );
          })}
      </nav>
    </div>
  );
}
