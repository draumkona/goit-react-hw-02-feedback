import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    return (
      <section class="feedbackSection">
        <h1>Please leave feedback</h1>
        <div class="buttonContainer">
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h2>Statistics:</h2>
        {total ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <Notification message="There is no feedback to display" />
        )}
      </section>
    );
  }
}
