// Form submission type
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

// Service item type
export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  image?: string;
}

// Feature item type
export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

// Client/Partner type
export interface Client {
  name: string;
  icon: string;
}

// Testimonial type
export interface Testimonial {
  id: number;
  text: string;
  name: string;
  position: string;
  initials: string;
}

// Company info type
export interface CompanyInfo {
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  contact: {
    phone1: string;
    phone2: string;
    email: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
  };
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  yearEstablished: number;
  experience: string;
}
