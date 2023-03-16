import React,{ useState,useEffect } from 'react'
import './sidebarchatui.css'
import { Avatar} from '@mui/material';
import { db } from '../../config/firebase';
import { collection, doc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom'

function Sidebarchat({id, name, photo, addNewChat} ) {

  const [messages, setMessages] = useState('')

  useEffect(() => {
    if (id) {
      const q = query(collection(doc(db, 'rooms', id), 'messages'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
      return unsubscribe;
    }
  }, [id]);


  return !addNewChat ? (
   <Link to ={`/chatroom/rooms/${id}`} style={{ textDecoration: 'none', color: "white"}}>
    <div className="sidebarChat">
    <Avatar src={photo}/>
  <div className="sidebarchat_info">
    <h2>{name}</h2>
    <p id='last__m'>{messages[0] ?.message}</p> 
  </div>
  </div>
   </Link>
  ) : null
}

export default Sidebarchat


