import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Warehouse management</h1>
      <Routes>
      <Route path='/'element={<Home></Home>}></Route>

      </Routes>
    </div>
  );
}

export default App;
