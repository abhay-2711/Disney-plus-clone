import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Router>
    {<Header />}
      <Routes>
        <Route exact path="/" 
        element={<Login />} />
        <Route 
          path='/home'
          element={<Home />} 
        />
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
