import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ArrowUp } from 'lucide-react'

export default function Footer() {
  const ctaRef = useRef(null)
  const bigTextRef = useRef(null)
  const [isMd, setIsMd] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    gsap.from(ctaRef.current, {
      scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from(bigTextRef.current, {
      scrollTrigger: { trigger: bigTextRef.current, start: 'top 85%' },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{ padding: '140px 24px 60px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Giant text */}
        <div ref={bigTextRef} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(40px, 10vw, 100px)',
            lineHeight: 1,
            letterSpacing: '-3px',
          }}>
            OWN THE
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #00F0FF, #D4FF00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              FUTURE
            </span>
          </h2>
        </div>

        {/* CTA */}
        <div ref={ctaRef} style={{ textAlign: 'center', marginBottom: '100px' }}>
          <p style={{ color: '#8E95A5', fontSize: '12px', fontFamily: 'Space Mono, monospace', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px' }}>
            Limited Edition — Only 500 Pieces Worldwide
          </p>

          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              padding: '22px 48px',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #00F0FF, #D4FF00)',
              color: '#0a0a0c',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0,240,255,0.4), 0 0 80px rgba(212,255,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            RESERVE YOUR CHRONOS X
            <ArrowRight style={{ width: 20, height: 20 }} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '24px' }}>
            <span style={{ color: '#8E95A5', fontSize: '14px' }}>Starting at $2,499</span>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22242A' }} />
            <span style={{ color: '#8E95A5', fontSize: '14px' }}>Ships Q1 2026</span>
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{
          borderTop: '1px solid #22242A',
          paddingTop: '48px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMd ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: isMd ? 'space-between' : 'center',
            gap: '32px',
          }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '1.5px solid #00F0FF',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ width: '2px', height: '2px', borderRadius: '50%', background: '#00F0FF' }} />
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '2px' }}>CHRONOS</span>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {['Twitter', 'Instagram', 'Discord', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{ color: '#8E95A5', fontSize: '13px', textDecoration: 'none', transition: 'color 0.3s', fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={(e) => e.target.style.color = '#F8F9FA'}
                  onMouseLeave={(e) => e.target.style.color = '#8E95A5'}
                >
                  {social}
                </a>
              ))}
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #22242A',
                background: 'none',
                color: '#8E95A5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00F0FF'; e.currentTarget.style.color = '#00F0FF' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#22242A'; e.currentTarget.style.color = '#8E95A5' }}
            >
              <ArrowUp style={{ width: 16, height: 16 }} />
            </button>
          </div>

          <p style={{ color: '#8E95A5', fontSize: '11px', fontFamily: 'Space Mono, monospace', marginTop: '32px', textAlign: 'center' }}>
            © 2026 Chronos Laboratories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
