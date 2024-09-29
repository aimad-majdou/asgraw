import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  // Add providers here
  return (
    <SessionProvider>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster />
    </SessionProvider>
  );
}
