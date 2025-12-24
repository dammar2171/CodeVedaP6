import Card from "./Card";

function CardContainer({
  data,
  handleCheck,
  status,
  setStatus,
  showMessage,
  setShow,
  handleResult,
}) {
  return (
    <div className="card-container mt-5">
      <Card
        data={data}
        handleCheck={handleCheck}
        status={status}
        setStatus={setStatus}
        showMessage={showMessage}
        setShow={setShow}
        handleResult={handleResult}
      />
    </div>
  );
}

export default CardContainer;
