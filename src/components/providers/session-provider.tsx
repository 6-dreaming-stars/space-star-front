'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

type AuthSessionProps = {
  session?: Session | null
  children: React.ReactNode
}

export default function AuthSession({ session, children }: AuthSessionProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
