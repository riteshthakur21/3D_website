export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
] as const;

export const SCENE_MODES = ["icosahedron", "torus", "sphere"] as const;
export type SceneMode = (typeof SCENE_MODES)[number];

export const SCENE_COLORS = {
  gold: "#D01919",
  blue: "#1565C0",
  rim: "#FFD700",
  dark: "#0A0A0A"
} as const;
