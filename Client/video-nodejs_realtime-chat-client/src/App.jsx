// #region imports 
import { useEffect, useState } from 'react';
import './App.css'
import { MessageForm } from './MessageForm.jsx';
import { MessageList } from './MessageList.jsx';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage.tsx';
import { Rooms } from './pages/Rooms.tsx';
import { ChatRoom } from './pages/ChatRoom.tsx';

// #endregion

const DataLoader = () => {
 
  return (
    <h1 className="title">Chat application</h1>
  );
};

export function App() {
  


  return <>
    <section className='section content'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/rooms' element={<Rooms />}>
          <Route path =':roomId' element={<ChatRoom/>}/>
        
        </Route>
      </Routes>
   </section>
</>
  
}
