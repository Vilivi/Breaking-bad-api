import './App.css';
import MainContainer from './Components/Maincontainer';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MainContainer />
      </div>
    </Router>
  );
}

export default App;