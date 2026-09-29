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

function navigate(path){ window.history.pushState({},'',path); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo({top:0,behavior:'instant'}); }

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
        <div className="footer-col"><b>Products</b><button onClick={()=>navigate('/hotel-mapping')}>Hotel Mapping</button><button onClick={()=>navigate('/room-mapping')}>Room Mapping</button><button onClick={()=>navigate('/website-grade-content')}>Website Grade Content</button></div>
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
    <div className="eyebrow"><span className="pulse"></span>AI-native hotel data infrastructure</div>
    <h1>Hotel data,<br/><em>finally structured.</em></h1>
    <p className="hero-copy">AI-powered Hotel Mapping, Room Mapping and Website Grade Content for OTAs, bedbanks, DMCs and travel platforms handling multi-supplier inventory.</p>
    <CTA/>
    <div className="trust-strip"><span>Built for travel infrastructure</span><i></i><span>REST APIs</span><i></i><span>Real-time updates</span><i></i><span>Enterprise scale</span></div>
   </section>
   <section className="visual-band"><div className="data-flow"><div className="flow-card"><small>SUPPLIER NETWORK</small><strong>12+ feeds</strong><span>messy · sparse · inconsistent</span></div><div className="flow-arrow">→</div><div className="flow-card featured"><small>STRUCTURRAI</small><strong>Canonical data layer</strong><span>AI mapping · normalization · enrichment</span></div><div className="flow-arrow">→</div><div className="flow-card"><small>BOOKING PLATFORM</small><strong>Clean inventory</strong><span>search · pricing · booking · AI agents</span></div></div></section>
   <section className="section">
    <div className="section-intro"><span className="section-num">01</span><div><div className="eyebrow">The infrastructure layer</div><h2>From supplier noise<br/>to booking confidence.</h2></div><p>Most travel platforms aggregate supply faster than they can standardize it. StructurrAI sits underneath your booking stack and turns fragmented supplier data into a canonical, continuously maintained inventory.</p></div>
    <div className="product-grid">{products.map((p,i)=><ProductCard key={p.id} p={p} i={i}/>)}</div>
   </section>
   <section className="metrics-section"><div className="metrics-head"><span className="eyebrow">At production scale</span><span>Measured across our mapping infrastructure</span></div><div className="metrics"><Metric value="3M+" label="Hotels mapped"/><Metric value="99.9%" label="Mapping accuracy"/><Metric value="99%" label="Coverage"/><Metric value="<24h" label="New mapping data"/></div></section>
   <section className="section split"><div><div className="eyebrow">Why StructurrAI</div><h2>Clean data is<br/><em>AI infrastructure.</em></h2></div><div className="reason-list"><Reason n="01" title="AI-native accuracy & scalability" text="Resolve noisy, sparse and inconsistent supplier data at massive scale."/><Reason n="02" title="Developer-first APIs" text="REST APIs, JSON responses, documentation, webhooks and fast integration."/><Reason n="03" title="Room-level intelligence" text="Normalize room categories, attributes and signatures across suppliers."/><Reason n="04" title="Authoritative content" text="Structure hotel descriptions, images and amenities for every downstream experience."/></div></section>
   <section className="dark-cta"><div className="eyebrow">Ready to build on clean inventory?</div><h2>Give your booking stack<br/><em>a source of truth.</em></h2><CTA label="Schedule a demo" secondary="Explore the platform"/></section>
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
'/blog/why-hotel-booking-portal-needs-standardized-data-repository':{deck:'Wrong addresses, mismatched images and multiple names for the same hotel are symptoms of a missing source of truth.',sections:[['The problem is structural','Aggregating many suppliers creates duplicate identities, conflicting attributes and independent update cycles. Manual cleanup treats individual records but not the architecture.'],['A standardized repository','A canonical hotel identity gives every property one verified representation while preserving supplier relationships underneath it.'],['Keep it alive','Hotels open, rebrand, renovate and change ownership. A useful repository needs continuous updates rather than a one-time cleanup.']]},
'/blog/website-grade-content-faq':{deck:'Everything platforms ask before moving from stale supplier text to original, website-grade room content.',sections:[['What it is','Website Grade Content provides room-specific descriptions, real room images, sizes, bed configuration and normalized amenities based on the property’s own published information.'],['How it helps mapping','Supplier records can be noisy on both sides. Comparing them against a clean authoritative reference improves mapping reliability while enriching the booking experience.'],['Integration','REST APIs, JSON responses, documentation, sandbox access, batch queries and webhooks make the content layer straightforward to integrate.']]}}
return map[slug]||{deck:'Practical thinking on the infrastructure beneath modern hotel booking.',sections:[['The problem','Travel inventory becomes difficult to reason about when each supplier describes the same world differently.'],['The solution','Normalize identity, room semantics and authoritative content into a shared data layer.'],['The outcome','Downstream booking, search and AI systems can operate on cleaner, more consistent inventory.']]};}

