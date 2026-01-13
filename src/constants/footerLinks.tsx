import { FaFacebook, FaLinkedin } from "react-icons/fa";
// Social icons and URLs
const socialLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/a1lifts",
    name: "Facebook icon",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/a1-lifts-engineering",
    name: "Linkedin icon",
  },
];

// Footer link sections
const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Spare Parts", href: "/spare-parts" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Lifts", href: "/lifts" },
      { label: "Genarators", href: "/genarators" },
      { label: "Substations", href: "/substations" },
      { label: "HBAC", href: "/hvac" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Lift Installation", href: "/lift-services" },
      { label: "Genarator Installation", href: "/genarator-services" },
      { label: "Substation Installation", href: "/substation-services" },
      { label: "Enginnering Solution", href: "/engineering-solution" },
    ],
  },
];

export { socialLinks, footerLinks };
