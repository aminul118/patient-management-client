import { Flag, Wrench, Monitor } from "lucide-react";
const services = [
  {
    title: "Installation",
    description:
      "We provide expert installation services ensuring safety, performance, and compliance with all standards.",
    icon: <Flag className="text-white w-5 h-5" />,
    iconBg: "bg-green-600",
    image: "/assets/images/services/elevator-maintenance.png",
  },
  {
    title: "Maintenance",
    description:
      "Keep your systems running smoothly with our preventive and corrective maintenance solutions.",
    icon: <Wrench className="text-white w-5 h-5" />,
    iconBg: "bg-green-600",
    image: "/assets/images/services/servicing.jpg",
  },
  {
    title: "Monitoring",
    description:
      "Real-time monitoring solutions to ensure optimal performance and rapid response to issues.",
    icon: <Monitor className="text-white w-5 h-5" />,
    iconBg: "bg-green-600",
    image: "/assets/images/services/emergency-generators.jpg",
  },
];

export default services;
