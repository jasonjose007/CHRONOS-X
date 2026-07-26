import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SPECS = [
  { label: 'Movement', value: 'Kinetic Q7', detail: 'Quantum oscillator · 28,800 VPH · 72h power reserve' },
  { label: 'Case Material', value: 'Grade-5 Ti', detail: 'Micro-blasted · DLC coating · 2000 Vickers hardness' },
  { label: 'Crystal', value: 'Sapphire', detail: 'Dual AR coating · 9H hardness · Photovoltaic layer' },
  { label: 'Water Resistance', value: '300M', detail: 'ISO 6425 · Helium escape valve · Triple-sealed crown' },
  { label: 'Case Diameter', value: '42mm', detail: 'Lug-to-lug: 48mm · Thickness: 11.8mm' },
  { label: 'Weight', value: '48g', detail: 'Titanium case + bracelet · Featherweight class' },
  { label: 'Connectivity', value: 'BLE 5.3', detail: 'E2E encrypted · Neural Sync Protocol · OTA updates' },
  { label: 'Battery', value: '72H+', detail: 'Solar + kinetic hybrid · 15min sun = full charge' },
]

function SpecRow({ spec, index }) {
  const rowRef = useRef(null)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    gsap.from(rowRef.current, {
      scrollTrigger: { trigger: rowRef.current, start: 'top 90%' },
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.08,
    })
  }, [index])

  return (
    <div
      ref={rowRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 2fr',
        gap: '16px',
        alignItems: 'center',
        padding: '20px 24px',
        borderBottom: '1px solid #22242A',
        transition: 'all 0.3s ease',
        background: isHover ? 'rgba(0, 240, 255, 0.02)' : 'transparent',
        cursor: 'default',
      }}
    >
      <span style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '11px',
        color: '#8E95A5',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        {spec.label}
      </span>
      <span style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 700,
        fontSize: '18px',
        color: isHover ? '#00F0FF' : '#F8F9FA',
        transition: 'color 0.3s',
      }}>
        {spec.value}
      </span>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        color: '#8E95A5',
        lineHeight: 1.4,
      }}>
        {spec.detail}
      </span>
    </div>
  )
}

export default function TechSpecs() {
  const headerRef = useRef(null)
  const tableRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current.children, {
      scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
    })
  }, [])

  return (
    <section id="specs" style={{ padding: '140px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: '60px' }}>
          <p style={{ color: '#8E95A5', fontSize: '11px', fontFamily: 'Space Mono, monospace', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Technical Specifications
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '16px' }}>
            Built for the <span style={{ color: '#00F0FF' }}>Extreme</span>
          </h2>
          <p style={{ color: '#8E95A5', fontSize: '16px', maxWidth: '500px', lineHeight: 1.6 }}>
            Every specification engineered to exceed industry standards. No compromises, no shortcuts.
          </p>
        </div>

        {/* Spec table */}
        <div ref={tableRef} style={{
          borderRadius: '20px',
          border: '1px solid #22242A',
          overflow: 'hidden',
          background: 'rgba(10,10,12,0.5)',
        }}>
          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 2fr',
            gap: '16px',
            padding: '16px 24px',
            borderBottom: '1px solid #22242A',
            background: 'rgba(14,14,18,0.8)',
          }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#8E95A5', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Parameter</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#8E95A5', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Value</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#8E95A5', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Details</span>
          </div>

          {SPECS.map((spec, i) => (
            <SpecRow key={i} spec={spec} index={i} />
          ))}
        </div>

        {/* Bottom badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '32px',
          justifyContent: 'center',
        }}>
          {['ISO 6425', 'COSC Certified', '5-Year Warranty', 'Swiss Made'].map((badge, i) => (
            <span key={i} style={{
              padding: '8px 16px',
              borderRadius: '9999px',
              border: '1px solid #22242A',
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              color: '#8E95A5',
              letterSpacing: '0.1em',
            }}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
