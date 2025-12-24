const Progressbar = () => {
  return (
    <div
      className="progress mt-4"
      role="progressbar"
      aria-label="Example with label"
      aria-valuenow={25}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-bar" style={{ width: "25%" }}>
        25%
      </div>
    </div>
  );
};
export default Progressbar;
