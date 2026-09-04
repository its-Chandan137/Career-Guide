import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <>
      <section className="heroWrap reveal in">
        <video className="heroVideo" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80&auto=format&fit=crop">
          <source src="https://videos.pexels.com/video-files/18069234/18069234-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="heroOverlay" />
        <div className="heroNoise" />
        <div className="heroContent">
          <div className="glass glassPad reveal in">
            <span className="eyebrow">Komal — your personal guide</span>
            <h1 className="h1">Komal, no more drop.<br/><i>Your degree + NEET 2027</i> together — with your career by 2030.</h1>
            <p className="h1sub">You’re 20 now, <b>21 in December</b> • <b>OBC</b> • <b>Jashpur, CG</b> • 2 NEET attempts done • You love <b>Forensic + Pharmacy</b> • Your next NEET is <b>May 2027</b>. You want to stay near Jashpur–Bilaspur. Hyderabad only if <b>you</b> want.</p>

            <div className="miniGrid">
              <div className="mini"><i>🎯</i><div><b>Your goal: MBBS if you crack NEET</b><span>Else your strong backup by 2030</span></div></div>
              <div className="mini"><i>📍</i><div><b>Your home: Jashpur</b><span>Your radius → Bilaspur • Raigarh • Hyd</span></div></div>
              <div className="mini"><i>🧾</i><div><b>Your category: OBC</b><span>Your GGU vacancy matters</span></div></div>
              <div className="mini"><i>⏳</i><div><b>You turn 21 in December</b><span>You want no wasted year</span></div></div>
            </div>

            <div className="stats">
              <div className="stat"><b style={{color:'#A78BFA'}}>13</b><span>OBC seats<br/>Forensic • GGU</span></div>
              <div className="stat"><b style={{color:'#22D3EE'}}>09</b><span>OBC seats<br/>Biotech • GGU</span></div>
              <div className="stat"><b style={{color:'#F87171'}}>00</b><span>OBC seats<br/>B.Pharm • GGU</span></div>
            </div>

            <div className="quote">“Komal, don’t take a random B.Sc just to fill time. If MBBS doesn’t happen at 21–22, you should still hold a degree you actually want.”</div>

            <div className="btnRow">
              <Link to="/colleges" className="btn btnPrimary">See your 10 colleges →</Link>
              <Link to="/vacancies" className="btn btnGhost">Your vacancy table</Link>
              <span className="kbd">PDF 03 Sept 2026</span>
            </div>
          </div>

          <div className="stack">
            <div className="pick reveal in">
              <div className="pickImg">
                <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=900&q=80&auto=format&fit=crop" alt="Forensic lab" loading="lazy" />
                <span className="pickBadge">Your best shot</span>
              </div>
              <div className="pickBody">
                <div className="pill" style={{background:'rgba(245,158,11,.18)', color:'#FDE68A', borderColor:'rgba(245,158,11,.28)'}}>GGU • Bilaspur • 22 seats total</div>
                <h3>🥇 Your B.Sc Forensic Science</h3>
                <p>You already love forensic → <b style={{color:'#FDE68A'}}>13 OBC vacant for you</b> • 4-yr Hons + your M.Sc route</p>
                <ul><li>DNA / Genetics / Toxicology overlaps your NEET</li><li>Central university hostels + labs for you</li><li>Switch to MBBS if you crack, else your forensic career</li></ul>
                <div className="pickCta"><Link to="/colleges" className="btn btnPrimary" style={{padding:'9px 14px'}}>View your GGU →</Link><span className="pill">NEET ⭐⭐⭐⭐ • Career ⭐⭐⭐⭐</span></div>
              </div>
            </div>

            <div className="pick reveal in">
              <div className="pickImg"><img src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=900&q=80&auto=format&fit=crop" alt="Pharmacy" loading="lazy" /></div>
              <div className="pickBody">
                <div className="pill" style={{background:'rgba(139,92,246,.18)', color:'#DDD6FE', borderColor:'rgba(139,92,246,.28)'}}>Private • Jashpur / Bilaspur / Raigarh</div>
                <h3>Your B.Pharm — strongest backup</h3>
                <p>Not “doctor” but <b style={{color:'#DDD6FE'}}>your most job-ready</b> • 4 yrs • Hospital / QC / QA / Regulatory</p>
                <ul><li>Apaar (Jashpur) = you stay at home • Tagore/Apex = Bilaspur/Raigarh</li><li>GGU B.Pharm OBC = 0 — skip GGU for your pharmacy</li></ul>
                <div className="pickCta"><Link to="/colleges" className="btn btnGhost" style={{padding:'9px 14px'}}>Compare your B.Pharm</Link><span className="pill">Career ⭐⭐⭐⭐⭐</span></div>
              </div>
            </div>

            <div className="pick reveal in">
              <div className="pickImg"><img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop" alt="Biotech" loading="lazy" /></div>
              <div className="pickBody">
                <div className="pill" style={{background:'rgba(6,182,214,.18)', color:'#A5F3FC', borderColor:'rgba(6,182,214,.28)'}}>GGU • 17 seats • 9 OBC</div>
                <h3>Your B.Sc Biotechnology</h3>
                <p>Best NEET overlap — <b style={{color:'#A5F3FC'}}>your biology + chemistry daily</b></p>
                <ul><li>Diagnostics / Molecular / Pharma labs</li><li>Your B.Sc → M.Sc → Research</li></ul>
                <div className="pickCta"><Link to="/colleges" className="btn btnGhost" style={{padding:'9px 14px'}}>See details</Link><span className="pill">NEET ⭐⭐⭐⭐⭐</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="myth">
        <div className="mythCard bad reveal">
          <i>🚫</i>
          <div>
            <b>Komal, B.Pharm / Pharm.D ≠ MBBS Doctor</b>
            <p>PCI: B.Pharm is 4-yr professional pharmacy degree, Pharm.D is 6-yr doctoral pharmacy programme. You’ll become a <b style={{color:'#FCA5A5'}}>pharmacist / clinical pharmacy pro</b> — not a physician. Don’t pick pharmacy thinking it’s your shortcut to MBBS.</p>
            <div style={{marginTop:10, padding:'10px 12px', borderRadius:12, background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.18)', fontSize:12, fontWeight:800}}>⚠️ If someone told you “pharmacy = doctor”, that’s misleading. Pick pharmacy for <u>your own</u> career, not as your MBBS shortcut.</div>
          </div>
        </div>
        <div className="mythCard good reveal">
          <i>✅</i>
          <div>
            <b>What your B.Pharm actually gives you</b>
            <p>Hospital pharmacist, QC/QA, Regulatory, Pharmacovigilance, Clinical research, Drug inspector pathway, Medical sales, R&amp;D, M.Pharm / MBA. A broad industry — not just your medical shop.</p>
            <div className="chipRow" style={{marginTop:10}}><span className="chipMini" style={{background:'rgba(16,185,129,.14)', borderColor:'rgba(16,185,129,.24)'}}>QC • QA</span><span className="chipMini" style={{background:'rgba(16,185,129,.14)', borderColor:'rgba(16,185,129,.24)'}}>Hospital</span><span className="chipMini" style={{background:'rgba(16,185,129,.14)', borderColor:'rgba(16,185,129,.24)'}}>Research</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="glass glassPad reveal" style={{background:'linear-gradient(135deg, rgba(139,92,246,.14), rgba(6,182,214,.10))', display:'flex', gap:12, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between'}}>
          <div><h3 style={{fontFamily:'Fraunces,serif', margin:0, fontSize:18}}>Continue your journey, Komal</h3><p style={{margin:'6px 0 0', color:'#CBD5E1', fontSize:12, fontWeight:700}}>Each section is now a focused page — faster on phone, easier to share.</p></div>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            <Link to="/picks" className="btn btnPrimary">Your top picks →</Link>
            <Link to="/vacancies" className="btn btnGhost">Vacancies</Link>
            <Link to="/plan" className="btn btnGhost">Your plan</Link>
          </div>
        </div>
      </section>
    </>
  )
}
