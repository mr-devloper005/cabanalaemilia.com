'use client'

import Link from 'next/link'
import { ChevronDown, LayoutGrid, LogOut, Plus, User, FileText, Building2, Tag, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

const menuSurface = 'w-56 border border-slate-200/90 bg-white/98 shadow-[0_20px_50px_rgba(6,18,37,0.12)] backdrop-blur-md'

export function NavbarAuthControls({ variant = 'default' }: { variant?: 'default' | 'directory' }) {
  const { user, logout } = useAuth()
  const compactToolbar = variant === 'directory'

  return (
    <div className="flex min-w-0 flex-wrap items-center justify-end gap-2 sm:flex-nowrap sm:gap-2.5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            className={
              compactToolbar
                ? 'hidden h-9 shrink-0 gap-1 rounded-full bg-[#0052ff] px-3 text-sm font-semibold text-white shadow-[0_12px_36px_rgba(0,82,255,0.28)] hover:bg-[#0040cc] sm:flex sm:h-10 sm:px-3.5'
                : 'hidden h-10 shrink-0 gap-1 rounded-full bg-[#0052ff] px-4 text-white shadow-[0_12px_36px_rgba(0,82,255,0.28)] hover:bg-[#0040cc] sm:flex'
            }
          >
            <Plus className="h-4 w-4" />
            Create
            <ChevronDown className="h-3 w-3 opacity-80" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className={menuSurface}>
          {SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => {
            const Icon = taskIcons[task.key] || LayoutGrid
            return (
              <DropdownMenuItem key={task.key} asChild>
                <Link href={`/create/${task.key}`}>
                  <Icon className="mr-2 h-4 w-4" />
                  Create {task.label}
                </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex min-w-0 shrink-0 items-center gap-2">
        <div className="flex max-w-[min(100vw-12rem,11rem)] items-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-50/80 py-1 pl-1 pr-2 sm:max-w-[14rem] sm:gap-2 sm:pr-2.5 lg:max-w-[16rem]">
          <Avatar className="h-8 w-8 shrink-0 border border-white shadow-sm sm:h-9 sm:w-9" title={user?.name || 'Account'}>
            <AvatarImage src={user?.avatar} alt={user?.name || ''} />
            <AvatarFallback className="bg-[#f4f7fc] text-sm text-slate-700">{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="hidden min-w-0 flex-1 flex-col sm:flex">
            <span className="truncate text-xs font-semibold leading-tight text-slate-900">{user?.name}</span>
            <span className="truncate text-[10px] leading-tight text-slate-500">{user?.email}</span>
          </div>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => logout()}
          className="h-9 shrink-0 gap-1.5 whitespace-nowrap rounded-full border-slate-200 bg-white px-2.5 text-xs font-semibold text-slate-700 shadow-sm hover:border-red-200 hover:bg-red-50 hover:text-red-700 sm:h-10 sm:px-3.5 sm:text-sm"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          Sign out
        </Button>
      </div>
    </div>
  )
}
