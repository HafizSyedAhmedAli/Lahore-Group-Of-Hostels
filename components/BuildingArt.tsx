export default function BuildingArt() {
  const floors = [70, 150, 230];
  const windowXs = [56, 104, 196, 244];

  return (
    <svg viewBox="0 0 300 400" className="w-full h-full" aria-hidden="true">
      <rect x="0" y="0" width="300" height="400" fill="#0F1B2E" />

      {Array.from({ length: 10 }).map((_, i) => (
        <rect
          key={i}
          x={70 + i * 17}
          y="26"
          width="3"
          height="16"
          fill="#C9973D"
          fillOpacity="0.7"
        />
      ))}
      <rect x="66" y="40" width="168" height="4" fill="#C9973D" />

      {floors.map((y, fi) => (
        <g key={fi}>
          <rect
            x="60"
            y={y + 34}
            width="180"
            height="4"
            fill="#C9973D"
            fillOpacity="0.6"
          />
          {windowXs.map((x, wi) => (
            <rect
              key={wi}
              x={x}
              y={y}
              width="20"
              height="28"
              rx="2"
              fill="#E4C88C"
              fillOpacity="0.9"
            />
          ))}
        </g>
      ))}

      <rect
        x="56"
        y="300"
        width="34"
        height="40"
        rx="2"
        fill="#E4C88C"
        fillOpacity="0.9"
      />
      <rect
        x="210"
        y="300"
        width="34"
        height="40"
        rx="2"
        fill="#E4C88C"
        fillOpacity="0.9"
      />

      <path
        d="M130,360 L130,320 A20,20 0 0 1 170,320 L170,360 Z"
        fill="#C9973D"
      />
      <line
        x1="150"
        y1="322"
        x2="150"
        y2="358"
        stroke="#0F1B2E"
        strokeWidth="2"
      />

      <rect x="110" y="360" width="80" height="6" fill="#16243A" />
      <rect x="100" y="366" width="100" height="6" fill="#16243A" />
      <rect x="90" y="372" width="120" height="6" fill="#16243A" />

      <rect
        x="0"
        y="378"
        width="300"
        height="4"
        fill="#C9973D"
        fillOpacity="0.4"
      />
    </svg>
  );
}
