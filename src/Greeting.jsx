/** @format */

function Greeting() {
  const greetWords = ["Vanakam", "Namaste", "Welcome", "bienvenido"];
  return (
    <>
      <h3>Greetings in different languages:</h3>
      <ul>
        {greetWords.map((word) => {
          return <li key={word}>{word}</li>;
        })}
      </ul>
    </>
  );
}

export default Greeting;
