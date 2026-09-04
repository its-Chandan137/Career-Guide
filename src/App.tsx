import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { type College } from './data'
import Home from './pages/Home'
import Vacancies from './pages/Vacancies'
import Picks from './pages/Picks'
import Colleges from './pages/Colleges'
import Plan from './pages/Plan'

function useReveal(){
 const ref = useRef<HTMLDivElement>(null)
 const loc = useLocation()
 useEffect(()=>{
 const el = ref.current
 if(!el) return
 // re-run reveal after route change
 requestAnimationFrame(()=>{
 el.querySelectorAll('.reveal').forEach(n=> n.classList.remove('in'))
 const io = new IntersectionObserver((entries)=>{
 entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in') })
 }, {threshold:0.12})
 el.querySelectorAll('.reveal').forEach(n=>io.observe(n))
 // force hero visible immediately
 el.querySelectorAll('.heroWrap, .heroWrap .reveal').forEach(n=>n.classList.add('in'))
 return ()=>io.disconnect()
 })
 },[loc.pathname])
 // premium smooth scroll to top on route
 useEffect(()=>{
 const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
 window.scrollTo({top:0, behavior: prefersReduced ? 'auto' : 'smooth'})
 },[loc.pathname])
 return ref
}

function Layout({ children, bottomActive, setBottomActive }:{ children:React.ReactNode, bottomActive: 'colleges'|'checklist'|null, setBottomActive:(v:'colleges'|'checklist'|null)=>void }){
 const [drawer, setDrawer] = useState(false)
 const loc = useLocation()
 const isActive = (path:string)=> loc.pathname===path

 return (
 <>
 <div className="mesh"><div className="blob blob1"/><div className="blob blob2"/><div className="blob blob3"/></div>
 <div className="gridOverlay" />

 <div className="ticker">
 <span className="live">● LIVE</span>
 <div className="marquee"><span>Komal your Spot Counselling is <b>8 Sept 2026, 11 AM • Report to dept</b> • Even <u>without CUET</u> you can apply on 12th marks • B.Pharm OBC at GGU = 0 → don’t target GGU for pharmacy • Forensic 13 OBC • Biotech 9 OBC • Verify morning of 8 Sept </span></div>
 <Link to="/plan">Your Checklist ↓</Link>
 </div>

 <div className="navWrap">
 <nav className="navPill" aria-label="Primary">
 <Link className="brandMini" to="/">
 <div className="mark">K</div>
 <div><b>Komal’s Guide</b><span>Your → Jashpur • Bilaspur • Hyd</span></div>
 </Link>
 <div className="links">
 <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''}>Home</NavLink>
 <NavLink to="/vacancies" className={({isActive})=> isActive ? 'active' : ''}>Vacancies</NavLink>
 <NavLink to="/picks" className={({isActive})=> isActive ? 'active' : ''}>Top Picks</NavLink>
 <NavLink to="/colleges" className={({isActive})=> isActive ? 'active' : ''}>Colleges</NavLink>
 <NavLink to="/plan" className={({isActive})=> isActive ? 'active' : ''}>Your Plan</NavLink>
 </div>
 <button className="menuBtn" aria-label="Menu" onClick={()=>setDrawer(v=>!v)}>{drawer ? '✕' : '☰'}</button>
 </nav>
 </div>

 <div className={`drawer ${drawer ? 'open' : ''}`} onClick={()=>setDrawer(false)}>
 <div className="drawerBg" />
 <div className="drawerCard" onClick={e=>e.stopPropagation()}>
 <NavLink to="/" onClick={()=>setDrawer(false)}>Home <span>→</span></NavLink>
 <NavLink to="/vacancies" onClick={()=>setDrawer(false)}>Your Vacancies <span>→</span></NavLink>
 <NavLink to="/picks" onClick={()=>setDrawer(false)}>Your Top Picks <span>→</span></NavLink>
 <NavLink to="/colleges" onClick={()=>setDrawer(false)}>Your 10 Colleges <span>→</span></NavLink>
 <NavLink to="/plan" onClick={()=>setDrawer(false)}>Your NEET 2027 Plan <span>→</span></NavLink>
 </div>
 </div>

 <main className="shell">
 {children}
 <div style={{height:12}} />
 </main>

 <div className="bottomBar">
 <NavLink to="/colleges" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setBottomActive('colleges')}>Your colleges</NavLink>
 <NavLink to="/plan" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setBottomActive('checklist')}>Your checklist</NavLink>
 </div>

 <footer className="footer"><div className="footerInner"><small>Made for you, Komal • Data: GGU vacancy PDF 03.09.2026 & college sites • Verify 8 Sept morning • Frontend only</small><small style={{display:'flex', gap:8, alignItems:'center'}}><span className="pill">5 pages • React Router</span><Link to="/" style={{fontWeight:900, textDecoration:'none'}}>↑ Top</Link></small></div></footer>
 </>
 )
}

