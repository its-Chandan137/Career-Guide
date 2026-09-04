import { Link } from 'react-router-dom'

export default function Picks(){
  return (
    <section className="section">
      <div className="sectionHead reveal in"><div><span className="eyebrow">Ranked for you, Komal</span><h2>Your best fits — in one glance</h2><p>Weighed for your NEET compatibility + 5-6yr career + OBC vacancy now + distance from your home in Jashpur. Tap a college page.</p></div><span className="kbd" style={{alignSelf:'center'}}>Real vacancy, not ads</span></div>
      <div className="bento">
        <div className="bentoCard reveal in" style={{gridRow:'span 1'}}>
          <div className="bentoImg"><img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=900&q=80&auto=format&fit=crop" alt="Forensic" loading="lazy" /><span className="rankBadge" style={{background:'linear-gradient(135deg,#F59E0B,#EF4444)'}}>1</span></div>
          <div className="bentoBody">
            <div className="chipRow"><span className="chipMini" style={{background:'#fff', color:'#0B1020'}}>NEET ⭐⭐⭐⭐</span><span className="chipMini">Career ⭐⭐⭐⭐</span><span className="chipMini" style={{background:'rgba(245,158,11,.18)', color:'#FDE68A'}}>13 OBC for you</span></div>
            <h3 style={{fontFamily:'Fraunces,serif', margin:'10px 0 4px', fontSize:18}}>Your B.Sc Forensic Science — GGU Bilaspur</h3>
            <p style={{margin:0, color:'var(--muted)', fontSize:12.5, fontWeight:700}}>Your interest + live vacancy + your central-university labs. DNA / Toxicology keeps your NEET revision alive.</p>
            <div className="divider" />
            <ul style={{margin:0, paddingLeft:16, fontSize:12.5, color:'#CBD5E1', fontWeight:600, lineHeight:1.6}}>
              <li>Spot counselling 8 Sept — actionable for you now</li><li>Forensic dept + your M.Sc in same campus</li><li>Hostel support vs shifting to Hyderabad</li>
            </ul>
          </div>
        </div>
        <div style={{display:'grid', gap:14}}>
          <div className="bentoCard reveal in">
            <div className="bentoImg" style={{height:160}}><img src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=900&q=80&auto=format&fit=crop" alt="BPharm" loading="lazy" /><span className="rankBadge" style={{background:'linear-gradient(135deg,#94A3B8,#475569)'}}>2</span></div>
            <div className="bentoBody"><h3 style={{fontFamily:'Fraunces,serif', margin:'0', fontSize:15}}>Your B.Pharm — Jashpur / Bilaspur / Raigarh</h3><div className="chipRow"><span className="chipMini" style={{background:'#10B981', color:'#fff', borderColor:'#10B981'}}>Career ⭐⭐⭐⭐⭐</span><span className="chipMini">NEET ⭐⭐⭐⭐</span></div><p style={{margin:'8px 0 0', color:'var(--muted)', fontSize:12, fontWeight:700}}>Your strongest immediate licence — Apaar at home or Tagore/Apex. Skip GGU (0 OBC).</p></div>
          </div>
          <div className="bentoCard reveal in">
            <div className="bentoImg" style={{height:160}}><img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop" alt="Biotech" loading="lazy" /><span className="rankBadge" style={{background:'linear-gradient(135deg,#06B6D4,#8B5CF6)'}}>3</span></div>
            <div className="bentoBody"><h3 style={{fontFamily:'Fraunces,serif', margin:'0', fontSize:15}}>Your B.Sc Biotechnology — GGU</h3><div className="chipRow"><span className="chipMini" style={{background:'#06B6D4', color:'#fff', borderColor:'#06B6D4'}}>NEET ⭐⭐⭐⭐⭐</span><span className="chipMini">9 OBC for you</span></div><p style={{margin:'8px 0 0', color:'var(--muted)', fontSize:12, fontWeight:700}}>Best NEET synergy — your biology &amp; chemistry every day. Your B.Sc → M.Sc.</p></div>
          </div>
        </div>
      </div>
      <div className="glass glassPad reveal" style={{marginTop:14, display:'flex', gap:12, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between'}}>
        <div><h3 style={{fontFamily:'Fraunces,serif', margin:0, fontSize:16}}>See where you’d study</h3><p style={{margin:'6px 0 0', color:'#CBD5E1', fontSize:12, fontWeight:700}}>10 colleges with your distance, fee, vacancy — tap for details.</p></div>
        <Link to="/colleges" className="btn btnPrimary">Your colleges →</Link>
      </div>
    </section>
  )
}
