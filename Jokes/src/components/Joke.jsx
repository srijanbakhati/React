import React from 'react'
function Jokes(props) {
  return (
    <div>
     {props.setup && <h3>Setup:{props.setup}</h3>}
      <p>Punchline:{props.punchline}</p>
    </div>
  );
}

export default Jokes;