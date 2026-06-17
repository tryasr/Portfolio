import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FFF9F0", color: "#1A1A2E", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        :root{
          --cr:#FFF9F0;--cn:#1A1A2E;--sg:#BFD8B8;--bb:#D8E8FF;--lv:#E7E0FF;--bg:#F3EDE5;
          --lime:#C8F135;--navy:#1E3A5F;--mg:#4A7C59;
        }
        body{background:var(--cr);font-family:'DM Sans',sans-serif;color:var(--cn);overflow-x:hidden}
        .serif{font-family:'Instrument Serif',serif}
        .mono{font-family:'Space Mono',monospace}

        nav{display:flex;align-items:center;justify-content:space-between;padding:14px 28px;background:#1E3A5F;position:sticky;top:0;z-index:100}
        .logo{font-family:'Instrument Serif',serif;font-size:22px;color:#C8F135;letter-spacing:-0.5px}
        .nav-links{display:flex;gap:20px}
        .nav-links a{color:rgba(255,255,255,0.7);font-size:12px;font-weight:700;text-decoration:none;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;transition:color .2s}
        .nav-links a:hover{color:#C8F135}
        .nav-tag{background:#C8F135;color:#1E3A5F;font-size:10px;font-weight:700;padding:4px 10px;border-radius:99px;letter-spacing:1px;cursor:pointer}

        .hero{display:grid;grid-template-columns:1fr 1fr;min-height:88vh;position:relative;overflow:hidden}
        .hero-left{background:#C8F135;padding:50px 44px;display:flex;flex-direction:column;justify-content:space-between;position:relative}
        .hero-right{background:#1E3A5F;padding:50px 44px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
        .big-name{font-family:'Instrument Serif',serif;font-size:clamp(52px,7vw,88px);line-height:0.92;color:#1E3A5F;font-style:italic}
        .hero-subtitle{font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#4A7C59;margin-bottom:12px}
        .hero-desc{font-size:14px;color:rgba(255,255,255,0.65);line-height:1.75;max-width:300px;margin-bottom:32px}
        .hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .btn-lime{background:#C8F135;color:#1E3A5F;border:none;padding:12px 26px;border-radius:2px;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:.5px;transition:opacity .2s}
        .btn-lime:hover{opacity:.85}
        .btn-outline{background:transparent;color:rgba(255,255,255,0.8);border:1.5px solid rgba(255,255,255,0.25);padding:12px 26px;border-radius:2px;font-size:13px;font-weight:700;cursor:pointer;transition:border-color .2s}
        .btn-outline:hover{border-color:rgba(255,255,255,0.6)}

        .polaroid{background:white;padding:12px 12px 40px;box-shadow:4px 6px 18px rgba(0,0,0,0.18);transform:rotate(-3deg);position:relative;display:inline-block;transition:transform .4s}
        .polaroid:hover{transform:rotate(0deg) scale(1.02)}
        .polaroid-img{width:200px;height:230px;background:linear-gradient(135deg,#BFD8B8,#D8E8FF 60%,#E7E0FF);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}

        .sticky{padding:12px 14px;font-size:12px;font-weight:700;line-height:1.5;box-shadow:2px 3px 10px rgba(0,0,0,0.1);position:absolute}
        .sticky-yellow{background:#FDEFB2;color:#7A6000;transform:rotate(2deg)}
        .sticky-pink{background:#FFCCE5;color:#8B0050;transform:rotate(-4deg)}

        .marquee-strip{background:#C8F135;padding:10px 0;overflow:hidden;white-space:nowrap}
        .marquee-text{font-size:12px;font-weight:700;color:#1E3A5F;letter-spacing:2px;text-transform:uppercase;display:inline-block;animation:marquee 28s linear infinite}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

        .scrap-section{padding:60px 28px;background:#F3EDE5}
        .scrap-title{font-family:'Instrument Serif',serif;font-size:42px;color:#1E3A5F;margin-bottom:6px;font-style:italic}
        .scrap-label{font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#4A7C59;margin-bottom:8px}
        .patchwork{display:grid;grid-template-columns:repeat(4,1fr);gap:3px;margin-top:28px}
        .patch{padding:22px 18px;position:relative;min-height:160px;cursor:pointer;transition:transform .2s,z-index .2s}
        .patch:hover{transform:scale(1.02);z-index:2}
        .patch-p1{background:#BFD8B8;grid-column:span 2;grid-row:span 2}
        .patch-p2{background:#E7E0FF}
        .patch-p3{background:#D8E8FF}
        .patch-p4{background:#FDEBD0;grid-column:span 2}
        .patch-p5{background:#C8F135}
        .patch-p6{background:#FFE4E4}
        .patch-tag{font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:0.6;margin-bottom:8px}
        .patch-title{font-family:'Instrument Serif',serif;font-size:20px;line-height:1.2;color:#1E3A5F;margin-bottom:6px}
        .patch-result{font-size:11px;font-weight:700;color:#4A7C59;margin-top:6px;line-height:1.4}
        .patch-num{position:absolute;top:14px;right:16px;font-family:'Space Mono',monospace;font-size:10px;opacity:0.35}
        .patch-tools{display:flex;gap:5px;flex-wrap:wrap;margin-top:10px}
        .tool-pill{font-size:9px;font-weight:700;background:rgba(30,58,95,0.1);color:#1E3A5F;padding:3px 8px;border-radius:99px}

        .skills-section{padding:60px 28px;background:#FFF9F0}
        .skills-row{display:flex;gap:16px;flex-wrap:wrap;margin-top:32px}
        .skill-cat{flex:1;min-width:200px;background:white;border:1.5px solid rgba(30,58,95,0.1);border-radius:8px;padding:24px}
        .skill-cat-title{font-family:'Instrument Serif',serif;font-size:20px;color:#1E3A5F;margin-bottom:16px}
        .badges{display:flex;flex-wrap:wrap;gap:8px}
        .badge{font-size:11px;font-weight:700;padding:6px 13px;border-radius:2px;letter-spacing:.3px;transition:transform .2s}
        .badge:hover{transform:translateY(-2px)}
        .badge-sg{background:#BFD8B8;color:#4A7C59}
        .badge-lv{background:#E7E0FF;color:#4B3B8C}
        .badge-bb{background:#D8E8FF;color:#1E3A5F}
        .badge-lime{background:#C8F135;color:#1E3A5F}

        .timeline-section{padding:60px 28px;background:#1E3A5F}
        .tl-title{font-family:'Instrument Serif',serif;font-size:42px;color:#C8F135;font-style:italic;margin-bottom:4px}
        .tl-label{font-size:10px;font-weight:700;letter-spacing:3px;color:rgba(255,255,255,0.4);text-transform:uppercase;margin-bottom:36px}
        .tl-items{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}
        .tl-card{border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:20px;position:relative;overflow:hidden;cursor:pointer;transition:background .25s}
        .tl-card:hover{background:rgba(255,255,255,0.05)}
        .tl-year{font-family:'Space Mono',monospace;font-size:11px;color:#C8F135;margin-bottom:8px;letter-spacing:1px}
        .tl-name{font-family:'Instrument Serif',serif;font-size:17px;color:white;margin-bottom:4px}
        .tl-place{font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:10px}
        .tl-desc{font-size:12px;color:rgba(255,255,255,0.65);line-height:1.65}
        .tl-dot{position:absolute;top:20px;right:18px;width:8px;height:8px;border-radius:50%}

        .contact-section{padding:60px 28px;background:#BFD8B8;display:grid;grid-template-columns:1fr 1fr;gap:32px}
        .contact-big{font-family:'Instrument Serif',serif;font-size:clamp(36px,5vw,60px);color:#1E3A5F;line-height:1.05;font-style:italic;margin-bottom:16px}
        .contact-sub{font-size:14px;color:#4A7C59;line-height:1.7;max-width:340px;margin-bottom:28px}
        .contact-links{display:flex;flex-direction:column;gap:10px}
        .clink{display:flex;align-items:center;gap:12px;font-size:13px;font-weight:700;color:#1E3A5F;text-decoration:none;cursor:pointer;transition:opacity .2s}
        .clink:hover{opacity:.7}
        .clink-icon{width:34px;height:34px;background:rgba(30,58,95,0.1);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:16px}
        .form-box{background:#1E3A5F;border-radius:6px;padding:28px}
        .form-label{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:6px;display:block}
        .form-input{width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:3px;padding:10px 14px;color:white;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;margin-bottom:14px}
        .form-input::placeholder{color:rgba(255,255,255,0.3)}
        .form-ta{width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:3px;padding:10px 14px;color:white;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;resize:vertical;min-height:90px;margin-bottom:18px}
        .form-ta::placeholder{color:rgba(255,255,255,0.3)}
        .form-btn{width:100%;background:#C8F135;color:#1E3A5F;border:none;padding:12px;border-radius:3px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;letter-spacing:.5px;transition:opacity .2s}
        .form-btn:hover{opacity:.85}

        footer{background:#1A1A2E;padding:22px 28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
        .footer-logo{font-family:'Instrument Serif',serif;font-size:20px;color:#C8F135}
        .footer-copy{font-size:11px;color:rgba(255,255,255,0.35);font-family:'Space Mono',monospace}

        @media(max-width:768px){
          .hero{grid-template-columns:1fr}
          .hero-right{display:none}
          .patchwork{grid-template-columns:repeat(2,1fr)}
          .patch-p1{grid-column:span 2}
          .patch-p4{grid-column:span 2}
          .contact-section{grid-template-columns:1fr}
          .nav-links{display:none}
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="logo">ara.</div>
        <div className="nav-links">
          <a>Work</a><a>About</a><a>Skills</a><a>Contact</a>
        </div>
        <div className="nav-tag">Open to Work ✦</div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          {/* Washi tape deco */}
          <svg style={{position:"absolute",top:0,left:60,opacity:.5}} width="60" height="20" viewBox="0 0 60 20">
            <rect width="60" height="20" fill="#D8E8FF" rx="2"/>
            <line x1="0" y1="10" x2="60" y2="10" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
          </svg>
          <svg style={{position:"absolute",top:0,right:40,opacity:.5}} width="44" height="16" viewBox="0 0 44 16">
            <rect width="44" height="16" fill="#E7E0FF" rx="2"/>
          </svg>

          <div>
            <div className="hero-subtitle">UI/UX Designer · Surabaya</div>
            <div className="big-name">Ara<br/>Kinasih</div>
            <p style={{fontSize:13,color:"rgba(26,26,46,0.6)",lineHeight:1.7,marginTop:16,maxWidth:320}}>
              I design intuitive digital experiences through user-centered research, thoughtful interfaces, and creative problem-solving.
            </p>
          </div>

          {/* Sticky note */}
          <div className="sticky sticky-yellow" style={{bottom:80,right:32,fontSize:11,maxWidth:110}}>
            ✏️ Currently<br/>available for<br/>new projects!
          </div>

          <div>
            <div style={{display:"flex",gap:28,marginBottom:24}}>
              {[["8+","Projects"],["3","Awards"],["2+","Years"]].map(([n,l])=>(
                <div key={l}>
                  <span style={{fontFamily:"'Space Mono',monospace",fontSize:28,fontWeight:700,color:"#1E3A5F"}}>{n}</span>
                  <div style={{fontSize:10,color:"rgba(26,26,46,0.5)",fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginTop:2}}>{l}</div>
                </div>
              ))}
            </div>
            <div className="hero-btns">
              <button className="btn-lime">View Work ↓</button>
              <button className="btn-outline">Download CV ↗</button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          {/* BG grid lines */}
          <svg style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:.07}} viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
            {[50,100,150,200,250,300,350,400,450,500,550].map(y=>(
              <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeWidth="1"/>
            ))}
          </svg>

          <div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}>
            {/* Polaroid */}
            <div className="polaroid">
              <div className="polaroid-img">
                <svg width="140" height="185" viewBox="0 0 140 185">
                  <ellipse cx="70" cy="82" rx="36" ry="40" fill="rgba(255,255,255,0.6)"/>
                  <ellipse cx="70" cy="155" rx="52" ry="44" fill="rgba(255,255,255,0.4)"/>
                  <circle cx="60" cy="78" r="4.5" fill="#1E3A5F" opacity=".7"/>
                  <circle cx="80" cy="78" r="4.5" fill="#1E3A5F" opacity=".7"/>
                  <path d="M61 94 Q70 102 79 94" stroke="#1E3A5F" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".7"/>
                  <path d="M56 65 Q70 57 84 65" stroke="#1E3A5F" strokeWidth="1.5" fill="none" opacity=".35"/>
                  <ellipse cx="58" cy="90" rx="5" ry="3" fill="#FFB5B5" opacity=".5"/>
                  <ellipse cx="82" cy="90" rx="5" ry="3" fill="#FFB5B5" opacity=".5"/>
                </svg>
              </div>
              {/* Washi tape on polaroid */}
              <div style={{position:"absolute",top:-7,left:"50%",transform:"translateX(-50%) rotate(-6deg)",width:44,height:15,background:"rgba(231,224,255,.75)",borderRadius:2}}/>
              <p style={{fontFamily:"'Instrument Serif',serif",fontSize:13,color:"#666",textAlign:"center",marginTop:8}}>Ara, 2024 🌿</p>
            </div>

            {/* Lime circle sticker */}
            <div style={{position:"absolute",top:60,right:30,background:"#C8F135",borderRadius:"50%",width:64,height:64,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",transform:"rotate(12deg)"}}>
              <span style={{fontSize:8,fontWeight:700,color:"#1E3A5F",letterSpacing:.5,textAlign:"center",lineHeight:1.3}}>FRESH<br/>GRAD ✦</span>
            </div>

            {/* Sticky pink */}
            <div className="sticky sticky-pink" style={{position:"absolute",bottom:80,left:28,fontSize:10,maxWidth:90,transform:"rotate(4deg)"}}>
              Google UX Certified 🏅
            </div>

            <p className="hero-desc" style={{marginTop:24,textAlign:"center"}}>UI/UX Designer & Product Design Enthusiast</p>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <span className="marquee-text">
          {Array(2).fill("✦ USER RESEARCH &nbsp;&nbsp;&nbsp;✦ INTERACTION DESIGN &nbsp;&nbsp;&nbsp;✦ DESIGN SYSTEMS &nbsp;&nbsp;&nbsp;✦ FIGMA &nbsp;&nbsp;&nbsp;✦ USABILITY TESTING &nbsp;&nbsp;&nbsp;✦ INFORMATION ARCHITECTURE &nbsp;&nbsp;&nbsp;✦ PROTOTYPING &nbsp;&nbsp;&nbsp;✦ MOBILE APPS &nbsp;&nbsp;&nbsp;✦ ACCESSIBILITY &nbsp;&nbsp;&nbsp;✦ PRODUCT THINKING &nbsp;&nbsp;&nbsp;").join("")}
        </span>
      </div>

      {/* PROJECTS */}
      <div className="scrap-section">
        <div className="scrap-label">Selected Work</div>
        <div className="scrap-title">Featured<br/>Projects.</div>
        <div className="patchwork">
          <div className="patch patch-p1">
            <div className="patch-num">01</div>
            <span style={{fontSize:36,display:"block",marginBottom:8}}>🌿</span>
            <div className="patch-tag">Mobile App</div>
            <div className="patch-title">MindBloom — Mental Wellness App</div>
            <p style={{fontSize:12,color:"rgba(26,26,46,0.65)",lineHeight:1.6,marginTop:6,maxWidth:260}}>Users struggled with clinical, overwhelming mental health interfaces. Redesigned from scratch.</p>
            <div className="patch-result">✦ +42% DAU · 4.8★ App Store</div>
            <div className="patch-tools">
              <span className="tool-pill">Figma</span><span className="tool-pill">FigJam</span><span className="tool-pill">Maze</span>
            </div>
          </div>
          <div className="patch patch-p2">
            <div className="patch-num">02</div>
            <span style={{fontSize:36,display:"block",marginBottom:8}}>📈</span>
            <div className="patch-tag">Web App</div>
            <div className="patch-title">Reksa — Investment Dashboard</div>
            <p style={{fontSize:12,color:"rgba(26,26,46,0.65)",lineHeight:1.6,marginTop:6}}>First-time investor onboarding redesign.</p>
            <div className="patch-result">✦ -67% drop-off</div>
            <div className="patch-tools"><span className="tool-pill">Figma</span><span className="tool-pill">Principle</span></div>
          </div>
          <div className="patch patch-p3">
            <div className="patch-num">03</div>
            <span style={{fontSize:36,display:"block",marginBottom:8}}>🛍️</span>
            <div className="patch-tag">E-Commerce</div>
            <div className="patch-title">Pasar Lokal — UMKM Marketplace</div>
            <p style={{fontSize:12,color:"rgba(26,26,46,0.65)",lineHeight:1.6,marginTop:6}}>Dignified storefront for local vendors.</p>
            <div className="patch-result">🥇 National UI/UX 2024</div>
            <div className="patch-tools"><span className="tool-pill">Figma</span><span className="tool-pill">Canva</span></div>
          </div>
          <div className="patch patch-p4">
            <div className="patch-num">04</div>
            <span style={{fontSize:36,display:"block",marginBottom:8}}>🎓</span>
            <div className="patch-tag">Web Platform</div>
            <div className="patch-title" style={{fontSize:18}}>Kampus Connect — Campus Portal</div>
            <p style={{fontSize:12,color:"rgba(26,26,46,0.65)",lineHeight:1.6,marginTop:6,maxWidth:340}}>5 fragmented systems unified into one. Students save hours weekly.</p>
            <div className="patch-result">✦ Task time -55% · Funded Student Project</div>
            <div className="patch-tools"><span className="tool-pill">Figma</span><span className="tool-pill">FigJam</span><span className="tool-pill">Notion</span><span className="tool-pill">Miro</span></div>
          </div>
          <div className="patch patch-p5">
            <div className="patch-num">05</div>
            <span style={{fontSize:30,display:"block",marginBottom:8}}>🏥</span>
            <div className="patch-tag">Healthcare</div>
            <div className="patch-title">SehatKu — Telemedicine</div>
            <p style={{fontSize:12,color:"rgba(26,26,46,0.65)",lineHeight:1.6,marginTop:6}}>Freelance. Simplified doctor booking flow.</p>
          </div>
          <div className="patch patch-p6">
            <div className="patch-num">06</div>
            <span style={{fontSize:30,display:"block",marginBottom:8}}>✈️</span>
            <div className="patch-tag">Travel</div>
            <div className="patch-title">Jelajah — Travel Planner</div>
            <p style={{fontSize:12,color:"rgba(26,26,46,0.65)",lineHeight:1.6,marginTop:6}}>Freelance. Itinerary-first design.</p>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="skills-section">
        <div style={{fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#4A7C59",marginBottom:8}}>Capabilities</div>
        <div style={{fontFamily:"'Instrument Serif',serif",fontSize:42,color:"#1E3A5F",fontStyle:"italic"}}>Skills & Tools</div>
        <div className="skills-row">
          <div className="skill-cat">
            <div className="skill-cat-title">🔍 UX</div>
            <div className="badges">
              {["User Research","User Flow","Info Architecture","Usability Testing","Wireframing"].map(s=>(
                <span key={s} className="badge badge-sg">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-cat">
            <div className="skill-cat-title">🎨 UI</div>
            <div className="badges">
              {["Prototyping","Design Systems","Interaction Design","Visual Design","Responsive Design"].map(s=>(
                <span key={s} className="badge badge-bb">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-cat">
            <div className="skill-cat-title">🛠️ Tools</div>
            <div className="badges">
              {["Figma","FigJam","Miro","Canva","Adobe Illustrator","Notion"].map(s=>(
                <span key={s} className="badge badge-lv">{s}</span>
              ))}
              {["Maze","Hotjar"].map(s=>(
                <span key={s} className="badge badge-lime">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="timeline-section">
        <div style={{fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"rgba(200,241,53,0.5)",marginBottom:8}}>My Journey</div>
        <div className="tl-title">Experience &<br/>Achievements.</div>
        <div className="tl-label">Where I've been</div>
        <div className="tl-items">
          {[
            {year:"2024",name:"UI/UX Intern",place:"Startup Fintech · Jakarta",desc:"Redesigned onboarding flow, reducing drop-off 30%. Worked across 3 product squads.",dot:"#C8F135"},
            {year:"2024",name:"🥇 National UI/UX Competition",place:"Kominfo Digital Award",desc:"First place for Pasar Lokal — marketplace redesign for local Indonesian SMEs.",dot:"#FFD700"},
            {year:"2023",name:"Freelance Product Designer",place:"3 Clients · Remote",desc:"End-to-end design for e-learning, travel app, and food-tech startup.",dot:"#BFD8B8"},
            {year:"2023",name:"Head of Design — BEM",place:"Universitas Airlangga",desc:"Led 6-person design team, brand identity + digital assets for 20+ events.",dot:"#E7E0FF"},
            {year:"2022",name:"Google UX Design Certificate",place:"Coursera · Google",desc:"Completed 7-course specialization covering the full UX design process end-to-end.",dot:"#D8E8FF"},
            {year:"2020–2024",name:"S1 Information Systems",place:"Universitas Airlangga · GPA 3.78",desc:"Specialized in HCI, UX research methods, and product development.",dot:"#FFB5B5"},
          ].map((item,i)=>(
            <div key={i} className="tl-card">
              <div className="tl-dot" style={{background:item.dot}}/>
              <div className="tl-year">{item.year}</div>
              <div className="tl-name">{item.name}</div>
              <div className="tl-place">{item.place}</div>
              <div className="tl-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact-section">
        <div>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:"#4A7C59",marginBottom:8}}>Let's Talk</div>
          <div className="contact-big">Let's build<br/>something<br/>together.</div>
          <p className="contact-sub">I'm open to full-time roles, internships, and freelance collaborations. Response within 24 hours. 🌿</p>
          <div className="contact-links">
            {[
              {icon:"📧",label:"ara.kinasih@email.com"},
              {icon:"💼",label:"linkedin.com/in/arakinasih"},
              {icon:"🎨",label:"behance.net/arakinasih"},
              {icon:"🏀",label:"dribbble.com/arakinasih"},
              {icon:"🐙",label:"github.com/arakinasih"},
            ].map(({icon,label})=>(
              <div key={label} className="clink">
                <div className="clink-icon">{icon}</div>
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="form-box">
          <label className="form-label">Your name</label>
          <input className="form-input" placeholder="Budi Santoso"/>
          <label className="form-label">Email</label>
          <input className="form-input" placeholder="budi@email.com"/>
          <label className="form-label">Message</label>
          <textarea className="form-ta" placeholder="Hi Ara, I'd love to collaborate on..."/>
          <button className="form-btn">Send Message ✦</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">ara.</div>
        <div className="footer-copy">© 2024 Ara Kinasih — Designed in Surabaya</div>
        <div className="footer-copy">Open to work · Built with ♡</div>
      </footer>
    </div>
  );
}
