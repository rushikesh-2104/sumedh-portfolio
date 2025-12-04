export type Testimonial = {
  id: number;
  name: string;
  message: string;
  rating?: number;
  date?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohan",
    message: "Sumedh ke dishes mast! Presentation🔥",
    rating: 5,
    date: "2025-11-01"
  },
  {
    id: 2,
    name: "Priya",
    message: "Catering bohot professional tha.",
    rating: 4,
    date: "2025-11-05"
  }
];