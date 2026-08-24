//papalitan pa to kasi ang jejemon
import { useRef, useState } from "react";
import gsap from "gsap";
import "./IntroLamp.css";

const CONFETTI_COLORS = ["var(--pink)", "var(--yellow)", "var(--sky)", "#ff8fab", "#ffd166"];
const CONFETTI_COUNT = 60;

export default function IntroLamp() {
  const [isOpen, setIsOpen] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cordRef = useRef(null);
  const confettiRef = useRef(null);

  function fireConfetti() {
    const container = confettiRef.current;
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < CONFETTI_COUNT; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.setProperty("--c", CONFETTI_COLORS[i % CONFETTI_COLORS.length]);

      // Spawn from either the left edge or the right edge, near the top
      const fromLeft = i % 2 === 0;
      const startX = fromLeft
        ? Math.random() * 15
        : 85 + Math.random() * 15;
      piece.style.left = `${startX}%`;
      piece.style.top = `${Math.random() * 10}%`;
      container.appendChild(piece);

      gsap.fromTo(
        piece,
        { y: 0, x: 0, opacity: 1, rotate: 0 },
        {
          y: 220 + Math.random() * 100,
          x: (fromLeft ? 1 : -1) * (40 + Math.random() * 120),
          rotate: Math.random() * 720 - 360,
          opacity: 0,
          duration: 1.1 + Math.random() * 0.7,
          ease: "power1.in",
          delay: Math.random() * 0.3,
          onComplete: () => piece.remove(),
        }
      );
    }
  }

  function toggleCurtain() {
    const next = !isOpen;
    setIsOpen(next);

    gsap.to(cordRef.current, {
      rotate: next ? 14 : -14,
      duration: 0.12,
      yoyo: true,
      repeat: 3,
      ease: "power1.inOut",
    });

    gsap.to(leftRef.current, {
      xPercent: next ? -100 : 0,
      duration: 0.8,
      ease: "power3.inOut",
    });
    gsap.to(rightRef.current, {
      xPercent: next ? 100 : 0,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        if (next) fireConfetti();
      },
    });
  }

  return (
    <div className="curtain-wrap">
      <div className="curtain-stage">
        <img src="/logo.jpg" alt="Sifubi Co." className="curtain-stage__logo" />
        <div className="curtain-stage__panel curtain-stage__panel--left" ref={leftRef} />
        <div className="curtain-stage__panel curtain-stage__panel--right" ref={rightRef} />
        <div className="confetti-layer" ref={confettiRef} />
      </div>

      <button
        className="curtain-pull"
        onClick={toggleCurtain}
        aria-pressed={isOpen}
        aria-label={isOpen ? "Close the curtain" : "Pull the curtain open"}
      >
        <span className="curtain-pull__rope" ref={cordRef}>
          <span className="curtain-pull__handle" />
        </span>
        <span className="curtain-pull__label">{isOpen ? "Close" : "Pull"}</span>
      </button>
    </div>
  );
}