export interface Language {
  code: 'ar' | 'en';
  dir: 'rtl' | 'ltr';
  label: string;
}

export interface Section {
  id: string;
  titleAr: string;
  titleEn: string;
  contentAr?: string;
  contentEn?: string;
  subsections?: Subsection[];
  features?: Feature[];
  icon?: string;
}

export interface Subsection {
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  icon?: string;
}

export interface Feature {
  titleAr: string;
  titleEn: string;
  descriptionAr?: string;
  descriptionEn?: string;
  icon?: string;
}

export interface HostingScenario {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  prosAr: string[];
  prosEn: string[];
  challengesAr: string[];
  challengesEn: string[];
  icon: string;
}

export interface Phase {
  id: string;
  titleAr: string;
  titleEn: string;
  durationAr: string;
  durationEn: string;
  tasksAr: string[];
  tasksEn: string[];
  status: 'pending' | 'in-progress' | 'completed';
}

export interface KPI {
  id: string;
  titleAr: string;
  titleEn: string;
  value: string;
  unit: string;
  icon: string;
}