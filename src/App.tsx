import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Check, 
  Sparkles, 
  Diamond, 
  Layers, 
  Share2, 
  TrendingUp, 
  MessageSquare, 
  Award, 
  ArrowDown 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { 
  TEAM_BIOS, 
  SERVICE_ITEMS, 
  PROCESS_STEPS, 
  CASE_STUDIES, 
  TESTIMONIALS, 
  FAQS 
} from "./data";
import { BioDetails } from "./types";

import { CustomCursor } from "./components/CustomCursor";
import { StatsCounter } from "./components/StatsCounter";
import { FAQAccordion } from "./components/FAQAccordion";
import { BioModal } from "./components/BioModal";
import { Logo } from "./components/Logo";

const SERVICE_EXTRAS = [
  {
    handwrittenNote: "We find your absolute sweet spot before making anything look pretty.",
    deliverables: [
      "ICP Profile & Strategy Matrix",
      "Full Visual Brand Architecture",
      "Editorial Brand Voice Guideline"
    ],
    bgDecoration: "bg-gradient-to-br from-[#FF67FF]/10 to-transparent",
    accentColor: "#FF67FF",
    tagline: "The Blueprint of Growth"
  },
  {
    handwrittenNote: "Say goodbye to content panic. This is your entire playbook.",
    deliverables: [
      "30 days of bespoke content calendar with design",
      "Custom scripts, caption worksheets & pillars",
      "Evergreen keyword and hashtag blueprints for socials"
    ],
    bgDecoration: "bg-gradient-to-br from-[#00AEEF]/10 to-transparent",
    accentColor: "#00AEEF",
    tagline: "Your Visual Playbook"
  },
  {
    handwrittenNote: "We talk to your audience like human beings. No robotic templated speak.",
    deliverables: [
      "Fully curated weekly grid & scheduling",
      "Real-time community engagement loops",
      "Monthly growth intelligence reporting"
    ],
    bgDecoration: "bg-gradient-to-br from-[#2C48D4]/10 to-transparent",
    accentColor: "#2C48D4",
    tagline: "The Engagement Factory"
  },
  {
    handwrittenNote: "No wasted budgets. Every single dollar is tracked and optimized.",
    deliverables: [
      "Meta/TikTok Pixel & conversion maps",
      "High-converting ad variation design",
      "Direct daily monitoring & big optimizations"
    ],
    bgDecoration: "bg-gradient-to-br from-[#FF67FF]/10 to-transparent",
    accentColor: "#FF67FF",
    tagline: "The Inbound Engine"
  },
  {
    handwrittenNote: "Instant feedback. Like having your strategy team on pocket speed dial.",
    deliverables: [
      "Direct daily syncing on strategy & trends",
      "Ad-hoc copy feedback & design reviews",
      "Fast 12-hour critical adjustment window"
    ],
    bgDecoration: "bg-gradient-to-br from-[#00AEEF]/10 to-transparent",
    accentColor: "#00AEEF",
    tagline: "The Pocket Strategy Board"
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBio, setSelectedBio] = useState<BioDetails | null>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  // Smooth scroll helper
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Keep track of scroll to add background blur/opacity to header
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Icon mapping utility
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Diamond": return <Diamond size={24} className="text-[#FF67FF]" />;
      case "Layers": return <Layers size={24} className="text-[#00AEEF]" />;
      case "Share2": return <Share2 size={24} className="text-[#2C48D4]" />;
      case "TrendingUp": return <TrendingUp size={24} className="text-[#FF67FF]" />;
      case "MessageSquare": return <MessageSquare size={24} className="text-[#00AEEF]" />;
      case "Award": return <Award size={24} className="text-[#2C48D4]" />;
      default: return <Sparkles size={24} className="text-[#FF67FF]" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080810] text-[#FFFFFF] overflow-x-hidden font-body selection:bg-[#FF67FF] selection:text-[#080810]">
      {/* Dynamic Cursor */}
      <CustomCursor />

      {/* Global Drift Blob Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#2C48D4]/12 rounded-full blur-[140px] animate-drift-slow-1" />
        <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-[#FF67FF]/10 rounded-full blur-[140px] animate-drift-slow-2" />
        <div className="absolute bottom-[20%] left-[15%] w-[550px] h-[550px] bg-[#00AEEF]/10 rounded-full blur-[140px] animate-drift-slow-3" />
      </div>

      {/* FIXED HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-6 md:px-12 border-b ${
          navScrolled 
            ? "bg-[#080810]/85 backdrop-blur-xl border-white/5 shadow-lg shadow-black/20" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-3 font-display font-extrabold text-[22px] md:text-2xl tracking-tight text-white group cursor-none animate-fade-in"
          >
            <Logo className="w-8 h-8 md:w-9 md:h-9 transform group-hover:scale-110 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-[#2C48D4] via-[#00AEEF] to-[#FF67FF] bg-clip-text text-transparent">Pixels & Prompts</span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#work" 
              onClick={(e) => handleNavClick(e, "work")}
              className="font-body font-medium text-white/60 hover:text-white transition-colors text-sm"
            >
              Work
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")}
              className="font-body font-medium text-white/60 hover:text-white transition-colors text-sm"
            >
              The Duo
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, "services")}
              className="font-body font-medium text-white/60 hover:text-white transition-colors text-sm"
            >
              What We Do
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleNavClick(e, "process")}
              className="font-body font-medium text-white/60 hover:text-white transition-colors text-sm"
            >
              Process
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, "faq")}
              className="font-body font-medium text-white/60 hover:text-white transition-colors text-sm"
            >
              FAQ
            </a>
            <a 
              href="https://calendly.com/pixelsnprompts/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-xs uppercase tracking-wider bg-gradient-button text-white px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(255,103,255,0.4)] transition-all duration-300"
            >
              Book a Call
            </a>
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-24 px-6 pb-8 bg-[#080810]/98 backdrop-blur-2xl flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6 text-2xl font-display font-bold">
              <a 
                href="#work" 
                onClick={(e) => handleNavClick(e, "work")}
                className="text-white/70 hover:text-[#FF67FF] transition-colors"
              >
                Work
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, "about")}
                className="text-white/70 hover:text-[#00AEEF] transition-colors"
              >
                The Duo
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, "services")}
                className="text-white/70 hover:text-[#FF67FF] transition-colors"
              >
                What We Do
              </a>
              <a 
                href="#process" 
                onClick={(e) => handleNavClick(e, "process")}
                className="text-white/70 hover:text-[#00AEEF] transition-colors"
              >
                Process
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleNavClick(e, "faq")}
                className="text-white/70 hover:text-white transition-colors"
              >
                FAQ
              </a>
            </nav>
            <a 
              href="https://calendly.com/pixelsnprompts/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center font-display font-bold uppercase tracking-wider bg-gradient-button text-white py-4 rounded-full"
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section 
        id="hero" 
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 items-stretch z-10"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Label */}
            <span className="font-display font-semibold text-sm sm:text-base uppercase tracking-widest text-[#00AEEF] mb-4 flex items-center gap-2">
              <Sparkles size={14} className="animate-pulse" /> Boutique Brand Consultancy
            </span>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-xl sm:text-3xl lg:text-[38px] leading-[1.2] tracking-tight text-white mb-6 uppercase">
              Your brand should do the <span className="text-[#FF67FF] italic font-serif lowercase">talking.</span> <br />We make sure it says the right things.
            </h1>

            {/* Sub-headline */}
            <p className="font-body text-base md:text-[17px] text-white/65 max-w-[620px] mb-8 leading-relaxed">
              Pixels & Prompts is a boutique brand consultancy run by two women, a Gen Z Marketing strategist and a Millennial Brand designer, who together handle everything from your first brand touchpoint to your first inbound lead.
            </p>

            {/* Supporting line */}
            <p className="font-body text-xs md:text-sm font-light text-white/40 mb-8 border-l border-[#FF67FF]/30 pl-4">
              18 years of combined experience. One strategic framework. Zero guesswork.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <a 
                href="https://calendly.com/pixelsnprompts/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-display font-bold text-sm uppercase tracking-wider bg-gradient-button text-white px-8 py-4.5 rounded-full hover:shadow-[0_0_30px_rgba(255,103,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book a Free Call →
              </a>
              <a 
                href="#problem" 
                onClick={(e) => handleNavClick(e, "problem")}
                className="font-display font-semibold text-sm uppercase tracking-wider text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2 group py-3"
              >
                See What We've Built <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TICKER MARQUEE */}
      <section className="bg-gradient-to-r from-[#2C48D4] to-[#1D1D7F] border-y border-white/10 py-5 overflow-hidden relative z-10 select-none">
        <div className="flex w-max">
          <div className="animate-ticker shrink-0 flex items-center gap-6 font-display font-extrabold text-sm md:text-base tracking-widest text-white/90 uppercase pr-6">
            <span>Brand Strategy</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Visual Identity</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Content Systems</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Meta Ads</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Done For You</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>18 Years Combined Experience</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            {/* Repeat exact set for seamless infinite scrolling */}
            <span>Brand Strategy</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Visual Identity</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Content Systems</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Meta Ads</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Done For You</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>18 Years Combined Experience</span>
            <span className="text-[#FF67FF] font-bold">•</span>
          </div>
          {/* Duplicate to bridge seam */}
          <div className="animate-ticker shrink-0 flex items-center gap-6 font-display font-extrabold text-sm md:text-base tracking-widest text-white/90 uppercase pr-6" aria-hidden="true">
            <span>Brand Strategy</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Visual Identity</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Content Systems</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Meta Ads</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Done For You</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>18 Years Combined Experience</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Brand Strategy</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Visual Identity</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Content Systems</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Meta Ads</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>Done For You</span>
            <span className="text-[#FF67FF] font-bold">•</span>
            <span>18 Years Combined Experience</span>
            <span className="text-[#FF67FF] font-bold">•</span>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM SECTION */}
      <section 
        id="problem" 
        className="bg-[#f8f8ff] text-[#1D1D7F] py-24 px-6 md:px-12 relative z-10 overflow-hidden"
      >
        {/* Soft layout corner accents */}
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#00AEEF]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FF67FF]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-handwritten text-xl text-[#FF67FF] mb-4 block font-bold">
            → Sound familiar?
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <h2 className="lg:col-span-5 font-display font-extrabold text-xl sm:text-2xl lg:text-[28px] leading-tight text-[#1D1D7F] tracking-tight uppercase">
              You're doing everything right. <br />And yet nothing's converting.
            </h2>
            
            <div className="lg:col-span-7 flex flex-col gap-6 font-body text-base sm:text-lg text-[#1D1D7F]/75 leading-relaxed">
              <p>
                You're posting. You're consistent, and your offer is genuinely good. But the Instagram looks a bit scattered. The visuals don't feel like you. And the DMs? Quiet.
              </p>
              <p className="font-semibold text-[#1D1D7F]">
                You don't have a content problem. You have a system problem.
              </p>
              <p>
                When strategy, visuals, and marketing aren't talking to each other, no amount of posting fixes it.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1D1D7F]/10 flex justify-end">
            <span className="font-display font-extrabold text-2xl md:text-3xl text-gradient-heading text-right tracking-tight">
              That's the gap we close.
            </span>
          </div>
        </div>
      </section>

      {/* 4. WHO WE ARE (THE DUO) */}
      <section 
        id="about" 
        className="bg-[#0e0e1a] py-24 px-6 md:px-12 relative z-10 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="text-center mb-4">
            <span className="font-display font-semibold text-xs sm:text-sm tracking-widest text-[#00AEEF] uppercase inline-block">
              The Duo
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-[34px] leading-tight text-center text-white tracking-tight mb-6 max-w-3xl mx-auto uppercase">
            Two brains. One brand. <br />And yes, we finish each other's sentences.
          </h2>

          {/* Intro Paragraph */}
          <p className="font-body text-base sm:text-lg text-white/65 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Between us, we cover the full picture, the strategy AND the visuals, the thinking AND the making. No handoffs. No "let me check with my designer." Just two people who've been doing this a long time, working as one team on your brand.
          </p>

          {/* SLOT 1: Duo together photo slot */}
          <div className="w-full h-64 md:h-[320px] rounded-3xl border border-white/10 bg-gradient-to-br from-[#1d1d7f]/40 to-[#0e0e1a]/80 shadow-[inset_0_0_40px_rgba(255,255,255,0.03)] flex flex-col items-center justify-center p-6 text-center mb-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 group-hover:opacity-40 transition-all duration-700 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200\u0026auto=format\u0026fit=crop')]" />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <span className="font-display font-bold text-lg md:text-xl text-white tracking-tight">
                [ Priyanka & Rashi working together ]
              </span>
              <p className="font-body text-sm text-white/50 max-w-md">
                Co-founders aligning strategy and visuals over coffee.
              </p>
            </div>
          </div>

          {/* Two founder cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {TEAM_BIOS.map((bio) => {
              const borderTopColor = bio.id === "priyanka" ? "border-t-[3px] border-t-[#FF67FF]" : "border-t-[3px] border-t-[#00AEEF]";
              const stickerRotateClass = bio.id === "priyanka" ? "sm:-rotate-2" : "sm:rotate-2";
              const imageAlignClass = bio.id === "rashi" 
                ? "object-[center_15%]" 
                : bio.id === "priyanka" 
                  ? "object-[center_35%]" 
                  : "object-center";
              const specialties = bio.id === "priyanka" 
                ? ["Strategy", "Content Systems", "Messaging Structure", "AI Automation"]
                : ["Brand Design", "Visual Architecture", "Social Layouts", "AI Art Generation"];
              
              const superpowerTitle = bio.id === "priyanka" ? "Strategic Superpower" : "Creative Superpower";
              const superpowerQuote = bio.id === "priyanka"
                ? "Handing you a 40-page strategy deck that actually reads like an addictive thriller."
                : "Sticking 0.5px grids together at 3:00 AM to make vectors look unbelievably crisp.";
              
              const accentColorClass = bio.id === "priyanka" ? "text-[#FF67FF]" : "text-[#00AEEF]";
              const badgeBgClass = bio.id === "priyanka" ? "bg-[#FF67FF]/10 text-[#FF67FF] border-[#FF67FF]/20" : "bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/20";

              return (
                <div 
                  key={bio.id}
                  className={`border border-white/5 bg-[#080810]/50 rounded-2xl p-6 md:p-8 flex flex-col items-stretch justify-between backdrop-blur-md transition-all duration-300 hover:border-white/10 ${borderTopColor}`}
                >
                  <div className="flex flex-col">
                    {/* Portrait Placeholder Clickable - Styled as physical sticker */}
                    <div 
                      onClick={() => setSelectedBio(bio)}
                      className={`relative group aspect-square w-full rounded-2xl overflow-hidden mb-8 cursor-none bg-white p-1.5 border-[5px] border-white shadow-[0_12px_24px_rgba(0,0,0,0.5)] transform hover:rotate-0 hover:scale-[1.03] transition-all duration-300 ${stickerRotateClass}`}
                      style={{ boxShadow: `0 12px 28px rgba(0,0,0,0.4), 0 0 35px ${bio.glowColor}25` }}
                    >
                      <img 
                        src={bio.imageUrl} 
                        alt={bio.name} 
                        className={`absolute inset-0 w-full h-full object-cover ${imageAlignClass} grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 rounded-lg`}
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive click to view label overlay (translucent/vibrant, not dark) */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t group-hover:from-black/75 group-hover:via-black/25 group-hover:to-transparent transition-all duration-300 flex flex-col items-center justify-end p-4">
                        <span className="font-display font-semibold text-[11px] uppercase tracking-widest text-[#FFFFFF] bg-[#FF67FF] px-4 py-2 border border-white/20 rounded-full transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                          Click to View Bio
                        </span>
                      </div>
                    </div>

                    {/* Title / Role */}
                    <span className={`font-display font-semibold text-xs sm:text-sm uppercase tracking-widest ${accentColorClass} mb-1.5 flex items-center gap-1.5`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${bio.id === "priyanka" ? "bg-[#FF67FF]" : "bg-[#00AEEF]"}`} />
                      {bio.tag}
                    </span>

                    {/* Name (Under Title!) */}
                    <h3 
                      onClick={() => setSelectedBio(bio)}
                      className="font-display font-extrabold text-3xl md:text-4xl text-white mb-2 tracking-tight hover:text-[#00AEEF] transition-colors inline-block cursor-none"
                    >
                      {bio.name}
                    </h3>

                    {/* Fun handwritten tagline */}
                    <p className={`font-handwritten text-xl font-medium mb-4 ${accentColorClass}`}>
                      {bio.roleLine}
                    </p>

                    {/* Bio (Fun presentation, highly readable paragraphs) */}
                    <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                      {bio.bio}
                    </p>

                    {/* Expertise list (pills) */}
                    <div className="mb-6">
                      <span className="font-display font-bold text-[11px] uppercase tracking-wider text-white/40 block mb-2">Expertise / Pillars</span>
                      <div className="flex flex-wrap gap-2">
                        {specialties.map((spec) => (
                          <span key={spec} className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${badgeBgClass}`}>
                            #{spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Superpower Callout Bubble */}
                    <div className="p-4 rounded-xl bg-[#0d0d18] border border-white/5 relative overflow-hidden mb-6">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/[0.01] rounded-full pointer-events-none" />
                      <span className={`text-[10px] uppercase font-bold tracking-widest block mb-1.5 ${accentColorClass}`}>
                        🎨 {superpowerTitle}
                      </span>
                      <p className="font-handwritten text-lg text-white/90 leading-snug">
                        "{superpowerQuote}"
                      </p>
                    </div>
                  </div>

                  {/* Handles line */}
                  <div className="border-t border-white/5 pt-6 mt-2">
                    <p className="font-body text-xs text-white/80 leading-relaxed font-light">
                      {bio.handles}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DUO ANGLE PANEL */}
          <div className="border border-white/5 bg-[#080810]/40 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#2C48D4]/12 to-transparent blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl">
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight mb-4">
                Two perspectives. One brand. No back-and-forth between agencies.
              </h3>
              <p className="font-body text-base text-white/68 leading-relaxed">
                Here's what's rare about working with us: you're not hiring a designer who'll hand off to a strategist who'll hand off to a copywriter. You're hiring two people who work together — which means your strategy and your visuals are built to match from day one. Priyanka brings the market lens. Rashi brings the visual lens. When they align, brands get clarity — and clients get leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE DO (THE SERVICES MODULE) */}
      <section 
        id="services" 
        className="bg-[#f8f8ff] text-[#1D1D7F] py-24 px-6 md:px-12 relative z-10 font-body"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2C48D4]/5 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF67FF]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Label */}
          <div className="mb-4">
            <span className="font-handwritten text-[#FF67FF] text-2xl font-bold block mb-1">
              What we do
            </span>
            <span className="font-display font-semibold text-xs sm:text-sm tracking-widest text-[#FF67FF] uppercase">
              The Service
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-[#1D1D7F] tracking-tight mb-6 max-w-3xl uppercase">
            One program. Everything your brand needs to grow.
          </h2>

          {/* Sub-headline */}
          <p className="font-body text-lg md:text-xl text-[#1D1D7F]/75 max-w-4xl mb-12 leading-relaxed">
            The Pixels & Prompts Brand Growth Program is a 3–4 month done-for-you consultancy engagement that takes your brand from scattered to structured, and from invisible to inbound-ready.
          </p>

          <div className="mb-16 border-l-2 border-[#FF67FF] pl-6 py-1">
            <span className="font-display font-extrabold text-xl md:text-2xl text-gradient-heading tracking-tight">
              You give us 3–4 hours a month. We handle everything else.
            </span>
          </div>

          {/* SERVICES INTERACTIVE SIDEBAR & DECK */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
            
            {/* LEFT SIDE: Interactive Finder Cabinet Tabs */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
              {SERVICE_ITEMS.map((item, idx) => {
                const isActive = activeServiceIdx === idx;
                const dotColor = idx === 0 || idx === 3 ? "bg-[#FF67FF]" : idx === 1 || idx === 4 ? "bg-[#00AEEF]" : "bg-[#2C48D4]";
                
                return (
                  <button
                    key={item.number}
                    onClick={() => setActiveServiceIdx(idx)}
                    className={`flex items-center gap-4 text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 relative group cursor-none shrink-0 whitespace-nowrap lg:whitespace-normal w-[240px] sm:w-[280px] lg:w-full select-none ${
                      isActive 
                        ? "bg-[#1D1D7F] text-white border-[#1D1D7F] shadow-[0_8px_20px_rgba(29,29,127,0.12)] translate-x-0 lg:translate-x-2" 
                        : "bg-white text-[#1D1D7F] border-dashed border-[#1D1D7F]/15 hover:border-[#1D1D7F]/40 hover:bg-white/80"
                    }`}
                  >
                    {/* Folder Tab indicator */}
                    <div className="absolute left-6 top-0 transform -translate-y-1/2 bg-[#f8f8ff] px-1.5 text-[8px] font-mono opacity-50">
                      TAB_0{item.number}
                    </div>

                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm ${isActive ? "bg-white/20 text-white" : "bg-[#1D1D7F]/5 text-[#1D1D7F]"}`}>
                      {item.number}
                    </div>
                    
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className={`font-display font-bold text-sm lg:text-base tracking-tight ${isActive ? "text-white" : "text-[#1D1D7F]"}`}>
                        {item.title}
                      </span>
                      <span className={`text-[10px] font-semibold font-mono tracking-wider mt-0.5 ${isActive ? "text-white/60" : "text-[#1D1D7F]/40"}`}>
                        0{idx + 1}_spec.pdf
                      </span>
                    </div>

                    <div className={`w-2 h-2 rounded-full shrink-0 ${dotColor} ${isActive ? "scale-125 animate-pulse" : "scale-100 opacity-60"}`} />
                  </button>
                );
              })}
            </div>

            {/* RIGHT SIDE: Interactive folder card stack */}
            <div className="lg:col-span-8 flex flex-col relative min-h-[460px] md:min-h-[420px]">
              
              {/* Layered Physical Card Shadows for tactile depth */}
              <div className="absolute top-2 left-2 right-2 bottom-[-8px] bg-[#1d1d7f]/5 rounded-[32px] transform rotate-1 border-2 border-dashed border-[#1D1D7F]/10 pointer-events-none" />
              <div className="absolute top-1 left-1 right-1 bottom-[-4px] bg-[#1d1d7f]/5 rounded-[32px] transform -rotate-1 border-2 border-[#1D1D7F]/5 pointer-events-none" />

              {/* ACTIVE FOLDER SHEET */}
              <div className="bg-white rounded-[32px] p-6 sm:p-10 md:p-12 border-2 border-[#1D1D7F]/10 shadow-[0_20px_50px_rgba(29,29,127,0.06)] relative overflow-hidden z-10 flex flex-col justify-between h-full group transition-all duration-300">
                
                {/* Visual grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(29,29,127,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(29,29,127,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF67FF]/5 to-transparent rounded-full blur-xl pointer-events-none" />

                {/* ANIMATED CHANGER WITH FRAMER MOTION */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeServiceIdx}
                    initial={{ opacity: 0, x: 20, y: 5 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -20, y: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative z-10 flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Top Header Row of Folder */}
                      <div className="flex select-none items-center justify-between border-b border-[#1D1D7F]/10 pb-5 mb-5 w-full">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs uppercase text-[#1D1D7F]/40 tracking-widest bg-[#1D1D7F]/5 px-3 py-1 rounded-full">
                            Module 0{activeServiceIdx + 1}
                          </span>
                          <span className="font-mono text-xs text-[#FF67FF] font-semibold tracking-wider">
                            {SERVICE_EXTRAS[activeServiceIdx].tagline}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="font-mono text-[10px] text-[#1D1D7F]/40 tracking-wider">LIVE_SPECS</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-6">
                        {/* Title & Description */}
                        <div className="md:col-span-8">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="font-display font-black text-5xl leading-none text-[#1D1D7F]/10">
                              {SERVICE_ITEMS[activeServiceIdx].number}
                            </span>
                            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-[#1D1D7F] tracking-tight">
                              {SERVICE_ITEMS[activeServiceIdx].title}
                            </h3>
                          </div>
                          
                          <p className="font-body text-base text-[#1D1D7F]/75 leading-relaxed">
                            {SERVICE_ITEMS[activeServiceIdx].description}
                          </p>
                        </div>

                        {/* Stitched Icon graphic */}
                        <div className="md:col-span-4 flex justify-start md:justify-end">
                          <div className="relative inline-block p-4 rounded-3xl bg-[#1D1D7F]/5 border-2 border-dashed border-[#1D1D7F]/10">
                            <div className="absolute -inset-1 rounded-3xl border border-dashed border-[#FF67FF]/20" />
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md">
                              {getServiceIcon(SERVICE_ITEMS[activeServiceIdx].iconName)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Deliverables Stitched Grid */}
                      <div className="border-2 border-dashed border-[#1D1D7F]/10 rounded-2xl p-5 bg-[#f8f8ff]/50 mt-4">
                        <span className="font-mono text-[10px] font-bold text-[#1D1D7F]/50 uppercase tracking-widest block mb-4">
                          ⚙️ CORE DELIVERABLES INCLUDED:
                        </span>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {SERVICE_EXTRAS[activeServiceIdx].deliverables.map((del, i) => (
                            <div key={i} className="flex gap-2.5 items-start">
                              <span className="w-5 h-5 rounded-full bg-[#1D1D7F] text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5 select-none">
                                ✓
                              </span>
                              <span className="font-body text-xs text-[#1D1D7F]/85 leading-snug font-medium">
                                {del}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quotation & Arrows Controls */}
                    <div className="border-t border-[#1D1D7F]/10 pt-6 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      {/* Quote/Thought */}
                      <div className="flex items-center gap-3 max-w-md">
                        <span className="text-2xl shrink-0 select-none">💬</span>
                        <p className="font-handwritten text-xl font-bold text-[#FF67FF] leading-snug">
                          "{SERVICE_EXTRAS[activeServiceIdx].handwrittenNote}"
                        </p>
                      </div>

                      {/* Arrows Controls */}
                      <div className="flex items-center justify-end gap-3 shrink-0 self-end sm:self-auto select-none">
                        <button
                          onClick={() => {
                            setActiveServiceIdx((prev) => (prev === 0 ? SERVICE_ITEMS.length - 1 : prev - 1));
                          }}
                          className="w-11 h-11 rounded-full border border-dashed border-[#1D1D7F]/20 hover:border-[#1D1D7F] bg-white flex items-center justify-center hover:bg-[#1D1D7F]/5 text-[#1D1D7F] active:scale-95 transition-all cursor-none"
                          title="Previous module"
                        >
                          ←
                        </button>
                        <span className="font-mono text-xs text-[#1D1D7F]/50 font-semibold px-1">
                          0{activeServiceIdx + 1} // 0{SERVICE_ITEMS.length}
                        </span>
                        <button
                          onClick={() => {
                            setActiveServiceIdx((prev) => (prev === SERVICE_ITEMS.length - 1 ? 0 : prev + 1));
                          }}
                          className="w-11 h-11 rounded-full border border-dashed border-[#1D1D7F]/20 hover:border-[#1D1D7F] bg-white flex items-center justify-center hover:bg-[#1D1D7F]/5 text-[#1D1D7F] active:scale-95 transition-all cursor-none"
                          title="Next module"
                        >
                          →
                        </button>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>
              
              {/* Slider dots indicators */}
              <div className="flex items-center justify-center gap-2 mt-6 select-none z-10">
                {SERVICE_ITEMS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveServiceIdx(idx)}
                    className={`h-2 rounded-full cursor-none transition-all duration-300 ${
                      activeServiceIdx === idx 
                        ? "w-8 bg-[#FF67FF]" 
                        : "w-2 bg-[#1D1D7F]/25 hover:bg-[#1D1D7F]/50"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. THE PROCESS (TIMELINE) */}
      <section 
        id="process" 
        className="bg-[#080810] py-24 px-6 md:px-12 relative z-10 border-t border-white/5 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00AEEF]/5 blur-3xl rounded-full pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-display font-semibold text-xs sm:text-sm tracking-widest text-[#00AEEF] uppercase mb-4 block">
            How It Works
          </span>

          <h2 className="font-display font-extrabold text-xl sm:text-2xl lg:text-[30px] text-white tracking-tight mb-12 uppercase leading-tight max-w-xl">
            Month by month. <br />No surprises.
          </h2>

          {/* Timeline Connector Line - Google Stitch Dashed Line */}
          <div className="absolute top-[320px] left-8 right-8 h-0.5 border-t-2 border-dashed border-white/15 hidden lg:block z-0" />

          {/* Steps container */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const stitchRotation = idx % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1";
              const accentColorClass = idx % 2 === 0 ? "text-[#00AEEF]" : "text-[#FF67FF]";
              const stitchBorderColor = idx === 0 ? "border-[#00AEEF]/20 hover:border-[#00AEEF]/50" 
                                  : idx === 1 ? "border-[#FF67FF]/20 hover:border-[#FF67FF]/50"
                                  : idx === 2 ? "border-[#2C48D4]/20 hover:border-[#2C48D4]/50"
                                  : "border-[#00AEEF]/20 hover:border-[#00AEEF]/50";

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col items-start relative p-6 sm:p-7 rounded-3xl bg-[#0c0c16]/95 border-2 border-dashed ${stitchBorderColor} transition-all duration-300 transform ${stitchRotation} hover:rotate-0 hover:scale-[1.03] shadow-[0_12px_30px_rgba(0,0,0,0.4)] group`}
                >
                  {/* Stitch Edge Accent Tab */}
                  <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-[#0c0c16] px-3 py-0.5 border border-dashed border-white/20 rounded-full text-[10px] text-white/40 font-mono tracking-wider">
                    STITCH // 0{idx + 1}
                  </div>

                  {/* Visual marker */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-5 mb-6 w-full">
                    {/* Circle number with dashed border stitch */}
                    <div className={`w-14 h-14 rounded-full border-2 border-dashed ${idx % 2 === 0 ? 'border-[#00AEEF]' : 'border-[#FF67FF]'} p-[3px] flex items-center justify-center shrink-0 shadow-lg`}>
                      <div className="w-full h-full rounded-full bg-[#131322] flex items-center justify-center">
                        <span className="font-display font-black text-lg text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Month tag label in Caveat font */}
                    <span className={`font-handwritten ${idx % 2 === 0 ? 'text-[#00AEEF]' : 'text-[#FF67FF]'} text-2xl font-bold`}>
                      {step.month}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg md:text-xl text-white mb-3 tracking-tight group-hover:text-[#00AEEF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Extra little decorative stitch markers in corners */}
                  <div className="absolute bottom-2 right-3 font-mono text-[9px] text-white/10 select-none">
                    + X +
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CASE STUDIES (OUR WORK) */}
      <section 
        id="work" 
        className="bg-[#0e0e1a] py-24 px-6 md:px-12 relative z-10 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <span className="font-display font-semibold text-xs sm:text-sm tracking-widest text-[#FF67FF] uppercase mb-4 block">
            Our Work
          </span>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight mb-12 uppercase">
            We talk in results, not deliverables.
          </h2>

          {/* Stacked Cases */}
          <div className="space-y-16">
            {CASE_STUDIES.map((cs) => (
              <div 
                key={cs.id}
                className="border border-white/5 bg-[#080810] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row transition-all duration-500 hover:border-white/10"
              >
                {/* Left side / Main details */}
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between items-start gap-8 border-b lg:border-b-0 lg:border-r border-white/5 relative bg-gradient-to-b from-[#080810] to-[#0e0e1a]">
                  <div className="space-y-6">
                    <span className="font-display font-bold text-xs uppercase tracking-widest text-[#00AEEF]">
                      {cs.category}
                    </span>
                    <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">
                      {cs.brand}
                    </h3>
                    <p className="font-body text-sm md:text-base text-white/65 leading-relaxed">
                      {cs.description}
                    </p>
                  </div>

                  {/* Quote block */}
                  <div className="border-l-2 border-[#FF67FF] pl-4 py-1 italic text-white/80 font-body text-sm md:text-base max-w-md">
                    <p className="mb-2">"{cs.quote}"</p>
                    <span className="font-body text-xs text-white/40 not-italic block">{cs.author}</span>
                  </div>

                  {/* Fully functional external case study link */}
                  <a 
                    href={cs.link} 
                    className="inline-flex items-center gap-2 font-display font-bold text-xs uppercase tracking-widest bg-white/5 border border-white/10 hover:bg-[#00AEEF] hover:text-[#080810] hover:border-[#00AEEF] px-6 py-3.5 rounded-full transition-all text-white cursor-pointer"
                  >
                    View Full Case Study <ArrowRight size={14} />
                  </a>
                </div>

                {/* Right side / Stats & Full Image Showcase */}
                <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between gap-8 bg-gradient-to-br from-[#0e0e1a] to-[#080810] relative overflow-hidden group/case">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 relative z-10 border-b border-white/5 pb-5">
                    {cs.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="font-display text-2xl sm:text-3xl font-extrabold mb-1 tracking-tight text-white bg-gradient-to-r from-white to-white/70 bg-clip-text">
                          <StatsCounter value={stat.value} suffix={stat.suffix} />
                        </span>
                        <span className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-none">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Brand Image Preview - FULLY SHOWN & VISIBLE */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 group-hover/case:border-white/20 transition-all duration-500 shadow-xl shadow-black/40">
                    <img 
                      src={cs.imageUrl} 
                      alt={`${cs.brand} Brand Showcase`} 
                      className="w-full h-full object-cover object-center filter grayscale brightness-90 group-hover/case:grayscale-0 group-hover/case:scale-[1.03] transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Glowing Accent Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    {/* Hover Visual Badge */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white font-mono text-[9px] uppercase tracking-wider opacity-0 group-hover/case:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Active Case Study
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section 
        id="testimonials" 
        className="bg-[#0e0e1a] py-24 px-6 md:px-12 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="font-display font-semibold text-xs sm:text-sm tracking-widest text-[#00AEEF] uppercase inline-block">
              What Our Clients Say
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-center text-white tracking-tight mb-12 uppercase">
            They say it better than we ever could.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="border border-white/5 bg-[#080810]/40 rounded-3xl p-8 md:p-12 relative flex flex-col justify-between backdrop-blur-md"
              >
                {/* Giant quotation mark decoration */}
                <span className="absolute top-6 right-8 font-display font-black text-8xl text-[#FF67FF]/5 select-none pointer-events-none">
                  “
                </span>

                <p className="font-body text-base lg:text-lg text-white/70 leading-relaxed italic relative z-10 mb-8">
                  {t.quote}
                </p>

                <div className="border-t border-white/5 pt-6 flex flex-col">
                  <span className="font-display font-bold text-sm text-white">{t.author}</span>
                  <span className="font-body text-xs text-white/40">{t.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHO THIS IS FOR (FIT/ALIGNMENT) */}
      <section 
        id="fit" 
        className="bg-gradient-to-r from-[#2C48D4] to-[#1D1D7F] py-24 px-6 md:px-12 relative z-10 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <span className="font-display font-semibold text-xs sm:text-sm tracking-widest text-[#FF67FF] uppercase mb-4 block">
            Is this you?
          </span>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight mb-4 uppercase">
            We work with brands that are serious about growing.
          </h2>
          <p className="font-body text-sm font-medium text-white/50 italic mb-16">
            Fun to work with is a bonus. Most of our clients are.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* YES Column */}
            <div className="border border-white/10 bg-[#080810]/40 rounded-3xl p-8 md:p-12 backdrop-blur-md">
              <h3 className="font-display font-bold text-xl text-[#00AEEF] mb-8 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00AEEF]/20 flex items-center justify-center text-xs text-[#00AEEF]">✓</span> Yes, if:
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-[#00AEEF] font-semibold mt-1">✓</span>
                  <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                    You're a founder, coach, consultant, or running a women-led business and your online presence isn't doing your offer justice.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00AEEF] font-semibold mt-1">✓</span>
                  <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                    You've been posting consistently but not seeing the leads follow.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00AEEF] font-semibold mt-1">✓</span>
                  <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                    You want a system, not just someone to post for you.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00AEEF] font-semibold mt-1">✓</span>
                  <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                    You're based in India, UK, US, Australia, or Europe, or you serve an international audience.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00AEEF] font-semibold mt-1">✓</span>
                  <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                    You're ready to actually invest in your brand, not just think about it.
                  </p>
                </li>
              </ul>
            </div>

            {/* NO Column */}
            <div className="border border-white/10 bg-[#0a0a14]/60 rounded-3xl p-8 md:p-12 backdrop-blur-md">
              <h3 className="font-display font-bold text-xl text-[#FF67FF] mb-8 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FF67FF]/20 flex items-center justify-center text-xs text-[#FF67FF]">✕</span> Not a fit, if:
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-[#FF67FF] font-semibold mt-1">✕</span>
                  <p className="font-body text-sm md:text-base text-white/60 leading-relaxed">
                    You want fast hacks. You want us to just post without any strategy input from you. You want overnight results without a foundation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section 
        id="faq" 
        className="bg-[#080810] py-24 px-6 md:px-12 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="font-display font-semibold text-xs sm:text-sm tracking-widest text-[#00AEEF] uppercase inline-block">
              FAQ
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-center text-white tracking-tight mb-12 uppercase">
            Honest answers to real questions.
          </h2>

          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* 11. FINAL CTA (BOOK A CALL) */}
      <section 
        id="contact" 
        className="bg-[#080810] py-32 px-6 md:px-12 relative z-10 border-t border-white/5 overflow-hidden"
      >
        {/* Massive vibrant gradient backgrounds */}
        <div className="absolute top-[20%] left-1/4 w-[600px] h-[600px] bg-[#FF67FF]/18 rounded-full blur-[140px] pointer-events-none animate-drift-slow-1" />
        <div className="absolute bottom-[10%] right-1/4 w-[600px] h-[600px] bg-[#2C48D4]/18 rounded-full blur-[140px] pointer-events-none animate-drift-slow-2" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-display font-semibold text-xs sm:text-sm tracking-widest text-[#FF67FF] uppercase mb-4 block">
            Ready?
          </span>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-[50px] text-white tracking-tight mb-8 leading-tight uppercase">
            Still scrolling? <br />That's your sign.
          </h2>

          <p className="font-body text-base sm:text-lg text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed">
            If your brand has been on your to-do list long enough, it's time. We take on a limited number of clients per quarter to ensure every brand gets our full attention.
          </p>

          <div className="flex flex-col items-center gap-4">
            {/* Real scheduling / mailto connection */}
            <a 
              href="https://calendly.com/pixelsnprompts/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-base md:text-lg uppercase tracking-wider bg-gradient-button text-white px-10 py-5 rounded-full hover:shadow-[0_0_45px_rgba(255,103,255,0.7)] transition-all duration-300 transform hover:-translate-y-1 block cursor-none"
            >
              Book a Free 30-Minute Call →
            </a>
            <span className="font-body text-xs text-white/25 italic mt-3 block">
              No pitch. No pressure. Just an honest conversation about your brand and whether we're the right people to help.
            </span>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#06060c] border-t border-white/5 py-16 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-3 font-display font-extrabold text-[22px] md:text-2xl tracking-tight text-white group cursor-none"
          >
            <Logo className="w-8 h-8 md:w-9 md:h-9 transform group-hover:scale-110 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-[#2C48D4] via-[#00AEEF] to-[#FF67FF] bg-clip-text text-transparent">Pixels & Prompts</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a 
              href="#work" 
              onClick={(e) => handleNavClick(e, "work")}
              className="font-body text-xs md:text-sm text-white/40 hover:text-white transition-colors cursor-none"
            >
              Work
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")}
              className="font-body text-xs md:text-sm text-white/40 hover:text-white transition-colors cursor-none"
            >
              The Duo
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, "services")}
              className="font-body text-xs md:text-sm text-white/40 hover:text-white transition-colors cursor-none"
            >
              What We Do
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleNavClick(e, "process")}
              className="font-body text-xs md:text-sm text-white/40 hover:text-white transition-colors cursor-none"
            >
              Process
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, "faq")}
              className="font-body text-xs md:text-sm text-white/40 hover:text-white transition-colors cursor-none"
            >
              FAQ
            </a>
          </div>

          <p className="font-body text-xs text-white/20">
            © 2026 Pixels & Prompts. All rights reserved.
          </p>
        </div>
      </footer>

      {/* BIO MODAL DETAIL OVERLAY */}
      <BioModal bio={selectedBio} onClose={() => setSelectedBio(null)} />
    </div>
  );
}
