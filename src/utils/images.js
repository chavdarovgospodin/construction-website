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
  
export const gardens_ = importAll(require.context('../assets/images/Gardens', false, /\.(png|jpe?g|svg)$/));
export const bathrooms_ = importAll(require.context('../assets/images/Bathrooms', false, /\.(png|jpe?g|svg)$/));
export const painting_ = importAll(require.context('../assets/images/Painting', false, /\.(png|jpe?g|svg)$/));
export const kitchens_ = importAll(require.context('../assets/images/Kitchens', false, /\.(png|jpe?g|svg)$/));

export const getImages = (images, path) => {
  return Object.keys(images).map((key)=> {
    return {
      source: images[key],
      alt: path,
    }
  });
}
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
    source: flooring,
    alt: 'Tiling and Flooring',
    caption: 'Tiling and Flooring',
    url: '/flooring',
  },
];
