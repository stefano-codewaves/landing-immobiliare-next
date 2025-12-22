import type { PropertyData } from "@/types/property";

// Hero assets
import logoImage from "@/public/landings/sardagna/svg/long/logo.svg";
import badgeImage from "@/public/landings/sardagna/svg/long/badge.svg";

// Timeline assets
import symbolImage from "@/public/landings/sardagna/svg/long/symbol.svg";

// Floor plan assets
import plan2aImage from "@/public/landings/sardagna/planimetrie/2a.png";
import plan4Image from "@/public/landings/sardagna/planimetrie/4.png";
import plan9Image from "@/public/landings/sardagna/planimetrie/9.png";
import plan12Image from "@/public/landings/sardagna/planimetrie/12.png";

// Benefits icons
import icon1 from "@/public/landings/sardagna/svg/ico-1-short.svg";
import icon2 from "@/public/landings/sardagna/svg/ico-2-short.svg";
import icon3 from "@/public/landings/sardagna/svg/ico-3-short.svg";

// Gallery assets
import gallery1Png from "@/public/landings/sardagna/gallery/1.png";
import gallery2Png from "@/public/landings/sardagna/gallery/2.png";

// Swiper gallery assets
import gallery1 from "@/public/landings/sardagna/gallery/1.jpg";
import gallery2 from "@/public/landings/sardagna/gallery/2.jpg";
import gallery3 from "@/public/landings/sardagna/gallery/3.jpg";
import gallery4 from "@/public/landings/sardagna/gallery/4.jpg";
import gallery5 from "@/public/landings/sardagna/gallery/5.jpg";
import gallery6 from "@/public/landings/sardagna/gallery/6.jpg";
import gallery7 from "@/public/landings/sardagna/gallery/7.jpg";
import gallery8 from "@/public/landings/sardagna/gallery/8.jpg";
import gallery9 from "@/public/landings/sardagna/gallery/9.jpg";

// Map assets
import pointerImage from "@/public/landings/sardagna/svg/long/pointer.svg";

// Footer decorations
import footerLeft from "@/public/landings/sardagna/svg/long/decorations/footer-left.png";
import footerRight from "@/public/landings/sardagna/svg/long/decorations/footer-right.png";

// Form assets
import logoForm from "@/public/landings/sardagna/svg/long/logo-form.svg";

export const sardagnaData: PropertyData = {
  propertyId: "sardagna",
  propertyName: "Residenza Sardagna",
  hero: {
    headline: "Vita da città con un tocco di natura",
    ctaText: "Scopri di più",
    availableUnits: 12,
    backgroundImage: "/landings/sardagna/gallery/1.jpg",
    logoImage: logoImage,
    badgeImage: badgeImage,
    decorations: {
      topLeft: "/landings/sardagna/svg/long/decorations/top-left.png",
      topRight: "/landings/sardagna/svg/long/decorations/top-right.png",
    },
  },
  timeline: {
    title:
      'Un progetto immobiliare curato in ogni dettaglio e firmato <span class="underline">Pisetta Costruzioni</span>, un\'impresa con oltre 50 anni di storia.',
    symbolImage: symbolImage,
    constructionStart: {
      label: "Inizio lavori",
      date: "Primavera 2023",
    },
    constructionEnd: {
      label: "Fine lavori",
      date: "Autunno 2024",
    },
  },
  floorPlans: {
    title: "Le soluzioni disponibili",
    subtitle:
      "Scegli tra le diverse opzioni ancora disponibili, in base alle tue esigenze di spazio.",
    plans: [
      {
        title: "Una stanza",
        size: "60 m2",
        image: plan2aImage,
        pdf: "/landings/sardagna/planimetrie/2a.pdf",
        priceLabel: "A partire da",
      },
      {
        title: "Due stanze",
        size: "101 m2",
        image: plan4Image,
        pdf: "/landings/sardagna/planimetrie/4.pdf",
        priceLabel: "A partire da",
      },
      {
        title: "Tre stanze",
        size: "117 m2",
        image: plan9Image,
        pdf: "/landings/sardagna/planimetrie/9.pdf",
        priceLabel: "A partire da",
      },
      {
        title: "Attico 3 stanze",
        size: "125 m2",
        image: plan12Image,
        pdf: "/landings/sardagna/planimetrie/12.pdf",
        priceLabel: "A partire da",
      },
    ],
    downloadButtonText: "Scarica planimetria",
  },
  statistics: {
    buildings: {
      label: "Struttura",
      value: "2 palazzine",
    },
    totalUnits: {
      label: "Totale unità",
      value: "24 appartamenti",
    },
  },
  benefits: {
    title: "Benefits",
    items: [
      {
        icon: icon1,
        title: "Soluzioni in classe A+",
        description:
          "Con pompe di calore, pannelli fotovoltaici e ricambio dell'aria automatizzato.",
      },
      {
        icon: icon2,
        title: "Impianto geotermico",
        description:
          "Per riscaldare l'inverno e raffrescare in estate con il massimo risparmio energetico.",
      },
      {
        icon: icon3,
        title: "Fantastica esposizione",
        description:
          "In una zona strategica e splendidamente presa dal sole nel paese di Sardagna.",
      },
    ],
  },
  gallery: {
    description:
      "24 unità abitative a soli 500 metri dalla funivia di Sardagna. Ideali per chi desidera un po' di tranquillità a pochi minuti da Trento, senza rinunciare al massimo comfort di una soluzione nuova e dotata delle migliori tecnologie per l'abitare.",
    ctaText: "Richiedi informazioni",
    images: [gallery1Png, gallery2Png],
  },
  swiperGallery: {
    backgroundColor: "#eef3ef",
    decorationImage: "/landings/sardagna/svg/long/decorations/gallery.png",
    images: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery6,
      gallery7,
      gallery8,
      gallery9,
    ],
  },
  map: {
    headline: "Una posizione strategica a 5 minuti da Trento",
    ctaText: "Richiedi informazioni",
    backgroundImage: "/landings/sardagna/map.jpg",
    pointerImage: pointerImage,
    decorationImage: "/landings/sardagna/svg/long/decorations/map.png",
  },
  footer: {
    companyName: "OTTIIMO S.R.L.",
    address: "Via per Marco, 12/A – 38068 Rovereto (TN)",
    vatNumber: "02374890222",
    madeBy: "Hausbox",
    decorations: {
      left: footerLeft,
      right: footerRight,
    },
  },
  form: {
    logoImage: logoForm,
  },
};
