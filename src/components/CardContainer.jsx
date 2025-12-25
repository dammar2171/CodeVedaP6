import Card from "./Card";

function CardContainer({
  data,
  handleCheck,
  status,
  setStatus,
  showMessage,
  setShow,
  handleResult,
  indexData,
  dataLen,
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
        indexData={indexData}
        dataLen={dataLen}
      />
    </div>
  );
}

export default CardContainer;
