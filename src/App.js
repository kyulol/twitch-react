// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import Games from './Components/Games/Games';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="flex pt-16 ">
          <Sidebar />
          <Games />

        </div>
        {/* <Switch>
          <Route exact path="/" component={Home}/>
        </Switch> */}
        
      </div>
    </Router>
  );
}

export default App;
