import './App.css';
import ListItem from './Components/ListItem';


function App() {
  return (
    <div className="App">
    <header>My List</header>
    <div>
      <ul>
        <ListItem doThis="This is the first thing"/>
        <ListItem doThis="This is the second thing"/>
      </ul>
    </div>
    </div>
  );
}

export default App;
