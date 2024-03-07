/** @format */
//here list is rendered with list item
function ListItem(props) {
  return (
    <>
      <li>{props.animal}</li>
    </>
  );
}

function List(props) {
  //list function is called here and props.animals is used to access the array that was passed into list
  return (
    //ListItem function is called here and props.animals is used to call a map function for every element of animals here, here for the ListItem each animal is passed as a prop
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

//Main app function
function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizards"];

  return (
    //List function is called here and  array of animals is passed as props here
    <div>
      <h1>Animals:</h1>
      <List animals={animals} />
    </div>
  );
}
