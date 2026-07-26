import { useEffect, useRef, useState } from 'react'

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const total = 100
    const duration = 2200
    const startTime = performance.now()

    const animate = () => {
      const elapsed = performance.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * total)
      setCount(current)

      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      } else {
        setCount(100)
        setTimeout(() => {
          containerRef.current?.classList.add('done')
          setTimeout(onComplete, 800)
        }, 400)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [onComplete])

  return (
    <div ref={containerRef} className="preloader">
      <div style={{ overflow: 'hidden' }}>
        <span className="preloader-counter">{count}</span>
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" style={{ width: `${count}%` }} />
      </div>
      <p style={{
        marginTop: '20px',
        fontFamily: 'Space Mono, monospace',
        fontSize: '11px',
        color: '#8E95A5',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
      }}>
        CHRONOS X — LOADING
      </p>
    </div>
  )
}
