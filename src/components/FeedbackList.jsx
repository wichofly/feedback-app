import FeedbackItem from './FeedbackItem';
// import PropTypes from 'react';

// feedback is working as props, i need to write this prop in app.js

function FeedbackList({ feedback, handleDelete }) {
  // we do have a feedback so it wont be displayed. the feedback come from "useState(FeedbackData)"
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   )
// }

export default FeedbackList;
