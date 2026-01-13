import { ShieldCheck, Clock, BadgeDollarSign, CheckCircle } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <ShieldCheck className="text-5xl text-yellow-400" />,
    title: "Expert Engineers",
    description:
      "Our certified technicians and experienced engineers ensure top-notch installation and maintenance across all services.",
  },
  {
    id: 2,
    icon: <Clock className="text-5xl text-green-400" />,
    title: "24/7 Support",
    description:
      "We offer round-the-clock customer service to ensure minimal downtime and quick response for your needs.",
  },
  {
    id: 3,
    icon: <BadgeDollarSign className="text-5xl text-blue-400" />,
    title: "Affordable & Reliable",
    description:
      "Our pricing plans are budget-friendly without compromising on quality or service reliability.",
  },
  {
    id: 4,
    icon: <CheckCircle className="text-5xl text-red-400" />,
    title: "Safety & Compliance",
    description:
      "We adhere strictly to safety protocols and industry standards to ensure every project is secure and compliant.",
  },
];

export default features