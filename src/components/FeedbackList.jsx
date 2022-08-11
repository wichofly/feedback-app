import FeedbackItem from "./FeedbackItem";

// feedback is working as props, i need to write this prop in app.js

function FeedbackList({ feedback }) {
  // we do have a feedback so it wont be displayed. the feedback come from "useState(FeedbackData)"
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
