import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const products = [
  {id:'hotel-mapping', label:'Hotel Mapping', kicker:'Canonical hotel identity', title:'One hotel. One identity.', text:'AI-driven de-duplication of hotels from multiple suppliers, resolving noisy inventory into a single canonical property.', bullets:['AI agents for mapping','Map hotels with missing information','New data in less than 24 hours','Fully automated solution','99.9% mapping accuracy','Real-time updates']},
  {id:'room-mapping', label:'Room Mapping', kicker:'Room-level intelligence', title:'The room is where the booking happens.', text:'Standardize room-level data so every supplier describes the same inventory in a consistent, comparable way.', bullets:['Room type normalization','Attribute standardization','Cross-supplier consistency','Category classification','Signature matching','Automated processing']},
  {id:'website-grade-content', label:'Website Grade Content', kicker:'Authoritative property content', title:'Content your booking experience can trust.', text:'Hotel and room content as presented by the property, structured for modern booking experiences and AI systems.', bullets:['Professional property descriptions','High-resolution images','SEO-optimized content','Multi-language support','Regular content updates','Quality assurance checks']}
];

const resources = [
  ['Website Grade Content: FAQs','Website Grade Content','6 min read','/blog/website-grade-content-faq'],
  ['Why Room Mapping Can Increase Your Bookings by Up to 35%','Room Mapping','5 min read','/blog/why-room-mapping-can-increase-bookings'],
  ['Your AI Stack Has a Data Problem. Here’s What It’s Costing You.','AI in Travel','7 min read','/blog/data-problem-in-booking-stack'],
  ['Why Every Hotel Booking Portal Needs a Standardized Hotel Data Repository','Hotel Data','7 min read','/blog/why-hotel-booking-portal-needs-standardized-data-repository'],
  ['Why Hotel Mapping is a Game Changer','Industry Insights','8 min read','/blog/why-hotel-mapping-is-a-game-changer'],
  ['AI-Driven Hotel Mapping: How It Works','Technical','10 min read','/blog/ai-driven-hotel-mapping'],
  ['The Data Infrastructure Beneath AI Travel','Travel Technology','5 min read','/blog/data-infrastructure-beneath-ai-travel'],
  ['Travesla Partnership: Scaling India’s Travel Ecosystem','Partnership','5 min read','/blog/travesla-partnership']
];

const faqs = [
 ['What is Hotel Mapping and Why Does It Matter for OTAs?','Hotel mapping resolves multiple supplier records into one canonical hotel identity so platforms can avoid duplicates, conflicting details and fragmented inventory.'],
 ['What is Room Mapping in the Travel Industry?','Room mapping identifies equivalent rooms across suppliers and groups them into clean, standardized inventory.'],
 ['What Should You Look for in a Hotel Booking API?','Look for consistent schemas, reliable uptime, clear documentation, fast integration, webhooks and data that is normalized at the hotel and room level.'],
 ['What Causes Hotel Inventory Mismatch and How Do You Fix It?','Mismatch usually comes from supplier data being misaligned. The durable solution combines mapping, normalization and synchronization.'],
 ['How Do Travel Platforms Manage Hotel Content at Scale?','A centralized data layer can resolve identities, standardize room attributes and continuously refresh authoritative property content.']
];

const APP_BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
function navigate(path){ const target = path === '/' ? `${APP_BASE}/` : `${APP_BASE}${path}`; window.history.pushState({},'',target); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo({top:0,behavior:'instant'}); }
function normalizePath(pathname){ if(pathname===APP_BASE || pathname===`${APP_BASE}/`) return '/'; if(pathname.startsWith(`${APP_BASE}/`)) return pathname.slice(APP_BASE.length) || '/'; return pathname; }

function Shell({children}){
  const [menu,setMenu]=useState(false);
  useEffect(()=>{const close=()=>setMenu(false); window.addEventListener('popstate',close); return()=>window.removeEventListener('popstate',close)},[]);
  return <div className="app">
    <header className="nav">
      <button className="brand" onClick={()=>navigate('/')} aria-label="StructurrAI home"><span className="brand-mark">S</span><span>Structurr<span>AI</span></span></button>
      <nav className={menu?'nav-links open':'nav-links'}>
        <button onClick={()=>navigate('/products')}>Products</button>
        <button onClick={()=>navigate('/resources')}>Resources</button>
        <button onClick={()=>navigate('/api-access')}>API</button>
        <button onClick={()=>navigate('/about')}>About</button>
      </nav>
      <div className="nav-actions">
        <button className="text-btn hide-mobile" onClick={()=>navigate('/contact')}>Talk to an expert</button>
        <button className="pill-btn" onClick={()=>navigate('/api-access')}>Request access</button>
        <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Open menu">{menu?'×':'☰'}</button>
      </div>
    </header>
    {children}
    <footer className="footer">
      <div className="footer-top">
        <div><button className="brand footer-brand" onClick={()=>navigate('/')}><span className="brand-mark">S</span><span>Structurr<span>AI</span></span></button><p>AI-native infrastructure for hotel mapping, room mapping and website-grade content.</p></div>
        <div className="footer-col"><b>Products</b><button onClick={()=>navigate('/hotel-mapping.html')}>Hotel Mapping</button><button onClick={()=>navigate('/room-mapping.html')}>Room Mapping</button><button onClick={()=>navigate('/website-grade-content.html')}>Website Grade Content</button></div>
        <div className="footer-col"><b>Company</b><button onClick={()=>navigate('/about')}>About</button><button onClick={()=>navigate('/resources')}>Resources</button><button onClick={()=>navigate('/contact')}>Contact</button></div>
        <div className="footer-col"><b>Developers</b><button onClick={()=>navigate('/api-access')}>API Access</button><button onClick={()=>navigate('/documentation')}>Documentation</button><button onClick={()=>navigate('/faq')}>FAQs</button></div>
      </div>
      <div className="footer-bottom"><span>© 2026 StructurrAI</span><div><button onClick={()=>navigate('/privacy')}>Privacy</button><button onClick={()=>navigate('/terms')}>Terms</button></div></div>
    </footer>
  </div>
}

function CTA({label='Request a demo',secondary='Talk to an expert'}){return <div className="cta-row"><button className="primary-btn" onClick={()=>navigate('/contact')}>{label} <span>↗</span></button><button className="secondary-btn" onClick={()=>navigate('/contact')}>{secondary}</button></div>}

