import '../App.css';
import { useState, useEffect } from 'react';

import Bat from '../Game/Bat';
import Bowl from '../Game/Bowl';
import {useNavigate} from 'react-router-dom';



function Home(props) {
  let socket = props.socket;
let navigate = useNavigate()
  const [room, Setroom] = useState('')
  const [players, SetPlayers] = useState({})
  const [turn, Setturn] = useState(null)


  const sendMessage = () => {
    socket.emit('send_message', {
      room: room,
    })
  }

  useEffect(() => {
    socket.on("start_play", (players) => {
      SetPlayers(players)
      Game(players, socket)
    })
  }, [socket])

  const Game = (players, socket) => {
    Setturn(players[0] === socket.id);
  }

  return (
    
    <div className="App">
      <div  style={{display:'flex' , flexDirection:'column'}}>
      <input type="text" style={{height:'30px',textAlign:'center',marginBottom:'1px'}} placeholder="Enter the room" value={room} onChange={(e) => Setroom(e.target.value)} />
      <button type="submit" onClick={sendMessage} >Send Message</button>
      </div>
      { turn===null ? <p></p>
        :
        turn===true ? navigate('/bat') : navigate('/bowl')
      }
    </div>
  );
}

export default Home;
