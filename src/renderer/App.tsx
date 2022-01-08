import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Home from '../views/index';
// import Sideviewer from '../views/sideviewer';
import Sidebar from '../component/sidebar';
import CreateNewConnectionView from '../views/createNewConnectionView';
import ConnectionDetailsView from '../views/connectionDetailsView';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/id/:id" component={ConnectionDetailsView} />
          <Route path="/createNew" component={CreateNewConnectionView} exact />
        </Switch>
      </div>
    </Router>
  );
}
