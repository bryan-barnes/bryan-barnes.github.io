export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  department?: string;
  note?: string;
  bullets: string[];
  earlierRoles?: EarlierRole[];
}

export interface EarlierRole {
  title: string;
  department?: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface SpeakingEngagement {
  event: string;
  title: string;
  date: string;
  location?: string;
  url?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const name = "Bryan Barnes";
export const positioning = "Digital Strategy and Marketing Technology Leader";
export const heroLine = "I lead digital strategy and build marketing technology.";
export const headline = "Fifteen years leading digital teams at UMBC, the National Aquarium, and the Baltimore Orioles.";
export const email = "jbryanbarnes@gmail.com";
export const linkedin = "https://linkedin.com/in/jbryanbarnes";
export const github = "https://github.com/bryan-barnes";
export const sourceRepo = "https://github.com/bryan-barnes/bryan-barnes.github.io";
export const siteUrl = "https://jbryanbarnes.com";

export const summary =
  "Fifteen years leading digital teams for UMBC, the National Aquarium, and the Baltimore Orioles. At UMBC, rebuilt UMBC.edu from a link farm into a 7,300-page platform drawing 1.7M sessions a year, launched a CASE award-winning programs directory (20,000+ apply clicks), and run enrollment email in Salesforce Marketing Cloud. At the Aquarium, led the replacement of the Salesforce CRM and e-commerce platforms behind $10M a year in online revenue. Sets strategy with senior leadership and writes the code to deliver it.";

export const homeSummary =
  "I build digital platforms, marketing tools, and measurement systems for organizations that need their web presence to actually work. I set strategy with senior leadership, lead the team that delivers it, and write code myself.";

export const experience: Experience[] = [
  {
    company: "University of Maryland, Baltimore County (UMBC)",
    title: "Director of Digital Strategy",
    department: "University Communications and Marketing",
    startDate: "May 2022",
    endDate: "Present",
    location: "Remote",
    note: "Promoted from Associate Director",
    bullets: [
      "Lead a digital team of four direct reports, plus indirect reports on some projects, and set digital strategy with university leadership",
      "Rebuilt UMBC.edu from a PHP link farm into a WordPress platform on Pantheon, migrating 19 legacy sites (7,000+ posts, 300+ pages), and co-manage with IT the WordPress Multisite behind nearly 600 department sites",
      "Designed, coded, and launched the Academic Programs Directory, replacing a 12,000-pixel table with faceted search: 20,000+ apply clicks and 4,000+ inquiries since June 2025; 68% of traffic from organic search in the first nine months (CASE Circle of Excellence Silver and Best of CASE District II, 2026)",
      "Cut mobile LCP on the homepage from 11.2s to 3.8s by inlining critical content, deferring scripts, and purging unused CSS; UMBC.edu scores 100 on PageSpeed accessibility and 95% on Silktide",
      "Built an internal Marketing Hub (Astro, 13 tools) for the marketing team: AI copywriter with style-guide enforcement, programmatic ad and video builders, and natural-language GA4 reporting via MCP server; in pilot ahead of full rollout",
      "Building measurement infrastructure: server-side tagging on Stape connecting web, ad, and Salesforce data; cookie consent banner and preference center built with legal counsel",
    ],
    earlierRoles: [
      {
        title: "Associate Director of Web Strategy and User Experience",
        department: "Office of Institutional Advancement",
        startDate: "March 2019",
        endDate: "May 2022",
        bullets: [
          "Managed UMBC.edu while it was still a single PHP page of links",
          "Redesigned the shared theme for about 500 department subdomain sites",
          "Launched Faculty Expert Search (2021), a searchable directory that connects UMBC scholars with the public and each other",
        ],
      },
    ],
  },
  {
    company: "Baltimore Orioles (MLB)",
    title: "In-Game Coordinator",
    startDate: "February 2018",
    endDate: "July 2019",
    location: "Baltimore, MD",
    note: "Part-time from March 2019",
    bullets: [
      "Ran real-time in-game social for 3M+ followers on Facebook, Twitter, and Instagram: live graphics, directing a roving in-stands coordinator, and photographer content; stayed on part-time a second season at the team's request",
      "Used engagement data with MLB to show that late-game pitcher posts during losses underperformed",
    ],
  },
  {
    company: "National Aquarium",
    title: "Director of Digital",
    startDate: "April 2013",
    endDate: "July 2017",
    location: "Baltimore, MD",
    bullets: [
      "Led digital for Maryland's largest tourist attraction: aqua.org, 5M annual visits, $10M annual e-commerce revenue",
      "Led the replacement of the organization's Salesforce CRM and e-commerce platforms, delivered on time and on budget",
      "Managed a team of three full-time email, UX, and web specialists running campaigns across web, email, social, and paid media",
    ],
  },
  {
    company: "Maryland Office of Tourism, Film and the Arts",
    title: "Digital Marketing Manager",
    department: "Dept. of Business and Economic Development (now Commerce)",
    startDate: "January 2011",
    endDate: "April 2013",
    location: "Baltimore, MD",
    bullets: [
      "Built Maryland's tourism social presence from scratch: Facebook, Twitter (@TravelMD), Instagram (@VisitMaryland)",
      "Ran the website and real-time social media command center for Star-Spangled Sailabration (2012), the War of 1812 bicentennial that drew an estimated 1M attendees",
      "Led development of the Maryland Civil War Trails mobile app",
    ],
  },
  {
    company: "The Leukemia & Lymphoma Society",
    title: "Campaign Manager",
    startDate: "2008",
    endDate: "2011",
    location: "Baltimore, MD",
    bullets: [
      "Ran Team In Training, the society's flagship fundraising campaign, across a four-county area, and beat the FY10 fundraising goal by 14.6%",
      "Presented the program to groups of 20 to 30 prospective participants, with a sign-up rate above 75% in FY10",
      "Pushed new media and grassroots direct marketing to reach volunteers and donors, and worked with other departments on cross-marketing",
    ],
  },
  {
    company: "One Eleven Records",
    title: "Marketing Manager",
    startDate: "2004",
    endDate: "2009",
    location: "Baltimore, MD",
    bullets: [
      "Ran campaigns for a 12-artist, Warner-distributed label; two artists upstreamed to Warner",
      "Supervised five remote employees and stayed in daily or weekly contact with all twelve artists",
      "Set up the label's shared email, documents, data, and scheduling systems",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "University of Maryland, College Park",
    degree: "Bachelor of Arts, Philosophy",
    location: "College Park, MD",
  },
];

export const certifications: Certification[] = [
  {
    name: "Google Analytics 4 Certification",
    issuer: "Google Skillshop",
  },
  {
    name: "Google Tag Manager Certification",
    issuer: "Google Skillshop",
  },
];

export const speaking: SpeakingEngagement[] = [
  {
    event: "CASE All Districts Online Conference",
    title: "Inclusion in the Digital World",
    date: "June 2023",
    location: "Online",
  },
  {
    event: "CASE District I & II Annual Conference",
    title: "Accessible Design is Better Design (for everyone)",
    date: "March 2023",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Marketing Technology",
    items: [
      "Salesforce Marketing Cloud",
      "Marketing automation",
      "WordPress Multisite",
      "Pantheon",
      "Consent management",
    ],
  },
  {
    category: "Analytics and SEO",
    items: [
      "GA4",
      "Google Tag Manager",
      "Server-side tagging (Stape)",
      "Core Web Vitals",
      "Site architecture",
      "A/B testing",
    ],
  },
  {
    category: "Development and AI",
    items: [
      "Python",
      "PHP",
      "HTML/CSS",
      "Astro",
      "Tailwind",
      "Flask",
      "API integration",
      "MCP servers",
      "LLM tool development",
    ],
  },
  {
    category: "Leadership",
    items: [
      "Digital transformation",
      "Marketing operations",
      "Governance",
      "Vendor and budget management",
      "Accessibility",
    ],
  },
];
