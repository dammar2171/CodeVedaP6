import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardContainer from "./components/CardContainer";
import Heading from "./components/Heading";
import { useState } from "react";
import { FaQuestion, FaRegUser } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import GameEntry from "./components/GameEntry";

function App() {
  const data = [
    {
      question: "Select one input device.",
      options: {
        o1: "Keyboard",
        o2: "Plotter",
        o3: "Monitor",
        o4: "Screen",
      },
      answer: "Keyboard",
    },
    {
      question: "Which device is used to display output?",
      options: {
        o1: "Mouse",
        o2: "Printer",
        o3: "Monitor",
        o4: "Keyboard",
      },
      answer: "Monitor",
    },
    {
      question: "Which one is a pointing device?",
      options: {
        o1: "Scanner",
        o2: "Mouse",
        o3: "Speaker",
        o4: "Projector",
      },
      answer: "Mouse",
    },
    {
      question: "Which device is used to print documents?",
      options: {
        o1: "Monitor",
        o2: "Keyboard",
        o3: "Printer",
        o4: "Scanner",
      },
      answer: "Printer",
    },
    {
      question: "Which of the following is an input device?",
      options: {
        o1: "Speaker",
        o2: "Monitor",
        o3: "Keyboard",
        o4: "Projector",
      },
      answer: "Keyboard",
    },
  ];
  const dataLen = data.length;
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [show, setShow] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [indexData, setIndexData] = useState(0);
  const [start, setStart] = useState(false);
  const [displayBtn, setDisplayBtn] = useState("block");

  const handleStart = () => {
    setStart(true);
    setDisplayBtn("none");
  };

  const handleResult = () => {
    setShow(true);
    const percent = (score / dataLen) * 100;
    setPercentage(percent);
  };

  const handleCheck = (option, answer, next) => {
    if (option == answer) {
      setStatus("right");
      setScore(score + 1);
    } else {
      setStatus("wrong");
    }
    setIndexData(next);

    if (next + 1 == data.length) {
      setShowMessage(true);
    }
  };

  const handlePlayAgain = () => {
    setDisplayBtn("block");
    setStart(false);
    setShow(false);
  };
  return (
    <>
      {" "}
      <Heading />
      <GameEntry handleStart={handleStart} displayBtn={displayBtn} />
      {start && (
        <div className="main">
          <CardContainer
            data={data}
            handleCheck={handleCheck}
            status={status}
            setStatus={setStatus}
            showMessage={showMessage}
            setShow={setShow}
            handleResult={handleResult}
            dataLen={dataLen}
            indexData={indexData}
          />
        </div>
      )}
      {show && (
        <div className="modal fade show d-block custom-modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button className="btn btn-primary" onClick={handlePlayAgain}>
                  Play Again
                </button>
                <button
                  className="btn-close"
                  onClick={() => setShow(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="listCard d-flex gap-3">
                  <div className="custom-card d-flex gap-5">
                    <div className="d-flex gap-3 align-items-center">
                      <p>
                        <FaQuestion />
                      </p>
                      <p className="d-flex flex-column">
                        <span>Question</span>
                        <span>{data.length}</span>
                      </p>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                      <p>
                        <FaRegUser />
                      </p>
                      <p className="d-flex flex-column">
                        <span>User</span>
                        <span>Dammar</span>
                      </p>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                      <p>
                        <BiCategoryAlt />
                      </p>
                      <p className="d-flex flex-column">
                        <span>Category</span>
                        <span>Computer</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="score-container mt-4">
                  <p className="text-center">
                    Your score is{" "}
                    <span className="badge rounded-pill text-bg-info">
                      {score}
                    </span>
                  </p>
                  {percentage >= 60 ? (
                    <p className="text-center alert alert-success">
                      Congratulation you have got <span>{percentage}%</span>
                    </p>
                  ) : (
                    <p className="text-center alert alert-danger">
                      You have loose. Try again!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
