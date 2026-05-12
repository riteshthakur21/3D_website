import { SCENE_COLORS } from "@/lib/constants";

export function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.12} />
      <pointLight position={[3, 2, 3]} intensity={4} distance={12} color={SCENE_COLORS.gold} />
      <pointLight position={[-4, -2, 2]} intensity={2} distance={10} color={SCENE_COLORS.blue} />
      <pointLight position={[0, -4, -2]} intensity={1.5} distance={8} color={SCENE_COLORS.rim} />
    </>
  );
}
