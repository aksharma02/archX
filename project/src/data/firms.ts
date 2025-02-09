import type { Firm } from '../types';

export const SAMPLE_FIRMS: Firm[] = [
  {
    id: '1',
    name: 'Modern Design Associates',
    logo: '',
    description: 'Award-winning architectural firm specializing in sustainable urban development and innovative residential projects.',
    establishedYear: 1995,
    rating: 4.8,
    projectCount: 250,
    specializations: ['Sustainable Design', 'Urban Planning', 'Residential'],
    location: 'New York, NY',
    featuredProjects: [{
      id: '1',
      title: 'Eco Heights',
      description: 'Sustainable residential complex',
      imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80',
      completionDate: '2023',
      area: 50000,
      location: 'Brooklyn, NY'
    }]
  },
  {
    id: '21',
    name: 'Future Spaces Studio',
    logo: '',
    description: 'Pioneering architectural firm focused on integrating smart technology with sustainable design principles.',
    establishedYear: 2015,
    rating: 4.7,
    projectCount: 85,
    specializations: ['Smart Buildings', 'Sustainable Design', 'Innovation'],
    location: 'Austin, TX',
    featuredProjects: [{
      id: '21',
      title: 'Smart Living Hub',
      description: 'Next-generation residential complex',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
      completionDate: '2024',
      area: 65000,
      location: 'Austin, TX'
    }]
  }
];