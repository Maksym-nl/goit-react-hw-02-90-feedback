export function Feedback({ handleClick, options }) {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => handleClick(option)} type="button">
          {option}
        </button>
      ))}
    </div>
  );
}