function Home(){
 return <Shell>
  <main>
   <section className="hero home-hero">
    <div className="eyebrow"><span className="pulse"></span>AI-powered hotel content intelligence</div>
    <h1>AI-Native Infrastructure for<br/><em>Hotel Mapping, Room Mapping & Website Grade Content</em></h1>
    <p className="hero-copy">Designed for OTAs, bedbanks, DMCs and travel platforms handling multi-supplier hotel inventory</p>
    <CTA label="Request Demo" secondary="Talk to an Expert"/>
    <div className="hero-trust"><span>✓ Multi-supplier support</span><span>✓ Accurate & scalable</span><span>✓ Production ready</span></div>
    <div className="hero-visual" aria-label="StructurrAI hotel data platform preview">
      <div className="hero-hotel-card"><div className="hotel-photo"></div><div><b>Sunrise Resort</b><small>Bali, Indonesia</small><span>★★★★★</span></div></div>
      <div className="hero-feature hotel"><strong>▦</strong><b>Hotel Mapping</b><small>Match same hotel across multiple suppliers</small></div>
      <div className="hero-feature room"><strong>▰</strong><b>Room Mapping</b><small>Standardize room types across suppliers</small></div>
      <div className="hero-feature content"><strong>▤</strong><b>Website Grade Content</b><small>Clean, structured and enriched content</small></div>
    </div>
   </section>
   <section className="supplier-strip"><div><small>WORKS WITH LEADING<br/>TRAVEL SUPPLIERS</small><b>↗ Expedia</b><b>Booking.com</b><b>agoda</b><b>Hotelbeds</b><span>and more...</span></div></section>
   <section className="visual-band"><div className="data-flow"><div className="flow-card"><small>SUPPLIER NETWORK</small><strong>Expedia · Trip.com</strong><span>Booking.com · WebBeds</span></div><div className="flow-arrow">→</div><div className="flow-card featured"><small>AI-POWERED PLATFORM</small><strong>StructurrAI</strong><span>Hotel Mapping · Room Mapping · Website Content APIs</span></div><div className="flow-arrow">→</div><div className="flow-card"><small>BOOKING PLATFORM</small><strong>OTAs · Bedbanks</strong><span>Travel SaaS · Corporate Travel</span></div></div></section>
   <section className="section">
    <div className="section-intro"><span className="section-num">01</span><div><div className="eyebrow">Trusted Infrastructure Layer</div><h2>For the travel<br/>industry.</h2></div><p>StructurrAI connects hotel suppliers with travel platforms through an AI-powered infrastructure layer built for multi-supplier inventory.</p></div>
    <div className="product-grid">{products.map((p,i)=><ProductCard key={p.id} p={p} i={i}/>)}</div>
   </section>
   <section className="metrics-section"><div className="metrics-head"><span className="eyebrow">Production scale</span><span>Real deployment metrics</span></div><div className="metrics"><Metric value="3M+" label="Hotels Mapped"/><Metric value="99.9%" label="Mapping Accuracy"/><Metric value="99%" label="Coverage"/><Metric value="24/7" label="Real-time Updates"/></div></section>
   <section className="section split"><div><div className="eyebrow">Why StructurrAI?</div><h2>Accuracy and scale<br/><em>without the noise.</em></h2></div><div className="reason-list"><Reason n="01" title="AI-Native Accuracy & Scalability" text="StructurrAI leverages AI to resolve noisy, sparse, and inconsistent supplier data — delivering fast, accurate mapping at massive scale."/><Reason n="02" title="Streamlined APIs for Easy Integration" text="Developer-friendly REST APIs that integrate seamlessly into your existing booking workflow, reducing integration time and support overhead."/><Reason n="03" title="Comprehensive Room Mapping" text="Enhance visibility into room categories, signatures, and attributes with accurate content normalization across every supplier."/><Reason n="04" title="High-Quality, Structured Content" text="Scalable content enrichment for hotel descriptions, images, and amenities — structured for optimal display across every platform."/></div></section>
   <section className="section"><div className="section-intro"><span className="section-num">02</span><div><div className="eyebrow">Frequently Asked Questions</div><h2>Questions about<br/>the data layer.</h2></div><p>Deep dives into hotel mapping, room mapping, and multi-supplier data challenges.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
   <section className="dark-cta"><div className="eyebrow">Ready to Elevate Your Hotel Inventory?</div><h2>Talk to our experts<br/><em>or get a personalized demo.</em></h2><CTA label="Request Demo" secondary="Talk to an Expert"/></section>
  </main>
 </Shell>
}

function Metric({value,label}){return <div className="metric"><strong>{value}</strong><span>{label}</span></div>}
function Reason({n,title,text}){return <div className="reason"><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>}
function ProductCard({p,i}){return <article className="product-card" onClick={()=>navigate('/'+p.id)}><div className="card-index">0{i+1}</div><div><div className="eyebrow">{p.kicker}</div><h3>{p.label}</h3><p>{p.text}</p><span className="arrow-link">Explore {p.label} ↗</span></div></article>}

function Products(){return <Shell><PageHero eyebrow="Products" title={<>Three layers.<br/><em>One data foundation.</em></>} text="Explore the infrastructure behind cleaner hotel inventory, better room-level experiences and authoritative property content."/><section className="section"><div className="stack-grid">{products.map((p,i)=><ProductDetail p={p} i={i} key={p.id}/>)}</div></section><section className="section light-panel"><div className="section-intro"><span className="section-num">03</span><div><div className="eyebrow">Integration</div><h2>Designed for<br/>production.</h2></div><p>Clean REST endpoints with JSON responses, comprehensive docs, sandbox access and webhooks. Go live in days, not months.</p></div><div className="integration-grid">{['RESTful APIs','Developer-friendly docs','Quick setup','Real-time webhooks'].map((x,i)=><div className="mini-card" key={x}><span>0{i+1}</span><h3>{x}</h3><p>Built to fit directly into your existing booking workflow.</p></div>)}</div></section></Shell>}
function ProductDetail({p,i}){return <article className="product-detail"><div className="product-number">0{i+1}</div><div><div className="eyebrow">{p.kicker}</div><h2>{p.title}</h2><p className="lead">{p.text}</p><div className="bullet-grid">{p.bullets.map(x=><span key={x}>✓ {x}</span>)}</div><button className="text-link" onClick={()=>navigate('/'+p.id)}>View solution ↗</button></div><div className="product-orb"><span>{i===0?'HOTEL':i===1?'ROOM':'CONTENT'}</span><strong>{i===0?'ID':i===1?'TYPE':'WEB'}</strong></div></article>}

function ProductPage({type}){const p=products.find(x=>x.id===type); return <Shell><PageHero eyebrow={p.kicker} title={<>{p.title.split('. ')[0]}.<br/><em>{p.title.split('. ').slice(1).join('. ')}</em></>} text={p.text}/><section className="section"><div className="feature-layout"><div><div className="eyebrow">What you get</div><h2>Structured from<br/>the source.</h2></div><div className="feature-copy"><p>{p.text} Our platform handles the messy supplier layer so your product team can focus on the booking experience.</p><div className="bullet-grid large">{p.bullets.map(x=><span key={x}>✓ {x}</span>)}</div><CTA label="Talk to our experts"/></div></div></section><section className="dark-panel"><div className="eyebrow">Built for travel platforms</div><h2>One layer.<br/><em>Many downstream systems.</em></h2><div className="use-grid">{['OTAs','Bedbanks','Corporate travel','Travel SaaS','DMCs'].map(x=><span key={x}>{x}</span>)}</div></section></Shell>}

