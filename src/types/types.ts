export type MetaProps = {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  path?: string;
};

export type Routes = {
  url: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

export interface TypewriterProps {
  words: string[];
  loop?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
}

export type Banner = {
  heading?: string;
  description?: string;
  className?: string;
  backgroundImagePath?: string;
};

export type Services = {
  service: string;
  image: string;
  details: string[];
};

export type Slider = {
  id: number;
  img: string;
  title: string;
  class: string;
  description: string;
  url: string;
  button_text: string;
};
