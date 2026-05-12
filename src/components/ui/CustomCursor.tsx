"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const point = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const onMove = (event: MouseEvent) => {
      point.current.x = event.clientX;
      point.current.y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    let raf = 0;
    const animate = () => {
      point.current.rx += (point.current.x - point.current.rx) * 0.14;
      point.current.ry += (point.current.y - point.current.ry) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${point.current.rx}px, ${point.current.ry}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold mix-blend-screen"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50"
      />
    </>
  );
}
