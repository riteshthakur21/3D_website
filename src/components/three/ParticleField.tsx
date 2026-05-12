"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferAttribute, BufferGeometry, Points } from "three";
import { THEME_COLORS } from "@/lib/constants";
import { useSceneStore } from "@/store/scene-store";
import { useUiStore } from "@/store/ui-store";

export function ParticleField() {
  const quality = useSceneStore((s) => s.quality);
  const paused = useSceneStore((s) => s.paused);
  const theme = useUiStore((s) => s.mode);
  const colors = THEME_COLORS[theme];
  const pointsRef = useRef<Points>(null);
  const count = quality === "high" ? 2200 : 900;

  const { base, position, speed } = useMemo(() => {
    const pPosition = new Float32Array(count * 3);
    const pBase = new Float32Array(count * 3);
    const pSpeed = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 4.5;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pBase[i * 3] = x;
      pBase[i * 3 + 1] = y;
      pBase[i * 3 + 2] = z;
      pPosition[i * 3] = x;
      pPosition[i * 3 + 1] = y;
      pPosition[i * 3 + 2] = z;
      pSpeed[i] = 0.3 + Math.random() * 0.7;
    }
    return { base: pBase, position: pPosition, speed: pSpeed };
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(position, 3));
    geo.computeBoundingSphere();
    return geo;
  }, [position]);

  useFrame((state) => {
    if (paused || !geometry) return;
    const t = state.clock.getElapsedTime();
    const attr = geometry.attributes?.position as BufferAttribute;
    if (!attr) return;
    
    const arr = attr.array as Float32Array;
    for (let i = 0; i < count; i += 1) {
      const s = speed[i];
      arr[i * 3] = base[i * 3] + Math.sin(t * s * 0.4 + i) * 0.12;
      arr[i * 3 + 1] = base[i * 3 + 1] + Math.cos(t * s * 0.3 + i * 0.7) * 0.12;
      arr[i * 3 + 2] = base[i * 3 + 2] + Math.sin(t * s * 0.5 + i * 1.3) * 0.08;
    }
    attr.needsUpdate = true;

    if (geometry.boundingSphere) {
      geometry.computeBoundingSphere();
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.04;
      pointsRef.current.rotation.x = t * 0.02;
    }
  });

  if (!geometry) return null;

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial size={0.025} color={colors.primary} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}
