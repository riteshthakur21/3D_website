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

export const THEME_COLORS = {
  spiderman: {
    primary: "#D01919",
    secondary: "#8B0000",
    glow: "#D01919",
    bg: "#0A0A0A",
    accent: "#1565C0",
    rim: "#FFD700",
  },
  cyberpunk: {
    primary: "#FFE600",
    secondary: "#1A0A2E",
    glow: "#FFE600",
    bg: "#0D0D0D",
    accent: "#FF2D9B",
    rim: "#FFE600",
  },
  naruto: {
    primary: "#FF6B00",
    secondary: "#1A1000",
    glow: "#FF6B00",
    bg: "#0A0A0A",
    accent: "#FFB300",
    rim: "#FFB300",
  },
  matrix: {
    primary: "#00FF41",
    secondary: "#001A00",
    glow: "#00FF41",
    bg: "#0A0A0A",
    accent: "#00CC33",
    rim: "#00FF41",
  },
} as const;
