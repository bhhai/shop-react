import ProductFeature from 'features/Product';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/products">
          <ProductFeature />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
