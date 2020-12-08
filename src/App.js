import './App.css';
import ListItem from './Components/ListItem';

let listItems = ["Wake up", "Eat Breakfast", "Brush Teeth", "Code", "Code Some More", "Eat Lunch", "Code Even More", "Eat Dinner", "Code MOAR!", "Sleep"];

let listAllItems = listItems.map((listItem, idx) => {
  return <ListItem doThis={listItem} key={idx}/>
})
function App() {
  return (
    <div className="App">
    <header>My List</header>
    <div>
      <ul>
      <>{listAllItems}</>
      </ul>
    </div>
    </div>
  );
}

export default App;
