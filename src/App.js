import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import Home from './Components/home/Home';

import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import Games from './Components/games/Games';
import TopStreams from './Components/topStreams/TopStreams';
import Live from './Components/live/Live';

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Sidebar />
          <Switch>
            <>
              <div className="flex pt-16 pl-60 ">
                <Route exact path="/" component={Games} />
                <Route exact path="/top-streams" component={TopStreams} />
                <Route exact path="/live" component={Live} />
              </div>
            </>
          </Switch>
        
      </div>

    </Router>
  );
}

export default App;
