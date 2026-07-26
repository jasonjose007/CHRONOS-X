import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PARTS = [
  { name: 'Sapphire Crystal', label: 'Synthetic Sapphire · 9H Hardness · AR Coated', color: '#00F0FF', thickness: 12 },
  { name: 'Bezel Ring', label: 'Ceramic Insert · 120-Click Unidirectional', color: '#8E95A5', thickness: 8 },
  { name: 'Dial Assembly', label: 'Quantum Core Display · Lume-Active Indices', color: '#00F0FF', thickness: 14 },
  { name: 'Movement', label: 'Zero-G Kinetic Engine · 28,800 VPH', color: '#D4FF00', thickness: 18 },
  { name: 'Case Back', label: 'Exhibition Sapphire · Titanium Frame', color: '#8E95A5', thickness: 10 },
  { name: 'Titanium Case', label: 'Grade-5 Ti · Micro-blasted · DLC Coating', color: '#D4FF00', thickness: 16 },
]

export default function ExplodedView() {
  const sectionRef = useRef(null)
  const partsRef = useRef([])
  const progressRef = useRef(null)
  const counterRef = useRef(null)
  const [isMd, setIsMd] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2500',
          pin: true,
          scrub: 1.2,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`
            }
            if (counterRef.current) {
              counterRef.current.textContent = `${Math.round(self.progress * 100)}%`
            }
          },
        },
      })

      partsRef.current.forEach((part, i) => {
        const offset = (i - 2.5) * (isMd ? 90 : 70)
        tl.fromTo(part,
          { y: 0, opacity: 0.6, scale: 0.95 },
          { y: offset, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
          0
        )
      })

      partsRef.current.forEach((part, i) => {
        tl.to(part, {
          rotateX: (i - 2.5) * 3,
          duration: 0.5,
        }, 0.5)
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [isMd])

  return (
    <section
      ref={sectionRef}
      id="mechanics"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        perspective: '1000px',
      }}
    >
      {/* Header */}
      <div style={{
        position: 'absolute',
        top: '48px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        zIndex: 10,
      }}>
        <p style={{ color: '#8E95A5', fontSize: '11px', fontFamily: 'Space Mono, monospace', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Scroll to Explore
        </p>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 5vw, 44px)' }}>
          Exploded <span style={{ color: '#00F0FF' }}>Architecture</span>
        </h2>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute',
        bottom: '48px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        zIndex: 10,
      }}>
        <div style={{ width: '120px', height: '2px', background: '#22242A', borderRadius: '2px', overflow: 'hidden' }}>
          <div ref={progressRef} style={{ height: '100%', background: 'linear-gradient(90deg, #00F0FF, #D4FF00)', transformOrigin: 'left', transform: 'scaleX(0)' }} />
        </div>
        <span ref={counterRef} style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#8E95A5', minWidth: '32px' }}>0%</span>
      </div>

      {/* Parts Stack */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        transformStyle: 'preserve-3d',
      }}>
        {PARTS.map((part, i) => (
          <div
            key={i}
            ref={(el) => (partsRef.current[i] = el)}
            style={{
              width: `min(${280 - i * 8}px, ${70 - i * 2}vw)`,
              height: `${part.thickness * 3.5}px`,
              borderRadius: '14px',
              border: `1px solid ${part.color}33`,
              background: `linear-gradient(135deg, rgba(14,14,18,0.95), rgba(10,10,12,0.98))`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              boxShadow: `0 4px 30px ${part.color}08, inset 0 1px 0 rgba(255,255,255,0.02)`,
              cursor: 'default',
              transition: 'border-color 0.4s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = part.color + '88'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = part.color + '33'}
          >
            <span style={{ fontSize: '12px', fontFamily: 'Space Mono, monospace', color: part.color, fontWeight: 700 }}>
              {part.name}
            </span>
            {isMd && (
              <span style={{ fontSize: '10px', fontFamily: 'Space Mono, monospace', color: '#8E95A5' }}>
                {part.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
