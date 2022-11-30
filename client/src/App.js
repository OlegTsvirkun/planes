import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import {paths} from './paths';
import {Header} from'./components/Header/'
import {HomePage} from './pages/HomePage'
import { PlanePage } from './pages/PlanePage';
import { CreatePlane} from './pages/CreatePlane';
function App() {
  return (
    <div className="App">
      <Router>
    <Header/>
    <Routes>
      <Route exact path = {paths.home} element ={<HomePage/>}/>
      <Route exact path = {`${paths.plane}/:id`} element ={<PlanePage/>}/>
      <Route exact path = {paths.createPlane} element ={<CreatePlane/>}/>
     
    </Routes>

      </Router>
    </div>
  );
}

export default App;
