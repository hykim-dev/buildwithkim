// Testimonial data structure
interface TestimonialDt {
  id: number;
  avatar: string;
  name: string;
  designation: string;
  content: string;
}

// Testimonial data
const testimonialData: TestimonialDt[] = [
  {
    id: 1,
    avatar: "/assets/img/testimonial/avatar.jpg",
    name: 'Jonson Donner',
    designation: 'Freelancer',
    content: 'From the first conversation to the final delivery, He was impressive. His design process is structured, thoughtful, and efficient. We\'ll definitely work with him again in the future.'
  },
  {
    id: 2,
    avatar: "/assets/img/testimonial/avatar-2.jpg",
    name: 'Jonson Donner',
    designation: 'Freelancer',
    content: 'From the first conversation to the final delivery, He was impressive. His design process is structured, thoughtful, and efficient. We\'ll definitely work with him again in the future.'
  },
  {
    id: 3,
    avatar: "/assets/img/testimonial/avatar-3.jpg",
    name: 'Jonson Donner',
    designation: 'Freelancer',
    content: 'From the first conversation to the final delivery, He was impressive. His design process is structured, thoughtful, and efficient. We\'ll definitely work with him again in the future.'
  }
];
export default testimonialData;