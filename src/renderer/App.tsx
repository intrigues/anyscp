import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Home from '../views/index';
import Sideviewer from '../views/sideviewer';
import Sidebar from '../component/sidebar';
import CreateNewFunction from '../views/createNewView';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/id/:id" component={Sideviewer} exact />
          <Route path="/createNew" component={CreateNewFunction} exact />
        </Switch>
      </div>
    </Router>
  );
}
