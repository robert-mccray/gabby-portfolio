export interface ProjectAsset {
  src: string;
  alt: string;
}

export interface ProjectData {
  id: string;
  title: string;
  company: string;
  date: string;
  tags: string[];
  description: string;
  milestones: string[];
  gallery: ProjectAsset[];
}

export const projects: ProjectData[] = [
  {
    id: "miel-dental-aesthetics",
    company: "Miel Dental Aesthetics",
    title: "Brand Partnerships & Marketing Coordinator",
    date: "Feb 2026 - Present",
    tags: ["Brand Architecture", "Website Dev", "Event Branding", "Influencer Strategy"],
    description: "Spearheading creative brand strategy, high-profile regional event execution, and end-to-end digital production for luxury healthcare aesthetics and experiential lifestyle marketing.",
    milestones: [
      "Conceptualized and developed unified branding systems, asset packages, and physical event collateral for the Boston Weddings Bubbly Brunch 2026.",
      "Produced and curated high-converting influencer, UGC, and recruitment marketing campaigns to position the brand at the premium tier of medical aesthetics.",
      "Architected responsive digital touchpoints, web layout designs, and social assets without the use of automated template generators to ensure absolute brand exclusivity."
    ],
    gallery: [
      // Digital Campaigns & Social Media
      { src: "/assets/miel/miel-spring-promo.png", alt: "Spring Smile Refresh Campaign" },
      { src: "/assets/miel/miel-dentist-day.png", alt: "National Dentist Day Feature" },
      { src: "/assets/miel/miel-mothers-day.png", alt: "Mother's Day Instagram Story" },
      
      // Interactive Patient Touchpoints
      { src: "/assets/miel/miel-giveaway-flyer.png", alt: "Smile Giveaway QR Code Flyer" },
      { src: "/assets/miel/miel-smile-quiz.png", alt: "Complimentary Smile Quiz Signage" },
      { src: "/assets/miel/miel-review-sign.png", alt: "In-Office Patient Review QR Signage" },
      
      // Physical Brand Experience & Merch
      { src: "/assets/miel/miel-kraft-bag.png", alt: "Branded Patient Gift Bag" },
      { src: "/assets/miel/miel-tote-bag.png", alt: "Miel Canvas Tote Bag" },
      { src: "/assets/miel/miel-business-cards.png", alt: "Miel Dental Business Cards" },
      { src: "/assets/miel/miel-compact-mirror.png", alt: "Miel Compact Mirror Promo Item" },
      
      // Internal Apparel & Badges
      { src: "/assets/miel/miel-said-yes.png", alt: "I Said Yes To My Smile Graphic" },
      { src: "/assets/miel/miel-crewneck.png", alt: "Miel Staff Crewneck Sweater" },
      { src: "/assets/miel/miel-crop-top.jpg", alt: "Smile You're Next Crop Top" },

      // Event & Recruitment
      { src: "/assets/miel/miel-hiring-doctor.png", alt: "Associate Doctor Hiring Campaign" },
      { src: "/assets/miel/miel-hiring-da.png", alt: "Dental Assistant Hiring Flyer" },
      { src: "/assets/miel/miel-hiring-hygienist.png", alt: "Dental Hygienist Hiring Flyer" }
    ]
  },
  {
    id: "green-juice-sv",
    company: "Green Juice SV",
    title: "Lead Brand Designer & Social Media Manager",
    date: "2018 - Present", // 8 years
    tags: ["F&B Marketing", "Brand Identity", "Event Promotions", "Social Media"],
    description: "Directed the complete brand identity and digital footprint for a beloved local food and beverage company over an 8-year tenure, bridging digital campaigns with physical community events.",
    milestones: [
      "Architected the entire visual brand from inception, designing the core logo, typography, merchandise, and physical packaging.",
      "Managed end-to-end social media operations, community engagement, and seasonal promotional rollouts, driving sustained local growth.",
      "Designed high-converting localized campaigns and physical event branding for major community touchpoints, including the Fiestas Patronales."
    ],
    gallery: [
      { src: "/assets/green-juice/gj-logo.jpg", alt: "Green Juice SV Official Logo" },
      { src: "/assets/green-juice/fiestas-patronales.jpg", alt: "Fiestas Patronales Event Promotional Flyer" },
      { src: "/assets/green-juice/holiday-promo.jpg", alt: "Holiday Gift Box Social Media Asset" },
      { src: "/assets/green-juice/tres-leches.png", alt: "Tres Leches Christmas Campaign Layout" },
      { src: "/assets/green-juice/event-setup.jpg", alt: "Physical Event Signage and Decor Setup" }
    ]
  },
  {
    id: "luminon-gaming",
    company: "Luminon Gaming",
    title: "Co-Founder & Chief Marketing Officer",
    date: "2022 - 2026",
    tags: ["Esports Branding", "Merchandise Design", "E-commerce", "Event Logistics"],
    description: "Directed all creative strategy, developing the logo, visual systems, team jerseys, and event branding from inception to support an organization scaling to 1,000+ members.",
    milestones: [
      "Led e-commerce and merchandising operations, designing 40+ custom apparel pieces and managing storefronts.",
      "Developed cohesive, high-energy visual systems applied across digital event branding for 8+ LAN events.",
      "Integrated workflows for content production, digital asset management, and fully remote team coordination."
    ],
    gallery: [
      // Digital Assets
      { src: "/assets/luminon/lg-jersey-mockup.png", alt: "Luminon Official Pro Jersey Design" },
      { src: "/assets/luminon/lg-hwc-schedule.png", alt: "Halo World Championship Match Schedule Graphic" },
      { src: "/assets/luminon/lg-dh-qualified.png", alt: "Dreamhack Qualification Announcement" },
      // Physical Merchandise Mix
      { src: "/assets/luminon/lg-tee-glass.png", alt: "Glass or Slice Graphic Tee" },
      { src: "/assets/luminon/lg-pink-hat.png", alt: "Luminon Embroidered Dad Hat" },
      { src: "/assets/luminon/lg-backpack.png", alt: "Luminon Branded Tech Backpack" },
      // More Digital/Event Promos
      { src: "/assets/luminon/lg-watch-party.png", alt: "Official Twitch Watch Party Promotional Poster" },
      { src: "/assets/luminon/lg-thank-you.png", alt: "Player Appreciation Social Media Asset" },
      // Detail/Accessories Mix
      { src: "/assets/luminon/lg-lan-legends-tee.png", alt: "LAN Legends Commemorative Tee" },
      { src: "/assets/luminon/lg-shorts.png", alt: "Luminon Athletic Shorts" },
      { src: "/assets/luminon/lg-mug.png", alt: "Luminon HCS Branded Coffee Mug" },
      { src: "/assets/luminon/lg-tumbler.png", alt: "Luminon Travel Tumbler" },
      // Embroidered Patches
      { src: "/assets/luminon/lg-patch-aim.png", alt: "Aim High Game Harder Patch" },
      { src: "/assets/luminon/lg-patch-legends.png", alt: "LAN Legends 2025 Patch" },
      { src: "/assets/luminon/lg-patch-frag.png", alt: "Top Frag 15 Patch" }
    ]
  },
  {
    id: "pupuseria-las-papusas",
    company: "Pupusería Las Papusas",
    title: "Chief of Marketing",
    date: "2025 - 2026",
    tags: ["Restaurant Marketing", "Brand Identity", "Community Outreach", "Social Media"],
    description: "Co-founded and developed the complete visual identity and marketing strategy for a family-owned Salvadoran restaurant, blending nostalgic cultural roots with modern digital appeal.",
    milestones: [
      "Conceptualized the brand identity from scratch, designing the logo, menus, and visual assets to establish a welcoming, community-focused presence.",
      "Orchestrated the digital launch and daily marketing operations, managing Facebook and Instagram presence to drive foot traffic and customer loyalty.",
      "Designed and launched promotional campaigns for special events, new menu items, and app integrations, creating interactive content to engage the local community."
    ],
    gallery: [
      { src: "/assets/pupuseria/pupuseria-logo.png", alt: "Pupusería Las Papusas Official Logo" },
      { src: "/assets/pupuseria/pupuseria-apertura.png", alt: "Opening Night Social Media Announcement" },
      { src: "/assets/pupuseria/pupuseria-combos.png", alt: "Special Combos Menu Graphic" },
      { src: "/assets/pupuseria/pupuseria-menu.png", alt: "Restaurant Menu Cover Design" },
      { src: "/assets/pupuseria/pupuseria-app.png", alt: "Delivery App Integration Promo" },
    ]
  },
  {
    id: "oakside-companies",
    company: "Oakside Companies",
    title: "CRM & Digital Marketing Manager",
    date: "2024 - 2025",
    tags: ["Real Estate Marketing", "B2B Comms", "Market Research", "Graphic Design"],
    description: "Provided comprehensive administrative and marketing support for a real estate development and investment brokerage firm, driving business growth and maintaining strong B2B client relationships.",
    milestones: [
      "Designed commercial real estate marketing materials including property flyers, brochures, and email campaigns to highlight multi-million dollar self-storage assets.",
      "Managed comprehensive social media strategies, creating custom graphics for company milestones, team features, and real estate market insights.",
      "Coordinated high-level executive operations, conducting market research, updating website content, and preparing proposals for internal and external stakeholders."
    ],
    gallery: [
      { src: "/assets/oakside/oakside-logo.png", alt: "Oakside Companies Logo" },
      { src: "/assets/oakside/oakside-listing.png", alt: "Commercial Real Estate Property Listing" },
      { src: "/assets/oakside/oakside-team.png", alt: "Meet the Team Executive Highlight" },
      { src: "/assets/oakside/oakside-reit.png", alt: "Quarterly REIT Update Graphic" },
      { src: "/assets/oakside/oakside-insights.png", alt: "Market Insights Social Media Post" },
      { src: "/assets/oakside/oakside-june.png", alt: "Juneteenth Corporate Culture Post" },
      { src: "/assets/oakside/oakside-veteran.png", alt: "Veterans Day Appreciation Graphic" }
    ]
  }
];