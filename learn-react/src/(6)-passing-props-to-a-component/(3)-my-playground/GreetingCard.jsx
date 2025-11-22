export default function GreetingCard({ name, message, color}) {
  return (
    <>
      <h2>Hello, {name}!</h2>
      <p style={{ color }}>{message}</p>
    </>
  );
}