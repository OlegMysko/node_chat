// #region imports 
import { useEffect, useState } from 'react';
import './App.css'
import { MessageForm } from './MessageForm.jsx';
import { MessageList } from './MessageList.jsx';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage.tsx';
import { Rooms } from './pages/Rooms.tsx';

// #endregion

const DataLoader = () => {
 
  return (
    <h1 className="title">Chat application</h1>
  );
};

export function App() {
  const [messages, setMessages] = useState([]);

  function saveData(message) {
    setMessages(message)
  }

  return (<>
    <section className='section content'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/rooms' element={<Rooms/>}/>
      </Routes>
   
    </section>
    <section className="section content">
      <DataLoader onData={saveData} />

      <MessageForm />
      <MessageList messages={messages} />
    </section>
</>
  )
}
