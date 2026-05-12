"use client";

import { THEME_COLORS } from "@/lib/constants";
import { useUiStore } from "@/store/ui-store";

export function SceneLights() {
  const theme = useUiStore((s) => s.mode);
  const colors = THEME_COLORS[theme];

  return (
    <>
      <ambientLight intensity={0.12} />
      <pointLight position={[3, 2, 3]} intensity={4} distance={12} color={colors.primary} />
      <pointLight position={[-4, -2, 2]} intensity={2} distance={10} color={colors.accent} />
      <pointLight position={[0, -4, -2]} intensity={1.5} distance={8} color={colors.rim} />
    </>
  );
}
