import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

// In order to get access to our state and our contacts, we are going to wrap everything in a provider.
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 6,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // Spread syntax (...) can be used when all elements from an object or array need to be included in a new array or object,
    // or should be applied one-by-one in a function call's arguments list. 
    setFeedback([newFeedback, ...feedback]) //So basically, we're taking all the objects that are already in feedback and putting it into this array and the newFeedback.
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are your sure you want to delete it?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider value={{ 
      feedback, 
      deleteFeedback,
      addFeedback, 
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
