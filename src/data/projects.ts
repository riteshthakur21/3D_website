import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "spatial-commerce",
    title: "Spatial Commerce",
    description: "Immersive product discovery with real-time 3D configurator and checkout funnel analytics.",
    techStack: ["Next.js", "TypeScript", "Three.js", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com/spatial-commerce",
    repoUrl: "https://github.com/example/spatial-commerce"
  },
  {
    id: "neural-analytics",
    title: "Neural Analytics",
    description: "High-density metrics cockpit with WebGL transitions and low-latency streaming dashboards.",
    techStack: ["React", "Node.js", "WebSockets", "D3", "Redis"],
    liveUrl: "https://example.com/neural-analytics",
    repoUrl: "https://github.com/example/neural-analytics"
  },
  {
    id: "studio-os",
    title: "Studio OS",
    description: "Unified content and deployment control plane with role-based workflows and automation hooks.",
    techStack: ["Next.js", "tRPC", "Prisma", "Docker", "AWS"],
    liveUrl: "https://example.com/studio-os",
    repoUrl: "https://github.com/example/studio-os"
  }
];
