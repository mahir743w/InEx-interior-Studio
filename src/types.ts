export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Bespoke Villa' | 'Showroom';
  location: string;
  year: string;
  area: string;
  image: string;
  description: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  project: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  instagramHandle: string;
  instagramUrl: string;
  googleMapsUrl: string;
  phone: string;
  email: string;
  address: string;
  experienceYears: number;
  projectsDelivered: number;
  squareFeetTransformed: string;
}
