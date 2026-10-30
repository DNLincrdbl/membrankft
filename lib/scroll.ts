let frame = 0;
let release = () => {};

function cancel() {
  cancelAnimationFrame(frame);
  release();
  release = () => {};
}

export function scrollToY(target: number) {
  cancel();
  const top = Math.max(0, target);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start = window.scrollY;
  const distance = top - start;
  if (reduced || Math.abs(distance) < 2) {
    window.scrollTo(0, top);
    return;
  }

  const duration = Math.min(720, Math.max(340, Math.abs(distance) * 0.28));
  const started = performance.now();

  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
  };
  release = stop;
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });

  const step = (now: number) => {
    const progress = Math.min(1, (now - started) / duration);
    const eased = 1 - (1 - progress) ** 3;
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) frame = requestAnimationFrame(step);
    else stop();
  };

  frame = requestAnimationFrame(step);
}

export function scrollToId(id: string) {
  if (id === "fooldal") {
    scrollToY(0);
    return;
  }
  const node = document.getElementById(id);
  if (!node) return;
  scrollToY(node.getBoundingClientRect().top + window.scrollY - 104);
}
