import { useEffect, useMemo, useRef, useState } from 'react'

type College = {
  id:string
  name:string
  course:string
  city:string
  area:'Jashpur'|'Bilaspur'|'Raigarh'|'Hyderabad'
  fee:string
  intake:string
  approval:string
  vacancy:string
  rating:string
  img:string
  highlight:string
  phone?:string
  pros:string[]
  cons:string
}

const vacancies = [
  { course:'B.Sc Forensic Science', total:22, obc:13, status:'Excellent', intake:60 },
  { course:'B.Sc Biotechnology', total:17, obc:9, status:'Very Good', intake:75 },
  { course:'B.Sc Botany', total:38, obc:17, status:'Very Good', intake:0 },
  { course:'B.Sc Chemistry', total:22, obc:13, status:'Excellent', intake:0 },
  { course:'B.Sc Zoology', total:16, obc:2, status:'Low OBC', intake:0 },
  { course:'D.Pharm', total:1, obc:1, status:'1 seat', intake:0 },
  { course:'B.Pharm (GGU)', total:1, obc:0, status:'No OBC', intake:0 },
  { course:'B.Sc Anthropology', total:35, obc:3, status:'—', intake:0 },
]

const colleges:College[] = [
  { id:'ggu-forensic', name:'Guru Ghasidas Vishwavidyalaya', course:'B.Sc Forensic Science (Hons) — 4 yrs', city:'Bilaspur', area:'Bilaspur', fee:'~₹20-30k/yr', intake:'60+30 SFS', approval:'Central University', vacancy:'13 OBC vacant', rating:'9.0', img:'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80&auto=format&fit=crop', highlight:'TOP PICK — 8 Sept Spot', pros:['13 OBC seats live now','Central uni • hostels • labs','M.Sc Forensic route'], cons:'M.Sc helps for top jobs', phone:'07752 260353'},
  { id:'ggu-biotech', name:'Guru Ghasidas Vishwavidyalaya', course:'B.Sc Biotechnology — 3/4 yrs', city:'Bilaspur', area:'Bilaspur', fee:'~₹20-30k/yr', intake:'75', approval:'Central University', vacancy:'9 OBC vacant', rating:'8.8', img:'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop', highlight:'Best NEET overlap', pros:['9 OBC seats vacant','Biology+C Chemistry daily revision','DBT PG pathway'], cons:'Needs M.Sc for best roles', phone:'07752 260353'},
  { id:'apaar', name:'Apaar College of Pharmacy', course:'B.Pharm — 4 yrs', city:'Jashpur', area:'Jashpur', fee:'Ask college', intake:'60-100', approval:'PCI • CSVTU', vacancy:'Admissions open', rating:'7.2', img:'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=900&q=80&auto=format&fit=crop', highlight:'Closest to home', pros:['Study at home — no hostel','Full pharmacist licence','Family support for NEET'], cons:'Verify PCI 2026-27 before fee', phone:'092387 27088'},
  { id:'tagore', name:'Tagore Institute of Pharmacy & Research', course:'B.Pharm & D.Pharm — 4 yrs', city:'Sakri, Bilaspur', area:'Bilaspur', fee:'~₹2.7L total', intake:'100', approval:'PCI • CSVTU', vacancy:'Registrations open', rating:'8.0', img:'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80&auto=format&fit=crop', highlight:'Best Bilaspur B.Pharm', pros:['PCI • OBC 40% criteria','Bilaspur city access','Admissions live now'], cons:'No public vacancy matrix', phone:'092434 93618'},
  { id:'lcit', name:'LCIT School of Pharmacy', course:'B.Pharm — 4 yrs', city:'Bodri, Bilaspur', area:'Bilaspur', fee:'~₹2.68L total', intake:'—', approval:'PCI • CSVTU', vacancy:'Admissions open', rating:'7.6', img:'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80&auto=format&fit=crop', highlight:'Bilaspur alt', pros:['Established group','Central location'], cons:'Less transparent info', phone:'095222 20131'},
  { id:'apex', name:'Apex College of Pharmacy', course:'B.Pharm — 4 yrs', city:'Raigarh', area:'Raigarh', fee:'₹80k/yr • ₹3.2L', intake:'100', approval:'PCI • AICTE', vacancy:'Mgmt seats open', rating:'7.8', img:'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80&auto=format&fit=crop', highlight:'Well documented', pros:['100 seats • fee clear','PCI/AICTE/CSVTU','Scholarships OBC'], cons:'Costlier than Raigarh', phone:'—'},
  { id:'raigarh', name:'Raigarh College of Pharmacy', course:'B.Pharm — 4 yrs', city:'Raigarh', area:'Raigarh', fee:'₹36k/sem • ₹2.88L', intake:'60', approval:'CSVTU • PCI', vacancy:'Till 30 Sept 2026', rating:'7.9', img:'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=900&q=80&auto=format&fit=crop', highlight:'Lowest fee', pros:['Lowest cost in region','Deadline explicit','Govt concessions'], cons:'95% placement — verify', phone:'—'},
  { id:'anurag', name:'Anurag University', course:'B.Pharm — 4 yrs', city:'Hyderabad', area:'Hyderabad', fee:'₹85k/yr • ₹3.4L', intake:'100', approval:'NBA • NAAC', vacancy:'EAPCET 70/30', rating:'9.1', img:'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop', highlight:'Hyderabad #1', pros:['NBA • 16 labs','MedPlus 2026 drive','NIRF research'], cons:'Hostel + new city', phone:'—'},
  { id:'grcp', name:'Gokaraju Rangaraju College', course:'B.Pharm — 4 yrs', city:'Hyderabad', area:'Hyderabad', fee:'₹85k/yr', intake:'100', approval:'Osmania • PCI', vacancy:'70/30 seats', rating:'8.9', img:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&auto=format&fit=crop', highlight:'Pharma specialist', pros:['Osmania affiliation','Pure pharmacy focus','DI analyst pathway'], cons:'Hyd living cost', phone:'—'},
  { id:'cmr', name:'CMR College of Pharmacy', course:'B.Pharm / Pharm.D', city:'Hyderabad', area:'Hyderabad', fee:'₹90k/yr', intake:'100', approval:'PCI • JNTUH', vacancy:'Convener open', rating:'8.6', img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop', highlight:'Dr Reddy’s 25 placed', pros:['Feb 2026 placement','NIRF 101-125','Full ecosystem'], cons:'Competitive', phone:'—'},
]

function useReveal(){
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('in')
      })
    }, {threshold:0.12})
    el.querySelectorAll('.reveal').forEach(n=>io.observe(n))
    return ()=>io.disconnect()
  },[])
  return ref
}

