import { HeroCanvas } from "@/components/three/HeroCanvas";
import { HeroOverlay } from "@/components/hero/HeroOverlay";
import { ModeToggle } from "@/components/hero/ModeToggle";
import { ScrollHint } from "@/components/hero/ScrollHint";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient">
      <HeroCanvas />
      <ModeToggle />
      <HeroOverlay />
      <ScrollHint />
    </section>
  );
}
