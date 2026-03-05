import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ganesh Chandrawale — Solutions Architect'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAF7F2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '3px', background: '#D4791A' }} />
          <span style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#D4791A', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Solutions Architect · London, UK
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '72px', fontWeight: 700, color: '#0F4C5C', lineHeight: 1.05 }}>
            Ganesh
          </div>
          <div style={{ fontSize: '72px', fontWeight: 400, color: '#1a1a1a', lineHeight: 1.05, fontStyle: 'italic' }}>
            Chandrawale
          </div>
          <div style={{ fontSize: '28px', color: '#737373', marginTop: '8px', fontFamily: 'sans-serif', fontWeight: 300 }}>
            Problem solver.{' '}
            <span style={{ color: '#D4791A' }}>Tech leader.</span>{' '}
            Lifelong learner.
          </div>
        </div>

        {/* Bottom: stats row */}
        <div style={{ display: 'flex', gap: '48px', borderTop: '1px solid #e5e5e5', paddingTop: '28px' }}>
          {[
            { num: '15+', label: 'Years in tech' },
            { num: 'AWS', label: 'Cloud Architecture' },
            { num: 'API', label: 'Design & Governance' },
            { num: 'DXC', label: 'Technology' },
          ].map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '28px', fontWeight: 700, color: '#0F4C5C' }}>{s.num}</span>
              <span style={{ fontSize: '13px', color: '#a3a3a3', fontFamily: 'sans-serif' }}>{s.label}</span>
            </div>
          ))}
          {/* URL */}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'flex-end' }}>
            <span style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#a3a3a3' }}>ganeshchandrawale.io</span>
          </div>
        </div>

        {/* Decorative teal block */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '8px', background: '#0F4C5C',
        }} />
      </div>
    ),
    { ...size }
  )
}
