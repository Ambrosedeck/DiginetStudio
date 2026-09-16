export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  href: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  popular?: boolean;
  bestFor: string;
  features: string[];
  ctaText: string;
}

export const AGENCY_CONFIG = {
  name: "Diginet Studio",
  tagline: "Modern Website Development Solutions",
  positioning: "We Help Creators And Businesses Grow Online Through Content, Branding, Website And Marketing.",
  aboutShort: "Diginet Studio is a digital agency helping creators, startups, and businesses build a stronger online presence.",
  aboutFull: "From sleek corporate websites to powerful e-commerce platforms, we craft tailored digital experiences that drive growth, enhance brand presence, and help businesses thrive in the digital landscape.",
  
  contact: {
    email: "hello@diginetstudio.com",
    phone: "+91 93661 61941",
    whatsappNumber: "919366161941",
    whatsappMessage: "Hello Diginet Studio! I would like to enquire about your website development and digital services.",
    whatsappUrl: "https://wa.me/919366161941?text=Hello%20Diginet%20Studio!%20I%20would%20like%20to%20enquire%20about%20your%20services.",
    address: "Digital Studio & Consultancy, India",
  },

  trustStrip: [
    "Stronger Online Presence",
    "More Customer Enquiries",
    "Better Google Visibility",
    "Professional Brand Image",
    "Automated Business Processes",
  ],

  approachSteps: [
    { title: "Understand", desc: "We listen to your business goals, target audience, and project scope." },
    { title: "Build", desc: "We design and develop high-converting, responsive digital solutions." },
    { title: "Optimise", desc: "We fine-tune performance, SEO visibility, and user flow." },
    { title: "Grow", desc: "We support your launch and continuous digital progression." },
  ],

  services: [
    {
      id: "website-development",
      number: "01",
      title: "Website Development",
      subtitle: "Custom, fast & responsive websites built to convert",
      description: "We design and develop fast, responsive and conversion-focused websites that make your business look professional and help turn visitors into customers.",
      features: [
        "Business Websites",
        "Landing Pages",
        "E-commerce Websites",
        "Portfolio Websites",
        "Responsive Design",
        "Website Optimisation",
      ],
      ctaText: "Explore Website Development →",
      href: "#pricing",
    },
    {
      id: "seo-optimisation",
      number: "02",
      title: "SEO & Google Optimisation",
      subtitle: "Rank higher and reach relevant local and global customers",
      description: "We help businesses improve their visibility on Google and attract more relevant customers through practical SEO and local optimisation strategies.",
      features: [
        "Local SEO",
        "Google Business Profile Optimisation",
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "SEO Audits",
      ],
      ctaText: "Improve My Google Presence →",
      href: "#contact",
    },
    {
      id: "ai-automation-crm",
      number: "03",
      title: "AI Automation & CRM",
      subtitle: "Smart workflows and automated lead management",
      description: "Automate repetitive tasks, organise customer enquiries and build smarter workflows that save time and help your business operate more efficiently.",
      features: [
        "Lead Management",
        "CRM Setup",
        "WhatsApp Automation",
        "Customer Follow-ups",
        "Workflow Automation",
        "AI-powered Business Processes",
      ],
      ctaText: "Automate My Business →",
      href: "#contact",
    },
  ] as ServiceItem[],

  whyUs: [
    {
      number: "01",
      title: "Built Around Your Business",
      description: "Every website and digital solution is tailored around your business, customers and goals.",
    },
    {
      number: "02",
      title: "Modern & Professional",
      description: "Clean design, modern technology and thoughtful user experiences that make your business look credible online.",
    },
    {
      number: "03",
      title: "Growth Focused",
      description: "We don't just build websites. We build digital experiences designed to generate enquiries, improve visibility and support growth.",
    },
    {
      number: "04",
      title: "Reasonable Pricing",
      description: "Professional digital solutions without unnecessary agency overheads or inflated pricing.",
    },
  ],

  pricing: [
    {
      id: "starter",
      name: "STARTER",
      price: "₹7,999+",
      numericPrice: 7999,
      popular: false,
      bestFor: "Individuals, small businesses and new brands",
      features: [
        "Professional Business Website",
        "Up to 5 Pages",
        "Responsive Design",
        "Mobile Optimisation",
        "Contact Form",
        "WhatsApp Integration",
        "Basic SEO Setup",
        "Social Media Integration",
      ],
      ctaText: "Get Started",
    },
    {
      id: "basic",
      name: "BASIC",
      price: "₹15,999+",
      numericPrice: 15999,
      popular: true,
      bestFor: "Growing businesses that need a stronger online presence",
      features: [
        "Everything in Starter",
        "Up to 8 Pages",
        "Custom UI/UX Design",
        "Advanced Contact Forms",
        "Google Maps Integration",
        "Google Business Integration",
        "On-page SEO",
        "Performance Optimisation",
        "Analytics Integration",
      ],
      ctaText: "Choose Basic",
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: "₹19,999+",
      numericPrice: 19999,
      popular: false,
      bestFor: "Businesses that need a more advanced website",
      features: [
        "Everything in Basic",
        "Up to 12 Pages",
        "Advanced UI/UX",
        "E-commerce / Advanced Features",
        "Advanced SEO Setup",
        "Conversion-focused Sections",
        "Custom Integrations",
        "Performance Optimisation",
        "Analytics & Tracking",
      ],
      ctaText: "Choose Premium",
    },
  ] as PricingPlan[],

  pricingDisclaimer: "Prices start from ₹7,999+ and may vary depending on project requirements.",

  importancePoints: [
    {
      title: "Your Website Builds Trust",
      description: "A professional website gives potential customers confidence in your business.",
    },
    {
      title: "Google Helps Customers Find You",
      description: "A strong Google presence helps your business appear when people search for your products or services.",
    },
    {
      title: "Your Website Works 24/7",
      description: "Unlike a physical office, your website can provide information and generate enquiries at any time.",
    },
    {
      title: "First Impressions Matter",
      description: "Customers often judge the professionalism of a business by its online presence.",
    },
    {
      title: "Your Competitors Are Online",
      description: "A strong digital presence helps you compete with businesses already investing in their online visibility.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discover",
      description: "We understand your business, audience, goals and requirements.",
    },
    {
      step: "02",
      title: "Plan",
      description: "We create the structure, strategy and direction for your project.",
    },
    {
      step: "03",
      title: "Build",
      description: "We design and develop the website or digital solution.",
    },
    {
      step: "04",
      title: "Launch & Optimise",
      description: "We launch, test and optimise your digital presence for better performance.",
    },
  ],

  targetAudience: [
    "Local Businesses",
    "Clinics & Healthcare",
    "Hotels & Homestays",
    "Restaurants & Cafés",
    "Creators",
    "Startups",
    "Professional Services",
    "E-commerce Businesses",
  ],
};
