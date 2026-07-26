import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const watchRef = useRef(null)
  const tagRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(tagRef.current, { y: 30, opacity: 0, duration: 0.8 }, 0.2)
        .from(titleRef.current.children, { y: 120, opacity: 0, duration: 1.2, stagger: 0.1 }, 0.4)
        .from(subtitleRef.current, { y: 30, opacity: 0, duration: 1 }, 0.9)
        .from(watchRef.current, { scale: 0.7, opacity: 0, duration: 1.5, ease: 'power2.out' }, 0.6)

      gsap.to(watchRef.current, {
        y: -100,
        scale: 0.9,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      gsap.to(titleRef.current, {
        y: -60,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: '30% top',
          end: '60% top',
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="overview"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Background radial gradient */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Tag */}
      <div ref={tagRef} style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '9999px',
        border: '1px solid #22242A',
        background: 'rgba(14,14,18,0.6)',
        marginBottom: '32px',
        zIndex: 10,
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4FF00', animation: 'pulse-glow 2s infinite' }} />
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#8E95A5', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Limited Edition — 500 Pieces
        </span>
      </div>

      {/* Title */}
      <div ref={titleRef} style={{ textAlign: 'center', zIndex: 10, overflow: 'hidden' }}>
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(52px, 12vw, 140px)',
          letterSpacing: '-3px',
          lineHeight: 0.95,
          marginBottom: '0',
        }}>
          <span style={{ display: 'block' }}>TIME,</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(90deg, #00F0FF, #D4FF00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            DIMENSIONED.
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <p ref={subtitleRef} style={{
        color: '#8E95A5',
        fontSize: '18px',
        maxWidth: '440px',
        margin: '28px auto 0',
        textAlign: 'center',
        lineHeight: 1.6,
        zIndex: 10,
      }}>
        A convergence of quantum engineering and temporal precision, crafted for the modern explorer.
      </p>

      {/* Watch Visual */}
      <div
        ref={watchRef}
        style={{
          position: 'relative',
          marginTop: '60px',
          width: 'min(380px, 80vw)',
          height: 'min(380px, 80vw)',
        }}
      >
        {/* Rotating outer ring */}
        <div style={{
          position: 'absolute',
          inset: '-10px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 240, 255, 0.15)',
          animation: 'rotate-slow 20s linear infinite',
        }}>
          {[0, 90, 180, 270].map((deg) => (
            <div key={deg} style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#00F0FF',
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateY(-${50 + 5}%) translate(-50%, -50%)`,
            }} />
          ))}
        </div>

        {/* Main outer ring */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(0, 240, 255, 0.25)',
        }} />
        <div style={{
          position: 'absolute',
          inset: '14px',
          borderRadius: '50%',
          border: '1px solid #22242A',
        }} />

        {/* Watch face */}
        <div style={{
          position: 'absolute',
          inset: '28px',
          borderRadius: '50%',
          background: 'linear-gradient(145deg, #12141a, #08080a)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5), 0 0 80px rgba(0,240,255,0.08)',
        }}>
          {/* Inner decorative rings */}
          <div style={{ position: 'absolute', inset: '20px', borderRadius: '50%', border: '1px solid rgba(34, 36, 42, 0.6)' }} />
          <div style={{ position: 'absolute', inset: '40px', borderRadius: '50%', border: '1px solid rgba(0, 240, 255, 0.08)' }} />

          {/* Hour markers */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: i % 3 === 0 ? '3px' : '1.5px',
                height: i % 3 === 0 ? '16px' : '10px',
                background: i % 3 === 0 ? 'rgba(0, 240, 255, 0.8)' : 'rgba(142, 149, 165, 0.4)',
                transform: `rotate(${i * 30}deg) translateY(-${85}px)`,
                transformOrigin: 'center center',
                top: '50%',
                left: '50%',
                marginLeft: '-1px',
                marginTop: '-8px',
                borderRadius: '1px',
              }}
            />
          ))}

          {/* Minute markers */}
          {Array.from({ length: 60 }).map((_, i) => (
            i % 5 !== 0 && (
              <div
                key={`m${i}`}
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '4px',
                  background: 'rgba(142, 149, 165, 0.2)',
                  transform: `rotate(${i * 6}deg) translateY(-85px)`,
                  transformOrigin: 'center center',
                  top: '50%',
                  left: '50%',
                  marginLeft: '-0.5px',
                  marginTop: '-2px',
                }}
              />
            )
          ))}

          {/* Watch hands */}
          <div style={{ position: 'absolute', width: '2.5px', height: '55px', background: '#F8F9FA', borderRadius: '2px', transformOrigin: 'bottom center', transform: 'translateY(-27px) rotate(-30deg)' }} />
          <div style={{ position: 'absolute', width: '2px', height: '72px', background: '#00F0FF', borderRadius: '2px', transformOrigin: 'bottom center', transform: 'translateY(-36px) rotate(60deg)', boxShadow: '0 0 6px rgba(0,240,255,0.5)' }} />
          <div style={{ position: 'absolute', width: '1px', height: '80px', background: '#D4FF00', borderRadius: '2px', transformOrigin: 'bottom center', transform: 'translateY(-40px) rotate(180deg)', animation: 'pulse-glow 2s infinite' }} />

          {/* Center */}
          <div style={{ position: 'absolute', width: '10px', height: '10px', borderRadius: '50%', background: '#00F0FF', boxShadow: '0 0 15px rgba(0, 240, 255, 0.6)' }} />

          {/* Sub-dial */}
          <div style={{
            position: 'absolute',
            top: '65%',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '1px solid rgba(0, 240, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ width: '1px', height: '16px', background: '#D4FF00', transformOrigin: 'bottom', transform: 'translateY(-8px) rotate(120deg)', opacity: 0.6 }} />
          </div>

          {/* Brand text */}
          <div style={{ position: 'absolute', top: '30%', textAlign: 'center' }}>
            <p style={{ fontSize: '7px', fontFamily: 'Space Mono, monospace', color: 'rgba(0, 240, 255, 0.5)', letterSpacing: '3px' }}>CHRONOS X</p>
            <p style={{ fontSize: '6px', fontFamily: 'Space Mono, monospace', color: 'rgba(142,149,165,0.4)', letterSpacing: '1px', marginTop: '2px' }}>AUTOMATIC</p>
          </div>
        </div>

        {/* Ambient glow */}
        <div style={{ position: 'absolute', inset: '-40px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'scroll-bounce 2s ease-in-out infinite',
      }}>
        <span style={{ color: '#8E95A5', fontSize: '10px', fontFamily: 'Space Mono, monospace', letterSpacing: '3px' }}>SCROLL</span>
        <ChevronDown style={{ width: 16, height: 16, color: '#00F0FF' }} />
      </div>
    </section>
  )
}
