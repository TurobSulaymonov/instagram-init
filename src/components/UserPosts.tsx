'use client';
import { ProfileUser } from "@/model/user";
import { useState } from "react";
import useSWR from "swr"


type Props = {
    user: ProfileUser;
}

export default function UserPage({user: {username}}:Props){
    const [tab, setTab] = useState('liked');
    const {data: posts, isLoading, error} = useSWR(`/api/users/${username }/${tab}`)
      console.log("data:", posts);
    return(
        <>
        </>
    )
}