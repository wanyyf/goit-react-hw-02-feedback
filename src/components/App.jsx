import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClickCount = evt => {
    const { name } = evt.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, currentValue) => {
      return (acc += currentValue);
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const posFeedback =
      Math.round((this.state.good / this.countTotalFeedback()) * 100) || '0';
    return posFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onBtnClickCount} />
        </Section>
        {Object.values(this.state).every(el => el === 0) ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
