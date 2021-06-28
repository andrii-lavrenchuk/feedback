const FeedbackOptions = ({ options, makeFeedback }) =>
  options.map((option) => (
    <button key={option} onClick={() => makeFeedback(option)}>
      {option}
    </button>
  ));

export default FeedbackOptions;
