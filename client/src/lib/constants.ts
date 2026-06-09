// Navigation links for the header and footer
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/services", label: "our services" },
  { href: "/clients", label: "Business Partners" },
  { href: "/contact", label: "Contact Us" },
];

// Service overview items for home page
export const servicesOverview = [
  {
    id: 1,
    title: "Auctioning Services",
    description:
      "Professional and transparent auctioning of real estate, vehicles, equipment, and other valuable assets.",
    icon: "gavel",
  },
  {
    id: 2,
    title: "Assets Valuation",
    description:
      "Accurate and professional valuation of properties, businesses, equipment, and other assets.",
    icon: "chart-line",
  },
  {
    id: 3,
    title: "Business Advisory",
    description:
      "Expert consultation on business valuation, asset management, and strategic investment decisions.",
    icon: "comments-dollar",
  },
];

// Detailed services information
export const detailedServices = [
  {
    id: 1,
    title: "Auctioning Services",
    description:
      "Our auctioning services provide a transparent and efficient platform for selling assets at their market value. We handle the entire process from pre-auction assessment to the final transaction.",
    icon: "gavel",
    features: [
      "Real estate auctions for residential and commercial properties",
      "Vehicle and equipment auctions",
      "Government and institutional asset auctions",
      "Bank foreclosure and collateral auctions",
      "Online and in-person auction formats",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 2,
    title: "Assets Valuation",
    description:
      "We provide accurate and reliable valuations of various assets using industry-standard methodologies and our extensive market knowledge to determine fair market values.",
    icon: "chart-line",
    features: [
      "Real estate valuation for residential and commercial properties",
      "Business and enterprise valuation",
      "Equipment and machinery valuation",
      "Insurance valuation for assets and properties",
      "Valuation reports for legal and financial purposes",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 3,
    title: "Business Advisory",
    description:
      "Our business advisory services help organizations make informed decisions about their assets, investments, and strategic direction based on professional analysis and market insights.",
    icon: "comments-dollar",
    features: [
      "Business performance assessment and optimization",
      "Asset management and investment advisory",
      "Financial restructuring and planning",
      "Merger and acquisition valuation",
      "Strategic business planning and development",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  },
];

// Features for Why Choose Us section
export const features = [
  {
    title: "13+ Years Experience",
    description:
      "Over a decade of professional experience serving clients across Rwanda.",
    icon: "award",
  },
  {
    title: "Expert Team",
    description:
      "Qualified professionals with extensive knowledge in valuation and auctioning.",
    icon: "users",
  },
  {
    title: "Trusted Partners",
    description:
      "Partnerships with major institutions and businesses across Rwanda.",
    icon: "handshake",
  },
  {
    title: "Proven Results",
    description:
      "Track record of successful valuations and auctions for satisfied clients.",
    icon: "check-double",
  },
];

// Client/Partner logos data
export const clients = [
  // Original partners
  { name: "SONARWA Life Insurance", icon: "shield-alt" },
  { name: "MYFAIR Insurance", icon: "shield-alt" },
  { name: "Office of the High Commissioner of Canada", icon: "flag" },
  { name: "Rwanda Ultimate Golf Courses", icon: "building" },
  { name: "SANS Mark Ltd", icon: "building" },
  { name: "Right to Play", icon: "users" },

  // Banking & Finance
  { name: "Bank of Kigali", icon: "landmark" },
  { name: "Equity Bank Rwanda", icon: "landmark" },
  { name: "I&M Bank Rwanda", icon: "landmark" },
  { name: "BPR Bank Rwanda", icon: "landmark" },
  { name: "Access Bank Rwanda", icon: "landmark" },
  { name: "Cogebanque", icon: "landmark" },
  { name: "Rwanda Development Bank (BRD)", icon: "landmark" },
  { name: "National Bank of Rwanda (BNR)", icon: "landmark" },
  { name: "GT Bank Rwanda", icon: "landmark" },
  { name: "NCBA Bank Rwanda", icon: "landmark" },
  { name: "Urwego Bank", icon: "landmark" },
  { name: "Rwanda Microfinance Ltd", icon: "chart-line" },

  // Insurance
  { name: "Sanlam General Insurance", icon: "shield-alt" },
  { name: "Prime Insurance Rwanda", icon: "shield-alt" },
  { name: "RADIANT Insurance", icon: "shield-alt" },
  { name: "UAP Insurance Rwanda", icon: "shield-alt" },
  { name: "Britam Insurance Rwanda", icon: "shield-alt" },
  { name: "CIAR Rwanda", icon: "shield-alt" },

  // Government & Public Institutions
  { name: "Rwanda Revenue Authority (RRA)", icon: "flag" },
  { name: "Rwanda Development Board (RDB)", icon: "building" },
  { name: "Rwanda Social Security Board (RSSB)", icon: "building" },
  { name: "Rwanda Housing Authority (RHA)", icon: "building" },
  { name: "Rwanda Standards Board (RSB)", icon: "building" },
  { name: "National Industrial Research & Development Agency", icon: "chart-line" },
  { name: "Rwanda Mines, Petroleum & Gas Board", icon: "bolt" },
  { name: "Rwanda Agriculture Board (RAB)", icon: "recycle" },

  // Telecommunications
  { name: "MTN Rwanda", icon: "bolt" },
  { name: "Airtel Rwanda", icon: "bolt" },
  { name: "RwandaTel", icon: "bolt" },

  // Real Estate & Construction
  { name: "Century Real Estate Rwanda", icon: "building" },
  { name: "Vision City Kigali", icon: "building" },
  { name: "Novare Kigali Gateway", icon: "building" },
  { name: "Kigali Heights", icon: "building" },
  { name: "Pension Plaza Kigali", icon: "building" },

  // Hospitality & Tourism
  { name: "Kigali Marriott Hotel", icon: "building" },
  { name: "Radisson Blu Hotel Kigali", icon: "building" },
  { name: "Serena Hotel Kigali", icon: "building" },
  { name: "Hotel des Mille Collines", icon: "building" },
  { name: "Lemigo Hotel", icon: "building" },
  { name: "Park Inn by Radisson Kigali", icon: "building" },
  { name: "Gorillas Hotels Rwanda", icon: "building" },

  // Transport & Logistics
  { name: "RwandAir", icon: "truck" },
  { name: "DHL Rwanda", icon: "truck" },
  { name: "Rwanda Transport Development Agency", icon: "truck" },

  // Energy
  { name: "Rwanda Energy Group (REG)", icon: "bolt" },
  { name: "Energy Development Corporation (EDCL)", icon: "bolt" },
  { name: "Gigawatt Global Rwanda", icon: "bolt" },

  // Agriculture, Food & Beverages
  { name: "Bralirwa", icon: "building" },
  { name: "Minimex Rwanda", icon: "building" },
  { name: "East African Breweries Rwanda", icon: "building" },
  { name: "Rwanda Cooperative Agency", icon: "recycle" },

  // Healthcare
  { name: "King Faisal Hospital Rwanda", icon: "hands-helping" },
  { name: "Rwanda Military Hospital", icon: "hands-helping" },
  { name: "Caraes Ndera Hospital", icon: "hands-helping" },
  { name: "CHUK University Teaching Hospital", icon: "hands-helping" },

  // Education
  { name: "University of Rwanda", icon: "university" },
  { name: "Carnegie Mellon University Africa", icon: "university" },
  { name: "African Leadership University (ALU)", icon: "university" },
  { name: "Rwanda Polytechnic", icon: "university" },
  { name: "INES-Ruhengeri", icon: "university" },

  // International Organizations
  { name: "World Bank Rwanda", icon: "landmark" },
  { name: "USAID Rwanda", icon: "flag" },
  { name: "GIZ Rwanda", icon: "users" },
  { name: "One Acre Fund Rwanda", icon: "users" },
  { name: "Clinton Health Access Initiative (CHAI)", icon: "hands-helping" },
  { name: "UNHCR Rwanda", icon: "flag" },
  { name: "World Food Programme Rwanda", icon: "users" },

  // Professional Services
  { name: "KPMG Rwanda", icon: "chart-line" },
  { name: "Deloitte Rwanda", icon: "chart-line" },
  { name: "PwC Rwanda", icon: "chart-line" },
  { name: "EY Rwanda", icon: "chart-line" },
  { name: "BDO Rwanda", icon: "chart-line" },

  // Retail & Commerce
  { name: "Carrefour Rwanda", icon: "building" },
  { name: "Simba Supermarket Rwanda", icon: "building" },
  { name: "Bourbon Coffee", icon: "building" },
  { name: "Inzozi Coffee Rwanda", icon: "building" },

  // Technology
  { name: "Andela Rwanda", icon: "chart-line" },
  { name: "KLab Rwanda", icon: "chart-line" },
  { name: "RSwitch", icon: "chart-line" },
  { name: "BK TecHouse", icon: "chart-line" },

  // NGOs & Civil Society
  { name: "Save the Children Rwanda", icon: "users" },
  { name: "Red Cross Rwanda", icon: "hands-helping" },
  { name: "Doctors Without Borders Rwanda", icon: "hands-helping" },
  { name: "Plan International Rwanda", icon: "users" },
  { name: "World Vision Rwanda", icon: "users" },
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    text: "Cyamunara Rwanda provided an excellent valuation service for our commercial properties. Their team was professional, thorough, and delivered the report ahead of schedule.",
    name: "Samuel Mutesa",
    position: "Finance Director, SANS Mark Ltd",
    initials: "SM",
  },
  {
    id: 2,
    text: "We've worked with Cyamunara Rwanda on multiple auctions, and their process is always transparent, efficient, and yields excellent results for all parties involved.",
    name: "Christine Nyirabu",
    position: "Asset Manager, SONARWA Life",
    initials: "CN",
  },
];

// Company information
export const companyInfo = {
  name: "Cyamunara Rwanda Ltd",
  address: {
    street: "Nyarugenge, MUHIMA",
    city: "Kigali",
    country: "Rwanda",
  },
  contact: {
    phone1: "+250 787 334 130",
    phone2: "+250 788 822 147",
    email: "cyamunararwanda@gmail.com",
  },
  businessHours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
    saturday: "off  ",
  },
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  yearEstablished: 2010,
  experience: "13+ years",
};
