import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import  Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Loginscreen  from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path="/home" exact element={<Homescreen/>}/>
    <Route path="/booking" exact element={<Bookingscreen/>}/>
     {/* <Route path="/booking/:roomid" component={Bookingscreen} />   */}
    <Route path="/login" exact element={<Loginscreen/>}/>
    <Route path="/register" exact element={<Registerscreen/>}/>
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
