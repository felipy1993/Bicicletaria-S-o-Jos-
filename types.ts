import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface WorkingHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface AppState {
  logoUrl: string | null;
}