"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { THEME_COLORS } from "@/lib/constants";
import { useSceneStore } from "@/store/scene-store";
import { useUiStore } from "@/store/ui-store";

export function OrbitRings() {
  const ringOne = useRef<Mesh>(null);
  const ringTwo = useRef<Mesh>(null);
  const paused = useSceneStore((s) => s.paused);
  const theme = useUiStore((s) => s.mode);
  const colors = THEME_COLORS[theme];

  useFrame((state) => {
    if (paused) return;
    const t = state.clock.getElapsedTime();
    if (ringOne.current) ringOne.current.rotation.z = t * 0.2;
    if (ringTwo.current) {
      ringTwo.current.rotation.z = -t * 0.15;
      ringTwo.current.rotation.x = Math.PI / 1.2 + t * 0.05;
    }
  });

  return (
    <>
      <mesh ref={ringOne} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.2, 0.004, 2, 200]} />
        <meshBasicMaterial color={colors.primary} transparent opacity={0.2} />
      </mesh>
      <mesh ref={ringTwo} rotation={[Math.PI / 1.2, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.004, 2, 200]} />
        <meshBasicMaterial color={colors.primary} transparent opacity={0.2} />
      </mesh>
    </>
  );
}
