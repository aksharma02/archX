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
  },
  {
    id: '31',
    name: 'Elegant Spaces',
    logo: '',
    description: 'Specialists in luxury and eco-friendly residential projects.',
    establishedYear: 2008,
    rating: 4.9,
    projectCount: 120,
    specializations: ['Luxury Homes', 'Eco-Friendly Architecture'],
    location: 'Mumbai, India',
    featuredProjects: [{
      id: '31',
      title: 'Skyline Residence',
      description: 'A modern eco-friendly high-rise',
      imageUrl: 'https://images.unsplash.com/photo-1559767949-2f47c03d998b?auto=format&fit=crop&q=80',
      completionDate: '2022',
      area: 45000,
      location: 'Mumbai, India'
    }]
  },
  {
    id: '41',
    name: 'Heritage Architects',
    logo: '',
    description: 'Bridging tradition with modern aesthetics, focusing on heritage conservation.',
    establishedYear: 1990,
    rating: 4.6,
    projectCount: 190,
    specializations: ['Heritage Conservation', 'Cultural Architecture'],
    location: 'Jaipur, India',
    featuredProjects: [{
      id: '41',
      title: 'Raj Mahal Restoration',
      description: 'Restoration of a historic royal palace',
      imageUrl: 'https://images.unsplash.com/photo-1610057094412-64dd86b10501?auto=format&fit=crop&q=80',
      completionDate: '2023',
      area: 60000,
      location: 'Jaipur, India'
    }]
  },
  {
    id: '51',
    name: 'Green Habitat Designs',
    logo: '',
    description: 'Leading the way in sustainable and green building designs.',
    establishedYear: 2012,
    rating: 4.8,
    projectCount: 140,
    specializations: ['Green Buildings', 'Renewable Energy Integration'],
    location: 'Bangalore, India',
    featuredProjects: [{
      id: '51',
      title: 'Solar Tower',
      description: 'India’s first high-rise with full solar integration',
      imageUrl: 'https://images.unsplash.com/photo-1596393131501-48eb1a8f4b08?auto=format&fit=crop&q=80',
      completionDate: '2024',
      area: 70000,
      location: 'Bangalore, India'
    }]
  },
  {
    id: '61',
    name: 'Innovative Urbanists',
    logo: '',
    description: 'Pioneers in smart city planning and urban transformation.',
    establishedYear: 2005,
    rating: 4.7,
    projectCount: 175,
    specializations: ['Smart Cities', 'Urban Redevelopment'],
    location: 'Delhi, India',
    featuredProjects: [{
      id: '61',
      title: 'Tech Park 3.0',
      description: 'A futuristic tech hub in NCR',
      imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80',
      completionDate: '2023',
      area: 85000,
      location: 'Delhi, India'
    }]
  }
];
