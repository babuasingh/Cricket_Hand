import './App.css';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Bat from './Game/Bat';
import Bowl from './Game/Bowl';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000')
function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home socket={socket}/>} />
          <Route exact path='/bat' element={<Bat socket={socket}/>} />
          <Route exact path='/bowl' element={<Bowl socket={socket}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
