import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 5,
    neutral: 2,
    bad: 3,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <section title="Please leave feedback" class="feedbackSection">
        <h1>Please leave feedback</h1>
        <div class="buttonContainer">
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h2>Statistics:</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <Notification message="There is no feedback to display" />
        )}
      </section>
    );
  }
}
