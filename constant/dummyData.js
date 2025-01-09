import Image from "next/image";
import { GiPaintRoller } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { HiCodeBracket } from "react-icons/hi2";
import { RiShoppingCartLine } from "react-icons/ri"; // Add this icon if necessary
import { localImages } from "@/utils/localImages"; // Ensure this import works properly

// Data for the slider
const sliderData = [
  {
    id: 1,
    image: "/slider/belajar1.jpeg",
    imageAlt: "Belajar 1",
  },
  {
    id: 2,
    image: "/slider/belajar2.jpeg",
    imageAlt: "Belajar 2",
  },
  {
    id: 3,
    image: "/slider/belajar3.jpeg",
    imageAlt: "Belajar 3",
  },
];

// Data for the type effect
const typeEffectData = ["Al-Himmah", "Belajar", "Berdaya"];

// Data for services
const servicesData = [
  {
    id: 1,
    icon: <GiPaintRoller />,
    title: "Pendidikan",
    description:
      "Proses pembelajaran yang bertujuan untuk mendewasakan manusia melalui pengajaran, pelatihan, dan penelitian.",
  },
  {
    id: 2,
    icon: <HiCodeBracket />,
    title: "Pelatihan",
    description:
      "Meningkatkan pengetahuan, keterampilan, sikap, dan perilaku melalui pengalaman belajar.",
  },
  {
    id: 3,
    icon: <TfiWorld />,
    title: "Kegiatan sosial",
    description:
      "Kegiatan yang dilakukan bersama-sama oleh masyarakat untuk mencapai tujuan.",
  },
];

// Data for vision (Misi & Visi)
const visionData = [
  {
    id: 1,
    title: "Misi",
    image: "/logo/elephant.png",
    imageAlt: "Vision Image 1",
    description:
      "Menyediakan tenaga kerja yang handal, kompeten, terampil, dan berkualitas sesuai kebutuhan pasar kerja baik di dalam maupun di luar negeri.",
  },
  {
    id: 2,
    title: "Visi",
    image: "/slider/belajar1.jpeg",
    imageAlt: "Vision Image 2",
    description:
      "Menjadi penyedia tenaga kerja yang handal, kompeten, terampil, dan berkualitas sesuai kebutuhan pasar kerja.",
  },
];

export { sliderData, typeEffectData, servicesData, visionData };
