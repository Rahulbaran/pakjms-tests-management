export default function SubjectsTabs({ subjects }) {
  return (
    <div className="subjects-navigation-wrapper">
      <h1>Subjects</h1>
      <nav className="subjects-navigation">
        {/* {subjects.length > 0 &&
          subjects.map((sub, index) => {
            return (
              <button className="btn" key={index}>
                {sub}
              </button>
            );
          })} */}
      </nav>
    </div>
  );
}
