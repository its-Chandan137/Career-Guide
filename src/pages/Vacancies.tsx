import { Link } from 'react-router-dom'
import { vacancies } from '../data'
import { useLang } from '../i18n'

export default function Vacancies(){
  const { t } = useLang()
  return (
    <section className="section">
      <div className="sectionHead reveal in">
        <div><span className="eyebrow">{t('vacanciesEyebrow')}</span><h2>{t('vacanciesTitle')}</h2><p>{t('vacanciesSub')}</p></div>
        <span className="kbd">No CUET? You are still eligible → 12th marks</span>
      </div>

      <div className="glassTable reveal in">
        <div className="glassPad" style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap', alignItems:'center'}}>
          <div><h3 style={{fontFamily:'Fraunces,serif', margin:'6px 0 0', fontSize:18}}>{t('vacanciesCardTitle')}</h3><p style={{margin:'6px 0 0', color:'var(--muted)', fontSize:12.5, fontWeight:700}}>{t('vacanciesCardSub')}</p></div>
          <Link to="/plan" className="btn btnPrimary">{t('btnChecklist')}</Link>
        </div>
        <div className="tableWrap">
          <table>
            <thead><tr><th>{t('tableCourse')}</th><th>{t('tableIntake')}</th><th>{t('tableTotal')}</th><th>{t('tableOBC')}</th><th>{t('tableStatus')}</th></tr></thead>
            <tbody>
              {vacancies.map(v=>(
                <tr key={v.course} className={v.obc>=9 ? 'rowHi' : ''}>
                  <td>{v.course} {v.obc===13 && <span className="badge badgeOk" style={{marginLeft:8, fontSize:10}}>{t('forYou')}</span>}</td>
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
          <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.1)', fontSize:12.5, fontWeight:800}}>📢 <b>{t('noCuetTitle')}</b> {t('noCuetDesc')}</div>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}><a className="btn btnPrimary" href="https://ggu.ac.in" target="_blank" rel="noreferrer">{t('openGgu')}</a><span style={{alignSelf:'center', color:'var(--muted)', fontSize:11, fontWeight:800}}>{t('recheck')}</span></div>
        </div>
      </div>

      <div className="grid2" style={{marginTop:14}}>
        <div className="glass glassPad reveal in">
          <span className="eyebrow">{t('compareEyebrow')}</span>
          <h3 style={{fontFamily:'Fraunces,serif', margin:'6px 0 0', fontSize:16}}>{t('compareTitle')}</h3>
          <div className="compareWrap" style={{marginTop:12}}><div className="tableWrap"><table style={{minWidth:560}}>
            <thead><tr><th></th><th>Forensic (GGU)</th><th>B.Pharm</th><th>Biotech (GGU)</th></tr></thead>
            <tbody>
              <tr><td>Duration</td><td>4 yrs Hons</td><td>4 yrs</td><td>3 to 4 yrs</td></tr>
              <tr><td>NEET</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
              <tr><td>Immediate job</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
              <tr><td>OBC now</td><td><span className="badge badgeOk">13 {t('forYou')}</span></td><td><span className="badge badgeNo">0 at GGU</span></td><td><span className="badge badgeOk">9 {t('forYou')}</span></td></tr>
            </tbody>
          </table></div></div>
        </div>
        <div className="glass glassPad reveal in">
          <span className="eyebrow">{t('afterTitle')}</span>
          <h3 style={{fontFamily:'Fraunces,serif', margin:'6px 0 0', fontSize:16}}>{t('afterTitle')}</h3>
          <div style={{display:'grid', gap:8, marginTop:12}}>
            <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(245,158,11,.12)', border:'1px solid rgba(245,158,11,.22)', fontSize:12, fontWeight:800}}>🔍 <b>Forensic:</b> Lab analyst • CSI support • DNA/toxicology • Govt FSL • M.Sc</div>
            <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(139,92,246,.14)', border:'1px solid rgba(139,92,246,.24)', fontSize:12, fontWeight:800}}>💊 <b>B.Pharm:</b> Hospital pharmacist • QC/QA • Regulatory • Research • Drug Inspector</div>
            <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(6,182,214,.12)', border:'1px solid rgba(6,182,214,.24)', fontSize:12, fontWeight:800}}>🧬 <b>Biotech:</b> Molecular • Diagnostics • Pharma R&D • QC • M.Sc → Research</div>
          </div>
        </div>
      </div>

      <div className="glass glassPad reveal" style={{marginTop:14, display:'flex', gap:12, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between'}}>
        <div><h3 style={{fontFamily:'Fraunces,serif', margin:0, fontSize:16}}>Next: see your best fits</h3><p style={{margin:'6px 0 0', color:'#CBD5E1', fontSize:12, fontWeight:700}}>{t('picksSub')}</p></div>
        <Link to="/picks" className="btn btnPrimary">{t('yourTopPicks')}</Link>
      </div>
    </section>
  )
}
