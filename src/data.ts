import { BioDetails, ServiceItem, ProcessStep, CaseStudy, FAQItem, TestimonialItem } from "./types";

export const TEAM_BIOS: BioDetails[] = [
  {
    id: "priyanka",
    name: "Priyanka",
    tag: "Marketing Strategist",
    role: "The Strategy Lead",
    roleLine: "The one who asks too many questions. (She means well.)",
    bio: "Priyanka hears \"I don't know what to post\" and immediately starts mapping your ICP, your messaging gaps, and your content system in her head. She's been doing this for 6+ years — across content, social media, influencer marketing, and brand strategy and she has a Master's in Visual Communication to back it up. She's also deep into AI-powered marketing right now, which means your strategy runs faster, smarter, and with a lot less guesswork. Warm. Direct. Will absolutely tell you if your bio isn't working.",
    handles: "She handles: Strategy, content systems, messaging, client communication, and every touchpoint between your brand and your audience.",
    glowColor: "rgba(255, 103, 255, 0.2)",
    borderColor: "border-[#FF67FF]",
    accentClass: "text-[#FF67FF]",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRFhxNiw_5lXZZv1rmZK5_Z9YCYncSdKGXhWONROD1eUkdjLfc4zw-LLoIe47LacuSv5xM8TBy_yKGBovUHkA8nK6VcUNMLQr4tpQpHBRhCIDm4Qgz1waBnb5WziuSDuT6RLhwivCurC_qaa8dw6hPWmuMOIYQrbzTUBacQ-uA8ShYH3r-7X0KzUFisluBq7-VZYoey8B4J3E3xxJJWgxi9QDbhly_iwmb8sa2Y3hr8gKPGPIfelLyvlJtOLskUrvh2G4xKNRpAsc"
  },
  {
    id: "rashi",
    name: "Rashi",
    tag: "Brand Designer",
    role: "The Creative Lead",
    roleLine: "12 years in. Never missed a deadline. (She keeps score.)",
    bio: "Rashi designs brands that don't just look beautiful, they perform. She's worked across industries for over a decade, she has been featured at the NASDAQ billboard in Times Square, and she's built client relationships that have lasted 10 years. She's currently layering AI-assisted design into her workflow, which means faster builds without cutting corners on craft. Empathetic, detail-obsessed, and the reason your brand ends up looking better than you imagined.",
    handles: "She handles: Brand identity, visual systems, social media design, and the aesthetic instinct that makes everything feel intentional.",
    glowColor: "rgba(0, 174, 239, 0.2)",
    borderColor: "border-[#00AEEF]",
    accentClass: "text-[#00AEEF]",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoAxFRHKYAQ4MYQ_HV-4j5ObjJDrWtTRWWhRcl8uZ79O4OoLuGBHoPrtlgNPUyjApO1sUO55DQ5LowHd45bc2L7SLoAAu8vNPYggThvRehhTNfpNcx_XOhGk0qMUFFmpLn9Sm_Y07v8GoCI31grKWOJTQrQTVCY5j61sGQ4y6fB4j3YhJUtxqs2DgC740l_l4gBgFWnNEodZCvv6JHJXsiUPN6ssa1QmkD4Y22KZBlLp2plwsdQMeyr254aBAWsfqIt-PaLS9OB9lcow"
  }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    number: "01",
    title: "Brand Foundation",
    description: "ICP deep-dive, brand positioning, messaging framework, visual identity guidelines, tone of voice. Your brand gets a spine before it gets a feed.",
    iconName: "Diamond",
    borderColor: "border-[#FF67FF]/20 hover:border-[#FF67FF]/60"
  },
  {
    number: "02",
    title: "Content System",
    description: "Content pillars, monthly content calendar, caption frameworks, and a full bank of templates designed to your brand. You'll never stare at a blank page again.",
    iconName: "Layers",
    borderColor: "border-[#00AEEF]/20 hover:border-[#00AEEF]/60"
  },
  {
    number: "03",
    title: "Social Media Management",
    description: "End-to-end management of your Instagram (and/or LinkedIn). We create, schedule, engage, and report — so you can focus on running your business.",
    iconName: "Share2",
    borderColor: "border-[#2C48D4]/20 hover:border-[#2C48D4]/60"
  },
  {
    number: "04",
    title: "Paid Ads Strategy & Management",
    description: "Meta ads built around your business goals: awareness, lead generation, or direct inquiries. We build the ads, run them, and optimise in real time. (Ad spend billed separately.)",
    iconName: "TrendingUp",
    borderColor: "border-[#FF67FF]/20 hover:border-[#FF67FF]/60"
  },
  {
    number: "05",
    title: "Monthly WhatsApp Support",
    description: "Direct access to both of us, Monday to Friday. Questions answered, content reviewed, strategy discussed — without scheduling a call every time.",
    iconName: "MessageSquare",
    borderColor: "border-[#00AEEF]/20 hover:border-[#00AEEF]/60"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    month: "Month 1",
    title: "Foundation",
    description: "We learn your brand inside out. You get your ICP document, positioning strategy, visual identity, and content plan. This is the work that makes everything downstream actually work.",
    colorClass: "from-[#FF67FF] to-[#2C48D4]"
  },
  {
    number: "02",
    month: "Month 2",
    title: "Build",
    description: "Your brand goes live. Templates are built. Feed launches. Organic management begins. Ads are being planned.",
    colorClass: "from-[#00AEEF] to-[#FF67FF]"
  },
  {
    number: "03",
    month: "Month 3",
    title: "Grow",
    description: "Ads are live and being optimised. Content is running. Monthly report lands in your inbox with clear next steps.",
    colorClass: "from-[#2C48D4] to-[#00AEEF]"
  },
  {
    number: "04",
    month: "Month 4",
    title: "Handover",
    description: "System is documented. Team is trained. You own everything. We're cheering you on from the sidelines (or staying on retainer, your call).",
    colorClass: "from-[#FF67FF] to-[#00AEEF]"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "dtrh",
    brand: "Down The Rabbit Hole",
    category: "RECREATION",
    description: "How we transformed a high-end kids' recreation brand into a dreamy, premium destination, creating a cohesive visual narrative that increased parent engagement by 42%.",
    stats: [
      { value: 360, suffix: "+", label: "Quality Followers" },
      { value: 300, suffix: "K+", label: "Accounts Reached" },
      { value: 100, suffix: "+", label: "Direct Inquiries" }
    ],
    quote: "Loooooved it! I really think the concepts are forming up well.",
    author: "Adithi Sarovar, Down the Rabbit Hole",
    link: "/case-study-dtrh.html",
    imageUrl: "https://lh3.googleusercontent.com/d/16yITUKF52aix5UoAFTp02D6xRfWMrjo4",
    reversed: false
  },
  {
    id: "sheela",
    brand: "Dr. Sheela Nambiar",
    category: "LIFESTYLE MEDICINE",
    description: "How we crafted an authoritative yet deeply approachable brand identity and professional content framework for Dr. Sheela Nambiar's wellness practice, establishing her as an industry thought leader.",
    stats: [
      { value: 249, suffix: "%", label: "Reach Increase" },
      { value: 547, suffix: "%", label: "Impressions Increase" },
      { value: 15, suffix: "K+", label: "Monthly Impressions" }
    ],
    quote: "I am highly satisfied with the services and especially value the excellent communication. You have met my expectations, and I've even recommended you to several others. Working with you both has been an absolute pleasure!",
    author: "Dr. Sheela Nambiar",
    link: "/case-study-sheela.html",
    imageUrl: "https://siyahi.in/wordpress/wp-content/uploads/2016/09/Dr-Sheela-Nambiar.jpeg",
    reversed: true
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Thank you both for your support for the initial launch and growth on the socials. I am genuinely happy, impressed with the engagement that we had and do hope that we will be able to work together in the future. I am more than happy to give my recommendation towards your services to any future client.",
    author: "Adithi Sarovar",
    project: "Down The Rabbit Hole"
  },
  {
    quote: "I am highly satisfied with the services and especially value the excellent communication. You have met my expectations, and I've even recommended you to several others. Working with you both has been an absolute pleasure!",
    author: "Dr. Sheela Nambiar",
    project: "Lifestyle Medicine Practitioner"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you only work with women-led brands?",
    answer: "That's our sweet spot and the audience we understand best. But we look at fit first, not just founder demographics."
  },
  {
    question: "Which platforms do you manage?",
    answer: "Instagram and LinkedIn. We'll focus on whichever one your audience actually lives on."
  },
  {
    question: "Do we need an existing brand?",
    answer: "Nope. We've built from zero more than once. Bring us your business and your goals. We bring the rest."
  },
  {
    question: "What happens after Month 4?",
    answer: "You walk away with a running brand, documented systems, and a trained team. If you want us to stay on in an advisory capacity, we have a lightweight retainer for that."
  }
];
