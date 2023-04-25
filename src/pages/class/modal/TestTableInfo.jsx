export default function TestTableInfo({
  subjects,
  focused,
  studentsInfo,
  handleChange
}) {
  return (
    <div className="table-info">
      <div className="table-input-fields">
        <div className="form-group">
          <label htmlFor="test-date">Test Date</label>
          <input
            type="date"
            ref={focused}
            name="test-date"
            id="test-date"
            value={studentsInfo.date}
            onChange={e => handleChange(e, "date")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            name="subjects"
            value={studentsInfo.subject}
            onChange={e => handleChange(e, "subject")}
          >
            {subjects.length > 0 &&
              subjects.map(sub => (
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
            value={studentsInfo.fm}
            onChange={e => handleChange(e, "fm")}
          />
        </div>
      </div>
    </div>
  );
}
