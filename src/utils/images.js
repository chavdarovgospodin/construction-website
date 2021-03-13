import kitchen from '../assets/images/kitchens.png';
import flooring from '../assets/images/Flooring.jpg';
import bathrooms from '../assets/images/bathrooms.jpg';
import garden from '../assets/images/garden.jpg';
import a from '../assets/images/Gardens/20200313_101846.jpg'

var req = require.context("../assets/images/Gardens", false, /.*\.jpg$/);
// req.keys().forEach(function(key){
//     req(key);
// });

console.log(req)

export const gardens = [
  {
    source: '../assets/images/Gardens/20200313_101846.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    alt: '123',
    caption: '123',
  },
];

export const kitchens = [
  {
    source: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    alt: '123',
    caption: '123',
  },
  {
    source: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    alt: '123',
    caption: '123',
  },
];
export const thumbnails = [
  {
    source: kitchen,
    alt: 'Kitchens',
    caption: 'Kitchens',
    url: '/kitchens',
  },
  {
    source: garden,
    alt: 'Gardens',
    caption: 'Gardens',
    url: '/gardens',
  },
  {
    source: flooring,
    alt: 'Flooring',
    caption: 'Flooring',
    url: '/flooring',
  },
  {
    source: bathrooms,
    alt: 'Bathrooms',
    caption: 'Bathrooms',
    url: '/bathrooms',
  },
  {
    source: kitchen,
    alt: 'Kitchens',
    caption: 'Kitchens',
    url: '/kitchens',
  },
  {
    source: flooring,
    alt: 'Flooring',
    caption: 'Flooring',
    url: '/flooring',
  },
];
