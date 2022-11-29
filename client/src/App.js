import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import {Header} from'./components/Header/'
import {HomePage} from './pages/HomePage'
import {paths} from './paths';
import { PlanePage } from './pages/PlanePage';
function App() {
  return (
    <div className="App">
      <Router>
    <Header/>
    <Routes>
      <Route exact path = {paths.home} element ={<HomePage/>}/>
      <Route exact path = {`${paths.plane}/:id`} element ={<PlanePage/>}/>
     
    </Routes>

      </Router>
    </div>
  );
}

export default App;
