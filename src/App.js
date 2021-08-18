import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Suspense } from 'react';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Suspense>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <Route path="/">

          </Route> */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
