import * as actions from '@/actions';
import { auth } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import PATHS from '@/paths';
import {
  KeyboardIcon,
  LogInIcon,
  LogOutIcon,
  Search,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';

export default async function AppHeader() {
  const { user } = (await auth()) || {};

  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
      <Link href={PATHS.home()} className='text-xl font-bold'>
        ⴰⵙⴳⵔⴰⵡ<sup>[asgraw]</sup>
      </Link>

      <form className='flex-1 max-w-md mx-4'>
        <div className='relative'>
          <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input
            type='search'
            placeholder='Search...'
            className='pl-8 w-full'
          />
        </div>
      </form>

      <div>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className='cursor-pointer'>
                <AvatarImage
                  src={user.image ?? undefined}
                  alt={user.name ?? 'User'}
                />
                <AvatarFallback>{user.name?.charAt(0) ?? 'U'}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href=''>
                    <UserIcon className='mr-2 h-4 w-4' />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <KeyboardIcon className='mr-2 h-4 w-4' />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <form action={actions.signOut}>
                  <Button type='submit'>
                    <LogOutIcon className='mr-2 h-4 w-4' />
                    <span>Sign Out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </Button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <form action={actions.signIn}>
            <Button>
              <LogInIcon className='mr-2 h-4 w-4' />
              Sign In
            </Button>
          </form>
        )}
      </div>
    </header>
  );
}
