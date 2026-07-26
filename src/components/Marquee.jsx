export default function Marquee() {
  const items = [
    'QUANTUM MOVEMENT',
    'GRADE-5 TITANIUM',
    'SOLAR POWERED',
    '300M DEPTH RATED',
    'SAPPHIRE CRYSTAL',
    'KINETIC CHARGE',
    'ISO 6425',
    '72H RESERVE',
  ]

  const repeated = [...items, ...items]

  return (
    <section style={{
      padding: '40px 0',
      borderTop: '1px solid #22242A',
      borderBottom: '1px solid #22242A',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            paddingRight: '24px',
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: '#F8F9FA',
              letterSpacing: '0.1em',
              opacity: 0.7,
            }}>
              {item}
            </span>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: i % 2 === 0 ? '#00F0FF' : '#D4FF00',
              opacity: 0.6,
            }} />
          </div>
        ))}
      </div>
    </section>
  )
}
