const Card = ({ item }) => {
  console.log("Item:", item);

  return (
    <div className="card" style={{ width: "30rem", padding: "1rem" }}>
      <h2>QN: {item.question}</h2>
      <div className="btn-group d-flex gap-3">
        <button type="button" className="btn btn-info">
          {item.options.o1}
        </button>
        <button type="button" className="btn btn-info">
          {item.options.o2}
        </button>
        <button type="button" className="btn btn-info">
          {item.options.o3}
        </button>
        <button type="button" className="btn btn-info">
          {item.options.o4}
        </button>
      </div>
      <div className=" mt-3 alert alert-success text-center fs-5" role="alert">
        You are right!
      </div>
      <div className="alert alert-danger text-center fs-5" role="alert">
        You are Wrong!
      </div>

      <div className="controller-btn d-flex justify-content-between">
        <button type="button" class="btn btn-primary btn-sm">
          Previous
        </button>
        <button type="button" class="btn btn-secondary btn-sm">
          Next
        </button>
      </div>
    </div>
  );
};
export default Card;
