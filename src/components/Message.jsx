export default function Message({ msg, state, toggleState }) {
  return (
    <>
      {state && (
        <div
          className={
            msg.error ? "msg-wrapper error-msg-wrapper" : "msg-wrapper"
          }
        >
          <div className="msg-container">
            <p className="message">{msg.label}</p>
            <button onClick={toggleState} title="close">
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
