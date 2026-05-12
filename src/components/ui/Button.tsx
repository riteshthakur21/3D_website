import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-md border border-gold/45 bg-transparent px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold transition hover:border-gold hover:bg-cta-gradient hover:text-white ${className}`}
      {...props}
    />
  );
}
