import { useState, useEffect } from "react";

const data = [
  {
    bg: "#f3add4ff", tag: "Mobile App", tagBg: "#ff44b7ff",
    title: "Kpop Art E-commerce",
    desc: "Kpop fans and collectors often face cluttered, unorganized e-commerce interfaces when buying fan art and merchandise. I designed an intuitive e-commerce ecosystem—focusing on visual hierarchy, seamless checkout flows, and custom community storefronts to elevate the shopping experience.",
    images: [
      "/projects/kpop_art.png"
    ]
  },
  {
    bg: "#fbe35cff", tag: "Web Dashboard", tagBg: "#ffaa29e2",
    title: "Admin Dashboard",
    desc: "Managing massive operational data often leaves platform administrators overwhelmed by complex tables and confusing navigations. I redesigned this centralized admin ecosystem to streamline user management, data monitoring, and real-time analytics through data density optimization and clear visual hierarchies.",
    images: [
      "/projects/dashboard.png",
      "/projects/dashboard1.png",
      "/projects/dashboard2.png"
    ]
  },
  {
    bg: "#3a608bff", tag: "Redesign", tagBg: "#3a608bff",
    title: "Goodreads Mobile: A Modern Concept",
    desc: "Local Indonesian vendors lacked dignified, easy-to-navigate digital storefronts. Built end-to-end marketplace experience emphasizing trust and local identity.",
    images: [
      "/projects/good_main.png",
      "/projects/good1.png",
      "/projects/good2.png",
      "/projects/good3.png",
      "/projects/good4.png"
    ]
  },
  {
    bg: "#ed7af5ff", tag: "Mobile App", tagBg: "#9A7A10",
    title: "BMI Calculator",
    desc: "Many health applications rely on clinical, text-heavy forms that make tracking fitness goals feel tedious. I created a minimalist and interactive Body Mass Index calculator that simplifies data entry through intuitive sliders and delivers instant, visually driven health classification and body mass insights.",      
    images: [
      "/projects/bmi.png"
    ]
  },
  {
    bg: "#7cdf7cff", tag: "IoT-Based Mobile App", tagBg: "#A8305E",
    title: "Monitoring Gas: Leak Protection Gas",
    desc: "Industrial and household environments often lack immediate warning systems for hazardous gas leaks, leading to late detections and critical risks. I designed an end-to-end IoT monitoring application that visualizes real-time gas level telemetry and instantly triggers push notifications to users' devices the moment a leak threshold is breached.",
    images: [
      "/projects/gas.png"
    ]
  },
  {
    bg: "#f4b8f5ff", tag: "Final Projects", tagBg: "#2266A0",
    title: "Sentiment Analysis For Predicting",
    desc: "Raw public text data holds vast latent insights, but businesses often struggle to convert scattered social media opinions into actionable forecasts. I developed an NLP pipeline using advanced deep learning architectures to process massive public sentiments and build regression models capable of predicting future trends and behavior analytics.",
    images: [
      "/projects/2.png",
      "/projects/3.png",
      "/projects/4.png",
      "/projects/5.png",
      "/projects/6.png",
      "/projects/7.png",
      "/projects/8.png",
      "/projects/9.png"
    ]
  }
];

