import propTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <ul>
        <li>
          <button type="button" name="good" onClick={onLeaveFeedback}>
            Good
          </button>
        </li>
        <li>
          <button type="button" name="neutral" onClick={onLeaveFeedback}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" name="bad" onClick={onLeaveFeedback}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
