import { cn } from "@/lib/utils";
import React from "react";

export default function CardWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        " border-2 border-muted-foreground/20 p-6 shadow-md rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
