import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Success from './Pages/Success';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Router>
        <Switch>
          <Route path='/login' Component={Login} />
          <Route path='/success' Component={Success} />
          <Redirect to="/create" />
        </Switch>
      </Router> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/success" component={Success} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
