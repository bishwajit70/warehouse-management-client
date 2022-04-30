import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import HeaderArea from './components/Pages/HeaderArea/HeaderArea';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import RequireAuth from './components/Pages/RequreAuth/RequireAuth';
import Inventory from './components/Pages/Inventory/Inventory';
import ManageInventory from './components/Pages/MaanageInventory/ManageInventory';
import AddNewItem from './components/Pages/AddNewItem/AddNewItem';

function App() {
  return (
    <div className="App">
      <HeaderArea></HeaderArea>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addnewitem' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>

        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}>
        </Route>



        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
