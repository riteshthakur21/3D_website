export function ScrollHint() {
  return (
    <div className="fixed bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
      <span className="text-[0.58rem] uppercase tracking-[0.2em] text-muted">Scroll</span>
      <div className="h-5 w-[1px] bg-gold/50" />
    </div>
  );
}
