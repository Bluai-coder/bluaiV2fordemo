export default function WaveFooter() {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{
        width: '100%',
        height: 140,
        marginTop: 80,
        display: 'block',
      }}
    >
      <path
        fill="#1b4dff"
        d="
          M0,60
          C150,100 350,0 600,40
          C850,80 1050,20 1200,40
          L1200,120
          L0,120
          Z
        "
      >
        <animate
          attributeName="d"
          dur="6s"
          repeatCount="indefinite"
          values="
            M0,60
            C150,100 350,0 600,40
            C850,80 1050,20 1200,40
            L1200,120
            L0,120
            Z;

            M0,40
            C150,0 350,100 600,60
            C850,20 1050,80 1200,60
            L1200,120
            L0,120
            Z;

            M0,60
            C150,100 350,0 600,40
            C850,80 1050,20 1200,40
            L1200,120
            L0,120
            Z
          "
        />
      </path>
    </svg>
  );
}
