import { Routes } from "../types/types";

export const staticRoutes: Routes[] = [
  {
    url: "",
    changeFrequency: "monthly",
    priority: 1.0,
  },
  {
    url: "about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "lifts",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "genarators",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: "hvac",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: "substations",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: "lift-services",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: "genarator-services",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: "substation-services",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: "engineering-solution",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: "spare-parts",
    changeFrequency: "yearly",
    priority: 1.0,
  },
  {
    url: "contact",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: "privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: "terms-of-use",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];
