export interface Watch {
  id: string;
  brand: string;
  model: string;
  reference: string;
  year?: string;
  caseSize?: string;
  movement?: string;
  condition?: string;
  boxPapers?: string;
  description: string;
  investmentNote?: string;
  imageUrl: string;
  status: 'Available for Consultation' | 'By Private Request' | 'Acquisition Ongoing' | 'Reserved';
}

export interface NavItem {
  label: string;
  href: string;
}