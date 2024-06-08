import { auth } from '@/auth'
import React from 'react'

const UserPage = async () => {
  const user = await auth();
  return (
    <main className='flex items-center justify-center p-20'>
      <div>
        {
          user ? <p>{user.user?.name}</p> : <p>Not logged in</p>
        }
      </div>
    </main>
  )
}

export default UserPage
