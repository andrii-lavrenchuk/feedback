import { useState } from "react";

import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const makeFeedback = (type) => {
    switch (type) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        console.warn("Такий тип не обробляється");
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          makeFeedback={makeFeedback}
        />
      </Section>

      {countTotalFeedback() !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   makeFeedback = (type) => {
//     this.setState((prevState) => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { bad, neutral, good } = this.state;
//     return bad + neutral + good;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;

//     return Math.round((good / this.countTotalFeedback()) * 100);
//   };

// render() {
//   const { good, neutral, bad } = this.state;
//   return (
//     <>
//       <Section title="Please, leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           makeFeedback={this.makeFeedback}
//         />
//       </Section>

//       {this.countTotalFeedback() !== 0 ? (
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       ) : (
//         <Notification message="No feedback given" />
//       )}
//     </>
//   );
// }
// }

export default App;
