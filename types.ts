
export interface Planet {
  id: string;
  name: string;
  image: string;
  diameter: string;
  distance: string;
  moons: string;
  temp: string;
  description: string;
  color: string;
}

export interface TechItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

export interface Discussion {
  id: string;
  author: string;
  title: string;
  replies: number;
  tags: string[];
  gradient: string;
}
