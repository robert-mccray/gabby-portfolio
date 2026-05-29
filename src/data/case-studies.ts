export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  client: string;
  year: string;
  brief: string;
  strategy: string;
  impact: string;
  tags: string[];
  // We'll use these to populate the masonry grid later
  gallery: {
    src: string;
    alt: string;
    colSpan?: number; 
  }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "luminon-gaming": {
    id: "luminon-gaming",
    title: "Scaling a Global Esports Identity",
    role: "Co-Founder & CMO",
    client: "Luminon Gaming LLC",
    year: "2022 - 2026",
    brief: "Develop an entire visual brand, merchandise design, and social media strategy from inception to support an organization scaling to 1,000+ members.",
    strategy: "Designed a cohesive, high-energy visual system applied across team jerseys, Shopify storefronts, and digital event branding for 8+ LAN events. All digital and physical merchandise deliverables were completely original creations designed to foster community identity.",
    impact: "Grew community to 1,000+ members and successfully supported over 50 online events and multiple national tournaments.",
    tags: ["Brand Identity", "Merchandise Design", "E-commerce", "Event Logistics"],
    gallery: [] // We will map her specific image paths here later
  },
  "miel-dental": {
    id: "miel-dental",
    title: "Modernizing High-End Dental Aesthetics",
    role: "Brand Designer & Digital Media Manager",
    client: "Miél Dental Aesthetics",
    year: "2024 - Present",
    brief: "Create a sophisticated, trustworthy brand identity and digital footprint for a premier cosmetic dentistry practice in Massachusetts.",
    strategy: "Developed a clean, modern aesthetic utilizing custom UI designs for their web presence and physical promotional assets, ensuring patient touchpoints felt premium and cohesive.",
    impact: "Established a dominant local search and social presence, driving patient acquisition through targeted, high-quality digital campaigns.",
    tags: ["Healthcare Marketing", "Web Design", "Social Strategy", "Print Assets"],
    gallery: [] 
  }
};