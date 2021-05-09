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
    ];
   
    return urls.some((url_)=> url === url_);
}
