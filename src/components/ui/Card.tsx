import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`glass rounded-2xl p-6 md:p-8 ${className}`}>{children}</article>;
}
