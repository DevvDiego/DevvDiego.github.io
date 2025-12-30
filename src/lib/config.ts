export const config = {
    API: import.meta.env.DEV 
        ? "http://localhost" //dev
        : "https://api-devvdiego.infinityfreeapp.com/api", //prod
        
    //un used properties probably
    BLOG: import.meta.env.DEV
        ? "http://localhost" //dev
        : "https://api-devvdiego.infinityfreeapp.com" //prod
};