function ApiAccess(){return <Shell><PageHero eyebrow="Developer access" title={<>Build on<br/><em>clean inventory.</em></>} text="Apply for credentials to the StructurrAI room-mapping API."/><section className="section form-section"><div><div className="eyebrow">How it works</div><h2>From request<br/>to integration.</h2><div className="steps"><Reason n="01" title="Submit your details" text="Work email, company name and website."/><Reason n="02" title="Manual review" text="Our team reviews each request within one business day."/><Reason n="03" title="Receive credentials" text="Approved teams receive an API key by email." /></div></div><AccessForm/></section></Shell>}
function AccessForm(){const [sent,setSent]=useState(false);return <form className="form-card" onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><span>✓</span><h3>Request received.</h3><p>We'll review your details and follow up by email.</p></div>:<><label>Work email<input required type="email" placeholder="you@yourcompany.com"/></label><label>Company name<input required placeholder="Acme Travel"/></label><label>Company website<input required type="url" placeholder="https://acmetravel.com"/></label><button className="primary-btn" type="submit">Request API access ↗</button><small>Free or disposable email addresses are not accepted.</small></>}</form>}

function Contact(){return <Shell><PageHero eyebrow="Contact" title={<>Let’s fix the<br/><em>data layer.</em></>} text="Talk to our team about hotel mapping, room mapping and website-grade content."/><section className="section contact-grid"><div><div className="eyebrow">StructurrAI</div><h2>Infrastructure for<br/>travel teams.</h2><p className="lead">Tell us what you're trying to solve and we'll walk through the relevant part of the platform.</p><div className="contact-info"><span>vasu.goenka@structurrai.com</span><span>pankaj@structurrai.com</span><span>+91 9899826002</span><span>Sector 63, Noida</span></div></div><AccessForm/></section></Shell>}

function About(){return <Shell><PageHero eyebrow="About StructurrAI" title={<>The data layer<br/><em>travel deserves.</em></>} text="We build AI-native infrastructure that makes hotel and room inventory more accurate, structured and useful."/><section className="section split"><div><div className="eyebrow">Our focus</div><h2>Make messy travel data<br/>usable by default.</h2></div><div className="article-copy"><p>Managing hotel data from multiple suppliers creates duplicates, mismatched room categories and inconsistent details. StructurrAI uses Generative AI and AI Agents to resolve these problems at the infrastructure layer.</p><p>Our platform is designed for OTAs, bedbanks, corporate travel, travel SaaS and DMCs that need a canonical inventory foundation without building and maintaining the entire pipeline themselves.</p></div></section></Shell>}

function FAQ(){return <Shell><PageHero eyebrow="FAQ" title={<>Questions,<br/><em>answered clearly.</em></>} text="Deep dives into hotel mapping, room mapping and multi-supplier hotel data challenges."/><section className="section faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section></Shell>}

function Simple({title,eyebrow,text}){return <Shell><PageHero eyebrow={eyebrow} title={title} text={text}/><section className="section narrow"><div className="article-copy"><h2>Designed to be clear.</h2><p>{text}</p><p>For product, API and account questions, contact the StructurrAI team and we’ll help you find the right path.</p></div></section></Shell>}
function PageHero({eyebrow,title,text}){return <section className="page-hero"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{text}</p></section>}

function App(){
 const [path,setPath]=useState(location.pathname);
 useEffect(()=>{const f=()=>setPath(location.pathname);addEventListener('popstate',f);return()=>removeEventListener('popstate',f)},[]);
 if(path==='/') return <Home/>;
 if(path==='/products') return <Products/>;
 if(path==='/resources') return <Resources/>;
 if(path==='/api-access') return <ApiAccess/>;
 if(path==='/contact') return <Contact/>;
 if(path==='/about') return <About/>;
 if(path==='/faq') return <FAQ/>;
 if(path==='/documentation') return <Simple eyebrow="Developers" title={<>API documentation<br/><em>without the friction.</em></>} text="Reference material, examples and integration guidance for StructurrAI APIs."/>;
 if(path==='/privacy') return <Simple eyebrow="Legal" title={<>Privacy,<br/><em>made readable.</em></>} text="StructurrAI respects the data and information entrusted to its platform and services."/>;
 if(path==='/terms') return <Simple eyebrow="Legal" title={<>Terms of<br/><em>service.</em></>} text="The terms governing access to StructurrAI products and services."/>;
 if(path.startsWith('/blog/')) return <Article slug={path}/>;
 if(path.startsWith('/faqs/')) return <Article slug={path.replace('/faqs/','/blog/website-grade-content-faq')}/>;
 if(products.some(x=>'/'+x.id===path)) return <ProductPage type={path.slice(1)}/>;
 return <Simple eyebrow="404" title={<>Page not<br/><em>found.</em></>} text="The page you're looking for doesn't exist."/>
}
createRoot(document.getElementById('root')).render(<App/>);
