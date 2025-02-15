"use client"
import { db } from "@/config/db";
import { User, Users } from "@/config/schema";
import { useUser } from "@clerk/nextjs"
import { eq } from "drizzle-orm";
import { useEffect } from "react";

export default function Provider({children}) {

  const {user} = useUser();

  useEffect(()=>{
    user && isNewUser()
  },[user])

  const isNewUser = async()=>{
    const res = await db.select().from(Users)
    .where(eq(Users?.email, user?.primaryEmailAddress?.emailAddress));

    if(!res[0]){
      await db.insert(Users).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl
      })
    }
  }
  return (
    <div>
      {children}
    </div>
  )
}
