"use client";

import { SCENE_MODES } from "@/lib/constants";
import { useSceneStore } from "@/store/scene-store";

export function ModeToggle() {
  const mode = useSceneStore((s) => s.mode);
  const setMode = useSceneStore((s) => s.setMode);

  return (
    <div className="pointer-events-auto fixed left-1/2 top-24 z-20 flex -translate-x-1/2 gap-4 rounded-full border border-gold/30 bg-black/40 px-3 py-2 backdrop-blur-md">
      {SCENE_MODES.map((entry) => (
        <button
          key={entry}
          type="button"
          onClick={() => setMode(entry)}
          className={`px-2 py-1 text-[0.6rem] uppercase tracking-[0.2em] transition ${
            entry === mode ? "text-gold" : "text-muted hover:text-text"
          }`}
        >
          {entry}
        </button>
      ))}
    </div>
  );
}
