import { useMemo, useRef, useState } from 'react'
import { colleges, type College } from '../data'

export default function Colleges({ onSelect }:{ onSelect:(c:College)=>void }){
  const [active, setActive] = useState<'All'|'Jashpur'|'Bilaspur'|'Raigarh'|'Hyderabad'>('All')
  const [q, setQ] = useState('')
  const scrollerRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(()=> colleges.filter(c=>{
  if(active!=='All' && c.area!==active) return false
  if(q && !`${c.name} ${c.course} ${c.city}`.toLowerCase().includes(q.toLowerCase())) return false
  return true
  }),[active,q])

  // smoothest swipe: drag + momentum
  const drag = useRef({ down:false, startX:0, scrollLeft:0, vel:0, lastX:0, lastT:0, raf:0 as number|0 })
  const onPointerDown = (e: React.PointerEvent)=>{
    const el = scrollerRef.current
    if(!el) return
    drag.current.down = true
    drag.current.startX = e.clientX
    drag.current.scrollLeft = el.scrollLeft
    drag.current.lastX = e.clientX
    drag.current.lastT = Date.now()
    drag.current.vel = 0
    el.classList.add('dragging')
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    cancelAnimationFrame(drag.current.raf as number)
  }
  const onPointerMove = (e: React.PointerEvent)=>{
    const el = scrollerRef.current
    if(!el || !drag.current.down) return
    const dx = e.clientX - drag.current.startX
    el.scrollLeft = drag.current.scrollLeft - dx
    const now = Date.now()
    const dt = Math.max(1, now - drag.current.lastT)
    drag.current.vel = (e.clientX - drag.current.lastX) / dt
    drag.current.lastX = e.clientX
    drag.current.lastT = now
  }
  const onPointerUp = (e: React.PointerEvent)=>{
    const el = scrollerRef.current
    if(!el || !drag.current.down) return
    drag.current.down = false
    el.classList.remove('dragging')
    ;(e.target as Element).releasePointerCapture?.(e.pointerId)
    // momentum
    let v = drag.current.vel * 14
    const decay = 0.94
    const step = ()=>{
      if(Math.abs(v) < 0.3) return
      el.scrollLeft -= v
      v *= decay
      drag.current.raf = requestAnimationFrame(step)
    }
    drag.current.raf = requestAnimationFrame(step)
  }

 return (
 <section className="section">
 <div className="sectionHead reveal in"><div><span className="eyebrow">10 colleges for you, Komal</span><h2>Your colleges near home first</h2><p>Tap any card for your full details. Private “Admissions Open” ≠ confirmed seat call before you pay.</p></div></div>

 <div className="filterRow reveal in">
 <div className="search"><i>🔎</i><input placeholder="Search your college…" value={q} onChange={e=>setQ(e.target.value)} aria-label="Search colleges" /></div>
 <span className="count">{filtered.length} for you</span>
  <div
    ref={scrollerRef}
    className="pillScroller"
    role="tablist"
    aria-label="Filter by area"
    onPointerDown={onPointerDown}
    onPointerMove={onPointerMove}
    onPointerUp={onPointerUp}
    onPointerLeave={onPointerUp}
    onPointerCancel={onPointerUp}
  >
  {(['All','Jashpur','Bilaspur','Raigarh','Hyderabad'] as const).map(t=>(
  <button key={t} role="tab" aria-selected={active===t} type="button" className={`tabPill ${active===t ? 'active' : ''}`} onClick={()=>setActive(t)}>{t}</button>
  ))}
  </div>
 </div>

 <div className="collegeGrid" style={{marginTop:14}}>
 {filtered.map((c, idx)=>(
 <button key={c.id} className="college reveal in" onClick={()=>onSelect(c)} style={{textAlign:'left', cursor:'pointer', padding:0}}>
 <div className="collegeImg">
 <img src={c.img} alt={c.name} loading="lazy" />
 <span className="collegeImgTag">{idx+1} • {c.area} • {c.vacancy}</span>
 <span style={{position:'absolute', right:10, bottom:10, zIndex:2, background:'rgba(255,255,255,.92)', color:'#0B1020', padding:'5px 9px', borderRadius:999, fontSize:11, fontWeight:900}}>Tap for your details →</span>
 </div>
 <div className="collegeBody">
 <h3>{c.name}</h3>
 <div className="loc">{c.course} <span>{c.highlight}</span></div>
 <div className="loc" style={{color:'#A78BFA'}}>{c.city} • {c.distance} • {c.intake} seats</div>
 <div className="metaRow">
 <span className="metaPill strong">{c.rating} ★</span>
 <span className="metaPill">{c.fee}</span>
 <span className="metaPill">{c.approval}</span>
 </div>
 <ul style={{margin:'10px 0 0', paddingLeft:16, fontSize:12.5, color:'#CBD5E1', fontWeight:600, lineHeight:1.6}}>
 {c.pros.map(p=> <li key={p}>{p}</li>)}
 </ul>
 <div style={{marginTop:10, padding:'8px 10px', borderRadius:10, background:'rgba(245,158,11,.1)', border:'1px solid rgba(245,158,11,.18)', fontSize:11, fontWeight:800}}>⚠️ For you: {c.cons}</div>
 </div>
 <div className="collegeFoot" onClick={e=>e.stopPropagation()}>
 {c.phone!==' ' && c.phone && <a className="btn btnGhost" style={{padding:'8px 12px', fontSize:12}} href={`tel:${c.phone.replace(/\s/g,'')}`}>📞 {c.phone}</a>}
 <small style={{color:'var(--muted)', fontSize:11, fontWeight:800}}>Verify PCI 2026-27 • your fee</small>
 <span className="fee">{c.fee}</span>
 </div>
 </button>
 ))}
 </div>

 <div className="glass glassPad reveal" style={{marginTop:14, background:'rgba(255,255,255,.04)'}}>
 <h3 style={{fontFamily:'Fraunces,serif', margin:0, fontSize:14}}>Komal, before you pay any private B.Pharm fee get in writing:</h3>
 <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:10}}>
 {['PCI approval 2026-27 PDF','Intake letter','Live seats for you','Your total 4-yr fee','Hostel + mess','Last 3 yrs placements'].map(x=>(
 <span key={x} className="pill">{x}</span>
 ))}
 </div>
 </div>
 </section>
 )
}
