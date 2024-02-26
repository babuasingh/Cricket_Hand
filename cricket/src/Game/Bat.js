import React, { useEffect, useState } from 'react'

const Bat = (props) => {
  let socket = props.socket
  // console.log(props.socket);
  const [score, Setscore] = useState(0)
  const [number, Setnumber] = useState(0)
  const [time,Settime] = useState(0)


  useEffect(()=>{
    setInterval(()=>{
      Settime(time-1);
    },2000)
  },[])

  useEffect(() => {
    socket.emit('batting', [number, socket.id])
    Settime(10)
  }, [number])

  return (
    <div>
      <h1>You will bat first</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <button onClick={() => Setnumber(1)} style={{ height: '50px', width: '50px' }} >1</button>
          <button onClick={() => Setnumber(2)} style={{ height: '50px', width: '50px' }} >2</button>
          <button onClick={() => Setnumber(3)} style={{ height: '50px', width: '50px' }} >3</button>
        </div>
        <div>
          <button onClick={() => Setnumber(4)} style={{ height: '50px', width: '50px' }} >4</button>
          <button onClick={() => Setnumber(5)} style={{ height: '50px', width: '50px' }} >5</button>
          <button onClick={() => Setnumber(6)} style={{ height: '50px', width: '50px' }} >6</button>
        </div>
      </div>


      <button type="submit">Take turn</button>
      <h1>Your Score {score} runs</h1>
      <h1>You have {time} seconds left</h1>
    </div>
  )
}

export default Bat
