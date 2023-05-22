import { Route ,Routes} from 'react-router';
import './App.css';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Tour from './components/Tour';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import TourEdit from './pages/TourEdit';
import TourAdd from './pages/TourAdd';
import DeleteTour from './pages/DeleteTour';
import Hotels from './pages/Hotels';
import Hotel from './pages/Hotel';
import HotelAdd from './pages/HotelAdd';
import HotelEdit from './pages/HotelEdit';
import HotelDelete from './pages/HotelDelete';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tours' element={<Tours></Tours>}></Route>
        <Route path='/tours/:id' element={<Tour></Tour>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/hotels' element={<Hotels></Hotels>}></Route>
        <Route path='/hotels/:id' element={<Hotel></Hotel>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/admin/edit/tours/:tourId' element={<TourEdit></TourEdit>}></Route>
        <Route path='/admin/edit/hotels/:hotelId' element={<HotelEdit></HotelEdit>}></Route>
        <Route path='/admin/add/tours/' element={<TourAdd></TourAdd>}></Route>
        <Route path='/admin/add/hotels/' element={<HotelAdd></HotelAdd>}></Route>
        <Route path='/admin/delete/hotels/:hotelId' element={<HotelDelete></HotelDelete>}></Route>
        <Route path='/admin/delete/tours/:tourId' element={<DeleteTour></DeleteTour>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