function Resources(){return <Shell><PageHero eyebrow="Resources" title={<>Ideas for the<br/><em>data layer beneath travel.</em></>} text="Articles and insights on hotel mapping, room mapping and travel technology."/><section className="section"><div className="resource-grid">{resources.map(([title,cat,time,path],i)=><article className="resource-card" key={title} onClick={()=>navigate(path)}><div><span>{cat}</span><small>{time}</small></div><h3>{title}</h3><button>Read article ↗</button></article>)}</div></section></Shell>}

function Article({slug}){const r=resources.find(x=>x[3]===slug) || resources[0]; const content = articleCopy(r[3]); return <Shell><article className="article"><div className="article-meta">{r[1]} · {r[2]}</div><h1>{r[0]}</h1><p className="article-deck">{content.deck}</p>{content.sections.map((s,i)=><section key={i}><h2>{s[0]}</h2><p>{s[1]}</p></section>)}<CTA label="Discuss your data layer"/></article></Shell>}
function articleCopy(slug){const map={
'/blog/why-room-mapping-can-increase-bookings':{deck:'Hotel mapping is mostly understood. Room mapping is mostly ignored. That gap is where bookings are quietly lost.',sections:[['The room is where the decision happens','A traveller may reach the right property and still be presented with inconsistent room names, amenities and inclusions across suppliers. Room mapping makes those options comparable.'],['Why room data is harder','Suppliers use different naming conventions, meal-plan terminology, bed types, occupancy rules and attribute schemas. Two rooms can sound different and still be equivalent — or sound similar and differ in a critical detail.'],['The StructurrAI approach','Treat room mapping as a separate intelligence layer: understand room semantics, align attributes and inclusions, and keep mappings stable as supplier data changes.']]},
'/blog/data-problem-in-booking-stack':{deck:'AI in travel has moved from buzzword to infrastructure. The data underneath most AI deployments is where the architecture gets tested.',sections:[['AI systems depend on resolved inventory','Personalization, ranking, autonomous booking and pricing all need a consistent understanding of the hotel and room entities they operate on.'],['Room-level data is worse','Long-tail naming variants make attribute-based search and AI reasoning unreliable when the underlying room schema is fragmented.'],['Build the foundation first','StructurrAI provides an AI-native mapping layer that creates a canonical data foundation for search, personalization, pricing and booking agents.']]},
'/blog/why-hotel-mapping-is-a-game-changer':{deck:'Discover how AI-powered hotel mapping transforms multi-supplier inventory management, reduces duplicates, and delivers accurate data at scale.',sections:[['The duplicate inventory problem','The same hotel arrives from different suppliers with different names, identifiers, addresses and coordinates. Without a canonical identity, inventory fragments.'],['AI changes the operating model','Instead of manually reconciling records, StructurrAI applies hospitality-aware AI to identify and map properties at scale.'],['The result','A cleaner inventory layer improves search, price comparison, downstream content and the reliability of the booking experience.']]},
'/blog/ai-driven-hotel-mapping':{deck:'A deep dive into the technology behind AI-driven hotel mapping — from data ingestion and normalization to deduplication and continuous updates.',sections:[['Ingestion and normalization','Supplier feeds first need a common structure so names, addresses, coordinates and identifiers can be compared consistently.'],['Context-based matching','Sparse records can be resolved using contextual signals such as city, star rating, chain affiliation and geolocation proximity.'],['Continuous updates','Mapping is not a one-time task. The pipeline keeps learning from outcomes and processes incremental supplier changes.']]},
'/blog/data-infrastructure-beneath-ai-travel':{deck:'The real question is not whether travel will use AI, but whether the data infrastructure underneath it is ready.',sections:[['AI needs resolved entities','Search, recommendations, pricing and booking agents all depend on knowing exactly which hotel and room they are operating on.'],['The mapping layer','Canonical hotel and room identities turn fragmented supplier feeds into data an AI system can reason about.'],['Infrastructure before intelligence','The quality of the data foundation determines how reliably higher-level AI capabilities can operate.']]},
'/blog/travesla-partnership':{deck:"StructurrAI has joined forces with Travesla as its Strategic Growth Partner to accelerate the digital transformation of India's and South Asia's travel ecosystem.",sections:[['A shared opportunity','Travel businesses need cleaner, more structured inventory as digital distribution and AI-assisted booking expand.'],['What the partnership enables','The collaboration brings AI-native hotel mapping and structured data capabilities closer to IATA-approved agents and travel businesses.'],['The broader goal','Make high-quality hotel data infrastructure more accessible across the region.']]},
'/blog/why-room-mapping-can-increase-bookings':{deck:'Hotel mapping is mostly understood. Room mapping is mostly ignored. That gap is where bookings are quietly being lost.',sections:[['The room is where the decision happens','A traveller may reach the right property and still be presented with inconsistent room names, amenities and inclusions across suppliers.'],['Why room data is harder','Suppliers differ on bed types, meal plans, occupancy, amenities and naming conventions. Two rooms can look similar while differing in one critical detail.'],['The conversion layer','Standardized room inventory lets platforms compare like with like and give travellers a clearer booking choice.']]},
'/blog/why-hotel-booking-portal-needs-standardized-data-repository':{deck:'Wrong addresses, mismatched images and multiple names for the same hotel are symptoms of a missing source of truth.',sections:[['The problem is structural','Aggregating many suppliers creates duplicate identities, conflicting attributes and independent update cycles. Manual cleanup treats individual records but not the architecture.'],['A standardized repository','A canonical hotel identity gives every property one verified representation while preserving supplier relationships underneath it.'],['Keep it alive','Hotels open, rebrand, renovate and change ownership. A useful repository needs continuous updates rather than a one-time cleanup.']]},
'/blog/website-grade-content-faq':{deck:'Everything platforms ask before moving from stale supplier text to original, website-grade room content.',sections:[['What it is','Website Grade Content provides room-specific descriptions, real room images, sizes, bed configuration and normalized amenities based on the property’s own published information.'],['How it helps mapping','Supplier records can be noisy on both sides. Comparing them against a clean authoritative reference improves mapping reliability while enriching the booking experience.'],['Integration','REST APIs, JSON responses, documentation, sandbox access, batch queries and webhooks make the content layer straightforward to integrate.']]}}
return map[slug]||{deck:'Practical thinking on the infrastructure beneath modern hotel booking.',sections:[['The problem','Travel inventory becomes difficult to reason about when each supplier describes the same world differently.'],['The solution','Normalize identity, room semantics and authoritative content into a shared data layer.'],['The outcome','Downstream booking, search and AI systems can operate on cleaner, more consistent inventory.']]};}

