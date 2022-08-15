import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // Spread syntax (...) can be used when all elements from an object or array need to be included in a new array or object,
    // or should be applied one-by-one in a function call's arguments list. 
    setFeedback([newFeedback, ...feedback]) //So basically, we're taking all the objects that are already in feedback and putting it into this array and the newFeedback.
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are your sure you want to delete it?')) {
      setFeedback(feedback.filter((item) => item.id !== id)
      )
    }
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Route exact path='/'>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats />
            <FeedbackList handleDelete={deleteFeedback} />
          </Route>

          <Route path='/about' component={AboutPage} />

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>

  )
}

export default App