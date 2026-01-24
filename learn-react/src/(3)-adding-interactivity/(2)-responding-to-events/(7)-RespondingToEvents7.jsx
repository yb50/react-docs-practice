// Preventing default behavior

// Refreshes the page when submitting

/*
export default function Signup() {
  return (
    <form onSubmit={() => alert('Submitting!')}>
      <input />
      <button>Send</button>
    </form>
  );
}
*/

// Prevents the default refreshing

export default function RespondingToEvents7() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}