export default function App(){
  const [active, setActive] = useState<'All'|'Jashpur'|'Bilaspur'|'Raigarh'|'Hyderabad'>('All')
  const [q, setQ] = useState('')
  const [openFaq, setOpenFaq] = useState<number|null>(0)
  const [drawer, setDrawer] = useState(false)
  const rootRef = useReveal()

  const filtered = useMemo(()=> colleges.filter(c=>{
    if(active!=='All' && c.area!==active) return false
    if(q && !`${c.name} ${c.course} ${c.city}`.toLowerCase().includes(q.toLowerCase())) return false
    return true
  }),[active,q])

  return (
    <div ref={rootRef}>
      <div className="mesh"><div className="blob blob1"/><div className="blob blob2"/><div className="blob blob3"/></div>
      <div className="gridOverlay" />

      <div className="ticker">
        <span className="live">● LIVE</span>
        <div className="marquee"><span>GGU Spot Counselling — <b>8 Sept 2026, 11 AM • Report to dept</b> • Even <u>without CUET</u> can apply on 12th marks • B.Pharm OBC at GGU = 0 → don’t target GGU for pharmacy • Forensic 13 OBC • Biotech 9 OBC • Verify morning of 8 Sept — </span></div>
        <a href="#action">Checklist ↓</a>
      </div>

      <div className="navWrap">
        <nav className="navPill" aria-label="Primary">
          <a className="brandMini" href="#">
            <div className="mark">H</div>
            <div><b>Her Future</b><span>Jashpur → Bilaspur → Hyd</span></div>
          </a>
          <div className="links">
            <a href="#vacancies">Vacancies</a>
            <a href="#picks" className="active">Top Picks</a>
            <a href="#colleges">Colleges</a>
            <a href="#plan">Plan</a>
          </div>
          <button className="menuBtn" aria-label="Menu" onClick={()=>setDrawer(v=>!v)}>{drawer ? '✕' : '☰'}</button>
        </nav>
      </div>

      <div className={`drawer ${drawer ? 'open' : ''}`} onClick={()=>setDrawer(false)}>
        <div className="drawerBg" />
        <div className="drawerCard" onClick={e=>e.stopPropagation()}>
          <a href="#vacancies" onClick={()=>setDrawer(false)}>Vacancies <span>→</span></a>
          <a href="#picks" onClick={()=>setDrawer(false)}>Top Picks <span>→</span></a>
          <a href="#colleges" onClick={()=>setDrawer(false)}>10 Colleges <span>→</span></a>
          <a href="#plan" onClick={()=>setDrawer(false)}>NEET 2027 Plan <span>→</span></a>
        </div>
      </div>

      <main className="shell">
        {/* HERO */}
        <section className="heroWrap reveal in">
          <video className="heroVideo" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80&auto=format&fit=crop">
            <source src="https://videos.pexels.com/video-files/18069234/18069234-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          </video>
          <div className="heroOverlay" />
          <div className="heroNoise" />
          <div className="heroContent">
            <div className="glass glassPad reveal in">
              <span className="eyebrow">For her & family • Personal guide</span>
              <h1 className="h1">No more drop.<br/><i>Degree + NEET 2027</i> together — with a real career by 2030.</h1>
              <p className="h1sub">20 now, 21 in Dec • <b>OBC</b> • <b>Jashpur, CG</b> • 2 NEET attempts • Loves <b>Forensic + Pharmacy</b> • NEET again <b>May 2027</b>. Family wants Jashpur–Bilaspur radius. Hyderabad only if she wants.</p>

              <div className="miniGrid">
                <div className="mini"><i>🎯</i><div><b>Goal: MBBS if NEET cracks</b><span>Else strong backup by 2030</span></div></div>
                <div className="mini"><i>📍</i><div><b>Home: Jashpur</b><span>Bilaspur • Raigarh • Hyd</span></div></div>
                <div className="mini"><i>🧾</i><div><b>Category: OBC</b><span>Vacancy decides GGU</span></div></div>
                <div className="mini"><i>⏳</i><div><b>21 in December</b><span>No wasted year</span></div></div>
              </div>

              <div className="stats">
                <div className="stat"><b style={{color:'#A78BFA'}}>13</b><span>OBC seats<br/>Forensic • GGU</span></div>
                <div className="stat"><b style={{color:'#22D3EE'}}>09</b><span>OBC seats<br/>Biotech • GGU</span></div>
                <div className="stat"><b style={{color:'#F87171'}}>00</b><span>OBC seats<br/>B.Pharm • GGU</span></div>
              </div>

              <div className="quote">“Don’t take a random B.Sc just to fill time. If MBBS doesn’t happen at 21–22, she should hold a degree she actually wants.”</div>

              <div className="btnRow">
                <a href="#colleges" className="btn btnPrimary">See all 10 colleges →</a>
                <a href="#vacancies" className="btn btnGhost">Vacancy table</a>
                <span className="kbd">PDF 03 Sept 2026</span>
              </div>
            </div>

            <div className="stack">
              <div className="pick reveal in">
                <div className="pickImg">
                  <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=900&q=80&auto=format&fit=crop" alt="Forensic lab" loading="lazy" />
                  <span className="pickBadge">Investigate first</span>
                </div>
                <div className="pickBody">
                  <div className="pill" style={{background:'rgba(245,158,11,.18)', color:'#FDE68A', borderColor:'rgba(245,158,11,.28)'}}>GGU • Bilaspur • 22 seats total</div>
                  <h3>🥇 B.Sc Forensic Science</h3>
                  <p>She already likes forensic → <b style={{color:'#FDE68A'}}>13 OBC vacant</b> • 4-yr Hons + M.Sc route</p>
                  <ul><li>DNA / Genetics / Toxicology overlaps NEET</li><li>Central uni + hostels + labs</li><li>Switch to MBBS if cracks, else forensic</li></ul>
                  <div className="pickCta"><a className="btn btnPrimary" href="#colleges" style={{padding:'9px 14px'}}>View GGU →</a><span className="pill">NEET ⭐⭐⭐⭐ • Career ⭐⭐⭐⭐</span></div>
                </div>
              </div>

              <div className="pick reveal in">
                <div className="pickImg"><img src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=900&q=80&auto=format&fit=crop" alt="Pharmacy" loading="lazy" /></div>
                <div className="pickBody">
                  <div className="pill" style={{background:'rgba(139,92,246,.18)', color:'#DDD6FE', borderColor:'rgba(139,92,246,.28)'}}>Private • Jashpur / Bilaspur / Raigarh</div>
                  <h3>B.Pharm — strongest backup</h3>
                  <p>Not “doctor” but <b style={{color:'#DDD6FE'}}>best job-ready</b> • 4 yrs • Hospital / QC / QA / Regulatory</p>
                  <ul><li>Apaar (Jashpur) = home • Tagore/Apex = Bilaspur/Raigarh</li><li>GGU B.Pharm OBC = 0 — skip GGU for pharm</li></ul>
                  <div className="pickCta"><a className="btn btnGhost" href="#colleges" style={{padding:'9px 14px'}}>Compare B.Pharm</a><span className="pill">Career ⭐⭐⭐⭐⭐</span></div>
                </div>
              </div>

              <div className="pick reveal in">
                <div className="pickImg"><img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop" alt="Biotech" loading="lazy" /></div>
                <div className="pickBody">
                  <div className="pill" style={{background:'rgba(6,182,214,.18)', color:'#A5F3FC', borderColor:'rgba(6,182,214,.28)'}}>GGU • 17 seats • 9 OBC</div>
                  <h3>B.Sc Biotechnology</h3>
                  <p>Best NEET overlap — <b style={{color:'#A5F3FC'}}>biology + chemistry daily</b></p>
                  <ul><li>Diagnostics / Molecular / Pharma labs</li><li>B.Sc → M.Sc → Research</li></ul>
                  <div className="pickCta"><a className="btn btnGhost" href="#colleges" style={{padding:'9px 14px'}}>Details</a><span className="pill">NEET ⭐⭐⭐⭐⭐</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="myth">
          <div className="mythCard bad reveal">
            <i>🚫</i>
            <div>
              <b>Truth: B.Pharm / Pharm.D ≠ MBBS Doctor</b>
              <p>PCI: B.Pharm = 4-yr professional pharmacy degree, Pharm.D = 6-yr doctoral pharmacy programme. You become <b style={{color:'#FCA5A5'}}>pharmacist / clinical pharmacy pro</b> — not a physician. Don’t pick pharmacy thinking it’s shortcut to MBBS.</p>
              <div style={{marginTop:10, padding:'10px 12px', borderRadius:12, background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.18)', fontSize:12, fontWeight:800}}>⚠️ Relative advice “pharmacy = doctor” is misleading. Pick pharmacy for its <u>own</u> career.</div>
            </div>
          </div>
          <div className="mythCard good reveal">
            <i>✅</i>
            <div>
              <b>What B.Pharm actually gives</b>
              <p>Hospital pharmacist, QC/QA, Regulatory, Pharmacovigilance, Clinical research, Drug inspector pathway, Medical sales, R&D, M.Pharm / MBA. Broad industry — not just medical shop.</p>
              <div className="chipRow" style={{marginTop:10}}><span className="chipMini" style={{background:'rgba(16,185,129,.14)', borderColor:'rgba(16,185,129,.24)'}}>QC • QA</span><span className="chipMini" style={{background:'rgba(16,185,129,.14)', borderColor:'rgba(16,185,129,.24)'}}>Hospital</span><span className="chipMini" style={{background:'rgba(16,185,129,.14)', borderColor:'rgba(16,185,129,.24)'}}>Research</span></div>
            </div>
          </div>
        </section>

        {/* BENTO TOP PICKS */}
        <section id="picks" className="section">
          <div className="sectionHead reveal"><div><span className="eyebrow">Ranked for HER situation</span><h2>What fits best — in one glance</h2><p>Weighed for NEET compatibility + 5-6yr career + OBC vacancy now + distance from Jashpur. Tap a college below.</p></div><span className="kbd" style={{alignSelf:'center'}}>Real vacancy, not ads</span></div>
          <div className="bento">
            <div className="bentoCard reveal" style={{gridRow:'span 1'}}>
              <div className="bentoImg"><img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=900&q=80&auto=format&fit=crop" alt="Forensic" loading="lazy" /><span className="rankBadge" style={{background:'linear-gradient(135deg,#F59E0B,#EF4444)'}}>1</span></div>
              <div className="bentoBody">
                <div className="chipRow"><span className="chipMini" style={{background:'#fff', color:'#0B1020'}}>NEET ⭐⭐⭐⭐</span><span className="chipMini">Career ⭐⭐⭐⭐</span><span className="chipMini" style={{background:'rgba(245,158,11,.18)', color:'#FDE68A'}}>13 OBC at GGU</span></div>
                <h3 style={{fontFamily:'Fraunces,serif', margin:'10px 0 4px', fontSize:18}}>B.Sc Forensic Science — GGU Bilaspur</h3>
                <p style={{margin:0, color:'var(--muted)', fontSize:12.5, fontWeight:700}}>Her interest + live vacancy + central uni labs. DNA / Toxicology keeps NEET revision alive.</p>
                <div className="divider" />
                <ul style={{margin:0, paddingLeft:16, fontSize:12.5, color:'#CBD5E1', fontWeight:600, lineHeight:1.6}}>
                  <li>Spot counselling 8 Sept — actionable now</li><li>Forensic dept + M.Sc route in same uni</li><li>Hostel support vs Hyderabad shift</li>
                </ul>
              </div>
            </div>
            <div style={{display:'grid', gap:14}}>
              <div className="bentoCard reveal">
                <div className="bentoImg" style={{height:160}}><img src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=900&q=80&auto=format&fit=crop" alt="BPharm" loading="lazy" /><span className="rankBadge" style={{background:'linear-gradient(135deg,#94A3B8,#475569)'}}>2</span></div>
                <div className="bentoBody"><h3 style={{fontFamily:'Fraunces,serif', margin:'0', fontSize:15}}>B.Pharm — Jashpur / Bilaspur / Raigarh</h3><div className="chipRow"><span className="chipMini" style={{background:'#10B981', color:'#fff', borderColor:'#10B981'}}>Career ⭐⭐⭐⭐⭐</span><span className="chipMini">NEET ⭐⭐⭐⭐</span></div><p style={{margin:'8px 0 0', color:'var(--muted)', fontSize:12, fontWeight:700}}>Strongest immediate licence — Apaar (home) or Tagore/Apex. Skip GGU (0 OBC).</p></div>
              </div>
              <div className="bentoCard reveal">
                <div className="bentoImg" style={{height:160}}><img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop" alt="Biotech" loading="lazy" /><span className="rankBadge" style={{background:'linear-gradient(135deg,#06B6D4,#8B5CF6)'}}>3</span></div>
                <div className="bentoBody"><h3 style={{fontFamily:'Fraunces,serif', margin:'0', fontSize:15}}>B.Sc Biotechnology — GGU</h3><div className="chipRow"><span className="chipMini" style={{background:'#06B6D4', color:'#fff', borderColor:'#06B6D4'}}>NEET ⭐⭐⭐⭐⭐</span><span className="chipMini">9 OBC vacant</span></div><p style={{margin:'8px 0 0', color:'var(--muted)', fontSize:12, fontWeight:700}}>Best NEET synergy — biology & chemistry every day. B.Sc → M.Sc.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* VACANCIES */}
        <section id="vacancies" className="section">
          <div className="glassTable reveal">
            <div className="glassPad" style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap', alignItems:'center'}}>
              <div><span className="eyebrow">From GGU PDF • 03 Sept 2026</span><h3 style={{fontFamily:'Fraunces,serif', margin:'6px 0 0', fontSize:18}}>GGU Bilaspur — OBC vacancy</h3><p style={{margin:'6px 0 0', color:'var(--muted)', fontSize:12.5, fontWeight:700}}>B.Pharm OBC = 0 — don’t waste time. Forensic & Biotech wide open.</p></div>
              <span className="kbd">No CUET? Still eligible → 12th marks</span>
            </div>
            <div className="tableWrap">
              <table>
                <thead><tr><th>Course</th><th>Intake</th><th>Total</th><th>OBC Vacant</th><th>Status</th></tr></thead>
                <tbody>
                  {vacancies.map(v=>(
                    <tr key={v.course} className={v.obc>=9 ? 'rowHi' : ''}>
                      <td>{v.course} {v.obc===13 && <span className="badge badgeOk" style={{marginLeft:8, fontSize:10}}>Act now</span>}</td>
                      <td>{v.intake || '—'}</td>
                      <td>{v.total}</td>
                      <td><span className={`badge ${v.obc===0 ? 'badgeNo' : v.obc>=9 ? 'badgeOk' : 'badgeWarn'}`}>{v.obc} OBC</span></td>
                      <td>{v.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="glassPad" style={{background:'rgba(139,92,246,.08)', borderTop:'1px solid rgba(255,255,255,.08)', display:'grid', gap:10}}>
              <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.1)', fontSize:12.5, fontWeight:800}}>📢 <b>No CUET needed.</b> GGU says: appeared / not appeared / not applied — all can join spot counselling. Merit on 12th for 3rd preference. Report by <b>11 AM, 8 Sept</b> with 10th/12th + OBC.</div>
              <div style={{display:'flex', gap:8, flexWrap:'wrap'}}><a className="btn btnPrimary" href="https://ggu.ac.in" target="_blank" rel="noreferrer">Open GGU Admissions ↗</a><span style={{alignSelf:'center', color:'var(--muted)', fontSize:11, fontWeight:800}}>Recheck vacancy morning of 8 Sept</span></div>
            </div>
          </div>

          <div className="grid2" style={{marginTop:14}}>
            <div className="glass glassPad reveal">
              <span className="eyebrow">Compare quickly</span>
              <h3 style={{fontFamily:'Fraunces,serif', margin:'6px 0 0', fontSize:16}}>Forensic vs B.Pharm vs Biotech</h3>
              <div className="compareWrap" style={{marginTop:12}}><div className="tableWrap"><table style={{minWidth:560}}>
                <thead><tr><th></th><th>Forensic (GGU)</th><th>B.Pharm</th><th>Biotech (GGU)</th></tr></thead>
                <tbody>
                  <tr><td>Duration</td><td>4 yrs Hons</td><td>4 yrs</td><td>3–4 yrs</td></tr>
                  <tr><td>NEET</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
                  <tr><td>Immediate job</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
                  <tr><td>OBC now</td><td><span className="badge badgeOk">13</span></td><td><span className="badge badgeNo">0 at GGU</span></td><td><span className="badge badgeOk">9</span></td></tr>
                </tbody>
              </table></div></div>
            </div>
            <div className="glass glassPad reveal">
              <span className="eyebrow">After the degree</span>
              <h3 style={{fontFamily:'Fraunces,serif', margin:'6px 0 0', fontSize:16}}>She becomes</h3>
              <div style={{display:'grid', gap:8, marginTop:12}}>
                <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(245,158,11,.12)', border:'1px solid rgba(245,158,11,.22)', fontSize:12, fontWeight:800}}>🔍 <b>Forensic:</b> Lab analyst • CSI support • DNA/toxicology • Govt FSL • M.Sc</div>
                <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(139,92,246,.14)', border:'1px solid rgba(139,92,246,.24)', fontSize:12, fontWeight:800}}>💊 <b>B.Pharm:</b> Hospital pharmacist • QC/QA • Regulatory • Research • Drug Inspector*</div>
                <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(6,182,214,.12)', border:'1px solid rgba(6,182,214,.24)', fontSize:12, fontWeight:800}}>🧬 <b>Biotech:</b> Molecular • Diagnostics • Pharma R&D • QC • M.Sc → Research</div>
              </div>
            </div>
          </div>
        </section>

        {/* COLLEGES */}
        <section id="colleges" className="section">
          <div className="sectionHead reveal"><div><span className="eyebrow">10 colleges ranked for her</span><h2>Near home first — Hyderabad only if she wants</h2><p>Private “Admissions Open” ≠ confirmed seat. Call for live availability before paying.</p></div></div>

          <div className="filterRow reveal">
            <div className="search"><i>🔎</i><input placeholder="Search college or course…" value={q} onChange={e=>setQ(e.target.value)} /></div>
            <span className="count">{filtered.length} colleges</span>
            <div style={{display:'flex', gap:6, marginLeft:'auto', overflow:'auto'}}>
              {(['All','Jashpur','Bilaspur','Raigarh','Hyderabad'] as const).map(t=>(
                <button key={t} className={`tabPill ${active===t ? 'active' : ''}`} onClick={()=>setActive(t)}>{t}</button>
              ))}
            </div>
          </div>

          <div className="collegeGrid" style={{marginTop:14}}>
            {filtered.map((c, idx)=>(
              <div key={c.id} className="college reveal">
                <div className="collegeImg">
                  <img src={c.img} alt={c.name} loading="lazy" />
                  <span className="collegeImgTag">{idx+1} • {c.area} • {c.vacancy}</span>
                </div>
                <div className="collegeBody">
                  <h3>{c.name}</h3>
                  <div className="loc">{c.course} <span>{c.highlight}</span></div>
                  <div className="loc" style={{color:'#A78BFA'}}>{c.city} • {c.approval} • {c.intake} seats</div>
                  <div className="metaRow">
                    <span className="metaPill strong">{c.rating} ★</span>
                    <span className="metaPill">{c.fee}</span>
                    <span className="metaPill">{c.approval}</span>
                  </div>
                  <ul style={{margin:'10px 0 0', paddingLeft:16, fontSize:12.5, color:'#CBD5E1', fontWeight:600, lineHeight:1.6}}>
                    {c.pros.map(p=> <li key={p}>{p}</li>)}
                  </ul>
                  <div style={{marginTop:10, padding:'8px 10px', borderRadius:10, background:'rgba(245,158,11,.1)', border:'1px solid rgba(245,158,11,.18)', fontSize:11, fontWeight:800}}>⚠️ {c.cons}</div>
                </div>
                <div className="collegeFoot">
                  {c.phone!=='—' && c.phone && <a className="btn btnGhost" style={{padding:'8px 12px', fontSize:12}} href={`tel:${c.phone.replace(/\s/g,'')}`}>📞 {c.phone}</a>}
                  <small style={{color:'var(--muted)', fontSize:11, fontWeight:800}}>Verify PCI 2026-27 • fee</small>
                  <span className="fee">{c.fee}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="glass glassPad reveal" style={{marginTop:14, background:'rgba(255,255,255,.04)'}}>
            <h3 style={{fontFamily:'Fraunces,serif', margin:0, fontSize:14}}>Before paying any private B.Pharm fee — get in writing:</h3>
            <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:10}}>
              {['PCI approval 2026-27 PDF','Intake letter','Live seats left','Total 4-yr fee','Hostel + mess','Last 3 yrs placements'].map(x=>(
                <span key={x} className="pill">{x}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PLAN */}
        <section id="plan" className="section">
          <div className="sectionHead reveal"><div><span className="eyebrow">12-month map</span><h2>College + NEET 2027 together</h2><p>College = backup. NEET = primary till May. First year = NEET year with college.</p></div></div>
          <div className="grid2">
            <div className="glass glassPad reveal">
              <span className="pill pillSolid" style={{background:'#fff', color:'#0B1020'}}>Timeline</span>
              <div className="timeline" style={{marginTop:14}}>
                <div className="tl"><div className="tlDot" /><div><time>03 Sept 2026 — Now</time><h4>GGU vacancy live</h4><p>Forensic 13 OBC • Biotech 9 OBC. Pick lane.</p></div></div>
                <div className="tl" style={{background:'rgba(245,158,11,.12)', borderColor:'rgba(245,158,11,.22)'}}><div className="tlDot" style={{background:'#F59E0B', boxShadow:'0 0 0 6px rgba(245,158,11,.2)'}} /><div><time>08 Sept 2026 • 11 AM • Critical</time><h4>GGU Spot Counselling — Report</h4><p>Dept with 10th/12th, OBC/NCL, domicile. CUET not required.</p></div></div>
                <div className="tl"><div className="tlDot" style={{background:'#22D3EE'}}/><div><time>Sept – Dec 2026</time><h4>Syllabus + settle college</h4><p>Daily 3-4 hrs NEET. Overlap: Genetics, Physiology, Biochemistry.</p></div></div>
                <div className="tl"><div className="tlDot" style={{background:'#A78BFA'}}/><div><time>Jan – Mar 2027</time><h4>PYQs + tests</h4><p>Heavy practice. College internals = light revision.</p></div></div>
                <div className="tl"><div className="tlDot" style={{background:'#EC4899'}}/><div><time>May 2027</time><h4>NEET</h4><p>MBBS → switch. Else continue degree → career by 2030.</p></div></div>
              </div>
            </div>

            <div id="action" className="glass glassPad reveal">
              <span className="eyebrow">Do this tomorrow</span>
              <h3 style={{fontFamily:'Fraunces,serif', margin:'6px 0 0', fontSize:16}}>8 Sept checklist — don’t miss</h3>
              <ul className="checklist" style={{marginTop:12}}>
                <li><i>✓</i><span><b>Call GGU Forensic:</b> Confirm 13 OBC still vacant, spot process for non-CUET.</span></li>
                <li><i>✓</i><span><b>Docs:</b> OBC vs OBC-NCL? Income cert? Domicile? Original vs xerox? 1st sem fee.</span></li>
                <li><i>✓</i><span><b>Ask Biotech too:</b> 9 OBC — if she prefers Biotech.</span></li>
                <li><i>✓</i><span><b>Reach by 11 AM</b> with file: 10th, 12th, OBC, photos, ID, CUET score if any.</span></li>
                <li><i>✓</i><span><b>Parallel: Apaar/Tagore/Raigarh</b> if heart = B.Pharm.</span></li>
                <li><i>✓</i><span><b>No token fee</b> before verifying docs — matrix beats “Admissions Open”.</span></li>
              </ul>
              <div className="sep" />
              <div style={{display:'grid', gap:8}}>
                <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(245,158,11,.12)', border:'1px solid rgba(245,158,11,.22)', fontSize:12, fontWeight:800}}>1 • Loves Forensic? → <b>GGU Forensic</b></div>
                <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(139,92,246,.14)', border:'1px solid rgba(139,92,246,.24)', fontSize:12, fontWeight:800}}>2 • Strongest job? → <b>B.Pharm (Apaar→Tagore/Apex)</b></div>
                <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(6,182,214,.12)', border:'1px solid rgba(6,182,214,.22)', fontSize:12, fontWeight:800}}>3 • Max NEET synergy? → <b>GGU Biotech</b></div>
                <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(236,72,153,.12)', border:'1px solid rgba(236,72,153,.22)', fontSize:12, fontWeight:800}}>4 • Wants Hyd? → <b>Anurag → GRCP → CMR</b></div>
              </div>
            </div>
          </div>

          <div className="glass glassPad reveal" style={{marginTop:14, display:'grid', gap:12}}>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <div style={{flex:'1 1 260px', padding:'14px', borderRadius:16, background:'linear-gradient(135deg, rgba(139,92,246,.18), rgba(6,182,214,.12))', border:'1px solid rgba(139,92,246,.2)'}}><b style={{color:'#DDD6FE'}}>If NEET 2027 clears → MBBS</b><p style={{margin:'6px 0 0', color:'#CBD5E1', fontSize:12.5, fontWeight:700}}>2026: Forensic/Biotech/B.Pharm → May 2027 NEET → MBBS. No year wasted.</p></div>
              <div style={{flex:'1 1 260px', padding:'14px', borderRadius:16, background:'linear-gradient(135deg, rgba(16,185,129,.14), rgba(6,182,214,.1))', border:'1px solid rgba(16,185,129,.22)'}}><b style={{color:'#6EE7B7'}}>If not → continue backup</b><p style={{margin:'6px 0 0', color:'#CBD5E1', fontSize:12.5, fontWeight:700}}>2026-30: Finish degree → M.Sc / Pharmacist / QC-QA / Govt. Career at 24-25.</p></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHead reveal"><div><h2>Quick answers</h2><p>Straight from research — no fluff.</p></div></div>
          <div className="faq">
            {[
              {q:'GGU B.Pharm OBC — any vacancy?', a:'No. GGU B.Pharm total = 1 (ST only), OBC = 0. Don’t target GGU for pharmacy. Use Tagore / Apaar / Raigarh or switch to Forensic/Biotech.'},
              {q:'No CUET — can she still get GGU?', a:'Yes. GGU spot notice: appeared / not appeared / not applied — all can join. Non-CUET merit on 12th (3rd pref). Report 8 Sept 11 AM.'},
              {q:'Hyderabad better for B.Pharm?', a:'Stronger ecosystem (Anurag, GRCP, CMR) but adds cost + homesickness. For NEET prep, Jashpur/Bilaspur with family is better. Hyd = Plan B.'},
              {q:'Which is most job-ready after 4 yrs?', a:'B.Pharm — licence + industry. Forensic/Biotech benefit from M.Sc for top roles.'},
            ].map((f,i)=>(
              <div key={i} className="faqItem reveal">
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f.q}<span style={{transform: openFaq===i ? 'rotate(180deg)' : 'none', transition:'.2s'}}>{openFaq===i ? '−' : '+'}</span></button>
                {openFaq===i && <p>{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <div className="glass glassPad reveal" style={{background:'linear-gradient(135deg, rgba(139,92,246,.22), rgba(236,72,153,.16), rgba(6,182,214,.14))', display:'flex', gap:16, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between'}}>
          <div><h3 style={{fontFamily:'Fraunces,serif', margin:0, fontSize:18}}>Save & share with her family</h3><p style={{margin:'6px 0 0', color:'#E2E8F0', fontSize:12, fontWeight:700}}>Add to home screen • Works offline • Print for counselling day</p></div>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            <button className="btn btnPrimary" onClick={()=>window.print()}>🖨️ Print / Save PDF</button>
            <button className="btn btnGhost" onClick={()=>{if(navigator.share) navigator.share({title:'Her Future Guide', url: location.href}); else navigator.clipboard.writeText(location.href).then(()=>alert('Link copied!'))}}>↗ Share</button>
          </div>
        </div>
        <div style={{height:12}} />
      </main>

      <div className="bottomBar"><a href="#colleges">View colleges</a><a href="#action">8 Sept checklist</a></div>

      <footer className="footer"><div className="footerInner"><small>Data: GGU vacancy PDF 03.09.2026 & college sites • Verify 8 Sept morning • Frontend only</small><small style={{display:'flex', gap:8, alignItems:'center'}}><span className="pill">React • Vercel ready</span><a href="#" style={{fontWeight:900, textDecoration:'none'}}>↑ Top</a></small></div></footer>
    </div>
  )
}
