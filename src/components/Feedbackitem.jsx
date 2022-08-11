import { useState } from 'react';

function Feedbackitem() {
  // setRating, setText are used to update the object
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('Mauricio the most handsome guy');

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default Feedbackitem;
