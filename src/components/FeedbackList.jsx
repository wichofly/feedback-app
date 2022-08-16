import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';

import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

// feedback is working as props, i need to write this prop in app.js
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  // we do have a feedback so it wont be displayed. the feedback come from "useState(FeedbackData)"
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
