import { Wrench, Settings, Droplets, Disc, Hammer, Bike } from 'lucide-react';
import { ServiceItem, WorkingHours } from './types';

export const WHATSAPP_NUMBER = "5517997080653";
export const WHATSAPP_DISPLAY = "(17) 99708-0653";
export const ADDRESS_DISPLAY = "R. das Orquídeas, 170, Guapiaçu - SP, 15110-000";
export const PLUS_CODE = "6Q5C+GQ Guapiaçu, São Paulo";
export const GOOGLE_MAPS_EMBED_URL = "https://maps.google.com/maps?q=R.+das+Orquídeas,+170,+Guapiaçu+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Revisão Completa",
    icon: Bike,
    description: "Desmontagem, limpeza, lubrificação e regulagem de todos os componentes."
  },
  {
    id: 2,
    title: "Troca de Peças",
    icon: Settings,
    description: "Substituição de componentes desgastados com peças de qualidade."
  },
  {
    id: 3,
    title: "Ajustes e Alinhamentos",
    icon: Wrench,
    description: "Regulagem de freios, marchas e alinhamento de rodas."
  },
  {
    id: 4,
    title: "Lubrificação",
    icon: Droplets,
    description: "Aplicação de lubrificantes específicos para maior durabilidade."
  },
  {
    id: 5,
    title: "Pneus e Câmaras",
    icon: Disc,
    description: "Troca, remendo e calibragem para garantir sua segurança."
  },
  {
    id: 6,
    title: "Manutenção Geral",
    icon: Hammer,
    description: "Pequenos reparos e diagnósticos rápidos para o dia a dia."
  }
];

export const HOURS: WorkingHours[] = [
  { day: "Segunda", hours: "08:00 – 18:00", isOpen: true },
  { day: "Terça", hours: "08:00 – 18:00", isOpen: true },
  { day: "Quarta", hours: "08:00 – 18:00", isOpen: true },
  { day: "Quinta", hours: "08:00 – 18:00", isOpen: true },
  { day: "Sexta", hours: "08:00 – 18:00", isOpen: true },
  { day: "Sábado", hours: "08:00 – 15:00", isOpen: true },
  { day: "Domingo", hours: "Fechado", isOpen: false },
];