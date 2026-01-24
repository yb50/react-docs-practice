// Stopping propagation

/*
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function RespondingToEvents6() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
*/

// Also possible without an extra Button component

export default function RespondingToEvents6() {
  return(
    <div className="Toolbar" onClick={(e) => {
      if (e.target.closest("button")) return;
      alert("You clicked on the toolbar!");
    }}>
      <button onClick={() => alert("Playing")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}