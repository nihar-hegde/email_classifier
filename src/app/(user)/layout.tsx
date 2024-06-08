import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const UserLayout = async ({ children }: { children: ReactNode }) => {
  const user = await auth();
  if (!user) {
    return redirect('/dashboard')
  }

  return (
    <div>{children}</div>
  )
}

export default UserLayout
