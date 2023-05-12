import { Route ,Routes} from 'react-router';
import './App.css';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Tour from './components/Tour';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tours' element={<Tours></Tours>}></Route>
        <Route path='/tours/:id' element={<Tour></Tour>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
