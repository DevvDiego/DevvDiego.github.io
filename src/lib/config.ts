export const config = {
    API: import.meta.env.DEV 
        ? "http://localhost/api" //dev
        : "https://api-devvdiego.infinityfreeapp.com/api", //prod
        
    BLOG: import.meta.env.DEV
        ? "http://localhost" //dev
        : "https://api-devvdiego.infinityfreeapp.com" //prod
};