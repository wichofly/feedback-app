import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

// In order to get access to our state and our contacts, we are going to wrap everything in a provider.
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is Feedback item 1',
      rating: 6,
    },
    {
      id: 2,
      text: 'This is Feedback item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This is Feedback item 3',
      rating: 4,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false, // if the edit icon is not clicked it will be set to false
  });

  // Update Feedback item
  // for each  feedback, we are calling an item and then for each one, we want to run a condition (item.id === id) if so, 
  // then (?) we want to spread across the current item here and then the update item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // Spread syntax (...) can be used when all elements from an object or array need to be included in a new array or object,
    // or should be applied one-by-one in a function call's arguments list.
    setFeedback([newFeedback, ...feedback]); //So basically, we're taking all the objects that are already in feedback and putting it into this array and the newFeedback.
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are your sure you want to delete it?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit, // Piece of state that holds the item and the boolean
        deleteFeedback,
        addFeedback,
        editFeedback, // this is te function that runs when we click this
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
