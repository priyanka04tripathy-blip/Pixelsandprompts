export interface BioDetails {
  id: "priyanka" | "rashi";
  name: string;
  role: string;
  tag: string;
  roleLine: string;
  bio: string;
  handles: string;
  glowColor: string;
  borderColor: string;
  accentClass: string;
  imageUrl: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconName: "Diamond" | "Layers" | "Share2" | "TrendingUp" | "MessageSquare" | "Award";
  borderColor: string;
}

export interface ProcessStep {
  number: string;
  month: string;
  title: string;
  description: string;
  colorClass: string;
}

export interface CaseStudy {
  id: string;
  brand: string;
  category: string;
  description: string;
  stats: { value: number; suffix: string; label: string }[];
  quote: string;
  author: string;
  link: string;
  imageUrl: string;
  reversed: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  project: string;
}
