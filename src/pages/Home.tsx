import { Link } from 'react-router-dom'
import { useLang } from '../i18n'

export default function Home(){
  const { t } = useLang()
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
  <span className="eyebrow">{t('homeEyebrow')}</span>
  <h1 className="h1">{t('homeTitle1')}<br/><i>{t('homeTitle2')}</i> {t('homeTitle3')}</h1>
  <p className="h1sub">{t('homeSub')}</p>

  <div className="miniGrid">
  <div className="mini"><i>🎯</i><div><b>{t('miniGoalTitle')}</b><span>{t('miniGoalSub')}</span></div></div>
  <div className="mini"><i>📍</i><div><b>{t('miniHomeTitle')}</b><span>{t('miniHomeSub')}</span></div></div>
  <div className="mini"><i>🧾</i><div><b>{t('miniCatTitle')}</b><span>{t('miniCatSub')}</span></div></div>
  <div className="mini"><i>⏳</i><div><b>{t('miniAgeTitle')}</b><span>{t('miniAgeSub')}</span></div></div>
  </div>

  <div className="stats">
  <div className="stat"><b style={{color:'#A78BFA'}}>13</b><span>OBC seats<br/>{t('statForensic')}</span></div>
  <div className="stat"><b style={{color:'#22D3EE'}}>09</b><span>OBC seats<br/>{t('statBiotech')}</span></div>
  <div className="stat"><b style={{color:'#F87171'}}>00</b><span>OBC seats<br/>{t('statBpharm')}</span></div>
  </div>

  <div className="quote">{t('quote')}</div>

  <div className="btnRow">
  <Link to="/colleges" className="btn btnPrimary">{t('btnColleges')}</Link>
  <Link to="/vacancies" className="btn btnGhost">{t('btnVacancy')}</Link>
  <span className="kbd">PDF 03 Sept 2026</span>
  </div>
  </div>

  <div className="stack">
  <div className="pick reveal in">
  <div className="pickImg">
  <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=900&q=80&auto=format&fit=crop" alt="Forensic lab" loading="lazy" />
  <span className="pickBadge">{t('pickBestShot')}</span>
  </div>
  <div className="pickBody">
  <div className="pill" style={{background:'rgba(245,158,11,.18)', color:'#FDE68A', borderColor:'rgba(245,158,11,.28)'}}>GGU • Bilaspur • 22 seats total</div>
  <h3>🥇 {t('pickForensicTitle')}</h3>
  <p>{t('pickForensicDesc')}</p>
  <ul><li>{t('pickForensicLi1')}</li><li>{t('pickForensicLi2')}</li><li>{t('pickForensicLi3')}</li></ul>
  <div className="pickCta"><Link to="/colleges" className="btn btnPrimary" style={{padding:'9px 14px'}}>{t('btnColleges')}</Link><span className="pill">NEET ⭐⭐⭐⭐ • Career ⭐⭐⭐⭐</span></div>
  </div>
  </div>

  <div className="pick reveal in">
  <div className="pickImg"><img src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=900&q=80&auto=format&fit=crop" alt="Pharmacy" loading="lazy" /></div>
  <div className="pickBody">
  <div className="pill" style={{background:'rgba(139,92,246,.18)', color:'#DDD6FE', borderColor:'rgba(139,92,246,.28)'}}>Private • Jashpur / Bilaspur / Raigarh</div>
  <h3>{t('pickBpharmTitle')}</h3>
  <p>{t('pickBpharmDesc')}</p>
  <ul><li>{t('pickBpharmLi1')}</li><li>{t('pickBpharmLi2')}</li></ul>
  <div className="pickCta"><Link to="/colleges" className="btn btnGhost" style={{padding:'9px 14px'}}>{t('btnColleges')}</Link><span className="pill">Career ⭐⭐⭐⭐⭐</span></div>
  </div>
  </div>

  <div className="pick reveal in">
  <div className="pickImg"><img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop" alt="Biotech" loading="lazy" /></div>
  <div className="pickBody">
  <div className="pill" style={{background:'rgba(6,182,214,.18)', color:'#A5F3FC', borderColor:'rgba(6,182,214,.28)'}}>GGU • 17 seats • 9 OBC</div>
  <h3>{t('pickBiotechTitle')}</h3>
  <p>{t('pickBiotechDesc')}</p>
  <ul><li>Diagnostics / Molecular / Pharma labs</li><li>Your B.Sc → M.Sc → Research</li></ul>
  <div className="pickCta"><Link to="/colleges" className="btn btnGhost" style={{padding:'9px 14px'}}>{t('btnColleges')}</Link><span className="pill">NEET ⭐⭐⭐⭐⭐</span></div>
  </div>
  </div>
  </div>
  </div>
  </section>

  <section className="myth">
  <div className="mythCard bad reveal">
  <i>🚫</i>
  <div>
  <b>{t('mythBadTitle')}</b>
  <p>{t('mythBadP')}</p>
  <div style={{marginTop:10, padding:'10px 12px', borderRadius:12, background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.18)', fontSize:12, fontWeight:800}}>⚠️ {t('mythBadNote')}</div>
  </div>
  </div>
  <div className="mythCard good reveal">
  <i>✅</i>
  <div>
  <b>{t('mythGoodTitle')}</b>
  <p>{t('mythGoodP')}</p>
  <div className="chipRow" style={{marginTop:10}}><span className="chipMini" style={{background:'rgba(16,185,129,.14)', borderColor:'rgba(16,185,129,.24)'}}>QC • QA</span><span className="chipMini" style={{background:'rgba(16,185,129,.14)', borderColor:'rgba(16,185,129,.24)'}}>Hospital</span><span className="chipMini" style={{background:'rgba(16,185,129,.14)', borderColor:'rgba(16,185,129,.24)'}}>Research</span></div>
  </div>
  </div>
  </section>

  <section className="section">
  <div className="glass glassPad reveal" style={{background:'linear-gradient(135deg, rgba(139,92,246,.14), rgba(6,182,214,.10))', display:'flex', gap:12, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between'}}>
  <div><h3 style={{fontFamily:'Fraunces,serif', margin:0, fontSize:18}}>{t('continueTitle')}</h3><p style={{margin:'6px 0 0', color:'#CBD5E1', fontSize:12, fontWeight:700}}>{t('continueSub')}</p></div>
  <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
  <Link to="/picks" className="btn btnPrimary">{t('yourTopPicks')}</Link>
  <Link to="/vacancies" className="btn btnGhost">{t('navVacancies')}</Link>
  <Link to="/plan" className="btn btnGhost">{t('navPlan')}</Link>
  </div>
  </div>
  </section>
  </>
  )
}
