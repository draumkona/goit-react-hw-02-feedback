import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import css from '../components/App.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = state => {
    this.setState(prevState => {
      return { [state]: prevState[state] + 1 };
    });
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
    const actualState = this.state;

    return (
      <>
        <section title="Please leave feedback" className={css.feedbackSection}>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={actualState}
            onLeaveFeedback={this.handleFeedback}
          />
        </section>
        <section>
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
            <Notification message="There is no feedback to display :(" />
          )}
        </section>
      </>
    );
  }
}
