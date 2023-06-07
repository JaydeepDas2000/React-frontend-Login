import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('successMessage') !== null;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/success" component={Products} />
        </Switch>
      </Router> */}
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute exact path="/products/:productId" component={ProductDetails} />
        </div>
      </Router>
    </div>
  );
}

export default App;
