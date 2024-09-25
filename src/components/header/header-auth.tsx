"use client";

import * as actions from "@/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  KeyboardIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon,
  UserRoundPlusIcon,
} from "lucide-react";
import { signOut as nextAuthSignOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function HeaderAuth() {
  const session = useSession();
  const { user } = session?.data || {};

  const handleSignOut = async () => {
    await actions.signOut();
    await nextAuthSignOut({ redirect: false });
  };

  if (session.status === "loading") {
    return null;
  }

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={user.image ?? undefined}
            alt={user.name ?? "User"}
          />
          <AvatarFallback>{user.name?.charAt(0) ?? "U"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="" className="px-2 py-1.5">
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="" className="px-2 py-1.5">
              <KeyboardIcon className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form action={handleSignOut} className="px-0 py-0">
            <Button
              type="submit"
              variant="ghost"
              className="p-0 h-fit w-full px-2 py-1.5"
            >
              <LogOutIcon className="mr-2 h-4 w-4" />
              Sign Out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <form action={actions.signIn} className="flex gap-2">
      <Button>
        <LogInIcon className="mr-2 h-4 w-4" />
        Sign In
      </Button>
      <Button variant="outline">
        <UserRoundPlusIcon className="mr-2 h-4 w-4" />
        Sign Up
      </Button>
    </form>
  );
}
