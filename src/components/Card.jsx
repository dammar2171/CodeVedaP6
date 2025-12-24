import { useState } from "react";
import Message from "./Message";
import Progressbar from "./Progressbar";
const Card = ({
  data,
  handleCheck,
  status,
  setStatus,
  showMessage,
  setShow,
  handleResult,
}) => {
  const [next, setNext] = useState(0);

  const handleNext = () => {
    setStatus(null);
    setNext(next + 1);
  };

  const handlePrevious = () => {
    setNext(next - 1);
  };
  return (
    <div className="card" style={{ width: "30rem", padding: "1rem" }}>
      <h2>QN: {data[next].question}</h2>
      <div className="btn-group d-flex gap-3 mt-4">
        <button
          type="button"
          onClick={() =>
            handleCheck(data[next].options.o1, data[next].answer, next)
          }
          className="btn btn-info"
        >
          {data[next].options.o1}
        </button>
        <button
          type="button"
          onClick={() =>
            handleCheck(data[next].options.o2, data[next].answer, next)
          }
          className="btn btn-info"
        >
          {data[next].options.o2}
        </button>
        <button
          type="button"
          onClick={() =>
            handleCheck(data[next].options.o3, data[next].answer, next)
          }
          className="btn btn-info"
        >
          {data[next].options.o3}
        </button>
        <button
          type="button"
          onClick={() =>
            handleCheck(data[next].options.o4, data[next].answer, next)
          }
          className="btn btn-info"
        >
          {data[next].options.o4}
        </button>
      </div>
      {status == "right" && (
        <div
          className=" mt-4 alert alert-success text-center fs-6"
          role="alert"
        >
          You are correct!
        </div>
      )}
      {status == "wrong" && (
        <div className="mt-4 alert alert-danger text-center fs-6" role="alert">
          You are Wrong!
        </div>
      )}
      <div className="mt-4 controller-btn d-flex justify-content-between">
        <button
          type="button"
          onClick={handlePrevious}
          className="btn btn-primary btn-sm"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="btn btn-secondary btn-sm"
        >
          Next
        </button>
      </div>
      {showMessage && <Message setShow={setShow} handleResult={handleResult} />}
      <Progressbar />
    </div>
  );
};
export default Card;
