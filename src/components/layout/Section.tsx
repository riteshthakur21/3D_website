import { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="container-safe">{children}</div>
    </section>
  );
}
