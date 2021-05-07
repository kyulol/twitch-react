import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import Home from './Components/home/Home';

import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import Games from './Components/games/Games';
import TopStreams from './Components/topStreams/TopStreams';
import Live from './Components/live/Live';
import GameStreamers from './Components/gameStreamers/GameStreamers';
import SearchResults from './Components/searchResults/SearchResults';

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
                <Route exact path="/live/:slug" component={Live} />
                <Route exact path="/game-streamers/:slug" component={GameStreamers} />
                <Route exact path="/search-results/:slug" component={SearchResults} />
              </div>
            </>
          </Switch>
        
      </div>

    </Router>
  );
}

export default App;
