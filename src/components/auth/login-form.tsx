'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type Props = {
  actionClassName?: string
}

export function LoginForm({ actionClassName }: Props) {
  const { login, isLoading } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password) return
    await login(email.trim(), password)
    router.push('/')
    router.refresh()
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
      <Input
        type="email"
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        className="h-12 rounded-2xl border-border/80 bg-background/80 px-4 text-sm shadow-sm"
        required
      />
      <Input
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        className="h-12 rounded-2xl border-border/80 bg-background/80 px-4 text-sm shadow-sm"
        required
      />
      <Button type="submit" disabled={isLoading} className={cn('h-12 rounded-full text-sm font-semibold', actionClassName)}>
        {isLoading ? 'Signing in…' : 'Sign in'}
        {!isLoading ? <ArrowRight className="h-4 w-4" /> : null}
      </Button>
    </form>
  )
}
