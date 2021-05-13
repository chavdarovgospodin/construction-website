import CONSTANTS from './constants';

export const checkUrl = (url) => {
    const urls = [
        '/services', 
        '/', 
        '/about', 
        '/gallery', 
        '/contant', 
        '/gardens', 
        '/kitchens',
        '/contact',
        '/bathrooms',
        '/painting',
    ];
   
    return urls.some((url_)=> url === url_);
}

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;

    const size = {
      width,
      height
    };

    if(size.width <= CONSTANTS.MOBILE) {
        return 'mobile';
    }
    else if (size.width <= CONSTANTS.TABLET) {
        return 'tablet';
    }

    return 'desktop';
}