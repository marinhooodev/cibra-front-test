"use client"

import IUser from "@/app/@types/IUser";
import getUsers from "@/app/services/getUsers";
import { Section } from "@radix-ui/themes";
import { useRouter, useParams } from "next/navigation";
import {  } from "next/router";
import React, { useEffect } from "react";

const UserProfile: React.FC = () => {

    const router = useRouter()
    const params = useParams()
    const id = parseInt(params?.id as string, 10)
    
    useEffect(() => {
        if (isNaN(id)) {
          router.push("/404");
        }
      }, [id, router])

    const localUsers = localStorage.getItem("users")
    
    if(!localUsers) {
        getUsers()
        window.location.reload()
        return
    }

    const usersArray = JSON.parse(localUsers)

    const user = usersArray.find((user: IUser) => user.id == id)

    return (
        <Section>
            {"hello world"}
            {id}
        </Section>
    );
};

export default UserProfile;
