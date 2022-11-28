import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import {Header} from'./components/Header/'
import {HomePage} from './pages/HomePage'
import {paths} from './paths';
function App() {
  return (
    <div className="App">
      <Router>
    <Header/>
    <Routes>
      <Route exact path = "/" element ={<HomePage/>}/>
     
    </Routes>

      </Router>
    </div>
  );
}

export default App;
