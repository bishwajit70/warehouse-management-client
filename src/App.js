import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <h1>Warehouse management</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
