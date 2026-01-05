export interface TeamMember {
  name: string;
  role: string;
  focus?: string;
  location?: string;
  email: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Heinrich Kronberg',
    role: 'Gruender & Leitender Kurator',
    focus: 'Unabhaengige Uhrmacherei & deutschsprachige Uhrmacherkunst',
    location: 'Muenchen',
    email: 'h.kronberg@kronbergzeithaus.de'
  },
  {
    name: 'Sophia Richter',
    role: 'Direktorin Private Akquisitionen',
    focus: 'Eingestellte Referenzen & Auktionen',
    location: 'Muenchen / Genf',
    email: 's.richter@kronbergzeithaus.de'
  },
  {
    name: 'Eduard von Lichtenstein',
    role: 'Leitung Recherche & Provenienz',
    focus: 'Authentifizierung & historische Dokumentation',
    location: 'Muenchen',
    email: 'e.lichtenstein@kronbergzeithaus.de'
  },
  {
    name: 'Catherine Laurent',
    role: 'Mandatsstrategie Family Offices',
    focus: 'Portfolio Advisory & langfristige Asset-Positionierung',
    location: 'Zuerich',
    email: 'c.laurent@kronbergzeithaus.de'
  }
];
