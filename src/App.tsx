import React, { useState } from 'react';
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Sparkles,
  Layers,
  Compass,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  ChevronRight,
  Star,
  Eye,
  Sliders,
  Menu,
  X,
  Send,
  Building,
  Home,
  Check
} from 'lucide-react';
import { STUDIO_DATA, PROJECTS, SERVICES, REVIEWS } from './data';
import { ProjectItem } from './types';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Luxury Residential',
    scope: 'Turnkey Interior Execution',
    area: '3,000 - 5,000 sq.ft',
    message: ''
  });

  const categories = ['All', 'Residential', 'Bespoke Villa', 'Commercial', 'Showroom'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0E0F14] text-[#F3F4F6] font-sans antialiased selection:bg-[#C9A96E] selection:text-[#0E0F14]">
      
      {/* 1. TOP ANNOUNCEMENT & CLIENT LINKS BAR */}
      <div className="bg-[#151720] border-b border-[#252836] text-[12px] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse"></span>
            <span>Now booking bespoke design consultations for 2024–2025</span>
          </div>
          <div className="flex items-center gap-4 text-[#D1D5DB]">
            <a
              id="top-instagram-link"
              href={STUDIO_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#C9A96E] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span className="font-medium">{STUDIO_DATA.instagramHandle}</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <span className="opacity-30">|</span>
            <a
              id="top-gmaps-link"
              href={STUDIO_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#C9A96E] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span className="font-medium">Studio Location</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY MOBILE-FIRST NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0E0F14]/95 backdrop-blur-md border-b border-[#202330]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Identifier */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#232738] to-[#161822] border border-[#373C52] flex items-center justify-center font-bold text-lg text-[#C9A96E] tracking-wider shadow-inner group-hover:border-[#C9A96E] transition-colors">
              IX
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block text-white uppercase">INEX</span>
              <span className="text-[10px] tracking-[0.25em] text-[#9CA3AF] uppercase block font-mono">Interior Studio</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9CA3AF]">
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Studio Craft</a>
            <a href="#reviews" className="hover:text-white transition-colors">Client Praises</a>
            <a href="#contact" className="hover:text-white transition-colors">Consultation</a>
          </nav>

          {/* Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              id="cta-nav-consultation"
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#D8BA82] text-[#0E0F14] px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase transition-all shadow-md active:scale-95"
            >
              <span>Book Discovery</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-[#2B2F40] bg-[#161824] md:hidden text-gray-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#202330] bg-[#12141D] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-[#9CA3AF]">
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#1E212E] hover:text-white flex items-center justify-between"
              >
                <span>Curated Portfolio</span>
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#1E212E] hover:text-white flex items-center justify-between"
              >
                <span>Bespoke Services</span>
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#1E212E] hover:text-white flex items-center justify-between"
              >
                <span>Studio Philosophy</span>
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#1E212E] hover:text-white flex items-center justify-between"
              >
                <span>Client Praises</span>
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-white flex items-center justify-between text-[#C9A96E]"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>

            <div className="pt-4 border-t border-[#1E212E] flex items-center justify-between text-xs text-[#9CA3AF]">
              <a
                href={STUDIO_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Instagram className="w-4 h-4 text-[#C9A96E]" />
                <span>Instagram</span>
              </a>
              <a
                href={STUDIO_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white"
              >
                <MapPin className="w-4 h-4 text-[#C9A96E]" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (HIGH IMPACT EDITORIAL ARCHITECTURE) */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-28 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#C9A96E]/10 blur-[140px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Headline & Pitch */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#363B4E] bg-[#161824] text-[#C9A96E] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider font-mono text-[11px]">Bespoke Architectural Interiors</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Sculpting Living Spaces of Refined Distinction.
              </h1>

              <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {STUDIO_DATA.description}
              </p>

              {/* Mobile-Friendly CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  id="hero-book-consult-btn"
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A96E] hover:bg-[#D8BA82] text-[#0E0F14] px-8 py-4 rounded-full text-sm font-bold tracking-wide uppercase transition-all shadow-lg active:scale-95"
                >
                  <span>Request Private Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  id="hero-explore-works-btn"
                  href="#portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#2F3447] bg-[#141622] hover:bg-[#1C1F30] text-gray-200 px-7 py-4 rounded-full text-sm font-semibold transition-colors"
                >
                  <Eye className="w-4 h-4 text-[#C9A96E]" />
                  <span>Explore Portfolio</span>
                </a>
              </div>

              {/* Verified Proof Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#1F2332]">
                <div className="p-3 rounded-2xl bg-[#141622] border border-[#232738]">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{STUDIO_DATA.experienceYears}+</div>
                  <div className="text-[11px] text-[#9CA3AF] font-medium">Years Atelier Craft</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#141622] border border-[#232738]">
                  <div className="text-xl sm:text-2xl font-bold text-[#C9A96E] tracking-tight">{STUDIO_DATA.projectsDelivered}+</div>
                  <div className="text-[11px] text-[#9CA3AF] font-medium">Turnkey Projects</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#141622] border border-[#232738]">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{STUDIO_DATA.squareFeetTransformed}</div>
                  <div className="text-[11px] text-[#9CA3AF] font-medium">Sq.Ft Refined</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#2D3245] shadow-2xl bg-[#161824] group">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
                  alt="INEX Interior Studio Signature Living Space"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Studio Badge Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F14] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#12141E]/90 backdrop-blur-md border border-[#2B2F42] flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#C9A96E] font-mono uppercase tracking-wider">Featured Residence</div>
                    <div className="text-sm font-bold text-white">The Lumina Sky Villa</div>
                    <div className="text-[11px] text-[#9CA3AF]">Duplex Penthouse • 5,800 sq.ft</div>
                  </div>
                  <button
                    onClick={() => setActiveProject(PROJECTS[0])}
                    className="p-2.5 rounded-xl bg-[#C9A96E] text-[#0E0F14] hover:bg-[#D8BA82] transition-colors"
                    aria-label="View featured project details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CURATED PORTFOLIO GALLERY (FILTERABLE & ACCESSIBLE) */}
      <section id="portfolio" className="py-20 bg-[#12141D] border-y border-[#1E2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9A96E]">Curated Works</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Selected Spaces & Masterpieces
              </h2>
              <p className="text-sm text-[#9CA3AF] max-w-xl">
                Every project represents a singular dialogue between architectural proportion, natural light, and bespoke craftsmanship.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#C9A96E] text-[#0E0F14] shadow-md'
                      : 'bg-[#181B27] text-[#9CA3AF] border border-[#282D3E] hover:text-white hover:border-[#3E455E]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-[#161824] border border-[#262A3B] hover:border-[#C9A96E]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#10121A]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#0E0F14]/80 backdrop-blur-sm border border-white/10 text-[#C9A96E]">
                    {project.category}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-mono bg-[#0E0F14]/80 backdrop-blur-sm border border-white/10 text-gray-300">
                    {project.area}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#9CA3AF] font-mono mb-1">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#C9A96E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#222636] flex items-center justify-between text-xs font-semibold text-[#C9A96E]">
                    <span>View Architectural Blueprint</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SERVICES & DELIVERABLES ACCORDION */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9A96E]">Comprehensive Practice</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              End-to-End Interior Architecture
            </h2>
            <p className="text-sm text-[#9CA3AF]">
              From concept development through 3D visualization, material curation, and site handover, we provide single-point accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="p-8 rounded-3xl bg-[#141622] border border-[#232738] hover:border-[#353A52] transition-colors space-y-6"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E2234] border border-[#333850] flex items-center justify-center text-[#C9A96E] font-mono font-bold text-base">
                    0{index + 1}
                  </div>
                  <span className="text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">Turnkey Standard</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#202434]">
                  <div className="text-xs font-mono text-[#C9A96E] uppercase tracking-wider mb-2">Key Deliverables:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. STUDIO CRAFT & PHILOSOPHY (MATHEMATICAL CRAFT) */}
      <section id="philosophy" className="py-20 bg-[#12141D] border-y border-[#1E2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9A96E]">Design Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Crafted at the Intersection of Warmth and Geometry.
              </h2>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                At INEX Interior Studio, we reject transient fads in favor of timeless tactile materials: natural honed stone, European oak, brushed metals, and acoustic micro-cement.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#181B27] border border-[#272B3C] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-[#232738] flex items-center justify-center text-[#C9A96E] shrink-0 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Spatial Proportion & Sightlines</h4>
                    <p className="text-xs text-[#9CA3AF] mt-1">Every wall, ceiling drop, and lighting aperture aligns mathematically to evoke natural tranquility.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#181B27] border border-[#272B3C] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-[#232738] flex items-center justify-center text-[#C9A96E] shrink-0 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Zero-Compromise Turnkey Execution</h4>
                    <p className="text-xs text-[#9CA3AF] mt-1">Direct oversight on site every single week ensuring the physical build matches the 3D renders with absolute precision.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#181B27] border border-[#272B3C] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-[#232738] flex items-center justify-center text-[#C9A96E] shrink-0 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Artisan Sourcing</h4>
                    <p className="text-xs text-[#9CA3AF] mt-1">Custom joinery, lighting fixtures, and stone work crafted by master workshops.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                  alt="INEX detail joinery"
                  className="rounded-2xl border border-[#282D3E] object-cover h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 rounded-2xl bg-[#181B27] border border-[#272B3C] text-center">
                  <div className="text-2xl font-bold text-[#C9A96E]">100%</div>
                  <div className="text-[11px] text-[#9CA3AF] mt-1 font-mono">Render-to-Build Accuracy</div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-2xl bg-[#181B27] border border-[#272B3C] text-center">
                  <div className="text-2xl font-bold text-white">180+</div>
                  <div className="text-[11px] text-[#9CA3AF] mt-1 font-mono">Delivered Sanctuaries</div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
                  alt="INEX detail lighting"
                  className="rounded-2xl border border-[#282D3E] object-cover h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS & PRAISE */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9A96E]">Client Feedback</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Trusted by Discerning Homeowners
              </h2>
            </div>
            <div className="flex items-center gap-1 text-[#C9A96E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-bold text-white ml-2">5.0 Star Rated Studio</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-8 rounded-3xl bg-[#141622] border border-[#232738] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#C9A96E]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#202434] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-white">{rev.author}</div>
                    <div className="text-[11px] text-[#9CA3AF]">{rev.location}</div>
                  </div>
                  <span className="text-[10px] font-mono text-[#C9A96E] bg-[#1F2334] px-2.5 py-1 rounded-full">
                    {rev.project}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CONTACT & DISCOVERY FORM SECTION */}
      <section id="contact" className="py-20 bg-[#12141D] border-t border-[#1E2230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Studio Info & Quick Access */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9A96E]">Direct Atelier Connection</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Schedule Your Private Consultation
                </h2>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  Let us review your floor plans and spatial aspirations. Visit our studio or schedule a confidential discovery call with our principal interior architect.
                </p>
              </div>

              {/* Verified Links to Instagram & Google Maps */}
              <div className="space-y-3 pt-2">
                <a
                  id="contact-instagram-card"
                  href={STUDIO_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#181B27] border border-[#272B3C] hover:border-[#C9A96E] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#232738] flex items-center justify-center text-[#C9A96E]">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#9CA3AF]">Follow Our Daily Process</div>
                      <div className="text-sm font-bold text-white group-hover:text-[#C9A96E] transition-colors">{STUDIO_DATA.instagramHandle}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
                </a>

                <a
                  id="contact-gmaps-card"
                  href={STUDIO_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#181B27] border border-[#272B3C] hover:border-[#C9A96E] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#232738] flex items-center justify-center text-[#C9A96E]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#9CA3AF]">Visit Atelier & Materials Gallery</div>
                      <div className="text-sm font-bold text-white group-hover:text-[#C9A96E] transition-colors">Open in Google Maps</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
                </a>
              </div>

              <div className="space-y-2 text-xs text-[#9CA3AF] pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C9A96E]" />
                  <span>{STUDIO_DATA.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C9A96E]" />
                  <span>{STUDIO_DATA.email}</span>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#161824] border border-[#292E42] shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E] text-[#C9A96E] flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Consultation Request Received</h3>
                    <p className="text-sm text-[#9CA3AF] max-w-md mx-auto">
                      Thank you for contacting INEX Interior Studio. Our principal architect will review your project requirements and connect within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0E0F14] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mt-4"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-white">Project Inquiry Form</h3>
                      <p className="text-xs text-[#9CA3AF] mt-1">Please provide initial details regarding your property scope.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-300">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikramaditya Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#11131C] border border-[#2B3044] text-white text-xs placeholder-gray-600 focus:border-[#C9A96E] outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-300">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#11131C] border border-[#2B3044] text-white text-xs placeholder-gray-600 focus:border-[#C9A96E] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-300">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="vikram@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#11131C] border border-[#2B3044] text-white text-xs placeholder-gray-600 focus:border-[#C9A96E] outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-300">Property Type</label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#11131C] border border-[#2B3044] text-white text-xs focus:border-[#C9A96E] outline-none"
                        >
                          <option>Luxury Residential Penthouse</option>
                          <option>Bespoke Villa / Estate</option>
                          <option>Commercial Atelier / Office</option>
                          <option>Experiential Retail Showroom</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-300">Scope of Work</label>
                        <select
                          value={formData.scope}
                          onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#11131C] border border-[#2B3044] text-white text-xs focus:border-[#C9A96E] outline-none"
                        >
                          <option>Full Turnkey Design & Execution</option>
                          <option>Architectural Interior Planning</option>
                          <option>Custom Joinery & Bespoke Styling</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-gray-300">Approximate Area</label>
                        <select
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#11131C] border border-[#2B3044] text-white text-xs focus:border-[#C9A96E] outline-none"
                        >
                          <option>Under 2,500 sq.ft</option>
                          <option>2,500 - 5,000 sq.ft</option>
                          <option>5,000 - 10,000 sq.ft</option>
                          <option>10,000+ sq.ft</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-300">Project Notes & Vision</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your property location, target move-in timeline, or specific aesthetic preferences..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#11131C] border border-[#2B3044] text-white text-xs placeholder-gray-600 focus:border-[#C9A96E] outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      id="submit-inquiry-btn"
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#C9A96E] hover:bg-[#D8BA82] text-[#0E0F14] font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. MODAL FOR PROJECT BLUEPRINT & DETAILS */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-[#141622] border border-[#2C3146] shadow-2xl p-6 sm:p-8 space-y-6 text-white">
            
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-[#C9A96E] uppercase tracking-wider">{activeProject.category} • {activeProject.area}</span>
                <h3 className="text-2xl font-bold tracking-tight mt-1">{activeProject.title}</h3>
                <p className="text-xs text-[#9CA3AF]">{activeProject.location} • Completed {activeProject.year}</p>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="w-8 h-8 rounded-full bg-[#1F2334] flex items-center justify-center text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#0E0F14] border border-[#232738]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#C9A96E] font-mono uppercase tracking-wider">Architectural Scope & Craft</h4>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                {activeProject.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#202434]">
                <span className="text-xs font-mono text-gray-400 uppercase">Key Innovations & Finishes:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                      <Check className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#202434] flex items-center justify-between">
              <a
                href={STUDIO_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C9A96E] font-medium hover:underline"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>View project reels on Instagram</span>
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2 rounded-full bg-[#C9A96E] text-[#0E0F14] text-xs font-bold uppercase tracking-wider"
              >
                Close Project
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 10. LUXURY FOOTER */}
      <footer className="border-t border-[#1C1F2C] bg-[#0A0B0E] py-12 px-4 sm:px-6 lg:px-8 text-xs text-[#6B7280]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1F2332] text-[#C9A96E] flex items-center justify-center font-bold text-xs">
              IX
            </div>
            <div>
              <span className="font-bold text-white text-sm block">INEX Interior Studio</span>
              <span>© {new Date().getFullYear()} All Rights Reserved. Bespoke Spatial Refinement.</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={STUDIO_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-[#C9A96E] transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href={STUDIO_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-[#C9A96E] transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4" />
              <span>Google Maps Location</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
