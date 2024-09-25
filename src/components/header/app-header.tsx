import { Input } from "@/components/ui/input";
import PATHS from "@/paths";
import { Search } from "lucide-react";
import Link from "next/link";
import HeaderAuth from "./header-auth";

export default function AppHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Link href={PATHS.home()} className="text-xl font-bold">
        ⴰⵙⴳⵔⴰⵡ<sup>[asgraw]</sup>
      </Link>

      <form className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 w-full"
          />
        </div>
      </form>
      <HeaderAuth />
    </header>
  );
}
