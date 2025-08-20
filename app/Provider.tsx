"user client"
import { api } from '@/convex/_generated/api';
import { UserDetailContext } from '@/convex/context/UserDetailContext';
import { useUser } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import { useMutation } from 'convex/react'

import React, { createContext, useEffect, useState } from 'react'

function Provider ({children}:any)  {
      
    const {user} = useUser();
    const CreateUser = useMutation(api.users.CreateNewUser);
    const [userDetail,setUserDetail] = useState<any>();

   useEffect(()=>{
       user && CreateNewUser();
   },[user])

    const CreateNewUser=async()=>{
   
         if (user) {
            const result  = await CreateUser({
                email: user?.emailAddresses[0].emailAddress ??' ',
                imageUrl: user?.imageUrl,
                 name: user?.fullName ??''
            
            });
            console.log(result)
            setUserDetail(result);
         }

            
    }

  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
       <div>{children}</div>
    </UserDetailContext.Provider>
  )
}

export default Provider
export const userUserDetailContext = () => {
  return createContext(UserDetailContext);
}
