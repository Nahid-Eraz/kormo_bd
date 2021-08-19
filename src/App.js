import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Suspense } from 'react';
import Home from './components/Home/Home/Home';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster/>
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
