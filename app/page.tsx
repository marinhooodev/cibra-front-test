"use client"

import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import getUsers from "./services/getUsers";
import { Section } from "@radix-ui/themes";

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

  // usar mais radix, e tipar o retorno de USER

  return (
<Section>
      {
        users?.map((user: any) => (
          <div key={user.id} className="m-5">
            <UserCard userFirstNameLetter={user.name.slice(0, 1)} userCompanyName={user.company.name} />
          </div>
        ))
      }
</Section>
  );
}
