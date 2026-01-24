// Reading props in event handlers

function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function RespondingToEvents2() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading">
        Upload Image
      </AlertButton>
    </div>
  );
}