/** Small arrow used in buttons and links across the site. */
export default function ArrowIcon({
  direction = 'right',
  size = 15,
}: {
  direction?: 'right' | 'left' | 'down';
  size?: number;
}) {
  const rotation = { right: 0, left: 180, down: 90 }[direction];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={rotation ? { transform: `rotate(${rotation}deg)` } : undefined}
    >
      <path
        d="M3.4 8h9.2M8.8 4.2 12.6 8l-3.8 3.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
