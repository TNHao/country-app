import Header from './components/Header/Header';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/region/:regionName" component={Home}/>
          <Route path="/country/:code" component={Detail}/>
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
