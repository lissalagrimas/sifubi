import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "./IntroLamp.css";

const VIDEOS = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
  "/videos/video-4.mp4",
];

export default function IntroLamp() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cordRef = useRef(null);
  const videoRef = useRef(null);

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
    });
  }

  function toggleMute() {
    setIsMuted((prev) => !prev);
  }

  function goToIndex(i) {
    setActiveIndex(i);
    if (!isOpen) toggleCurtain();
  }

  function goPrev() {
    goToIndex((activeIndex - 1 + VIDEOS.length) % VIDEOS.length);
  }

  function goNext() {
    goToIndex((activeIndex + 1) % VIDEOS.length);
  }

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.load();
    if (isOpen) {
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isOpen) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isOpen]);

  return (
    <div className="curtain-wrap">
      <div className="curtain-row">
        <div className="curtain-stage">
          <video
            ref={videoRef}
            className="curtain-stage__video"
            src={VIDEOS[activeIndex]}
            muted={isMuted}
            loop
            playsInline
          />
          <div className="curtain-stage__panel curtain-stage__panel--left" ref={leftRef} />
          <div className="curtain-stage__panel curtain-stage__panel--right" ref={rightRef} />

          {isOpen && (
            <button
              className="curtain-stage__mute"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
          )}
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

      <div className="video-nav">
        <button className="video-nav__arrow" onClick={goPrev} aria-label="Previous video">
          ‹
        </button>
        <div className="video-nav__dots">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              className={`video-nav__dot ${i === activeIndex ? "video-nav__dot--active" : ""}`}
              onClick={() => goToIndex(i)}
              aria-label={`Show video ${i + 1}`}
            />
          ))}
        </div>
        <button className="video-nav__arrow" onClick={goNext} aria-label="Next video">
          ›
        </button>
      </div>
    </div>
  );
}