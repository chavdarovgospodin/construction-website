import extension from '../assets/images/extension.jpg';
import painting2 from '../assets/images/painting2.jpg';
import kitchen from '../assets/images/kitchens.png';
import flooring from '../assets/images/Flooring.jpg';
import bathrooms from '../assets/images/bathrooms.jpg';
import garden from '../assets/images/garden.jpg';

const importAll = (r) => {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/Gardens', false, /\.(png|jpe?g|svg)$/))

export const gardens = [];

Object.keys(images).map((key)=> {
  gardens.push({
    source: images[key],
    alt: 'garden',
  })
});

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
  // {
  //   source: kitchen,
  //   alt: 'Kitchens',
  //   caption: 'Kitchens',
  //   url: '/kitchens',
  // },
  {
    source: garden,
    alt: 'Gardens',
    caption: 'Gardens',
    url: '/gardens',
  },
  {
    source: kitchen,
    alt: 'Kitchens',
    caption: 'Kitchens',
    url: '/kitchens',
  },
  {
    source: extension,
    alt: 'Extensions',
    caption: 'Extensions',
    url: '/extensions',
  },
  {
    source: bathrooms,
    alt: 'Bathrooms',
    caption: 'Bathrooms',
    url: '/bathrooms',
  },
  {
    source: painting2,
    alt: 'Painting and Decorating',
    caption: 'Painting and Decorating',
    url: '/painting',
  },
  {
    source: flooring,
    alt: 'Tiling and Flooring',
    caption: 'Tiling and Flooring',
    url: '/flooring',
  },
];
