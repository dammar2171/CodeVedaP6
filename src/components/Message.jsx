const Message = ({ setShow, handleResult }) => {
  return (
    <>
      <div className="message mt-4">
        <h5 className="fw-light">
          <button className="btn btn-warning w-100" onClick={handleResult}>
            Show Result
          </button>
        </h5>
      </div>
    </>
  );
};

export default Message;