export default function Portfolio() {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const [lightbox, setLightbox] = useState(null); // { images: [...], idx: 0 }
  const [isHovered, setIsHovered] = useState(false);
  const totalProjects = data.length;

  const nextProject = () => setFeaturedIdx((prev) => (prev + 1) % totalProjects);
  const prevProject = () => setFeaturedIdx((prev) => (prev - 1 + totalProjects) % totalProjects);

  // Auto-rotate: setiap 3.5 detik, pause saat hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setFeaturedIdx((prev) => (prev + 1) % totalProjects);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const openLightbox = (images, idx = 0) => setLightbox({ images, idx });
  const closeLightbox = () => setLightbox(null);
  const lbNext = (e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, idx: (lb.idx + 1) % lb.images.length })); };
  const lbPrev = (e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, idx: (lb.idx - 1 + lb.images.length) % lb.images.length })); };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FFF9F0", color: "#1A1A2E", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;700;800&family=Space+Mono:wght@400;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        :root{
          --cr:#FFF9F0;--cn:#1A1A2E;--sg:#BFD8B8;--bb:#D8E8FF;--lv:#E7E0FF;--bg:#F3EDE5;
          --lime:#C8F135;--navy:#1E3A5F;--mg:#4A7C59;
        }
        html {
          scroll-behavior: smooth; /* <--- Tambahkan ini agar scroll-nya mulus */
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
        .hero-desc{font-size:14px;color:rgba(255, 255, 255, 0.65);line-height:1.75;max-width:300px;margin-bottom:32px}
        .hero-btns{display:flex;gap:12px;flex-wrap:wrap}
        .btn-lime{background:#C8F135;color:#1E3A5F;border:none;padding:12px 26px;border-radius:2px;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:.5px;transition:opacity .2s}
        .btn-lime:hover{opacity:.85}
        .btn-outline {background: transparent; color:#1A1A2E; border-radius: 99px;border: 1.5px solid #1A1A2E;  padding: 10px 28px; font-size: 13px;font-weight: 700;cursor: pointer;letter-spacing: 0.5px;text-transform: uppercase; text-decoration: underline; text-underline-offset: 3px; transition: all 0.2s ease;}
        .btn-outline:hover {border-color: #1A1A2E;color: #1A1A2E;background: #C8F135;}
        .polaroid{background:white;padding:12px 12px 40px;box-shadow:4px 6px 18px rgba(0,0,0,0.18);transform:rotate(-3deg);position:relative;display:inline-block;transition:transform .4s}
        .polaroid:hover{transform:rotate(0deg) scale(1.02)}
        .polaroid-img{width:200px;height:230px;background:linear-gradient(135deg,#BFD8B8,#D8E8FF 60%,#E7E0FF);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}

        .sticky{padding:12px 14px;font-size:12px;font-weight:700;line-height:1.5;box-shadow:2px 3px 10px rgba(0,0,0,0.1);position:absolute}
        .sticky-yellow{background:#FDEFB2;color:#7A6000;transform:rotate(2deg)}
        .sticky-pink{background:#FFCCE5;color:#8B0050;transform:rotate(-4deg)}

        .marquee-strip{background:#C8F135;padding:10px 0;overflow:hidden;white-space:nowrap}
        .marquee-text{font-size:12px;font-weight:700;color:#1E3A5F;letter-spacing:2px;text-transform:uppercase;display:inline-block;animation:marquee 28s linear infinite}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

        .wrap{background:#F3EDE5 ;padding:48px 32px 56px;font-family:'DM Sans',sans-serif;min-height:420px;position:relative}
        .sec-header{text-align:center;margin-bottom:40px}
        .sec-label{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(39, 35, 35, 0.55);margin-bottom:6px}
        .sec-title{font-family:'Instrument Serif',serif;font-size:38px;font-style:italic;color:#10,30,80,0.72;line-height:1}
        .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;justify-content:center;max-width:1000px;margin:0 auto}
        
        .folder{width:140px;cursor:pointer;text-align:center;flex-shrink:0}
        .folder-body{width:140px;height:130px;border-radius:18px;position:relative;display:flex;align-items:flex-end;justify-content:center;padding-bottom:14px;transition:transform .18s cubic-bezier(.34,1.56,.64,1)}
        .folder:hover .folder-body{transform:translateY(-8px) scale(1.04)}
        .folder-tab{position:absolute;top:-11px;left:14px;width:50px;height:14px;border-radius:6px 6px 0 0}
        .folder-emoji{font-size:52px;position:absolute;top:-28px;left:50%;transform:translateX(-50%);filter:drop-shadow(0 4px 8px rgba(0,0,0,0.18))}
        .folder-name{font-size:13px;font-weight:800;color:#1A1A2E;margin-top:10px;line-height:1.3;letter-spacing:.2px}

        /* BIG FEATURED FOLDER — 2-COLUMN LAYOUT */
        .featured-wrap{display:flex;align-items:stretch;justify-content:center;gap:48px;padding:12px 0 40px;max-width:1000px;margin:0 auto}
        .big-folder-col{display:flex;flex-direction:column;align-items:flex-start;gap:16px;flex-shrink:0}
        @keyframes floatFolder{
          0%,100%{transform:translateY(0px);filter:drop-shadow(0 24px 56px rgba(0,0,0,0.16))}
          50%{transform:translateY(-12px);filter:drop-shadow(0 36px 64px rgba(0,0,0,0.10))}
        }
        .big-folder{position:relative;width:420px;cursor:default;animation:floatFolder 4s ease-in-out infinite}
        .big-folder-tab{height:40px;width:150px;border-radius:16px 16px 0 0;position:relative;display:flex;align-items:flex-end;justify-content:center;padding-bottom:0;margin-left:20px;flex-shrink:0}
        .big-folder-emoji{font-size:70px;position:absolute;top:-40px;left:50%;transform:translateX(-50%);filter:drop-shadow(0 6px 14px rgba(0,0,0,0.22));pointer-events:none}
        .big-folder-body{width:420px;height:380px;border-radius:0 22px 22px 22px;overflow:hidden;position:relative;background:#E8E8EC}
        .big-folder-img{width:100%;height:100%;object-fit:cover;display:block}
        .big-folder-placeholder{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:rgba(30,58,95,0.3);letter-spacing:1px;text-transform:uppercase;gap:10px}
        .big-folder-tag{position:absolute;bottom:14px;left:14px;font-size:9px;font-weight:800;letter-spacing:2px;text-transform:uppercase;padding:5px 14px;border-radius:99px;color:#fff;backdrop-filter:blur(4px)}

        /* RIGHT INFO PANEL */
        .proj-info-col{flex:1;display:flex;flex-direction:column;justify-content:center;gap:0;min-width:0}
        .proj-info-counter{font-family:'Space Mono',monospace;font-size:11px;color:rgba(30,58,95,0.35);font-weight:700;letter-spacing:1px;margin-bottom:16px}
        .proj-info-tag{display:inline-block;font-size:9px;font-weight:800;letter-spacing:2px;text-transform:uppercase;padding:5px 14px;border-radius:99px;color:#fff;margin-bottom:14px}
        .proj-info-title{font-family:'Instrument Serif',serif;font-size:38px;color:#1A1A2E;font-style:italic;line-height:1.1;margin-bottom:18px}
        .proj-info-desc{font-size:13px;color:#5A5A7A;line-height:1.8;margin-bottom:32px}
        .proj-info-navs{display:flex;align-items:center;gap:8px}

        /* NAV BUTTONS — MINIMALIS */
        .proj-nav-btn{width:36px;height:36px;border-radius:8px;border:none;background:transparent;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all .18s;color:rgba(30,58,95,0.45);position:relative;padding:0}
        .proj-nav-btn::before,.proj-nav-btn::after{content:'';position:absolute;width:10px;height:2px;background:currentColor;border-radius:2px;transition:all .18s}
        .proj-nav-btn.btn-up::before{transform:rotate(-45deg) translate(3px,3px)}
        .proj-nav-btn.btn-up::after{transform:rotate(45deg) translate(-3px,3px)}
        .proj-nav-btn.btn-down::before{transform:rotate(45deg) translate(3px,-3px)}
        .proj-nav-btn.btn-down::after{transform:rotate(-45deg) translate(-3px,-3px)}
        .proj-nav-btn:hover{color:#1E3A5F;background:rgba(30,58,95,0.07);border-radius:8px}
        .proj-counter{font-family:'Space Mono',monospace;font-size:13px;color:rgba(30,58,95,0.5);font-weight:700}

        /* DOTS (vertical) */
        .proj-dots{display:flex;flex-direction:column;gap:7px;justify-content:center}
        .proj-dot{width:8px;height:8px;border-radius:50%;background:rgba(30,58,95,0.15);transition:all .22s;cursor:pointer}
        .proj-dot.active{background:#1E3A5F;height:24px;border-radius:4px}

        /* LIGHTBOX */
        .lb-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:2000;display:flex;align-items:center;justify-content:center;cursor:zoom-out;animation:lbFade .2s ease}
        @keyframes lbFade{from{opacity:0}to{opacity:1}}
        .lb-img{max-width:90vw;max-height:85vh;object-fit:contain;border-radius:8px;box-shadow:0 32px 80px rgba(0,0,0,0.6);cursor:default;display:block}
        .lb-close{position:fixed;top:20px;right:24px;width:38px;height:38px;background:rgba(255,255,255,0.12);border:none;border-radius:50%;color:#fff;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s;z-index:10}
        .lb-close:hover{background:rgba(255,255,255,0.28)}
        .lb-btn{position:fixed;top:50%;transform:translateY(-50%);width:48px;height:48px;background:rgba(255,255,255,0.12);border:none;border-radius:50%;color:#fff;font-size:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s;z-index:10}
        .lb-btn:hover{background:rgba(255,255,255,0.28)}
        .lb-btn-prev{left:20px}
        .lb-btn-next{right:20px}
        .lb-counter{position:fixed;bottom:22px;left:50%;transform:translateX(-50%);font-family:'Space Mono',monospace;font-size:12px;color:rgba(255,255,255,0.5);z-index:10}
        .lb-dots{position:fixed;bottom:48px;left:50%;transform:translateX(-50%);display:flex;gap:7px;z-index:10}
        .lb-dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.3);transition:all .2s}
        .lb-dot.active{background:#C8F135;width:18px;border-radius:4px}
        .slide-img{width:100%;height:100%;object-fit:cover}
        .slide-btn{position:absolute;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.4);color:white;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;font-weight:bold;font-size:18px;display:flex;align-items:center;justify-content:center;transition:background 0.2s;z-index:5}
        .slide-btn:hover{background:rgba(0,0,0,0.7)}
        .slide-btn.prev{left:12px}
        .slide-btn.next{right:12px}
        .slide-dots{position:absolute;bottom:10px;display:flex;gap:6px;z-index:5}
        .dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.45);transition:all 0.2s}
        .dot.active{background:#C8F135;width:18px;border-radius:4px}
        .folder-cover{width:90%;height:85%;object-fit:cover;border-radius:10px 10px 0 0;border:1px solid rgba(0,0,0,0.05)}

        .overlay{display:none;position:absolute;inset:0;background:rgba(10,30,80,0.72);z-index:10;align-items:center;justify-content:center;border-radius:0}
        .overlay.open{display:flex}
        .popup{background:#fff;border-radius:20px;width:750px;max-width:94%;overflow:hidden;position:relative}
        .popup-header{height:200px;display:flex;align-items:center;justify-content:center;position:relative;font-size:88px}
        .popup-tab-tag{position:absolute;top:14px;left:14px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;padding:4px 12px;border-radius:99px;color:#fff}
        .popup-body{padding:22px 24px 24px}
        .popup-proj-title{font-family:'Instrument Serif',serif;font-size:24px;color:#1A1A2E;font-style:italic;margin-bottom:4px}
        .popup-role{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#4A7C59;margin-bottom:12px}
        .popup-desc{font-size:13px;color:#4A4A6A;line-height:1.7;margin-bottom:16px}
        .popup-pills{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:18px}
        .pill{font-size:11px;font-weight:700;padding:4px 12px;border-radius:99px;background:#F3EDE5;color:#1A1A2E}
        .popup-result{font-size:12px;font-weight:700;color:#4A7C59;background:#EBF5E0;padding:8px 14px;border-radius:8px;margin-bottom:18px}
        .popup-close{position:absolute;top:12px;right:14px;width:30px;height:30px;background:rgba(0,0,0,0.15);border:none;border-radius:50%;color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:'DM Sans',sans-serif;font-weight:700}
        .popup-btns{display:flex;gap:10px}
        .btn-primary{background:#1E3A5F;color:#fff;border:none;padding:10px 22px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif}
        .btn-sec{background:#F3EDE5;color:#1A1A2E;border:none;padding:10px 22px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif}

        .popup-img-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px}
        .mock-screen{border-radius:10px;overflow:hidden;height:90px;display:flex;align-items:center;justify-content:center;font-size:32px;position:relative}
        .mock-bar{position:absolute;top:0;left:0;right:0;height:22px;display:flex;align-items:center;padding:0 8px;gap:4px;background:rgba(0,0,0,0.12)}
        .mock-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,0.5)}
        .mock-content{font-size:28px;margin-top:14px}

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

        /* ── EXPERIENCE & AWARDS — 2 COLUMN Y2K RETRO ── */
        .timeline-section{padding:70px 48px;background:#1A1035;position:relative;overflow:hidden}
        .timeline-section::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(200,241,53,0.04) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(200,241,53,0.04) 40px);pointer-events:none}
        .exp-awards-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;max-width:1100px;margin:0 auto}

        /* HEADER */
        .tl-section-label{font-family:'Space Mono',monospace;font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#C8F135;margin-bottom:6px;opacity:0.7}
        .tl-section-title{font-family:'Instrument Serif',serif;font-size:36px;color:#fff;font-style:italic;line-height:1.1;margin-bottom:6px}
        .tl-section-title span{color:#C8F135}
        .tl-section-sub{font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:2px;text-transform:uppercase;font-family:'Space Mono',monospace;margin-bottom:36px;border-top:1px solid rgba(200,241,53,0.2);padding-top:12px}

        /* EXPERIENCE — vertical timeline */
        .exp-list{display:flex;flex-direction:column;gap:0}
        .exp-item{display:flex;gap:20px;position:relative}
        .exp-item:not(:last-child)::before{content:'';position:absolute;left:7px;top:18px;bottom:-1px;width:1px;background:linear-gradient(180deg,rgba(200,241,53,0.5),rgba(200,241,53,0.05));pointer-events:none}
        .exp-dot-col{display:flex;flex-direction:column;align-items:center;gap:0;padding-top:4px}
        .exp-dot{width:15px;height:15px;border-radius:50%;border:2px solid #C8F135;background:#1A1035;flex-shrink:0;position:relative;z-index:1;box-shadow:0 0 10px rgba(200,241,53,0.4)}
        .exp-body{padding-bottom:32px;flex:1}
        .exp-year{font-family:'poppins';font-size:10px;color:#C8F135;letter-spacing:2px;margin-bottom:4px;opacity:0.8}
        .exp-name{font-family:'Instrument Serif',serif;font-size:18px;color:#fff;margin-bottom:2px;line-height:1.2}
        .exp-place{font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:8px;letter-spacing:.5px}
        .exp-desc{font-size:12px;color:rgba(255,255,255,0.6);line-height:1.7;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:4px;padding:10px 12px}

        /* AWARDS — retro ribbon cards */
        .awards-list{display:flex;flex-direction:column;gap:16px}
        .award-card{position:relative;background:linear-gradient(135deg,rgba(200,241,53,0.06) 0%,rgba(30,58,95,0.4) 100%);border:1px solid rgba(200,241,53,0.2);border-radius:2px;padding:20px 20px 20px 24px;transition:all .25s;overflow:hidden}
        .award-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,#C8F135,#7FFF00)}
        .award-card:hover{background:linear-gradient(135deg,rgba(200,241,53,0.12) 0%,rgba(30,58,95,0.6) 100%);transform:translateX(4px)}
        .award-ribbon{display:inline-flex;align-items:center;gap:6px;font-family:'Space Mono',monospace;font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#1A1035;background:#C8F135;padding:3px 10px;border-radius:0;margin-bottom:10px;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 50%,calc(100% - 8px) 100%,0 100%)}
        .award-title{font-family:'Instrument Serif',serif;font-size:18px;color:#fff;margin-bottom:4px;font-style:italic}
        .award-org{font-size:11px;color:rgba(200,241,53,0.7);letter-spacing:1px;margin-bottom:8px;font-family:'Space Mono',monospace}
        .award-desc{font-size:12px;color:rgba(255,255,255,0.55);line-height:1.65}
        .award-year-badge{position:absolute;top:16px;right:16px;font-family:'poppins';font-size:10px;color:rgba(200,241,53,0.5);letter-spacing:1px}

        @media(max-width:900px){.exp-awards-grid{grid-template-columns:1fr;gap:48px}}

        .contact-section{padding:80px 28px;background:#BFD8B8;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:20px}
        .contact-big{font-family:'Instrument Serif',serif;font-size:clamp(38px,6vw,64px);color:#1E3A5F;line-height:1.05;font-style:italic;margin-bottom:12px}
        .contact-sub{font-size:14px;color:#4A7C59;line-height:1.7;max-width:520px;margin:0 auto 24px}
        .clink-logo-btn{width:48px;height:48px;background:rgba(30,58,95,0.08);border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .22s ease;border:1.5px solid rgba(30,58,95,0.15)}
        .clink-logo-btn:hover{background:#1E3A5F;border-color:#1E3A5F;transform:translateY(-4px);box-shadow:0 8px 20px rgba(30,58,95,0.2)}
        .clink-logo-btn:hover .contact-logo-img{filter:invert(1) brightness(2)}
        .contact-logo-img{width:22px;height:22px;object-fit:contain;transition:all .22s ease}

        footer{background:#1A1A2E;padding:22px 28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
        .footer-logo{font-family:'Instrument Serif',serif;font-size:20px;color:#C8F135}
        .footer-copy{font-size:11px;color:rgba(255,255,255,0.35);font-family:'Space Mono',monospace}

        @media(max-width:768px){
          .hero{grid-template-columns:1fr}
          .hero-right{display:none}
          .contact-section{grid-template-columns:1fr}
          .nav-links{display:none}
          .grid{grid-template-columns:repeat(2,4fr)}
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="logo">triyas.</div>
        <div className="nav-links">
          <a href="#projects">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-tag">Open to Work ✦</div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <svg style={{ position: "absolute", top: 0, left: 60, opacity: .5 }} width="60" height="20" viewBox="0 0 60 20">
            <rect width="60" height="20" fill="#D8E8FF" rx="2" />
            <line x1="0" y1="10" x2="60" y2="10" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
          </svg>
          <svg style={{ position: "absolute", top: 0, right: 40, opacity: .5 }} width="44" height="16" viewBox="0 0 44 16">
            <rect width="44" height="16" fill="#E7E0FF" rx="2" />
          </svg>

          <div>
            <div className="hero-subtitle">UI/UX Designer · Surabaya</div>
            <div className="big-name">Triyas<br />Rahmadiyanti</div>
            <p style={{ fontSize: 13, color: "rgba(26,26,46,0.6)", lineHeight: 1.7, marginTop: 16, maxWidth: 320 }}>
              I design intuitive digital experiences through user-centered research, thoughtful interfaces, and creative problem-solving.
            </p>
          </div>

          <div className="sticky sticky-yellow" style={{ bottom: 80, right: 32, fontSize: 11, maxWidth: 110 }}>
            ✏️ Currently<br />available for<br />new projects!
          </div>

         <div>
            <div style={{display:"flex",gap:28,marginBottom:24}}>
              {[["6","Projects"],["6","Awards"]].map(([n,l])=>(
                <div key={l}>
                  <span style={{fontFamily:"'Space Mono',monospace",fontSize:28,fontWeight:700,color:"#1E3A5F"}}>{n}</span>
                  <div style={{fontSize:10,color:"rgba(26,26,46,0.5)",fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginTop:2}}>{l}</div>
                </div>
              ))}
            </div>
            <div className="hero-btns">
              <a 
                href="https://drive.google.com/file/d/1sNuI76G7_Ia2CJuDC7WZzUBZk0BWh0IM/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Download CV ↗
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: .07 }} viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
            {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550].map(y => (
              <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeWidth="1" />
            ))}
          </svg>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
            {/* Polaroid */}
            <div className="polaroid">
              <div className="polaroid-img">
                <img 
                  src={process.env.PUBLIC_URL + "/DSCF9971.JPG"} 
                  alt="Profil Triyas" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </div>
              {/* Washi tape on polaroid */}
              <div style={{ position: "absolute", top: -7, left: "50%", transform: "translateX(-50%) rotate(-6deg)", width: 44, height: 15, background: "rgba(231,224,255,.75)", borderRadius: 2 }} />
              <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: 13, color: "#666", textAlign: "center", marginTop: 8 }}>Triyas, 2026 🌿</p>
            </div>

            {/* Lime circle sticker */}
            <div style={{ position: "absolute", top: 60, right: 30, background: "#C8F135", borderRadius: "50%", width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", transform: "rotate(12deg)" }}>
              <span style={{ fontSize: 8, fontWeight: 700, color: "#1E3A5F", letterSpacing: .5, textAlign: "center", lineHeight: 1.3 }}>FRESH<br />GRAD ✦</span>
            </div>

            {/* Sticky pink */}
            <div className="sticky sticky-pink" style={{ position: "absolute", bottom: 80, left: 28, fontSize: 10, maxWidth: 90, transform: "rotate(4deg)" }}>
              Computer Engineering
            </div>
            <p className="hero-desc" style={{ marginTop: 24, textAlign: "center" }}>UI/UX Designer & Product Design Enthusiast</p>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <span className="marquee-text">
          {Array(2).fill("✦ USER RESEARCH \u00A0\u00A0\u00A0✦ INTERACTION DESIGN \u00A0\u00A0\u00A0✦ DESIGN SYSTEMS \u00A0\u00A0\u00A0✦ FIGMA \u00A0\u00A0\u00A0✦ USABILITY TESTING \u00A0\u00A0\u00A0✦ INFORMATION ARCHITECTURE \u00A0\u00A0\u00A0✦ PROTOTYPING \u00A0\u00A0\u00A0✦ MOBILE APPS \u00A0\u00A0\u00A0✦ ACCESSIBILITY \u00A0\u00A0\u00A0✦ PRODUCT THINKING \u00A0\u00A0\u00A0").join("")}
        </span>
      </div>

      {/* PROJECTS SECTION */}
      <div className="wrap" id="projects">
        <div className="sec-header">
          <div className="sec-label">Selected Work</div>
          <div className="sec-title">Portfolio.</div>
        </div>

        {/* 2-COLUMN: FOLDER KIRI + DESKRIPSI KANAN */}
        <div className="featured-wrap">

          {/* DOTS — vertikal di paling kiri */}
          <div className="proj-dots">
            {data.map((_, i) => (
              <div
                key={i}
                className={`proj-dot${i === featuredIdx ? " active" : ""}`}
                onClick={() => setFeaturedIdx(i)}
              />
            ))}
          </div>

          {/* KIRI: FOLDER BESAR */}
          <div
            className="big-folder-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="big-folder">
              <div className="big-folder-tab" style={{ background: data[featuredIdx].bg }}>
                <div className="big-folder-emoji">{data[featuredIdx].emoji}</div>
              </div>
              <div className="big-folder-body">
                {data[featuredIdx].images && data[featuredIdx].images[0] ? (
                  <img
                    src={data[featuredIdx].images[0]}
                    alt={data[featuredIdx].title}
                    className="big-folder-img"
                    style={{ cursor: "zoom-in" }}
                    onClick={() => openLightbox(data[featuredIdx].images, 0)}
                    title="Klik untuk memperbesar"
                  />
                ) : (
                  <div className="big-folder-placeholder">
                    <span style={{ fontSize: 32 }}>📸</span>
                    <span>Add image to /public/projects/</span>
                  </div>
                )}
                <span className="big-folder-tag" style={{ background: data[featuredIdx].tagBg }}>
                  {data[featuredIdx].tag}
                </span>
              </div>
            </div>
          </div>

          {/* KANAN: DESKRIPSI + NAVIGASI */}
          <div className="proj-info-col">
            <div className="proj-info-counter">{String(featuredIdx + 1).padStart(2, "0")} &mdash; {String(data.length).padStart(2, "0")}</div>
            <span className="proj-info-tag" style={{ background: data[featuredIdx].tagBg }}>{data[featuredIdx].tag}</span>
            <div className="proj-info-title">{data[featuredIdx].title}</div>
            <div className="proj-info-desc">{data[featuredIdx].desc}</div>
            <div className="proj-info-navs">
              <button className="proj-nav-btn btn-up" onClick={prevProject} title="Proyek sebelumnya"></button>
              <button className="proj-nav-btn btn-down" onClick={nextProject} title="Proyek berikutnya"></button>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: "rgba(30,58,95,0.3)", marginLeft: 4, textTransform: "uppercase" }}>
                {String(featuredIdx + 1).padStart(2,"0")} / {String(data.length).padStart(2,"0")}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* LIGHTBOX — popup foto besar */}
      {lightbox && (
        <div className="lb-overlay" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox}>✕</button>

          {lightbox.images.length > 1 && (
            <button className="lb-btn lb-btn-prev" onClick={lbPrev}>‹</button>
          )}

          <img
            className="lb-img"
            src={lightbox.images[lightbox.idx]}
            alt={`Foto ${lightbox.idx + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button className="lb-btn lb-btn-next" onClick={lbNext}>›</button>
          )}

          {lightbox.images.length > 1 && (
            <div className="lb-dots">
              {lightbox.images.map((_, i) => (
                <div
                  key={i}
                  className={`lb-dot${i === lightbox.idx ? " active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); setLightbox(lb => ({...lb, idx: i})); }}
                />
              ))}
            </div>
          )}

          <div className="lb-counter">
            {lightbox.idx + 1} / {lightbox.images.length} &nbsp;—&nbsp; klik di luar untuk menutup
          </div>
        </div>
      )}

      {/* SKILLS */}
      <div className="skills-section" id="skills">
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#4A7C59", marginBottom: 8 }}>Capabilities</div>
        <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 42, color: "#1E3A5F", fontStyle: "italic" }}>Skills & Tools</div>
        <div className="skills-row">
          <div className="skill-cat">
            <div className="skill-cat-title"> Softskills</div>
            <div className="badges">
              {["User Empathy", "Problem Solving", "Effective Communication", "Collaboration", "Critical Thinking", "Creative Thinking", "Time Management"].map(s => (
                <span key={s} className="badge badge-sg">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-cat">
            <div className="skill-cat-title"> Tools</div>
            <div className="badges">
              {["Figma", "Miro", "Canva", "CorelDraw", "Notion", "Microsoft Office (Word, Point, Excel)"].map(s => (
                <span key={s} className="badge badge-lv">{s}</span>
              ))}
              {["C", "HTML", "Python","JavaScript", "PHP","Java","CSS","Wireframing"].map(s => (
                <span key={s} className="badge badge-lime">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE & AWARDS */}
      <div className="timeline-section" id="experience">
        <div className="exp-awards-grid">

          {/* ── KIRI: AWARDS ── */}
          <div>
            <div className="tl-section-label">✦ Recognitions</div>
            <div className="tl-section-title">Awards &<br /><span>Achievements.</span></div>
            <div className="tl-section-sub">Milestones & Honors</div>
            <div className="awards-list">
              {[
                {
                  ribbon: "🏆 PKM Grant",
                  title: "Autonomous Quadcopter for Fire Detection and Suppression",
                  org: "PKM Funding Grant Recipient",
                  year: "2025",
                  desc: ""
                },
                {
                  ribbon: "🏆 PKM Grant",
                  title: "Hybrid Unmanned Aerial Vehicle",
                  org: "PKM Funding Grant Recipient",
                  year: "2024",
                  desc: ""
                },
                {
                  ribbon: "🥉 3rd Place",
                  title: "National Kontes Robot Seni Tari Indonesia",
                  org: "Kontes Robot Indonesia (KRI)",
                  year: "2024",
                  desc: ""
                },
                {
                  ribbon: "🥈 2nd Place",
                  title: "Kontes Robot Seni Tari Indonesia Region II",
                  org: "Kontes Robot Indonesia (KRI)",
                  year: "2024",
                  desc: ""
                },
                {
                  ribbon: "🥇 1st Place",
                  title: "National Kontes Robot Seni Tari Indonesia",
                  org: "Kontes Robot Indonesia (KRI)",
                  year: "2023",
                  desc: ""
                },
                {
                  ribbon: "🥈 2nd Place",
                  title: "Kontes Robot Seni Tari Indonesia Region II",
                  org: "Kontes Robot Indonesia (KRI)",
                  year: "2023",
                  desc: ""
                },
              ].map((a, i) => (
                <div key={i} className="award-card">
                  <div className="award-year-badge">{a.year}</div>
                  <div className="award-ribbon">{a.ribbon}</div>
                  <div className="award-title">{a.title}</div>
                  <div className="award-org">{a.org}</div>
                  {a.desc && <div className="award-desc">{a.desc}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* ── KANAN: EXPERIENCE ── */}
          <div>
            <div className="tl-section-label">✦ Journey</div>
            <div className="tl-section-title">Work<br /><span>Experience.</span></div>
            <div className="tl-section-sub">Where I've been</div>
            <div className="exp-list">
              {[
                {
                  year: "Jan – Jun 2025",
                  name: "Intern, Electronic Engineer Division",
                  place: "PT Vixmo Transportasi Cerdas",
                  desc: [
                    "Developed and implemented vehicle UI using LVGL, improving system responsiveness through dynamic display logic.",
                    "Contributed to radar-integrated safety features including AEBS and conducted system testing to ensure reliability."
                  ]
                },
                {
                  year: "2024 – 2025",
                  name: "Social Media Specialist",
                  place: "PKM-KC Projects",
                  desc: [
                    "Contributed to two successfully funded PKM-KC projects by managing social media content, promotional materials, and digital communication strategies.",
                    "Developed and distributed project-related content using Canva to increase visibility, engagement, and stakeholder outreach."
                  ]
                },
                {
                  year: "Feb 2023 – Nov 2024",
                  name: "Secretary I & II",
                  place: "Lembaga Minat Bakat PENS",
                  desc: [
                    "Managed administrative operations and official correspondence to support organizational activities.",
                    "Improved team coordination by supervising and guiding junior secretary roles."
                  ]
                },
                {
                  year: "August 2023 – July 2024",
                  name: "Program Division",
                  place: "EEPIS Robot Intelligent in Sense of Art Team",
                  desc: [
                    "Developed motion control programs for humanoid robot hand movements to support synchronized dance performance."
                  ]
                },
                {
                  year: "December 2022 – July 2023",
                  name: "Artistic Division",
                  place: "EEPIS Robot Intelligent in Sense of Art Team",
                  desc: [
                    "Designed robot costumes and managed visual content, contributing to improved presentation in competitions."
                  ]
                }
              ].map((item, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-dot-col">
                    <div className="exp-dot" />
                  </div>
                  <div className="exp-body">
                    <div className="exp-year">{item.year}</div>
                    <div className="exp-name">{item.name}</div>
                    <div className="exp-place">{item.place}</div>
                    <div className="exp-desc">
                      {Array.isArray(item.desc) ? (
                        <ul style={{ paddingLeft: "16px", margin: 0, listStyle: "disc" }}>
                          {item.desc.map((bullet, idx) => (
                            <li key={idx} style={{ marginBottom: idx === item.desc.length - 1 ? 0 : "4px" }}>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        item.desc
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT */}
      <div className="contact-section" id="contact">
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#4A7C59" }}>Let's Talk</div>
        <div className="contact-big">Let's build<br />something<br />together.</div>
        <p className="contact-sub">I'm open to full-time roles, internships, and freelance collaborations. Response within 24 hours. 🌿</p>
        <div style={{ display: "flex", gap: "16px 28px", flexWrap: "wrap", justifyContent: "center", maxWidth: "850px" }}>
          {[
            { logo: "/logos/email.png", href: "mailto:tryasrahmaa@email.com", name: "Email" },
            { logo: "/logos/linkedin.png", href: "https://www.linkedin.com/in/triyas-rahmadiyanti-334590263", name: "LinkedIn" },
            { logo: "/logos/behance.jpg", href: "https://behance.net/01_triyrahmadi", name: "Behance" },
            { logo: "/logos/github.png", href: "https://github.com/tryasr", name: "GitHub" },
          ].map(({ logo, href, name }) => (
            <a 
              key={name} 
              className="clink-logo-btn" 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
            >
              <img 
                src={process.env.PUBLIC_URL + logo} 
                alt={`${name} Logo`} 
                className="contact-logo-img" 
              />
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">triyas.</div>
        <div className="footer-copy">© 2026 Triyas Rahmadiyanti — Designed in Surabaya</div>
        <div className="footer-copy">Open to work · Built with ♡</div>
      </footer>
    </div>
  );
}