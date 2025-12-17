
import { roomService } from '../services/roomService.ts';
import { socket } from '../socket.ts';
import './RoomList.scss'
import {useState,useEffect} from 'react'
export const RoomList = ({ myRooms, antRooms,userId }) => {
  const [input, setInput] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null);
  
  
 
  
  const renameRoom = async (event) => {
      try {
    await roomService.renameRoom(editingId, input, userId);

    
    setEditingId(null);
    setInput('');
    
    
  } catch (error) {
    console.error(error);
    
  } 
  }
  const deleteRoom = async (roomId:string) => {
    try {
      
      await roomService.deleteRoom(roomId, userId)
      
    } catch (error) {
      console.error(error)
    }
  }
 return (<>
  <div>
    <h1>My Rooms</h1>
    <ul className="roomsBox">
      {myRooms.map(room => (
        <li className="roomsItem" key={room.id}
         >  
          {editingId !== room.id ? (
            <><span
            className="roomName"
            onClick={() => {
              setInput('')
              setEditingId(room.id)
              }}>{room.name}</span>
             <button className="roomsDelete "
                onClick={() => {deleteRoom(room.id)
                  
                 
                }
            }>X</button></>) :
            (<input
              value={input}  
              onChange={(event) => {

              setInput(event.target.value)
              }} /> 
            )
          }
         
          
          {editingId === room.id && <div className="roomActions">
            <button className="roomsButton back"
              onClick={() => {
                setEditingId(null)
                setInput('')
              }
            }>X</button>
            <button className="roomsButton edit"
              onClick={renameRoom}
             disabled ={input.trim().length===0}
            >Rename✎</button>
           
          </div>}
        </li>
      ))}
    </ul>
   </div>
   <div>
    <h1>quest rooms</h1>
    <ul className="roomsBox">
      {antRooms.map(room => (
        <li className="roomsItem" key={room.id}>  
          <span className="roomName">{room.name}</span>
         
        </li>
      ))}
    </ul>
  </div></>
);

  
}