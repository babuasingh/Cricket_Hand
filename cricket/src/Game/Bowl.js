import React, { useState, useEffect } from 'react'

const Bowl = (props) => {
  // console.log(props.socket);
  let socket = props.socket;
  const [bowl, bowls] = useState(0)
  const [score, Setscore] = useState(0)
  const [number, Setnumber] = useState(0)

  useEffect(() => {
    socket.emit('bowling', [number, socket.id])
  }, [number])

  return (
    <div>
      <h1>You will bowl first</h1>
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
      <h1>You Bowled {bowl} balls</h1>

    </div>
  )
}

export default Bowl
