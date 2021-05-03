// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        {/* <Switch>
          <Route exact path="/" component={Home}/>
        </Switch> */}
        
      </div>
    </Router>
  );
}

export default App;
