import React, { useMemo, useState, useEffect } from 'react';
import {User} from '../types/User.ts'



const AuthContext = React.createContext({
  currentUser: null as User | null,
  isChecked: false,
  login: async(name:string)=>{},
  logout:async()=>{}

  

})

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('currentUser')
    
  if (saved) {
    setCurrentUser(JSON.parse(saved))
  }

  setChecked(true)
    
  },[])



   const value = useMemo(
    () => ({
      isChecked,
      currentUser,setCurrentUser
    }),
    [currentUser, isChecked,setCurrentUser],
  );
  return <AuthContext.Provider value = {value}>{children}</AuthContext.Provider>
}

export const useAuth = () => React.useContext(AuthContext);