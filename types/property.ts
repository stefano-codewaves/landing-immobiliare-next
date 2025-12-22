import type { StaticImageData } from "next/image";

export type ImageSource = string | StaticImageData;

export interface PropertyData {
  propertyId: string;
  propertyName: string;
  hero: HeroData;
  timeline: TimelineData;
  floorPlans: FloorPlansData;
  statistics: StatisticsData;
  benefits: BenefitsData;
  gallery: GalleryData;
  swiperGallery: SwiperGalleryData;
  map: MapData;
  footer: FooterData;
  form: FormData;
}

export interface HeroData {
  headline: string;
  ctaText: string;
  availableUnits: number;
  backgroundImage: string;
  logoImage: ImageSource;
  badgeImage: ImageSource;
  decorations: {
    topLeft: string;
    topRight: string;
  };
}

export interface TimelineData {
  title: string;
  symbolImage: ImageSource;
  constructionStart: {
    label: string;
    date: string;
  };
  constructionEnd: {
    label: string;
    date: string;
  };
}

export interface FloorPlan {
  title: string;
  size: string;
  image: ImageSource;
  pdf: string;
  priceLabel: string;
}

export interface FloorPlansData {
  title: string;
  subtitle: string;
  plans: FloorPlan[];
  downloadButtonText: string;
}

export interface StatisticsData {
  buildings: {
    label: string;
    value: string;
  };
  totalUnits: {
    label: string;
    value: string;
  };
}

export interface Benefit {
  icon: ImageSource;
  title: string;
  description: string;
}

export interface BenefitsData {
  title: string;
  items: Benefit[];
}

export interface GalleryData {
  description: string;
  ctaText: string;
  images: ImageSource[];
}

export interface SwiperGalleryData {
  backgroundColor: string;
  decorationImage: string;
  images: ImageSource[];
}

export interface MapData {
  headline: string;
  ctaText: string;
  backgroundImage: string;
  pointerImage: ImageSource;
  decorationImage: string;
}

export interface FooterData {
  companyName: string;
  address: string;
  vatNumber: string;
  madeBy: string;
  decorations: {
    left: ImageSource;
    right: ImageSource;
  };
}

export interface FormData {
  logoImage: ImageSource;
}