function RoutedApp(){
 const [selected, setSelected] = useState<College|null>(null)
 const [bottomActive, setBottomActive] = useState<'colleges'|'checklist'|null>(null)
 const rootRef = useReveal()

 useEffect(()=>{
 if(selected) document.body.style.overflow='hidden'
 else document.body.style.overflow=''
 return ()=>{ document.body.style.overflow='' }
 },[selected])
 useEffect(()=>{
 const h=(e:KeyboardEvent)=>{ if(e.key==='Escape') setSelected(null) }
 window.addEventListener('keydown', h)
 return ()=>window.removeEventListener('keydown', h)
 },[])

 return (
 <div ref={rootRef}>
 <Layout bottomActive={bottomActive} setBottomActive={setBottomActive}>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/vacancies" element={<Vacancies />} />
 <Route path="/picks" element={<Picks />} />
 <Route path="/colleges" element={<Colleges onSelect={setSelected} />} />
 <Route path="/plan" element={<Plan />} />
 <Route path="*" element={<Home />} />
 </Routes>
 </Layout>

 {selected && (
 <div className="modalOverlay" onClick={()=>setSelected(null)}>
 <div className="modalSheet" onClick={e=>e.stopPropagation()}>
 <div className="modalImg">
 <img src={selected.img} alt={selected.name} />
 <button className="modalClose" aria-label="Close" onClick={()=>setSelected(null)}>✕</button>
 <div className="modalImgFade" />
 <div className="modalTitle">
 <span className="pill" style={{background:'rgba(255,255,255,.92)', color:'#0B1020'}}>{selected.area} • {selected.vacancy}</span>
 <h3>{selected.name}</h3>
 <p>{selected.course} • {selected.city} • {selected.distance}</p>
 </div>
 </div>
 <div className="modalBody">
 <div className="modalGrid">
 <div className="modalStat"><b>{selected.rating} ★</b><span>Rating</span></div>
 <div className="modalStat"><b>{selected.intake}</b><span>Intake seats</span></div>
 <div className="modalStat"><b>{selected.fee}</b><span>Your fee</span></div>
 <div className="modalStat"><b>{selected.duration}</b><span>Duration</span></div>
 </div>
 <div className="modalSection"><h4>🎯 For you eligibility</h4><p>{selected.eligibility} • {selected.approval}</p></div>
 <div className="modalSection"><h4>🧬 How it helps your NEET 2027</h4><p>{selected.neetFit}</p></div>
 <div className="modalSection"><h4>💼 Your careers after</h4><div style={{display:'flex', gap:6, flexWrap:'wrap', marginTop:8}}>{selected.careers.map(c=> <span key={c} className="pill" style={{background:'rgba(139,92,246,.14)', borderColor:'rgba(139,92,246,.22)'}}>{c}</span>)}</div></div>
 <div className="modalSection"><h4>✅ Why pick this for you</h4><ul>{selected.pros.map(p=> <li key={p}>{p}</li>)}</ul></div>
 <div className="modalSection bad"><h4>⚠️ Check before you pay</h4><p>{selected.cons} get PCI 2026-27 PDF + intake letter + live seats + total fee in writing.</p></div>
 <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:14}}>
 {selected.phone !== ' ' && selected.phone && <a className="btn btnPrimary" href={`tel:${selected.phone.replace(/\s/g,'')}`} style={{flex:'1 1 auto', justifyContent:'center'}}>📞 Call {selected.phone}</a>}
 <button className="btn btnGhost" onClick={()=>setSelected(null)} style={{flex:'1 1 auto', justifyContent:'center'}}>Close</button>
 </div>
 <p style={{margin:'10px 0 0', fontSize:11, color:'var(--muted)', fontWeight:700, textAlign:'center'}}>Tap outside or press Esc to close • Made for you, Komal</p>
 </div>
 </div>
 </div>
 )}
 </div>
 )
}

export default function App(){
 return (
 <BrowserRouter>
 <RoutedApp />
 </BrowserRouter>
 )
}
