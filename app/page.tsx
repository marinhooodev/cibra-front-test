"use client"

import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import getUsers from "./services/getUsers";

export default function Home() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const localUsers = localStorage.getItem("users")

    if(localUsers) {
      const usersArray: [] = JSON.parse(localUsers)
      console.log(usersArray)
      
      if(usersArray.length) {
        setUsers(usersArray)
        return
      }
    }

    const fetchUsers = async () => {

      const data = await getUsers()

      if(!data.success) {
        
      }

    }

    fetchUsers()

  }, [])

  return (
    <div>
      {
        users?.map((user: any) => (

          <li key={user.id}>
            <UserCard userFirstNameLetter={user.name.slice(0, 1)} />
          </li>
        ))
      }
    </div>
  );
}
