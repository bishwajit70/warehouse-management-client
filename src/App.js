import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import HeaderArea from './components/Pages/HeaderArea/HeaderArea';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <HeaderArea></HeaderArea>
      <h1>Warehouse management</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
