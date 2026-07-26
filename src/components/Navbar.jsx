import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [isMd, setIsMd] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleResize = () => setIsMd(window.innerWidth >= 768)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className={scrolled ? 'glass' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '20px 32px',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '2px solid #00F0FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{ width: '1px', height: '10px', background: '#00F0FF', position: 'absolute', transformOrigin: 'bottom', transform: 'translateY(-3px) rotate(-30deg)' }} />
            <div style={{ width: '1px', height: '7px', background: '#D4FF00', position: 'absolute', transformOrigin: 'bottom', transform: 'translateY(-2px) rotate(60deg)' }} />
            <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#00F0FF' }} />
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '16px', letterSpacing: '2px' }}>
            CHRONOS
          </span>
        </div>

        {isMd && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            {[
              { label: 'Overview', id: 'overview' },
              { label: 'Mechanics', id: 'mechanics' },
              { label: 'Features', id: 'features' },
              { label: 'Specs', id: 'specs' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8E95A5',
                  fontSize: '13px',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s',
                  padding: '8px 0',
                  position: 'relative',
                }}
                onMouseEnter={(e) => e.target.style.color = '#F8F9FA'}
                onMouseLeave={(e) => e.target.style.color = '#8E95A5'}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        <button style={{
          padding: '12px 24px',
          borderRadius: '9999px',
          background: 'transparent',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          color: '#00F0FF',
          fontSize: '13px',
          fontWeight: 500,
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          letterSpacing: '0.05em',
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)'
            e.currentTarget.style.borderColor = '#00F0FF'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,240,255,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Pre-Order
        </button>
      </div>
    </nav>
  )
}
