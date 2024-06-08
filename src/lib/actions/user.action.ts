"use server"

import { signIn } from "@/auth"


export const signInAction = async () => {
  try {
    await signIn('google')
  } catch (error) {
    console.log(error)

  }
}
