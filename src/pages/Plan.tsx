import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Plan(){
 const [openFaq, setOpenFaq] = useState<number|null>(0)
 return (
 <>
 <section className="section">
 <div className="sectionHead reveal in"><div><span className="eyebrow">Your 12-month map</span><h2>Your college + your NEET 2027</h2><p>College is your backup. NEET is your primary till May. Treat first year as your NEET year with college.</p></div></div>
 <div className="grid2">
 <div className="glass glassPad reveal in">
 <span className="pill pillSolid" style={{background:'#fff', color:'#0B1020'}}>Your timeline</span>
 <div className="timeline" style={{marginTop:14}}>
 <div className="tl"><div className="tlDot" /><div><time>03 Sept 2026 Now</time><h4>Your GGU vacancy live</h4><p>Forensic 13 OBC • Biotech 9 OBC for you. Pick your lane.</p></div></div>
 <div className="tl" style={{background:'rgba(245,158,11,.12)', borderColor:'rgba(245,158,11,.22)'}}><div className="tlDot" style={{background:'#F59E0B', boxShadow:'0 0 0 6px rgba(245,158,11,.2)'}} /><div><time>08 Sept 2026 • 11 AM • Critical for you</time><h4>Your Spot Counselling Report</h4><p>Dept with your 10th/12th, OBC/NCL, domicile. CUET not required.</p></div></div>
 <div className="tl"><div className="tlDot" style={{background:'#22D3EE'}}/><div><time>Sept Dec 2026</time><h4>Your syllabus + settle college</h4><p>Daily 3-4 hrs your NEET. Use your overlap: Genetics, Physiology, Biochemistry.</p></div></div>
 <div className="tl"><div className="tlDot" style={{background:'#A78BFA'}}/><div><time>Jan Mar 2027</time><h4>Your PYQs + tests</h4><p>Your heavy practice. College internals = your light revision.</p></div></div>
 <div className="tl"><div className="tlDot" style={{background:'#EC4899'}}/><div><time>May 2027</time><h4>Your NEET</h4><p>You → MBBS if you clear. Else you continue your degree → career by 2030.</p></div></div>
 </div>
 </div>

 <div id="action" className="glass glassPad reveal in">
 <span className="eyebrow">Your tomorrow</span>
 <h3 style={{fontFamily:'Fraunces,serif', margin:'6px 0 0', fontSize:16}}>Your 8 Sept checklist don’t miss</h3>
 <ul className="checklist" style={{marginTop:12}}>
 <li><i>✓</i><span><b>Call your GGU Forensic:</b> Confirm 13 OBC still for you, spot process for non-CUET.</span></li>
 <li><i>✓</i><span><b>Your docs:</b> OBC vs OBC-NCL? Income cert? Domicile? Original vs xerox? Your 1st sem fee.</span></li>
 <li><i>✓</i><span><b>Ask your Biotech too:</b> 9 OBC if you prefer Biotech.</span></li>
 <li><i>✓</i><span><b>Reach by 11 AM</b> with your file: 10th, 12th, OBC, photos, ID, CUET if any.</span></li>
 <li><i>✓</i><span><b>Parallel: call Apaar/Tagore/Raigarh</b> if your heart = B.Pharm.</span></li>
 <li><i>✓</i><span><b>No token fee</b> before you verify docs matrix beats “Admissions Open”.</span></li>
 </ul>
 <div className="sep" />
 <div style={{display:'grid', gap:8}}>
 <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(245,158,11,.12)', border:'1px solid rgba(245,158,11,.22)', fontSize:12, fontWeight:800}}>1 • You love Forensic? → <b>Your GGU Forensic</b></div>
 <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(139,92,246,.14)', border:'1px solid rgba(139,92,246,.24)', fontSize:12, fontWeight:800}}>2 • You want strongest job? → <b>Your B.Pharm (Apaar→Tagore/Apex)</b></div>
 <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(6,182,214,.12)', border:'1px solid rgba(6,182,214,.22)', fontSize:12, fontWeight:800}}>3 • You want NEET synergy? → <b>Your GGU Biotech</b></div>
 <div style={{padding:'10px 12px', borderRadius:12, background:'rgba(236,72,153,.12)', border:'1px solid rgba(236,72,153,.22)', fontSize:12, fontWeight:800}}>4 • You want Hyd? → <b>Your Anurag → GRCP → CMR</b></div>
 </div>
 </div>
 </div>

 <div className="glass glassPad reveal" style={{marginTop:14, display:'grid', gap:12}}>
 <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
 <div style={{flex:'1 1 260px', padding:'14px', borderRadius:16, background:'linear-gradient(135deg, rgba(139,92,246,.18), rgba(6,182,214,.12))', border:'1px solid rgba(139,92,246,.2)'}}><b style={{color:'#DDD6FE'}}>If you clear NEET 2027 → your MBBS</b><p style={{margin:'6px 0 0', color:'#CBD5E1', fontSize:12.5, fontWeight:700}}>2026: Forensic/Biotech/B.Pharm → May 2027 NEET → Your MBBS. No year wasted.</p></div>
 <div style={{flex:'1 1 260px', padding:'14px', borderRadius:16, background:'linear-gradient(135deg, rgba(16,185,129,.14), rgba(6,182,214,.1))', border:'1px solid rgba(16,185,129,.22)'}}><b style={{color:'#6EE7B7'}}>If not → your backup continues</b><p style={{margin:'6px 0 0', color:'#CBD5E1', fontSize:12.5, fontWeight:700}}>2026-30: You finish your degree → M.Sc / Pharmacist / QC-QA / Govt. Your career at 24-25.</p></div>
 </div>
 </div>
 </section>

 <section className="section">
 <div className="sectionHead reveal in"><div><h2>Komal, your quick answers</h2><p>Straight from research no fluff, just for you.</p></div></div>
 <div className="faq">
 {[
 {q:'Komal, is there GGU B.Pharm OBC for you?', a:'No. GGU B.Pharm total = 1 (ST only), OBC = 0 for you. Don’t target GGU for your pharmacy. Use Tagore / Apaar / Raigarh or switch to your Forensic/Biotech.'},
 {q:'You didn’t give CUET can you still get GGU?', a:'Yes, Komal. GGU spot notice: appeared / not appeared / not applied you can join. Non-CUET merit on your 12th (3rd pref). Report 8 Sept 11 AM.'},
 {q:'Is Hyderabad better for your B.Pharm?', a:'Stronger ecosystem (Anurag, GRCP, CMR) but adds your cost + homesickness. For your NEET prep, Jashpur/Bilaspur with family is better. Hyd = your Plan B.'},
 {q:'Which gives you a job fastest after 4 yrs?', a:'Your B.Pharm licence + industry. Your Forensic/Biotech benefit from M.Sc for top roles.'},
 ].map((f,i)=>(
 <div key={i} className="faqItem reveal in">
 <button onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f.q}<span style={{transform: openFaq===i ? 'rotate(180deg)' : 'none', transition:'.2s'}}>{openFaq===i ? '−' : '+'}</span></button>
 {openFaq===i && <p>{f.a}</p>}
 </div>
 ))}
 </div>
 </section>

 <div className="glass glassPad reveal" style={{background:'linear-gradient(135deg, rgba(139,92,246,.22), rgba(236,72,153,.16), rgba(6,182,214,.14))', display:'flex', gap:16, flexWrap:'wrap', alignItems:'center', justifyContent:'space-between'}}>
 <div><h3 style={{fontFamily:'Fraunces,serif', margin:0, fontSize:18}}>Komal, save & share with your family</h3><p style={{margin:'6px 0 0', color:'#E2E8F0', fontSize:12, fontWeight:700}}>Add to home screen • Works offline • Print for your counselling day</p></div>
 <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
 <button className="btn btnPrimary" onClick={()=>window.print()}>🖨️ Print / Save PDF</button>
 <Link to="/colleges" className="btn btnGhost">Your colleges →</Link>
 </div>
 </div>
 </>
 )
}
