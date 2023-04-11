export default function TestTableInfo({ subjects }) {
  return (
    <div className="table-info">
      <h2 id="modal_title">Create a new Test</h2>

      <div className="table-input-fields">
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select name="subjects">
            {subjects.map(sub => (
              <option value={sub} key={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="full_marks">Full Marks</label>
          <input
            type="number"
            name="full_marks"
            id="full_marks"
            placeholder="test full marks"
          />
        </div>
      </div>
    </div>
  );
}