function ApiAccess(){return <Shell><PageHero eyebrow="Request access for room-mapping APIs" title={<>Build on<br/><em>clean inventory.</em></>} text="Apply for credentials to the StructurrAI room-mapping API."/><section className="section form-section"><div><div className="eyebrow">How it works</div><h2>From request<br/>to integration.</h2><div className="steps"><Reason n="01" title="Submit your details" text="Submit your work email, company name, and website on this page."/><Reason n="02" title="Manual review" text="Our team reviews each request and emails an approval or follow-up question within 1 business day."/><Reason n="03" title="Receive credentials" text="On approval, your API key is emailed to the same address. The key is valid for 7 days; contact us anytime to extend it." /></div><div className="api-reference"><b>Reference material</b><button onClick={()=>navigate('/documentation')}>API documentation ↗</button><button>Postman collection ↗</button></div></div><AccessForm/></section></Shell>}
function AccessForm(){const [sent,setSent]=useState(false);return <form className="form-card" onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><span>✓</span><h3>Request received.</h3><p>We'll review your request and email credentials within 1 business day.</p></div>:<><label>Work email<input required type="email" placeholder="you@yourcompany.com"/></label><label>Company name<input required placeholder="Acme Travel"/></label><label>Company website<input required type="url" placeholder="https://acmetravel.com"/></label><button className="primary-btn" type="submit">Request API access ↗</button><small>We'll review your request and email credentials within 1 business day. Free or disposable email addresses are not accepted.</small></>}</form>}

function Contact(){return <Shell><PageHero eyebrow="Contact" title={<>Let’s fix the<br/><em>data layer.</em></>} text="Talk to our team about hotel mapping, room mapping and website-grade content."/><section className="section contact-grid"><div><div className="eyebrow">StructurrAI</div><h2>Infrastructure for<br/>travel teams.</h2><p className="lead">Tell us what you're trying to solve and we'll walk through the relevant part of the platform.</p><div className="contact-info"><span>vasu.goenka@structurrai.com</span><span>pankaj@structurrai.com</span><span>+91 9899826002</span><span>Sector 63, Noida</span></div></div><AccessForm/></section></Shell>}

function About(){return <Shell><PageHero eyebrow="About StructurrAI" title={<>The data layer<br/><em>travel deserves.</em></>} text="We build AI-native infrastructure that makes hotel and room inventory more accurate, structured and useful."/><section className="section split"><div><div className="eyebrow">Our focus</div><h2>Make messy travel data<br/>usable by default.</h2></div><div className="article-copy"><p>Managing hotel data from multiple suppliers creates duplicates, mismatched room categories and inconsistent details. StructurrAI uses Generative AI and AI Agents to resolve these problems at the infrastructure layer.</p><p>Our platform is designed for OTAs, bedbanks, corporate travel, travel SaaS and DMCs that need a canonical inventory foundation without building and maintaining the entire pipeline themselves.</p></div></section></Shell>}

