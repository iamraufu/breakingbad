import './App.css';
import Quote from './components/Quote/Quote';
import Home from './components/Home/Home'
import Episode from './components/Episode/Episode'
import Death from './components/Death/Death'
import Character from './components/Character/Character'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/episode'>
            <Episode />
          </Route>
          <Route path='/quote'>
            <Quote />
          </Route>
          <Route path='/death'>
            <Death />
          </Route>
          <Route path='/character'>
            <Character />
          </Route>
          <Router path='*'>
            <NotFound />
          </Router>
        </Switch>
      </Router>

    // <div>
    //   <h1>{quote.length}</h1>
      
    //   {
    //     quote.map(qt =><Quote quote={qt} key={qt.quote_id}></Quote>)
    //   }
    // </div>
  );
}

export default App;
