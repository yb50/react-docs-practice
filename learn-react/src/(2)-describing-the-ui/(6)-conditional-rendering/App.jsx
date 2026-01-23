// if statement
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>
  }
  return <li className="item">{name}</li>
}

// (? :) statement, in other words; “if isPacked is true, then (?) render name + ' ✅', otherwise (:) render name”.

/*
return (
  <li className="item">
    {isPacked ? name + ' ✅' : name }
  </li>
);
*/

// with delete function

/*
return (
  <li className="item">
    {isPacked ? (
      <del>
        {name + ' ✅'}
      </del>
    ) : (
      name
    )}
  </li>
);
*/

// Logical AND operator (&&), in other words; “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.
/*
return (
  <li className="item">
    {name} {isPacked && '✅'}
  </li>
);
*/

export default function PackingList2() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true}
          name="Space suit"
        />
        <Item 
          isPacked={false}
          name="Helmet with a golden leaf"
        />
        <Item 
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}