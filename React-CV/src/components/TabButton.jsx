export default function TabButton({ children }) {
  function handleClick() {
    console.log('Test click event')
  }
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}
