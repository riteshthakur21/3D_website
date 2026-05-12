"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Group, IcosahedronGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, SphereGeometry, TorusGeometry } from "three";
import { THEME_COLORS, type SceneMode } from "@/lib/constants";
import { useSceneStore } from "@/store/scene-store";
import { useUiStore } from "@/store/ui-store";

type GeometryMap = Record<SceneMode, IcosahedronGeometry | TorusGeometry | SphereGeometry>;

export function MorphMesh() {
  const mode = useSceneStore((s) => s.mode);
  const theme = useUiStore((s) => s.mode);
  const colors = THEME_COLORS[theme];
  const paused = useSceneStore((s) => s.paused);
  const quality = useSceneStore((s) => s.quality);
  const group = useRef<Group>(null);
  const [currentMode, setCurrentMode] = useState<SceneMode>("icosahedron");
  const [previousMode, setPreviousMode] = useState<SceneMode>("icosahedron");
  const blend = useRef(1);

  const geometries = useMemo<GeometryMap>(() => {
    const high = quality === "high";
    const g = {
      icosahedron: new IcosahedronGeometry(1.4, high ? 1 : 0),
      torus: new TorusGeometry(1.1, 0.45, high ? 20 : 12, high ? 60 : 28),
      sphere: new SphereGeometry(1.4, high ? 32 : 16, high ? 32 : 16)
    };
    Object.values(g).forEach((geo) => geo.computeBoundingSphere());
    return g;
  }, [quality]);

  const solidPrimary = useRef<MeshStandardMaterial>(null);
  const wirePrimary = useRef<MeshBasicMaterial>(null);
  const solidPrev = useRef<MeshStandardMaterial>(null);
  const wirePrev = useRef<MeshBasicMaterial>(null);
  const glowMat = useRef<MeshBasicMaterial>(null);

  useEffect(() => {
    if (mode === currentMode) return;
    setPreviousMode(currentMode);
    setCurrentMode(mode);
    blend.current = 0;
  }, [mode, currentMode]);

  useEffect(
    () => () => {
      Object.values(geometries).forEach((geo) => geo.dispose());
    },
    [geometries]
  );

  useFrame((state) => {
    if (paused) return;
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = t * 0.12;
      group.current.rotation.y = t * 0.18;
    }

    const pulse = 0.5 + 0.5 * Math.sin(t * 1.5);
    if (glowMat.current) glowMat.current.opacity = 0.02 + 0.05 * pulse;

    blend.current = Math.min(1, blend.current + 0.045);
    const currentOpacity = blend.current;
    const prevOpacity = 1 - blend.current;

    if (solidPrimary.current) solidPrimary.current.opacity = 0.85 * currentOpacity;
    if (wirePrimary.current) wirePrimary.current.opacity = (0.08 + 0.1 * pulse) * currentOpacity;
    if (solidPrev.current) solidPrev.current.opacity = 0.85 * prevOpacity;
    if (wirePrev.current) wirePrev.current.opacity = (0.08 + 0.1 * pulse) * prevOpacity;
  });

  if (!geometries) return null;

  return (
    <group ref={group}>
      {geometries[previousMode] && (
        <>
          <mesh geometry={geometries[previousMode]}>
            <meshBasicMaterial ref={wirePrev} color={colors.primary} wireframe transparent opacity={0} />
          </mesh>
          <mesh geometry={geometries[previousMode]}>
            <meshStandardMaterial
              ref={solidPrev}
              color={colors.secondary}
              metalness={0.9}
              roughness={0.15}
              transparent
              opacity={0}
              emissive="#0A0A0A"
              emissiveIntensity={0.3}
            />
          </mesh>
        </>
      )}

      {geometries[currentMode] && (
        <>
          <mesh geometry={geometries[currentMode]}>
            <meshBasicMaterial ref={wirePrimary} color={colors.primary} wireframe transparent opacity={0.15} />
          </mesh>
          <mesh geometry={geometries[currentMode]}>
            <meshStandardMaterial
              ref={solidPrimary}
              color={colors.secondary}
              metalness={0.9}
              roughness={0.15}
              transparent
              opacity={0.85}
              emissive="#0A0A0A"
              emissiveIntensity={0.3}
            />
          </mesh>
        </>
      )}

      <mesh>
        <sphereGeometry args={[0.8, quality === "high" ? 32 : 16, quality === "high" ? 32 : 16]} />
        <meshBasicMaterial ref={glowMat} color={colors.glow} transparent opacity={0.04} />
      </mesh>
    </group>
  );
}