function FAQ(){return <Shell><PageHero eyebrow="FAQ" title={<>Questions,<br/><em>answered clearly.</em></>} text="Deep dives into hotel mapping, room mapping and multi-supplier hotel data challenges."/><section className="section faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section></Shell>}

function Simple({title,eyebrow,text}){return <Shell><PageHero eyebrow={eyebrow} title={title} text={text}/><section className="section narrow"><div className="article-copy"><h2>Designed to be clear.</h2><p>{text}</p><p>For product, API and account questions, contact the StructurrAI team and we’ll help you find the right path.</p></div></section></Shell>}
function PageHero({eyebrow,title,text}){return <section className="page-hero"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{text}</p></section>}


function HotelMappingPage(){
 return <Shell>
  <PageHero eyebrow="Hotel Mapping" title={<>Eliminate duplicate<br/><em>hotels. Show correct prices. Always.</em></>} text="Hotel mapping is the exercise of assigning unique identifiers to hotels appearing from different suppliers enabling accurate price comparison and clean inventory at scale. StructurrAI does this end-to-end with AI."/>
  <section className="metrics-section"><div className="metrics"><Metric value="3M+" label="Properties Mapped"/><Metric value="99%+" label="Mapping Accuracy"/><Metric value="99%" label="Coverage"/><Metric value="20K+" label="Hotels Corrected"/></div></section>
  <section className="section split"><div><div className="eyebrow">The problem</div><h2>The same hotel, listed differently by every supplier.</h2></div><div className="article-copy"><p>When OTAs and travel platforms pull inventory from multiple suppliers, the same hotel can appear under dozens of slightly different names, addresses, and identifiers causing duplicate listings, price mismatches, and bad bookings.</p><div className="bullet-grid large"><span>✓ Duplicate hotel entries confuse travelers and inflate apparent inventory</span><span>✓ Incorrect names, locations, and geotags damage user trust</span><span>✓ Stale supplier data leads to wrong prices and bad bookings</span><span>✓ Manual mapping is slow, error-prone, and impossible to scale</span></div></div></section>
  <section className="section"><div className="section-intro"><span className="section-num">01</span><div><div className="eyebrow">Before → after</div><h2>One canonical<br/>hotel identity.</h2></div><p>Supplier names become one verified property record with a unique ID, correct name, address, geotag and synchronized inventory.</p></div><div className="mapping-demo"><div><small>BEFORE STRUCTURRAI</small><p>Expedia · Marriott Bndra Mumbai</p><p>Booking.com · JW Marriott Mumbai Juhu</p><p>WebBeds · JW Marriott Hotel, Bandra Kurla</p><p>Trip.com · Marriott Hotel Mumbai BKC</p></div><b>→</b><div className="mapping-result"><small>AFTER STRUCTURRAI</small><h3>JW Marriott Mumbai Juhu</h3><p>SAI-ID: MUM-JW-001 · Lat 19.0987° N · Lon 72.8258° E</p><span>✓ Unique ID across all suppliers</span><span>✓ Correct name, address & geotag</span><span>✓ Zero duplicates. Real-time sync.</span></div></div></section>
  <section className="section"><div className="section-intro"><span className="section-num">02</span><div><div className="eyebrow">Why StructurrAI</div><h2>What makes us<br/>different.</h2></div><p>End-to-end automation, language-aware matching and developer-friendly APIs for production travel inventory.</p></div><div className="reason-list"><Reason n="01" title="End-to-end AI mapping" text="Our proprietary AI algorithm handles the full mapping pipeline from raw supplier data ingestion to unique identifier assignment."/><Reason n="02" title="Over 99% accuracy" text="Precision-tuned language models trained on hospitality data resolve sparse, noisy and inconsistent supplier records."/><Reason n="03" title="Global coverage" text="Coverage extends across long-tail and boutique properties often missed by solutions focused only on large chains."/><Reason n="04" title="Language agnostic" text="Match records across Arabic, Japanese, Portuguese and more."/><Reason n="05" title="Faster TAT" text="End-to-end automation delivers update cycles in 8–10 hours."/><Reason n="06" title="Developer-friendly APIs" text="Simple REST APIs designed to drop into your existing booking workflow." /></div></section>
  <section className="dark-cta"><div className="eyebrow">Ready to eliminate duplicate hotels?</div><h2>Build a cleaner<br/><em>inventory layer.</em></h2><CTA label="Request a Demo"/></section>
 </Shell>
}
function RoomMappingPage(){
 const bullets=['Room type normalization','Attribute standardization','Cross-supplier consistency','Category classification','Signature matching','Automated processing'];
 return <Shell><PageHero eyebrow="Room Mapping" title={<>Make every room<br/><em>mean the same thing.</em></>} text="Standardizing Room Level data to provide clean inventory across suppliers. Room mapping identifies whether different supplier room descriptions are actually the same room and groups them into one clean, accurate listing."/><section className="section split"><div><div className="eyebrow">The room-level problem</div><h2>The hotel is mapped.<br/>The rooms still don't match.</h2></div><div className="article-copy"><p>Supplier A may call it “Deluxe King Room with City View” while Supplier B calls it “King Deluxe City View Room.” They may be the same room, but your system needs room-level semantics to know that.</p><div className="bullet-grid large">{bullets.map(x=><span key={x}>✓ {x}</span>)}</div></div></section><section className="section"><div className="section-intro"><span className="section-num">01</span><div><div className="eyebrow">What breaks without it</div><h2>Bad room data<br/>becomes bad bookings.</h2></div><p>Incorrect price comparisons, wrong-room bookings, inconsistent inclusions and more support tickets all trace back to room-level ambiguity.</p></div><div className="integration-grid"><div className="mini-card"><span>01</span><h3>Price comparison</h3><p>Compare equivalent inventory instead of treating variants as separate rooms.</p></div><div className="mini-card"><span>02</span><h3>Booking confidence</h3><p>What the traveller selects should be what they receive.</p></div><div className="mini-card"><span>03</span><h3>Consistent content</h3><p>Align amenities, views, beds and inclusions across suppliers.</p></div><div className="mini-card"><span>04</span><h3>Lower support load</h3><p>Reduce post-booking disputes, refunds and avoidable tickets.</p></div></div></section><section className="dark-panel"><div className="eyebrow">StructurrAI approach</div><h2>Understand room semantics.<br/><em>Don't just match strings.</em></h2><p className="dark-copy">We align inclusions and attributes, handle supplier variations and keep mappings stable as data changes.</p><CTA label="Talk to an expert"/></section></Shell>
}
function WebsiteGradePage(){
 const fields=['Room-specific descriptions','Real room images matched to the correct category','Room sizes in sq m and sq ft','Bed configuration','Normalized amenities','Consistent schema'];
 return <Shell><PageHero eyebrow="Website Grade Content" title={<>Content your booking<br/><em>experience can trust.</em></>} text="Hotel content as shown on the original website — authoritative room content structured for modern booking experiences and AI systems."/><section className="section split"><div><div className="eyebrow">The content layer</div><h2>Go back to the<br/>source.</h2></div><div className="article-copy"><p>Supplier feeds optimize for price and availability, not content. Website Grade Content goes back to the property's own authoritative published information so descriptions are complete, images are real and room-specific, and amenities are normalized.</p><div className="bullet-grid large">{fields.map(x=><span key={x}>✓ {x}</span>)}</div></div></section><section className="metrics-section"><div className="metrics"><Metric value="4,25,000+" label="Hotels covered"/><Metric value="3,18,400+" label="Hotels with room-level content"/><Metric value="6,55,200+" label="Room-level images"/><Metric value="6 mo" label="Content refresh cycle"/></div></section><section className="section"><div className="section-intro"><span className="section-num">02</span><div><div className="eyebrow">Why it matters</div><h2>One infrastructure.<br/>Two outputs.</h2></div><p>Clean website-grade content enriches the booking page while also giving room mapping a reliable reference point for matching noisy supplier records.</p></div><div className="reason-list"><Reason n="01" title="Authoritative content" text="Structured from each property's own published information."/><Reason n="02" title="Room-level focus" text="Descriptions, images, sizes and bed configurations where travellers actually decide."/><Reason n="03" title="API-first delivery" text="REST API, JSON responses, sandbox access, examples and webhooks."/><Reason n="04" title="AI-ready inventory" text="Clean content makes inventory more legible to AI booking agents." /></div></section><section className="dark-cta"><div className="eyebrow">See the before and after</div><h2>Put better content<br/><em>inside your booking flow.</em></h2><CTA label="Book a live demo"/></section></Shell>
}
function FAQArticle({title,eyebrow,sections}){return <Shell><article className="article"><div className="article-meta">{eyebrow}</div><h1>{title}</h1>{sections.map((s,i)=><section key={i}><h2>{s[0]}</h2><p>{s[1]}</p></section>)}<CTA label="Talk to an expert"/></article></Shell>}

function DocsSection({id,title,children}){return <section className="docs-section" id={id}><h2>{title}</h2>{children}</section>}
function CodeBlock({children}){return <pre className="docs-code"><code>{children}</code></pre>}
function DocsEndpoint({id,method,path,title,description,children}){
 return <section className="docs-section docs-endpoint" id={id}>
  <div className="docs-endpoint-head"><div><span className="docs-method">{method}</span><code>{path}</code></div><a href={'#'+id}>#</a></div>
  <h2>{title}</h2><p>{description}</p>{children}
 </section>
}
function DocsField({name,type,children}){return <div className="docs-field"><div><code>{name}</code><span>{type}</span></div><p>{children}</p></div>}
function Documentation(){
 const nav=[
  ['Overview',[['introduction','Introduction'],['getting-started','Getting Started']]],
  ['Geography',[['countries','Fetch Countries'],['cities','Fetch Cities']]],
  ['Hotel Mapping',[['hotel-search','Hotel Search by Cities'],['hotel-static','Hotel Static Data']]],
  ['Hotel Sync',[['added-hotels','Fetch Added Hotels'],['updated-hotels','Fetch Updated Hotels'],['deleted-hotels','Fetch Deleted Hotels']]],
  ['Room Mapping',[['room-mappings','Supplier Room Mappings'],['website-match','Website Room Match']]],
  ['Support',[['support','Support']]]
 ];
 return <Shell>
  <section className="docs-hero">
   <div className="eyebrow">API Reference</div>
   <h1>StructurrAI<br/><em>Documentation.</em></h1>
   <p>Programmatic access to the StructurrAI canonical hotel and room mapping catalogue. Pull static inventory, sync incremental changes, and resolve supplier room descriptions to canonical room codes. One <code>api-key</code> header authenticates every call.</p>
   <div className="docs-hero-meta"><span>REST API</span><span>JSON responses</span><span>API-key authentication</span><span>Postman ready</span></div>
  </section>
  <div className="docs-layout">
   <aside className="docs-sidebar"><b>Documentation</b>{nav.map(([group,items])=><div className="docs-nav-group" key={group}><strong>{group}</strong>{items.map(([id,label])=><a key={id} href={'#'+id}>{label}</a>)}</div>)}<button className="docs-sidebar-cta" onClick={()=>navigate('/api-access')}>Request API access ↗</button></aside>
   <article className="docs-content">
    <DocsSection id="introduction" title="Introduction">
      <p>StructurrAI provides programmatic access to a canonical hotel and room mapping catalogue. Use the API to retrieve standardized hotel inventory, synchronize changes, and resolve supplier room descriptions into canonical room codes.</p>
      <div className="docs-grid">
       <div><span>01</span><h3>Real-time mapping updates</h3><p>Keep your integration aligned with the latest mapping changes.</p></div>
       <div><span>02</span><h3>Standardised hotels</h3><p>Access canonical hotel records across major supplier feeds.</p></div>
       <div><span>03</span><h3>Incremental sync</h3><p>Pull added, updated and deleted hotels without re-fetching the full catalogue.</p></div>
       <div><span>04</span><h3>Room mapping</h3><p>Resolve supplier room descriptions with structured, explainable extractions.</p></div>
      </div>
      <h3>Endpoint groups</h3>
      <ul className="docs-list"><li><strong>Geography</strong> — country and city codes.</li><li><strong>Hotel Mapping</strong> — canonical hotels and enriched static content.</li><li><strong>Hotel Sync</strong> — added, updated and deleted hotel changes.</li><li><strong>Room Mapping</strong> — supplier rooms to canonical room codes.</li></ul>
    </DocsSection>

    <DocsSection id="getting-started" title="Getting Started">
      <p>From your API key to your first API call in three steps.</p>
      <div className="docs-grid">
       <div><span>01</span><h3>Receive your API key</h3><p>Issued by the StructurrAI team after onboarding.</p></div>
       <div><span>02</span><h3>api-key header</h3><p>Send <code>api-key: &lt;your_api_key&gt;</code> on every request. Missing or invalid credentials return 401.</p></div>
       <div><span>03</span><h3>Response envelope</h3><p>All responses wrap in <code>success</code>, <code>message</code>, <code>data</code> and <code>errors</code>. HTTP status is the source of truth.</p></div>
      </div>
      <h3>Base URL</h3><CodeBlock>{"https://api.structurrai.com"}</CodeBlock>
      <h3>Auth header</h3><CodeBlock>{"api-key: &lt;your_api_key&gt;"}</CodeBlock>
    </DocsSection>

    <DocsEndpoint id="countries" method="GET" path="/api/v2/countries" title="Fetch Countries" description="Returns every country StructurrAI has hotels in, along with the StructurrAI country_code that every other endpoint expects.">
      <h3>Request</h3><p>No parameters required.</p>
      <h3>Response fields</h3>
      <div className="docs-fields"><DocsField name="success" type="boolean">True when the call completed without error.</DocsField><DocsField name="message" type="string">Human-readable status text.</DocsField><DocsField name="data[]" type="array">One entry per supported country.</DocsField><DocsField name="data[].country_code" type="string">StructurrAI country code in SI-{'{'}ISO2{'}'} format, for example SI-IN.</DocsField><DocsField name="data[].country_name" type="string">Display name of the country in English.</DocsField><DocsField name="errors" type="array">Empty on success.</DocsField></div>
      <h3>cURL</h3><CodeBlock>{"curl -X GET 'https://api.structurrai.com/api/v2/countries' \\\n  -H 'api-key: YOUR_API_KEY'"}</CodeBlock>
    </DocsEndpoint>

    <DocsEndpoint id="cities" method="GET" path="/api/v2/cities" title="Fetch Cities" description="Returns every city StructurrAI maps within a country. Use this after /countries to build a destination picker or seed a city-by-city sync.">
      <h3>Parameter</h3><div className="docs-fields"><DocsField name="country_id" type="required · string · query">StructurrAI country code in SI-{'{'}ISO2{'}'} format returned by /api/v2/countries. The endpoint also accepts country_code as an alias.</DocsField></div>
      <h3>cURL</h3><CodeBlock>{"curl -X GET 'https://api.structurrai.com/api/v2/cities?country_id=YOUR_VALUE' \\\n  -H 'api-key: YOUR_API_KEY'"}</CodeBlock>
      <h3>Response</h3><p>Returns <code>data.country_id</code>, <code>data.country_name</code>, and a <code>data.cities[]</code> array containing <code>city_code</code>, city, country code and country name.</p>
    </DocsEndpoint>

    <DocsEndpoint id="hotel-search" method="POST" path="/api/v2/hotelsearch" title="Hotel Search by Cities" description="Returns every StructurrAI hotel in the requested cities, plus the supplier IDs each one is mapped to. One request can pull hotels across up to 20 cities.">
      <h3>Parameter</h3><div className="docs-fields"><DocsField name="standardized_city_codes" type="required · array · body">A list of 1 to 20 StructurrAI city codes, such as STR-AE-0001 and STR-IN-0607. More than 20 returns 400.</DocsField></div>
      <h3>Request</h3><CodeBlock>{"{\n  \"standardized_city_codes\": [\"STR-AE-0001\", \"STR-IN-0607\"]\n}"}</CodeBlock>
      <h3>cURL</h3><CodeBlock>{"curl -X POST 'https://api.structurrai.com/api/v2/hotelsearch' \\\n  -H 'api-key: YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{ \"standardized_city_codes\": [\"STR-AE-0001\", \"STR-IN-0607\"] }'"}</CodeBlock>
      <h3>Response fields</h3><div className="docs-fields"><DocsField name="standardized_hotel_id" type="string">Canonical StructurrAI hotel ID.</DocsField><DocsField name="standardized_hotel_name" type="string">Cleaned canonical hotel name.</DocsField><DocsField name="standardized_address" type="string">Cleaned canonical hotel address.</DocsField><DocsField name="latitude / longitude" type="number">Geocoded coordinates.</DocsField><DocsField name="provider_details[]" type="array">Supplier mappings with supplier name, ID, raw hotel name, address and supplier geography.</DocsField></div>
    </DocsEndpoint>

    <DocsEndpoint id="hotel-static" method="POST" path="/api/v2/hotelstaticdata" title="Hotel Static Data" description="Returns enriched static content for every StructurrAI hotel in the requested cities.">
      <p>Static content includes hotel name and address, geo coordinates, description, hero and gallery images, star rating, review rating, check-in/check-out times, nearby attractions, amenities and facilities.</p>
      <h3>Parameter</h3><div className="docs-fields"><DocsField name="standardized_city_codes" type="required · array · body">A list of 1 to 20 StructurrAI city codes. Use the same codes accepted by /hotelsearch.</DocsField></div>
      <h3>cURL</h3><CodeBlock>{"curl -X POST 'https://api.structurrai.com/api/v2/hotelstaticdata' \\\n  -H 'api-key: YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{ \"standardized_city_codes\": [\"STR-IN-0607\"] }'"}</CodeBlock>
      <h3>Key response fields</h3><div className="docs-fields"><DocsField name="description" type="string">Marketing description for a property-detail page.</DocsField><DocsField name="hero_image_url / image_urls" type="string[]">Primary and gallery image URLs.</DocsField><DocsField name="star_rating / review_rating" type="number / object">Official star rating and aggregated guest review rating.</DocsField><DocsField name="check_in_time / check_out_time" type="string">HH:mm property times when published.</DocsField><DocsField name="nearby_attractions" type="array">Nearby points of interest with name, distance_km and category.</DocsField><DocsField name="amenities / facilities" type="array">In-room/guest amenities and property-level facilities.</DocsField></div>
    </DocsEndpoint>

    <DocsEndpoint id="added-hotels" method="GET" path="/api/v1/addedhotels" title="Fetch Added Hotels" description="Returns hotels newly mapped on or after a given date, along with each linked supplier hotel. Use it for incremental sync instead of re-fetching the full catalogue.">
      <div className="docs-fields"><DocsField name="last_updated_date" type="required · YYYY-MM-DD · query">Inclusive lower bound for the date filter.</DocsField><DocsField name="page" type="optional · integer · query">Page number, starting at 1.</DocsField><DocsField name="offset" type="optional · integer · query">Page size.</DocsField></div>
      <CodeBlock>{"curl -X GET 'https://api.structurrai.com/api/v1/addedhotels?last_updated_date=YOUR_VALUE&page=YOUR_VALUE&offset=YOUR_VALUE' \\\n  -H 'api-key: YOUR_API_KEY'"}</CodeBlock>
      <p>The response contains <code>data.last_updated_date</code>, <code>data.mapped_hotels[]</code> and supplier <code>provider_details[]</code>.</p>
    </DocsEndpoint>

    <DocsEndpoint id="updated-hotels" method="GET" path="/api/v1/updatedhotels" title="Fetch Updated Hotels" description="Returns hotels whose canonical attributes changed on or after a given date. Pair it with added and deleted hotel syncs to keep a local catalogue current.">
      <div className="docs-fields"><DocsField name="last_updated_date" type="required · YYYY-MM-DD · query">Inclusive lower bound for the date filter.</DocsField></div>
      <CodeBlock>{"curl -X GET 'https://api.structurrai.com/api/v1/updatedhotels?last_updated_date=YOUR_VALUE' \\\n  -H 'api-key: YOUR_API_KEY'"}</CodeBlock>
      <p>The <code>mapped_hotels[]</code> shape matches the added-hotels endpoint. Updated values represent the current canonical state.</p>
    </DocsEndpoint>

    <DocsEndpoint id="deleted-hotels" method="GET" path="/api/v1/deletedhotels" title="Fetch Deleted Hotels" description="Returns the IDs of hotels that StructurrAI deactivated or removed on or after a given date. The payload is intentionally minimal.">
      <div className="docs-fields"><DocsField name="last_updated_date" type="required · YYYY-MM-DD · query">Inclusive lower bound for the date filter.</DocsField><DocsField name="page" type="optional · integer · query">Page number, starting at 1.</DocsField><DocsField name="offset" type="optional · integer · query">Page size.</DocsField></div>
      <CodeBlock>{"curl -X GET 'https://api.structurrai.com/api/v1/deletedhotels?last_updated_date=YOUR_VALUE&page=YOUR_VALUE&offset=YOUR_VALUE' \\\n  -H 'api-key: YOUR_API_KEY'"}</CodeBlock>
      <p>The wire response uses <code>standarized_hotel_id</code> exactly as documented by the API.</p>
    </DocsEndpoint>

    <DocsEndpoint id="room-mappings" method="POST" path="/api/v2/room-mappings" title="Supplier Room Mappings" description="Resolve supplier room descriptions to StructurrAI canonical room codes. The API extracts structured attributes and groups equivalent supplier rooms into one canonical room.">
      <div className="docs-callout"><strong>Important</strong><p>A single request must contain rooms belonging to one unique hotel. Send a separate request per hotel. Mixing rooms from multiple hotels is not supported.</p></div>
      <h3>Request fields</h3><div className="docs-fields"><DocsField name="rooms" type="required · array · body">At least 1 room. Maximum 20 when sync=true and 100 when sync=false.</DocsField><DocsField name="rooms[].name" type="required · string">Exact supplier room description. Pass it verbatim; no manual cleanup is required.</DocsField><DocsField name="rooms[].hotel_id" type="optional · string">StructurrAI hotel ID, carried through when supplied.</DocsField><DocsField name="rooms[].supplier_name" type="optional · string">Supplier identifier such as HotelBeds, TBO or Agoda.</DocsField><DocsField name="rooms[].index" type="required · integer">Sequential 1-based index with no gaps or duplicates.</DocsField><DocsField name="sync" type="optional · boolean">True processes inline and is capped at 20. False is the default background mode and is capped at 100.</DocsField></div>
      <h3>Request body</h3><CodeBlock>{"{\n  \"rooms\": [\n    { \"name\": \"Deluxe Room, 1 King Bed (City View)\", \"index\": 1, \"hotel_id\": \"9054312\", \"supplier_name\": \"tbo\" },\n    { \"name\": \"Deluxe Room, 1 King Bed (City View),NonSmoking\", \"index\": 2, \"hotel_id\": \"9054312\", \"supplier_name\": \"tbo\" }\n  ],\n  \"sync\": true\n}"}</CodeBlock>
      <h3>Response fields</h3><div className="docs-fields"><DocsField name="structurrai_room_code" type="string">Stable canonical room ID.</DocsField><DocsField name="room_name / type_of_accomodation" type="string">Cleaned room name and unit type such as Room, Suite, Villa or Apartment.</DocsField><DocsField name="room_category / bed_type / view_type" type="string">Category, bed configuration and view.</DocsField><DocsField name="bed_count / bedroom_count" type="string / integer">Bed and bedroom counts.</DocsField><DocsField name="boolean attributes" type="object">Family, balcony, terrace, pool, spa, jacuzzi, sauna, kitchenette, bathtub, bar, living room, lounge, floor, smoking and extra-bed flags.</DocsField><DocsField name="room_description / room_size_* / image_urls" type="mixed">Description, square-metre/square-foot sizes and canonical room images when available.</DocsField><DocsField name="rooms[]" type="array">Input rooms clustered into the canonical group, preserving index and supplied attribution.</DocsField><DocsField name="fine_tuned_status" type="string">Whether the base extractor was sufficient or a fine-tuned model was triggered.</DocsField></div>
      <h3>cURL</h3><CodeBlock>{"curl -X POST 'https://api.structurrai.com/api/v2/room-mappings' \\\n  -H 'api-key: YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{ \"rooms\": [{ \"name\": \"Deluxe Room, 1 King Bed (City View)\", \"index\": 1, \"hotel_id\": \"9054312\", \"supplier_name\": \"tbo\" }], \"sync\": true }'"}</CodeBlock>
    </DocsEndpoint>

    <DocsEndpoint id="website-match" method="POST" path="/api/v2/room-mappings/website-match" title="Website Room Match" description="Match supplier rooms against the actual rooms published on the hotel's own website, then group them under canonical StructurrAI room codes.">
      <div className="docs-callout"><strong>Important</strong><p>The request and response contract is the same as /api/v2/room-mappings, but <code>hotel_id</code> is required on every room because it identifies the hotel website used as the reference. A single call must contain one unique hotel.</p></div>
      <h3>cURL</h3><CodeBlock>{"curl -X POST 'https://api.structurrai.com/api/v2/room-mappings/website-match' \\\n  -H 'api-key: YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{ \"rooms\": [{ \"name\": \"Deluxe Room, 1 King Bed (City View)\", \"index\": 1, \"hotel_id\": \"9054312\", \"supplier_name\": \"tbo\" }], \"sync\": true }'"}</CodeBlock>
      <p>The response returns one entry per canonical room group with structured room attributes and the input rooms matched into that group.</p>
    </DocsEndpoint>

    <DocsSection id="support" title="Need help?">
      <p>Reach the integrations team at <strong>vasu.goenka@structurrai.com</strong> for API access, schema questions, or onboarding support.</p>
      <div className="docs-bottom-cta"><div><span className="eyebrow">Ready to integrate?</span><h2>Build on clean hotel data.</h2><p>Request API access and get the credentials and integration material for your use case.</p></div><button className="primary-btn" onClick={()=>navigate('/api-access')}>Request API access ↗</button></div>
    </DocsSection>
   </article>
  </div>
 </Shell>
}
const faqPages={
'/faqs/what-is-hotel-mapping':{title:'What is Hotel Mapping and Why Does It Matter for OTAs?',eyebrow:'Guide for OTAs',sections:[['What is hotel mapping?','Hotel mapping assigns a unique canonical identity to hotel records coming from different suppliers. The goal is accurate price comparison, clean inventory and one property representation.'],['Why does it matter?','Without mapping, the same hotel can appear multiple times with different names, addresses, identifiers and prices. This fragments inventory and confuses travellers.'],['What does StructurrAI do?','StructurrAI uses AI to resolve noisy supplier data, assign unique identifiers and keep the canonical record synchronized as supplier information changes.']]},
'/faqs/what-should-you-look-for-in-a-hotel-booking-api':{title:'What Should You Look for in a Hotel Booking API?',eyebrow:'API Guide',sections:[['Reliable data first','A useful hotel API needs more than availability. It should expose consistent canonical identities, structured content and room-level data.'],['Developer experience','Look for clean REST endpoints, JSON responses, clear authentication, examples, documentation, sandbox access and webhooks.'],['StructurrAI APIs','The platform provides geography, hotel mapping, hotel static data, incremental hotel sync and room mapping endpoints behind an api-key header.']]},
'/faqs/how-do-travel-platforms-manage-hotel-content-at-scale':{title:'How Do Travel Platforms Manage Hotel Content at Scale?',eyebrow:'Travel Technology',sections:[['Centralize the source of truth','Multi-supplier platforms need a canonical layer that resolves duplicate properties and normalizes their content.'],['Enrich at room level','Room descriptions, images, sizes, beds and amenities should be structured consistently instead of copied from fragmented supplier feeds.'],['Keep it current','Hotel data is living data. Continuous updates and refresh cycles prevent a clean dataset from drifting back into inconsistency.']]},
'/faqs/why-duplicate-hotel-listings-appear':{title:'Why Do Duplicate Hotel Listings Appear on Travel Platforms?',eyebrow:'Guide for OTAs',sections:[['The cause','Different suppliers use different hotel names, identifiers, addresses, geotags and update cycles for the same property.'],['The consequence','Duplicates fragment prices and demand signals, confuse travellers and can lead to inconsistent booking experiences.'],['The durable fix','Map supplier records to one canonical hotel identity and keep that relationship synchronized as new data arrives.']]}
};

function App(){
 const [path,setPath]=useState(normalizePath(location.pathname));
 useEffect(()=>{const f=()=>setPath(normalizePath(location.pathname));addEventListener('popstate',f);return()=>removeEventListener('popstate',f)},[]);
 if(path==='/') return <Home/>;
 if(path==='/products') return <Products/>;
 if(path==='/resources') return <Resources/>;
 if(path==='/api-access') return <ApiAccess/>;
 if(path==='/contact') return <Contact/>;
 if(path==='/about') return <About/>;
 if(path==='/faq') return <FAQ/>;
 if(path==='/documentation') return <Documentation/>;
 if(path==='/privacy') return <FAQArticle eyebrow="Privacy" title="Privacy Policy" sections={[['Information we collect','When you request API access or contact StructurrAI, we may receive information such as your work email, company name, website and the details you choose to provide.'],['How information is used','Information is used to respond to requests, provide access to services, communicate about the platform and maintain the security and operation of the service.'],['Questions','For privacy questions or requests, contact the StructurrAI team through the contact page.']]}/>;
 if(path==='/terms') return <FAQArticle eyebrow="Legal" title="Terms of Service" sections={[['Using the service','Access to StructurrAI products and APIs is provided subject to the applicable account, API and service terms.'],['API access','Credentials are issued for approved users and should be kept secure. API usage is subject to the limits and conditions communicated with your access.'],['Contact','For questions about these terms or your account, contact the StructurrAI team.']]}/>;
 if(path.startsWith('/blog/')) return <Article slug={path}/>;
 if(faqPages[path]) { const f=faqPages[path]; return <FAQArticle {...f}/>; }
 if(path==='/faqs/what-is-room-mapping') return <FAQArticle title="What is Room Mapping in the Travel Industry?" eyebrow="Guide for OTAs" sections={[['The problem after hotel mapping','Even when the hotel is correctly identified, room names, pricing and amenities can still differ across suppliers.'],['What room mapping does','It identifies whether two room types are actually the same and groups them into one clean listing.'],['How StructurrAI approaches it','We treat room mapping as a separate intelligence layer that understands room semantics, inclusions, attributes and supplier variations.']]}/>;
 if(path==='/hotel-mapping' || path==='/hotel-mapping.html') return <HotelMappingPage/>;
 if(path==='/room-mapping' || path==='/room-mapping.html') return <RoomMappingPage/>;
 if(path==='/website-grade-content' || path==='/website-grade-content.html') return <WebsiteGradePage/>;
 if(products.some(x=>'/'+x.id===path)) return <ProductPage type={path.slice(1)}/>;
 return <Simple eyebrow="404" title={<>Page not<br/><em>found.</em></>} text="The page you're looking for doesn't exist."/>
}
createRoot(document.getElementById('root')).render(<App/>);
