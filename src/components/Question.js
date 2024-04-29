import React, { useState, useEffect } from 'react';

function Question({ onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Decrease the time remaining by 1 second
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);

  }, [timeRemaining]); // Re-run effect whenever timeRemaining changes

  useEffect(() => {
    // When timeRemaining hits 0
    if (timeRemaining === 0) {
      // Reset timeRemaining to 10 seconds
      setTimeRemaining(10);
      // Call the onAnswered callback with false
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <p>Time remaining: {timeRemaining} seconds</p>
      {/* Display question and answers */}
    </div>
  );
}

export default Question;
