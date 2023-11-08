export function Statistic({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive Feedback: {positiveFeedback}%</p>
      </li>
    </ul>
  );
}
