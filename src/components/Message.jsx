const Message = ({ setShow, handleResult }) => {
  return (
    <>
      <div className="message mt-4">
        <h5 className="fw-light">
          You have completed all questions{" "}
          <button className="btn btn-warning" onClick={handleResult}>
            Show Result
          </button>
        </h5>
      </div>
    </>
  );
};

export default Message;
