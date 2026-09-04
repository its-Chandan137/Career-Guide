export type College = {
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
  eligibility:string
  duration:string
  distance:string
  careers:string[]
  neetFit:string
}

export const vacancies = [
  { course:'B.Sc Forensic Science', total:22, obc:13, status:'Excellent', intake:60 },
  { course:'B.Sc Biotechnology', total:17, obc:9, status:'Very Good', intake:75 },
  { course:'B.Sc Botany', total:38, obc:17, status:'Very Good', intake:0 },
  { course:'B.Sc Chemistry', total:22, obc:13, status:'Excellent', intake:0 },
  { course:'B.Sc Zoology', total:16, obc:2, status:'Low OBC', intake:0 },
  { course:'D.Pharm', total:1, obc:1, status:'1 seat', intake:0 },
  { course:'B.Pharm (GGU)', total:1, obc:0, status:'No OBC', intake:0 },
  { course:'B.Sc Anthropology', total:35, obc:3, status:'—', intake:0 },
]

export const colleges:College[] = [
  { id:'ggu-forensic', name:'Guru Ghasidas Vishwavidyalaya', course:'B.Sc Forensic Science (Hons) — 4 yrs', city:'Bilaspur', area:'Bilaspur', fee:'~₹20–30k/yr', intake:'60 + 30 SFS', approval:'Central University', vacancy:'13 OBC vacant', rating:'9.0', img:'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80&auto=format&fit=crop', highlight:'TOP PICK — Spot 8 Sept', eligibility:'10+2 PCB — 50% (45% OBC)', duration:'4 years Hons', distance:'~155 km from Jashpur • 3.5h', pros:['13 OBC seats live now','Central university • hostels • labs','M.Sc Forensic in same campus'], cons:'M.Sc helps for top FSL jobs', phone:'07752 260353', careers:['Forensic Lab Analyst','Crime Scene support','DNA / Toxicology labs','Govt FSL via recruitment','Research + M.Sc Forensic'], neetFit:'DNA, genetics, toxicology, biochemistry — daily revision for NEET'},
  { id:'ggu-biotech', name:'Guru Ghasidas Vishwavidyalaya', course:'B.Sc Biotechnology — 3/4 yrs', city:'Bilaspur', area:'Bilaspur', fee:'~₹20–30k/yr', intake:'75', approval:'Central University', vacancy:'9 OBC vacant', rating:'8.8', img:'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop', highlight:'Best NEET overlap', eligibility:'10+2 PCB — 50%', duration:'3–4 years', distance:'~155 km from Jashpur', pros:['9 OBC seats vacant','Biology + Chemistry every day','DBT-supported PG pathway'], cons:'Needs M.Sc for best roles', phone:'07752 260353', careers:['Biotech lab','Molecular diagnostics','Pharma R&D / QC','Clinical research','M.Sc → Research'], neetFit:'Molecular biology, genetics, cell biology — strongest NEET synergy' },
  { id:'apaar', name:'Apaar College of Pharmacy', course:'B.Pharm — 4 yrs', city:'Jashpur', area:'Jashpur', fee:'Ask college', intake:'60–100', approval:'PCI • CSVTU', vacancy:'Admissions open', rating:'7.2', img:'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=900&q=80&auto=format&fit=crop', highlight:'Closest to home', eligibility:'10+2 PCB/PCM — 45% OBC', duration:'4 years', distance:'In Jashpur — at home', pros:['Study from home — no hostel','Full pharmacist licence','Family support for NEET 2027'], cons:'Verify PCI 2026-27 before fee', phone:'092387 27088', careers:['Hospital / Community Pharmacist','QC / QA','Regulatory / Pharmacovigilance','Clinical research','Drug Inspector pathway*'], neetFit:'Pharmacology, physiology, chemistry — good but labs are heavy'},
  { id:'tagore', name:'Tagore Institute of Pharmacy & Research', course:'B.Pharm & D.Pharm — 4 yrs', city:'Sakri, Bilaspur', area:'Bilaspur', fee:'~₹2.7L total', intake:'100', approval:'PCI • CSVTU', vacancy:'Registrations open', rating:'8.0', img:'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80&auto=format&fit=crop', highlight:'Best Bilaspur B.Pharm', eligibility:'10+2 PCB/PCM — 40% OBC', duration:'4 years', distance:'~160 km from Jashpur • city campus', pros:['PCI • OBC 40% criteria','Bilaspur city access','Admissions live now'], cons:'No public vacancy matrix', phone:'092434 93618', careers:['Hospital pharmacist','QC/QA','Production','Regulatory','M.Pharm'], neetFit:'Pharmaceutical chemistry overlaps chemistry, but practicals take time'},
  { id:'lcit', name:'LCIT School of Pharmacy', course:'B.Pharm — 4 yrs', city:'Bodri, Bilaspur', area:'Bilaspur', fee:'~₹2.68L total', intake:'—', approval:'PCI • CSVTU', vacancy:'Admissions open', rating:'7.6', img:'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80&auto=format&fit=crop', highlight:'Bilaspur alt', eligibility:'10+2 PCB/PCM — 45%', duration:'4 years', distance:'Bilaspur • Bodri', pros:['Established group','Central location'], cons:'Less transparent info', phone:'095222 20131', careers:['Pharmacist','QC/QA','Sales & Marketing','Production'], neetFit:'Similar to Tagore — manageable with 3-4 hrs NEET/day'},
  { id:'apex', name:'Apex College of Pharmacy', course:'B.Pharm — 4 yrs', city:'Raigarh', area:'Raigarh', fee:'₹80k/yr • ₹3.2L', intake:'100', approval:'PCI • AICTE', vacancy:'Mgmt seats open', rating:'7.8', img:'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80&auto=format&fit=crop', highlight:'Well documented', eligibility:'10+2 PCB/PCM — 45% reserved', duration:'4 years', distance:'~180 km from Jashpur', pros:['100 seats • fee clear','PCI/AICTE/CSVTU','Scholarships OBC'], cons:'Costlier than Raigarh College', phone:'—', careers:['Pharmacist','QC/QA','Manufacturing','Regulatory'], neetFit:'Good — but heavier schedule than B.Sc'},
  { id:'raigarh', name:'Raigarh College of Pharmacy', course:'B.Pharm — 4 yrs', city:'Raigarh', area:'Raigarh', fee:'₹36k/sem • ₹2.88L', intake:'60', approval:'CSVTU • PCI', vacancy:'Till 30 Sept 2026', rating:'7.9', img:'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=900&q=80&auto=format&fit=crop', highlight:'Lowest fee', eligibility:'10+2 PCB/PCM — merit based', duration:'4 years', distance:'~180 km from Jashpur', pros:['Lowest cost in region','Deadline explicit','Govt concessions'], cons:'95% placement — verify', phone:'—', careers:['Pharmacist','Production','QC/QA','Hospital'], neetFit:'Lowest fee = less pressure, good for NEET side-prep'},
  { id:'anurag', name:'Anurag University', course:'B.Pharm — 4 yrs', city:'Hyderabad', area:'Hyderabad', fee:'₹85k/yr • ₹3.4L', intake:'100', approval:'NBA • NAAC', vacancy:'EAPCET 70/30', rating:'9.1', img:'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop', highlight:'Hyderabad #1', eligibility:'10+2 PCB/PCM + EAPCET', duration:'4 years', distance:'Hyderabad • hostel needed', pros:['NBA • 16 labs','MedPlus 2026 drive','NIRF research ecosystem'], cons:'Hostel + new city', phone:'—', careers:['Clinical pharmacist','R&D','QC/QA','Regulatory','M.Pharm/Pharm.D'], neetFit:'Modern labs, but new-city adjustment eats NEET time'},
  { id:'grcp', name:'Gokaraju Rangaraju College', course:'B.Pharm — 4 yrs', city:'Hyderabad', area:'Hyderabad', fee:'₹85k/yr', intake:'100', approval:'Osmania • PCI', vacancy:'70/30 seats', rating:'8.9', img:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&auto=format&fit=crop', highlight:'Pharma specialist', eligibility:'EAPCET convener / Mgmt', duration:'4 years', distance:'Hyderabad', pros:['Osmania affiliation','Pure pharmacy focus','DI analyst pathway'], cons:'Hyd living cost', phone:'—', careers:['Production','Pharma analysis','Drug Inspector pathway*','Hospital pharmacist'], neetFit:'Specialized — choose only if you want Hyderabad'},
  { id:'cmr', name:'CMR College of Pharmacy', course:'B.Pharm / Pharm.D', city:'Hyderabad', area:'Hyderabad', fee:'₹90k/yr', intake:'100', approval:'PCI • JNTUH', vacancy:'Convener open', rating:'8.6', img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop', highlight:'Dr Reddy’s 25 placed', eligibility:'EAPCET + Mgmt', duration:'4 / 6 yrs', distance:'Hyderabad', pros:['Feb 2026 Dr Reddy’s 25 placed','NIRF 101-125','Full ecosystem'], cons:'Competitive', phone:'—', careers:['Pharma industry','Clinical research','Pharmacovigilance','Hospital'], neetFit:'Strong, but same — Hyd is Plan B'},
]
