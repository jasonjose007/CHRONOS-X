import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
    caption: 'Precision Engineering',
  },
  {
    url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    caption: 'Timeless Design',
  },
  {
    url: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80',
    caption: 'Crafted Details',
  },
  {
    url: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80',
    caption: 'Material Science',
  },
  {
    url: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80',
    caption: 'Elevated Form',
  },
]

export default function Gallery() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const totalWidth = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      gsap.from(headerRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
      {/* Header */}
      <div ref={headerRef} style={{
        position: 'absolute',
        top: '48px',
        left: '5vw',
        zIndex: 10,
      }}>
        <p style={{ color: '#8E95A5', fontSize: '11px', fontFamily: 'Space Mono, monospace', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Gallery
        </p>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 40px)' }}>
          Every Angle, <span style={{ color: '#00F0FF' }}>Perfected</span>
        </h2>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          height: '100%',
          padding: '0 5vw',
          paddingTop: '100px',
        }}
      >
        {IMAGES.map((img, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: 'clamp(300px, 40vw, 500px)',
              height: '65vh',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid #22242A',
            }}
          >
            <img
              src={img.url}
              alt={img.caption}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '32px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            }}>
              <p style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                color: '#F8F9FA',
              }}>{img.caption}</p>
              <p style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                color: '#8E95A5',
                marginTop: '4px',
                letterSpacing: '0.1em',
              }}>0{i + 1} / 0{IMAGES.length}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
