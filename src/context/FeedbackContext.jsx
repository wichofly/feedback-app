import { object } from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

// In order to get access to our state and our contacts, we are going to wrap everything in a provider.
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false, // if the edit icon is not clicked it will be set to false
  });

  // We are calling it beacuse we want to run this as soon as the page loads, as soon as our context loads.
  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc')
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

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
        isLoading,
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
