"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { ReactNode, useRef } from "react";
import { Group } from "three";
import { useSceneStore } from "@/store/scene-store";

export function CameraRig({ children }: { children: ReactNode }) {
  const group = useRef<Group>(null);
  const { camera } = useThree();
  const mouseX = useSceneStore((s) => s.mouseX);
  const mouseY = useSceneStore((s) => s.mouseY);
  const targetZoom = useSceneStore((s) => s.targetZoom);
  const paused = useSceneStore((s) => s.paused);

  useFrame(() => {
    if (paused) return;
    camera.position.z += (targetZoom - camera.position.z) * 0.05;
    camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (mouseY * 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return <group ref={group}>{children}</group>;
}
