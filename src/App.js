import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="*" exact component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
