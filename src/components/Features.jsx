import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Vibrate, Sun, RotateCcw, Droplets, Shield, Wifi } from 'lucide-react'

const FEATURES = [
  {
    icon: Vibrate,
    title: 'Haptic Temporal Sync',
    description: 'Micro-vibration feedback calibrated to circadian rhythm. Feel time through intelligent haptic pulses that adapt to your daily patterns.',
    color: '#00F0FF',
    stat: '0.01ms',
    statLabel: 'Response',
  },
  {
    icon: Sun,
    title: 'Photonic Solar Glass',
    description: 'Multi-layer photovoltaic sapphire crystal harvests ambient light. 72-hour reserve from 15 minutes of direct sun exposure.',
    color: '#D4FF00',
    stat: '72H',
    statLabel: 'Reserve',
  },
  {
    icon: RotateCcw,
    title: 'Zero-G Kinetic Engine',
    description: 'Magnetic levitation rotor eliminates friction entirely. Self-winding mechanism generates charge from micro-movements.',
    color: '#00F0FF',
    stat: '0 RPM',
    statLabel: 'Friction',
  },
  {
    icon: Droplets,
    title: 'Deep Pressure Shield',
    description: 'Triple-sealed crown system with helium escape valve. Engineered for saturation diving at extreme oceanic depths.',
    color: '#D4FF00',
    stat: '300M',
    statLabel: 'Rated',
  },
  {
    icon: Shield,
    title: 'Quantum Hardening',
    description: 'DLC-coated Grade-5 titanium case with 2000 Vickers hardness. Virtually scratch-proof under everyday conditions.',
    color: '#00F0FF',
    stat: '2000',
    statLabel: 'Vickers',
  },
  {
    icon: Wifi,
    title: 'Neural Sync Protocol',
    description: 'BLE 5.3 connectivity with end-to-end encrypted data transfer. Seamless companion app integration for advanced metrics.',
    color: '#D4FF00',
    stat: '5.3',
    statLabel: 'BLE Ver.',
  },
]

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null)
  const Icon = feature.icon

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: { trigger: cardRef.current, start: 'top 88%' },
      y: 60,
      opacity: 0,
      duration: 0.9,
      delay: (index % 2) * 0.15,
      ease: 'power3.out',
    })
  }, [index])

  return (
    <div
      ref={cardRef}
      style={{
        padding: '36px',
        borderRadius: '20px',
        border: '1px solid #22242A',
        background: 'linear-gradient(145deg, rgba(14,14,18,0.9), rgba(8,8,10,0.95))',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = feature.color + '55'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = `0 20px 60px ${feature.color}10`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#22242A'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '80px',
        height: '80px',
        background: `radial-gradient(circle at top right, ${feature.color}08, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${feature.color}33`,
          background: `${feature.color}08`,
        }}>
          <Icon style={{ width: 22, height: 22, color: feature.color }} />
        </div>

        <div style={{ textAlign: 'right' }}>
          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px', color: feature.color }}>{feature.stat}</p>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#8E95A5', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{feature.statLabel}</p>
        </div>
      </div>

      <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '20px', marginBottom: '12px' }}>
        {feature.title}
      </h3>
      <p style={{ color: '#8E95A5', lineHeight: 1.7, fontSize: '14px' }}>
        {feature.description}
      </p>
    </div>
  )
}

export default function Features() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current.children, {
      scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section ref={sectionRef} id="features" style={{ padding: '140px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: '#8E95A5', fontSize: '11px', fontFamily: 'Space Mono, monospace', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Core Technology
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 6vw, 56px)', marginBottom: '16px' }}>
            Engineered <span style={{ color: '#D4FF00' }}>Beyond</span> Time
          </h2>
          <p style={{ color: '#8E95A5', maxWidth: '500px', margin: '0 auto', fontSize: '16px', lineHeight: 1.6 }}>
            Six groundbreaking technologies working in concert to redefine what a timepiece can be.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '20px',
        }}>
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
