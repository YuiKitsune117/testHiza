const PETALS = [
  { left: "4%", duration: 12, delay: -2, size: 1.1, emoji: "🌸" },
  { left: "14%", duration: 16, delay: -8, size: 0.8, emoji: "🌸" },
  { left: "24%", duration: 10, delay: -4, size: 1.3, emoji: "🌸" },
  { left: "34%", duration: 18, delay: -12, size: 0.9, emoji: "🌸" },
  { left: "45%", duration: 13, delay: -1, size: 1.0, emoji: "🌸" },
  { left: "55%", duration: 15, delay: -9, size: 1.2, emoji: "🌸" },
  { left: "65%", duration: 11, delay: -6, size: 0.85, emoji: "🌸" },
  { left: "75%", duration: 17, delay: -3, size: 1.05, emoji: "🌸" },
  { left: "85%", duration: 14, delay: -10, size: 0.95, emoji: "🌸" },
  { left: "93%", duration: 19, delay: -5, size: 1.15, emoji: "🌸" },
];

export default function SakuraPetals({ density = "normal" }: { density?: "normal" | "light" }) {
  const petals = density === "light" ? PETALS.slice(0, 5) : PETALS;

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((petal, index) => (
        <span
          key={index}
          className="petal"
          style={{
            left: petal.left,
            fontSize: `${petal.size}rem`,
            animationDuration: `${petal.duration}s, ${petal.duration / 2}s`,
            animationDelay: `${petal.delay}s, ${petal.delay}s`,
          }}
        >
          {petal.emoji}
        </span>
      ))}
    </div>
  );
}
