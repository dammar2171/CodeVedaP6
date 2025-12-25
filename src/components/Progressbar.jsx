const Progressbar = ({ current, total }) => {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div
      className="progress mt-4"
      role="progressbar"
      aria-label="Example with label"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        {percentage}%
      </div>
    </div>
  );
};
export default Progressbar;
