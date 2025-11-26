export interface TeamMember {
  name: string;
  role: string;
  focus?: string;
  location?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Heinrich Kronberg',
    role: 'Founder & Principal Curator',
    focus: 'Independent Watchmaking & Germanic Horology',
    location: 'München'
  },
  {
    name: 'Sophia Richter',
    role: 'Director of Private Acquisitions',
    focus: 'Discontinued References & Auction Procurement',
    location: 'München / Genève'
  },
  {
    name: 'Eduard von Lichtenstein',
    role: 'Head of Research & Provenance',
    focus: 'Authentication & Historical Documentation',
    location: 'München'
  },
  {
    name: 'Catherine Laurent',
    role: 'Client Strategy, Family Offices',
    focus: 'Portfolio Advisory & Long-Term Asset Positioning',
    location: 'Zürich'
  }
];
