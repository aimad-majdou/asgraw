"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "../ui/dialog";

export interface ModalProps {
  children?: React.ReactNode[];
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  function handleOpenChange() {
    router.back();
  }

  return (
    <Dialog defaultOpen modal onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
    </Dialog>
  );
}
