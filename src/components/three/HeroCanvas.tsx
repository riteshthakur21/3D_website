"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraRig } from "@/components/three/CameraRig";
import { MorphMesh } from "@/components/three/MorphMesh";
import { OrbitRings } from "@/components/three/OrbitRings";
import { ParticleField } from "@/components/three/ParticleField";
import { SceneLights } from "@/components/three/SceneLights";
import { THEME_COLORS } from "@/lib/constants";
import { useAdaptiveQuality } from "@/hooks/useAdaptiveQuality";
import { useMouseLerp } from "@/hooks/useMouseLerp";
import { useVisibilityPause } from "@/hooks/useVisibilityPause";
import { useSceneStore } from "@/store/scene-store";
import { useUiStore } from "@/store/ui-store";

export function HeroCanvas() {
  useMouseLerp();
  useVisibilityPause();
  useAdaptiveQuality();
  const quality = useSceneStore((s) => s.quality);
  const paused = useSceneStore((s) => s.paused);
  const theme = useUiStore((s) => s.mode);
  const colors = THEME_COLORS[theme];

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        frameloop={paused ? "never" : "always"}
        dpr={quality === "high" ? [1, 1.75] : [1, 1.2]}
        camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={[colors.bg]} />
        <Suspense fallback={null}>
          <SceneLights />
          <CameraRig>
            <MorphMesh />
            <ParticleField />
            <OrbitRings />
          </CameraRig>
        </Suspense>
      </Canvas>
    </div>
  );
}
