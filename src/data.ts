import { StudioInfo, ProjectItem, ServiceItem, ReviewItem } from './types';

export const STUDIO_DATA: StudioInfo = {
  name: 'INEX Interior Studio',
  tagline: 'Spatial Refinement • Architectural Interiors • Turnkey Luxury',
  description: 'INEX Interior Studio transforms residential sanctuaries and commercial landmarks through meticulous spatial planning, natural material palettes, bespoke millwork, and master execution.',
  instagramHandle: '@inexinteriorstudio',
  instagramUrl: 'https://www.instagram.com/inexinteriorstudio?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==',
  googleMapsUrl: 'https://maps.app.goo.gl/f4kGuuaeHqgiD2iQ6',
  phone: '+91 98765 43210',
  email: 'hello@inexinteriorstudio.com',
  address: 'INEX Studio Atelier, Design District, India',
  experienceYears: 12,
  projectsDelivered: 180,
  squareFeetTransformed: '450,000+'
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'lumina-penthouse',
    title: 'The Lumina Sky Villa',
    category: 'Bespoke Villa',
    location: 'Skyline Boulevard',
    year: '2024',
    area: '5,800 sq.ft',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'An open-concept duplex penthouse balancing fluted travertine walls, concealed ambient illumination, and bespoke Italian walnut joinery.',
    features: ['Custom double-height marble fireplace', 'Integrated circadian lighting', 'Acoustic-paneled private study', 'Zero-threshold terrace transitions']
  },
  {
    id: 'solis-residence',
    title: 'Solis Zen Residence',
    category: 'Residential',
    location: 'Emerald Hills',
    year: '2023',
    area: '3,400 sq.ft',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Minimalist Japanese-Scandinavian fusion featuring bespoke micro-cement finishes, concealed storage walls, and natural linen textures.',
    features: ['Curated brass & fluted glass partitions', 'Bespoke floating kitchen island', 'Low-profile bespoke lounge seating']
  },
  {
    id: 'atelier-nexus',
    title: 'Nexus Executive Atelier',
    category: 'Commercial',
    location: 'Central Financial Hub',
    year: '2024',
    area: '7,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'High-performance workspace blending quiet collaboration pods, acoustic slatted oak baffling, and ergonomic luxury furnishings.',
    features: ['Slatted acoustic ceiling baffles', 'Touchless smart meeting lounges', 'Biophilic vertical green atrium']
  },
  {
    id: 'aurora-showroom',
    title: 'Aurora Haute Showroom',
    category: 'Showroom',
    location: 'Luxury Retail Avenue',
    year: '2024',
    area: '4,100 sq.ft',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    description: 'Experiential retail concept with sculpted curved archways, brushed champagne gold fixtures, and focused directional spotlights.',
    features: ['Sculpted monolithic display plinths', 'Custom microfiber fitting suites', 'Curved plaster architectural portal']
  },
  {
    id: 'casa-marina',
    title: 'Casa Marina Waterfront Villa',
    category: 'Bespoke Villa',
    location: 'Coastal Enclave',
    year: '2023',
    area: '6,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'A serene coastal estate framing ocean vistas with limestone flooring, bleached teak accents, and open breeze corridors.',
    features: ['Seamless indoor-outdoor pool deck', 'Wine cellar with temperature zoning', 'Private spa master ensuite']
  },
  {
    id: 'verve-apartment',
    title: 'Verve Urban Loft',
    category: 'Residential',
    location: 'Downtown Arts Quarter',
    year: '2024',
    area: '2,600 sq.ft',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm brutalist loft utilizing exposed board-formed concrete, warm cognac leather, and matte black architectural steel.',
    features: ['Custom steel-framed pivot doors', 'Floating monolithic vanity', 'Hidden laundry and butler pantry']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'interior-design',
    title: 'Comprehensive Interior Architecture',
    shortDesc: 'End-to-end bespoke design from concept blueprint, 3D visualization, to material sourcing and turnkey site execution.',
    fullDesc: 'We handle every dimension of your space. Our studio develops architectural floor plans, high-fidelity photorealistic 3D renderings, mood boards, and MEP coordination before turning over keys.',
    deliverables: ['Photorealistic 3D VR Walkthroughs', 'Detailed CAD Working Blueprints', 'Turnkey Execution & Site Oversight', 'Lighting & Acoustic Engineering'],
    iconName: 'Layout'
  },
  {
    id: 'spatial-planning',
    title: 'Spatial Refinement & Layout Optimization',
    shortDesc: 'Mathematical flow engineering to maximize usable volume, natural ventilation, and daylighting.',
    fullDesc: 'We reconfigure interior partitions and circulation routes to eliminate wasted space, creating ergonomic, effortless movement across private and social zones.',
    deliverables: ['Zoning & Flow Analysis', 'Demolition & Partition Reconfigurations', 'Circulation & Sightline Mapping', 'Ergonomic Scale Studies'],
    iconName: 'Compass'
  },
  {
    id: 'bespoke-furniture',
    title: 'Custom Millwork & Bespoke Furniture',
    shortDesc: 'Handcrafted cabinetry, custom-proportioned sofas, fluted wall paneling, and curated natural stone selections.',
    fullDesc: 'Collaborating directly with artisan woodworkers, stone masons, and metal fabricators to manufacture one-of-a-kind furniture tailored precisely to your proportions.',
    deliverables: ['Custom Wardrobes & Vanity Units', 'Monolithic Marble Kitchen Islands', 'Artisan Wood Veneer Paneling', 'Bespoke Upholstery & Fabrics'],
    iconName: 'Armchair'
  },
  {
    id: 'turnkey-execution',
    title: 'Turnkey Project Management',
    shortDesc: 'Single-point accountability with rigorous timeline adherence, vendor management, and quality control.',
    fullDesc: 'Zero stress for clients. We manage civil work, electrical, plumbing, carpentry, finishes, and final styling with scheduled milestones and transparent budget reporting.',
    deliverables: ['Weekly Milestone Photo Reports', 'Direct Vendor & Contractor Supervision', 'Rigorous Material QC Inspections', 'Defect-Free Handover Guarantee'],
    iconName: 'ShieldCheck'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajiv & Sneha M.',
    role: 'Homeowners',
    location: 'Emerald Hills Sky Villa',
    rating: 5,
    comment: 'INEX transformed our 5,000 sq.ft villa beyond our wildest imagination. Their spatial planning and custom lighting turned cold rooms into warm, breathtaking sanctuaries. The turnkey execution was completely seamless.',
    project: 'The Lumina Sky Villa'
  },
  {
    id: 'rev-2',
    author: 'Ananya S.',
    role: 'Managing Partner',
    location: 'Nexus Atelier',
    rating: 5,
    comment: 'Working with INEX on our executive office was the best decision. Clients are stunned every time they walk through our doors. The team’s attention to acoustic control and millwork detail is second to none.',
    project: 'Nexus Executive Atelier'
  },
  {
    id: 'rev-3',
    author: 'Vikram K.',
    role: 'Architect & Investor',
    location: 'Downtown Residence',
    rating: 5,
    comment: 'Their understanding of material harmony—pairing microcement with natural smoked oak—is extraordinary. Deadlines were respected to the exact day. Truly a world-class interior studio.',
    project: 'Verve Urban Loft'
  }
];
