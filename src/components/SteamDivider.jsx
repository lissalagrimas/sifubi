import "./SteamDivider.css";

// The site's signature motif: a steam-swirl line with little wisps
// rising off it, standing in for "steamed to order, always fresh."
export default function SteamDivider({ color = "var(--sky)" }) {
  return (
    <div className="steam-divider" aria-hidden="true">
      <svg
        className="steam-divider__line"
        viewBox="0 0 600 24"
        preserveAspectRatio="none"
      >
        <path
          d="M0 12 C 50 2, 100 22, 150 12 S 250 2, 300 12 S 400 22, 450 12 S 550 2, 600 12"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="steam-divider__wisp steam-divider__wisp--1">〜</span>
      <span className="steam-divider__wisp steam-divider__wisp--2">〜</span>
      <span className="steam-divider__wisp steam-divider__wisp--3">〜</span>
    </div>
  );
}
